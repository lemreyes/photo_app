import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let errors: string[] = [];
  const { email, password } = req.body;
  console.log(email, password);

  // validate
  errors = validateLoginInputParam(email, password);
  console.log(errors);
  if (errors.length > 0) {
    return res.status(400).json({
      errorMessage: errors[0],
    });
  }

  // get the user via email
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    return res
      .status(401)
      .json({ errorMessage: "Email or password is invalid" });
  }

  // compare the password
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return res
      .status(401)
      .json({ errorMessage: "Email or password is invalid" });
  }

  // set jwt and cookie
  const alg = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new jose.SignJWT({ email: user.email })
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .sign(secret);

  setCookie("jwt", token, { req, res, maxAge: 60 * 6 * 24 });

  return res.status(200).json({
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
  });
}

function validateLoginInputParam(email: string, password: string) {
  let errors: string[] = [];

  const validationSchema = [
    {
      valid: validator.isEmail(email),
      errorMessage: "Email is invalid",
    },
    {
      valid: validator.isLength(password, { min: 1 }),
      errorMessage: "Password is invalid",
    },
  ];

  validationSchema.forEach((check) => {
    if (!check.valid) {
      errors.push(check.errorMessage);
    }
  });

  return errors;
}

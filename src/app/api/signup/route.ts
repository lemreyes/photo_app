import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request, res: NextApiResponse) {
  const { email, password } = await req.json()
  let errors: string[] = [];

  console.log(req.body);
  console.log(email, password);

  // validate
  errors = validateSignupInputParam(email, password);
  console.log(errors);
  if (errors.length > 0) {
    return new NextResponse(
      JSON.stringify({
        status: 400,
        errorMessage: errors[0],
      })
    );
  }

  // check if already existing email
  const userEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (userEmail) {
    return new NextResponse(
      JSON.stringify({
        status: 400,
        errorMessage: "Email is associated with another account.",
      })
    );
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // data valid - store to DB
  const user = await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
    },
  });
  console.log(user);

  const alg = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new jose.SignJWT({ email: user.email })
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .sign(secret);

  return new NextResponse(
    JSON.stringify({
      status: 200,
      email: user.email,
    })
  );
}

function validateSignupInputParam(email: string, password: string) {
  let errors: string[] = [];

  const validationSchema = [
    {
      valid: validator.isEmail(email),
      errorMessage: "Email is invalid",
    },
    {
      valid: validator.isStrongPassword(password),
      errorMessage: "Password is not strong enough",
    },
  ];

  validationSchema.forEach((check) => {
    if (!check.valid) {
      errors.push(check.errorMessage);
    }
  });

  return errors;
}

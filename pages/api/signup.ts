import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = JSON.parse(req.body);
  let errors: string[] = [];

  console.log(req.body);
  console.log(email, password);

  // validate
  errors = validateInputParam(email, password);
  console.log(errors);
  if (errors.length > 0) {
    return res.status(400).json({
      errorMessage: errors[0],
    });
  }

  return res.status(200).json("Test");
}

function validateInputParam(email: string, password: string) {
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

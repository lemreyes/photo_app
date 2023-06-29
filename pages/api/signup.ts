import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = JSON.parse(req.body);
  console.log(req.body);
  console.log(email, password);
  return res.status(200).json("Test");
}

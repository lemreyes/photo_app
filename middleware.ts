import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

export async function middleware(req: NextRequest, res: NextResponse) {
  console.log("MIDDLEWARE");

  // get bearer token from authorization header
  const bearerToken = req.headers.get("authorization") as string;
  console.log(bearerToken);

  // extract token
  const token = bearerToken.split(" ")[1];
  console.log(token);

  if (!token) {
    return new NextResponse(
      JSON.stringify({
        errorMessage: "Unauthorized request",
      }),
      { status: 401 }
    );
  }

  // verify JWT
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        errorMessage: "Unauthorized request",
      }),
      { status: 401 }
    );
  }
}

export const config = {
  matcher: "/api/updateProfile",
};

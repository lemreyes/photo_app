import { getServerSession } from "next-auth";
import {options} from "../auth/[...nextauth]/options"

export async function GET(request: Request) {
  const session = await getServerSession(options);
  if (session) {
    // Signed in
    console.log("Session", JSON.stringify(session, null, 2));
    return new Response("Welcome authenticated user", {
      status: 200,
    });
  } else {
    // Not Signed in
    return new Response("Unauthorized access detected", {
      status: 401,
    });
  }
}

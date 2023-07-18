import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";
import fs from "fs";

interface TypedRequest extends Request {
  files: FileList;
}

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

export async function POST(request: Request) {

  const formData = await request.formData();

  const formDataEntryValues = Array.from(formData.values());
  for (const formDataEntryValue of formDataEntryValues) {
    console.log("formDataEntryValue", formDataEntryValue);
    if (
      typeof formDataEntryValue === "object" &&
      "arrayBuffer" in formDataEntryValue
    ) {
      const file = formDataEntryValue as unknown as Blob;
      const buffer = Buffer.from(await file.arrayBuffer());
      fs.writeFileSync(`public/${file.name}`, buffer);
    }
  }

  return NextResponse.json({ success: true });
}

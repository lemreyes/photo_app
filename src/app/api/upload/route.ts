import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";
import fs from "fs";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

  // get server session
  const session = await getServerSession(options);
  console.log(session);

  if (!session) {
    return NextResponse.json({
      status: 403,
      errorMessage: "Unauthenticated user",
    });
  }

  const formDataEntryValues = Array.from(formData.values());
  var picture = null;
  for (const formDataEntryValue of formDataEntryValues) {
    console.log("formDataEntryValue", formDataEntryValue);
    if (
      typeof formDataEntryValue === "object" &&
      "arrayBuffer" in formDataEntryValue
    ) {
      const file = formDataEntryValue as unknown as Blob;
      const buffer = Buffer.from(await file.arrayBuffer());
      fs.writeFileSync(`public/${file.name}`, buffer);

      // get user based on session
      const user = await prisma.user.findUnique({
        where: {
          email: session.user?.email as string,
        },
      });
      console.log("user: ", user);

      if (!user) {
        return NextResponse.json({
          status: 403,
          errorMessage: "Unkown user",
        });
      }

      picture = await prisma.picture.create({
        data: {
          source: `public/${file.name}`,
          owner: {
            connect: { id: user.id },
          },
        },
      });
    }
  }

  console.log("Picture: ", picture);
  if (!picture) {
    return NextResponse.json({
      status: 500,
      errorMessage: "Upload has failed",
    });
  }

  return NextResponse.json({
    success: true,
    id: picture.id,
    source: picture.source,
  });
}

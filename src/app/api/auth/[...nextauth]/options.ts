import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import loginConfirm from "@/utils/loginConfirm";

let userAccount: any = null;

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET as string,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        console.log("in authorize, credentials", credentials);
        userAccount = await loginConfirm(credentials.email, credentials.password);
        console.log("authorize user: ", userAccount);
        return userAccount;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

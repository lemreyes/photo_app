import React from "react";
import { Noto_Sans } from "next/font/google";
import Logo from "./Components/Logo";

import Link from "next/link";
import SocialAccountPanel from "./Components/SocialAccountPanel";
import CredentialsForm from "./Components/CredentialsForm";

const noto_sans = Noto_Sans({ weight: ["400", "600"], subsets: ["latin"] });

export default function Authentication() {
  return (
    <div
      className={`${noto_sans.className} flex flex-col items-center justify-center w-screen h-screen`}
    >
      <div className="flex flex-col items-start justify-center shadow-lg rounded-xl px-16 py-10  max-w-[473px]">
        <Logo />
        <p className="mt-8 text-lg font-semibold text-[#333333]">
          Join thousands of learners from around the world{" "}
        </p>
        <p className="mt-4 text-base font-normal text-[#333333]">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
        <CredentialsForm />
        <SocialAccountPanel />
        <p className="mt-8 text-sm text-[#828282] font-normal self-center">
          Already a member?{" "}
          <Link href="Authentication/Login" className="text-[#2D9CDB]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

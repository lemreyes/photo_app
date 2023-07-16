"use client";

import React from "react";
import { Noto_Sans } from "next/font/google";
import Logo from "../Components/Logo";
import Link from "next/link";
import SocialAccountPanel from "../Components/SocialAccountPanel";
import CredentialsForm from "../Components/CredentialsForm";

const noto_sans = Noto_Sans({ weight: ["400", "600"], subsets: ["latin"] });

export default function Login() {
  return (
    <div
      className={`${noto_sans.className} flex flex-col items-center justify-center w-screen h-screen`}
    >
      <div className="flex flex-col items-start justify-center shadow-lg rounded-xl px-16 py-10  max-w-[473px]">
        <Logo />
        <CredentialsForm isLogin={true} />
        <SocialAccountPanel />
        <p className="mt-8 text-sm text-[#828282] font-normal self-center">
          Don&apos;t have an account yet?{" "}
          <Link href="../Authentication" className="text-[#2D9CDB]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

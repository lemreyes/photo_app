import React from "react";
import { Noto_Sans } from "next/font/google";
import Logo from "../Components/Logo";
import Image from "next/image";
import Link from "next/link";
import google_icon from "../../../../public/authentication/Google.svg";
import facebook_icon from "../../../../public/authentication/Facebook.svg";
import twitter_icon from "../../../../public/authentication/Twitter.svg";
import github_icon from "../../../../public/authentication/Gihub.svg";
import SocialAccountPanel from "../Components/SocialAccountPanel";

const noto_sans = Noto_Sans({ weight: ["400", "600"], subsets: ["latin"] });

export default function Login() {
  return (
    <div
      className={`${noto_sans.className} flex flex-col items-center justify-center w-screen h-screen`}
    >
      <div className="flex flex-col items-start justify-center shadow-lg rounded-xl px-16 py-10  max-w-[473px]">
        <Logo />
        <form method="POST">
          <input
            type="text"
            placeholder="Email"
            className="w-full border rounded-lg border-color-[#BDBDBD] text-[#828282] mt-8 p-2"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg border-color-[#BDBDBD] text-[#828282] mt-2 p-2"
          ></input>
          <button className="w-full bg-[#2F80ED] text-white rounded-lg mt-4 p-2">
            Login
          </button>
        </form>

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

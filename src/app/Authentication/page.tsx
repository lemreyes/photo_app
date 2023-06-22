import React from "react";
import { Noto_Sans } from "next/font/google";
import Logo from "./Components/Logo";
import Image from "next/image";
import google_icon from "../../../public/authentication/Google.svg";
import facebook_icon from "../../../public/authentication/Facebook.svg";
import twitter_icon from "../../../public/authentication/Twitter.svg";
import github_icon from "../../../public/authentication/Gihub.svg";
import Link from "next/link";

const noto_sans = Noto_Sans({ weight: ["400", "600"], subsets: ["latin"] });

export default function Authentication() {
  return (
    <div
      className={`${noto_sans.className} flex flex-col items-center justify-center w-screen h-screen`}
    >
      <div className="flex flex-col items-start justify-center shadow-lg rounded-xl px-8 py-10  max-w-[473px]">
        <Logo />
        <p className="mt-8 text-lg font-semibold text-[#333333]">
          Join thousands of learners from around the world{" "}
        </p>
        <p className="mt-4 text-base font-normal text-[#333333]">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
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
            Start coding now
          </button>
        </form>
        <p className="mt-8 text-sm text-[#828282] font-normal self-center">
          or continue with these social profiles
        </p>
        <div className="flex mt-4 self-center space-x-4">
          <Image src={google_icon} alt="Google" />
          <Image src={facebook_icon} alt="Facebook" />
          <Image src={twitter_icon} alt="Twitter" />
          <Image src={github_icon} alt="Github" />
        </div>
        <p className="mt-8 text-sm text-[#828282] font-normal self-center">
          Already a member? <Link href="Authentication/Login" className="text-[#2D9CDB]">Login</Link>
        </p>
      </div>
    </div>
  );
}

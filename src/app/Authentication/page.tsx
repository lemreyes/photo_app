import React from "react";
import { Noto_Sans } from "next/font/google";
import Logo from "./Components/Logo";

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
          <button className="w-full bg-[#2F80ED] text-white rounded-lg mt-4 p-2">Start coding now</button>
        </form>
        <p className="mt-4 text-sm font-normal text-center">or continue with these social profiles</p>
      </div>
    </div>
  );
}

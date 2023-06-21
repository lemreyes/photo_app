import React from "react";
import { Noto_Sans } from "next/font/google";
import Logo from "./Components/Logo";

const noto_sans = Noto_Sans({ weight: ["400", "600"], subsets: ["latin"] });

export default function Authentication() {
  return (
    <div
      className={`${noto_sans.className} flex flex-col items-center justify-center w-screen h-screen`}
    >
      <div className="flex flex-col items-center justify-center shadow-lg rounded-xl px-8 py-10">
        <Logo />
        <p>Join thousands of learners from around the world </p>
        <p>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
        <form method="POST">
          <input type="text" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <button>Start coding now</button>
        </form>
        <p>or continue with these social profiles</p>
      </div>
    </div>
  );
}

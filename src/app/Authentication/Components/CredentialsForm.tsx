import React from "react";
import Image from "next/image";

import email_icon from "../../../../public/authentication/email_icon.svg";
import password_icon from "../../../../public/authentication/password_icon.svg";

export default function CredentialsForm() {
  return (
    <form method="POST">
      <label htmlFor="email" className="relative">
        <Image
          src={email_icon}
          alt="email"
          className="pointer-events-none w-6 h-6 absolute left-2 translate-y-10"
        />
        <input
          id="email"
          type="text"
          placeholder="Email"
          className="w-full border rounded-lg border-color-[#BDBDBD] text-[#828282] mt-8 p-2 pl-12"
        />
      </label>
      <label htmlFor="password" className="relative">
        <Image
          src={password_icon}
          alt="password"
          className="pointer-events-none max-w-none w-6 h-6 absolute translate-y-4 translate-x-2"
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg border-color-[#BDBDBD] text-[#828282] mt-2 p-2 pl-12"
        ></input>
      </label>
      <button className="w-full bg-[#2F80ED] text-white rounded-lg mt-4 p-2">
        Login
      </button>
    </form>
  );
}

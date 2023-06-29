"use client";

import React, { useState } from "react";
import Image from "next/image";
import validator from "validator";

import email_icon from "../../../../public/authentication/email_icon.svg";
import email_icon_ok from "../../../../public/authentication/email_icon_ok.svg";
import email_icon_ng from "../../../../public/authentication/email_icon_ng.svg";

import { getInputStyle } from "@/utils/InputStyles";

export default function CredentialsForm() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsValidEmail(validator.isEmail(event.target.value));
    setEmail(event.target.value);
  };

  let emailStyle = getInputStyle(email, isValidEmail);
  let emailIconSrc =
    email.length > 0
      ? isValidEmail
        ? email_icon_ok
        : email_icon_ng
      : email_icon;

  return (
    <form method="POST">
      <label htmlFor="email" className="relative">
        <Image
          src={emailIconSrc}
          alt="Email"
          className="pointer-events-none w-6 h-6 absolute left-2 translate-y-10"
        />
        <input
          id="email"
          type="text"
          placeholder="Email"
          className={`${emailStyle} w-full border rounded-lg mt-8 p-2 pl-12`}
          onChange={handleChangeEmail}
        />
      </label>
      <label htmlFor="password" className="relative">
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

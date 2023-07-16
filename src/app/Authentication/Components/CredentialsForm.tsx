"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import validator from "validator";
import { SignInResponse, signIn } from "next-auth/react";

import email_icon from "../../../../public/authentication/email_icon.svg";
import email_icon_ok from "../../../../public/authentication/email_icon_ok.svg";
import email_icon_ng from "../../../../public/authentication/email_icon_ng.svg";
import password_icon from "../../../../public/authentication/password_icon.svg";
import password_icon_ok from "../../../../public/authentication/password_icon_ok.svg";
import password_icon_ng from "../../../../public/authentication/password_icon_ng.svg";

import { getInputStyle } from "@/utils/InputStyles";

export default function CredentialsForm({ isLogin }: { isLogin: boolean }) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response: SignInResponse = (await signIn("credentials", {
        email,
        password,
        callbackUrl: "/Profile/any",
        redirect: false,
      })) as SignInResponse;

      console.log("SignIn: ", response);
      if (response.error != null) {
        throw Error(response.error);
      }

      router.push("/Profile/any");
    } catch (error: any) {
      setErrorMessage("Invalid login or password");
    }
  };

  const handleSignup = async () => {
    const response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log("response", response);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsValidEmail(validator.isEmail(event.target.value));
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsValidPassword(validator.isStrongPassword(event.target.value));
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (isValidEmail === true && isValidPassword === true) {
      setIsButtonDisable(false);
    }
  }, [isValidEmail, isValidPassword]);

  let emailStyle = getInputStyle(email, isValidEmail);
  let emailIconSrc =
    email.length > 0
      ? isValidEmail
        ? email_icon_ok
        : email_icon_ng
      : email_icon;

  let passwordStyle = "";
  let passwordIconSrc = "";
  if (isLogin === true) {
    passwordStyle = "border-color-[#BDBDBD] text-[#828282]";
    passwordIconSrc = password_icon;
  } else {
    passwordStyle = getInputStyle(password, isValidPassword);
    passwordIconSrc =
      password.length > 0
        ? isValidPassword
          ? password_icon_ok
          : password_icon_ng
        : password_icon;
  }

  return (
    <>
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
          <Image
            src={passwordIconSrc}
            alt="Password"
            className="pointer-events-none max-w-none w-6 h-6 absolute translate-y-4 translate-x-2"
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            className={`${passwordStyle} w-full border rounded-lg mt-2 p-2 pl-12`}
            onChange={handleChangePassword}
          ></input>
        </label>
        <button
          className={
            `w-full bg-[#2F80ED] text-white rounded-lg mt-4 p-2 ` +
            `${isButtonDisable ? `opacity-50 cursor-not-allowed` : ""}`
          }
          onClick={isLogin === true ? handleLogin : handleSignup}
          disabled={isButtonDisable}
        >
          {isLogin === true ? "Login" : "Signup"}
        </button>
      </form>
      {errorMessage !== "" && (
        <div className="border border-red-900 rounded-lg text-red-900 mt-4 p-2 w-full ">
          {errorMessage}
        </div>
      )}
    </>
  );
}

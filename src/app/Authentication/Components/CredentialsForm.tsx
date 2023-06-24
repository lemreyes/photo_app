import React from "react";
import email_icon from "../../../../public/authentication/email_icon.svg";

export default function CredentialsForm() {
  return (
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
  );
}

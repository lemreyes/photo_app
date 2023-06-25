import React from "react";
import Image from "next/image";
import placeholder from "../../../../../public/profile_placeholder.jpg";

export default function ProfileNav() {
  return (
    <div className="flex justify-end items-center">
      <Image
        src={placeholder}
        alt="profile_pic_small"
        className="w-8 h-8 rounded-lg"
      />
      <p className="ml-2 text-xs font-bold text-[#333333]">Lemuel Reyes</p>
    </div>
  );
}

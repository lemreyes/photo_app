import React from "react";
import Image from "next/image";
import placeholder from "../../../../../public/profile_placeholder.jpg";
import triangle_icon from "../../../../../public/triangle_icon.svg";

export default function ProfileNav() {
  return (
    <div className="flex justify-end items-center">
      <Image
        src={placeholder}
        alt="profile_pic_small"
        className="w-8 h-8 rounded-lg"
      />
      <p className="ml-2 text-xs font-bold text-[#333333]">Lemuel Reyes</p>
      <Image src={triangle_icon} alt="Click down" className="w-2 h-2 ml-4 rotate-180" />
    </div>
  );
}

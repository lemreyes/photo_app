import React from "react";
import ProfileHeader from "./Components/ProfileHeader";

import { Noto_Sans } from "next/font/google";
const noto_sans = Noto_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export default function Profile() {
  return (
    <>
      <ProfileHeader />
      <div
        className={`${noto_sans.className} px-18 flex flex-col items-center`}
      >
        <h1 className="text-3xl font-normal mt-12 tracking-tighter">
          Personal info
        </h1>
        <h2 className="text-lg font-light tracking-tighter">
          Basic info, like your name and photo
        </h2>
        <div className="border border-[#E0E0E0] rounded-xl mt-8 w-4/5">
          <div className="py-8 px-16 flex flex-row justify-between border-b-[1px]">
            <div>
              <h2 className="text-2xl tracking-tighter">Profile</h2>
              <p className="text-xs text-[#828282] font-medium tracking-tighter">
                Some info may be visible to other people
              </p>
            </div>
            <button className="border rounded-lg tracking-tighter text-[#828282] px-8 text-sm">
              Edit
            </button>
          </div>
          <div className="py-8 px-16 border-b-[1px]">Photo</div>
          <div className="py-8 px-16">Name</div>
        </div>
      </div>
    </>
  );
}

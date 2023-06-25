import React from "react";
import ProfileHeader from "./Components/ProfileHeader";

import { Noto_Sans } from "next/font/google";
const noto_sans = Noto_Sans({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function Profile() {
  return (
    <div className={`${noto_sans.className} px-18 flex flex-col`}>
      <ProfileHeader />
    </div>
  );
}

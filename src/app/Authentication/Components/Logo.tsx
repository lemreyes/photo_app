import React from "react";
import Image from "next/image";
import logo from "../../../../public/authentication/devchallenges.svg";
import logo_dark from "../../../../public/authentication/devchallenges-light.svg";

export default function Logo() {
  return <Image width={130} height={18} alt="logo" src={logo} />;
}

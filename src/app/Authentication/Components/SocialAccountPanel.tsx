import React from "react";
import Image from "next/image";

import { useSession, signIn, signOut } from "next-auth/react";

import google_icon from "../../../../public/authentication/Google.svg";
import facebook_icon from "../../../../public/authentication/Facebook.svg";
import twitter_icon from "../../../../public/authentication/Twitter.svg";
import github_icon from "../../../../public/authentication/Gihub.svg";

export default function SocialAccountPanel() {
  const hdlOnClickGoogle = async () => {
    const response = await signIn("google");
    console.log("Sign in Response Google: ", response);
  };

  const hdlOnClickFacebook = async () => {
    const response = await signIn("facebook");
    console.log("Sign in Response Facebook: ", response);
  };

  return (
    <>
      <p className="mt-8 text-sm text-[#828282] font-normal self-center">
        or continue with these social profiles
      </p>
      <div className="flex mt-4 self-center space-x-4">
        <button onClick={hdlOnClickGoogle}>
          <Image src={google_icon} alt="Google" />
        </button>
        <button onClick={hdlOnClickFacebook}>
          <Image src={facebook_icon} alt="Facebook" />
        </button>
        <Image src={twitter_icon} alt="Twitter" />
        <Image src={github_icon} alt="Github" />
      </div>
    </>
  );
}

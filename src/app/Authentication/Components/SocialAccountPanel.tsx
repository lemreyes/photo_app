import React, { useState } from "react";
import Image from "next/image";

import { signIn } from "next-auth/react";

import google_icon from "../../../../public/authentication/Google.svg";
import google_icon_hover from "../../../../public/authentication/google_hover.svg";
import facebook_icon from "../../../../public/authentication/Facebook.svg";
import facebook_icon_hover from "../../../../public/authentication/facebook_hover.svg";

export default function SocialAccountPanel() {
  const [isHoverFb, setIsHoverFb] = useState(false);
  const [isHoverGoogle, setIsHoverGoogle] = useState(false);

  const hdlOnClickGoogle = async () => {
    const response = await signIn("google");
    console.log("Sign in Response Google: ", response);
  };

  const hdlOnClickFacebook = async () => {
    const response = await signIn("facebook");
    console.log("Sign in Response Facebook: ", response);
  };

  const hdlFbMouseEnter = () => {
    setIsHoverFb(true);
  };

  const hdlFbMouseLeave = () => {
    setIsHoverFb(false);
  };

  const hdlGoogleMouseEnter = () => {
    setIsHoverGoogle(true);
  };

  const hdlGoogleMouseLeave = () => {
    setIsHoverGoogle(false);
  };

  return (
    <>
      <p className="mt-8 text-sm text-[#828282] font-normal self-center">
        or continue with these social profiles
      </p>
      <div className="flex mt-4 self-center space-x-8">
        <button onClick={hdlOnClickGoogle}>
          <Image
            src={isHoverGoogle ? google_icon_hover : google_icon}
            alt="Google"
            onMouseEnter={hdlGoogleMouseEnter}
            onMouseLeave={hdlGoogleMouseLeave}
          />
        </button>
        <button onClick={hdlOnClickFacebook}>
          <Image
            src={isHoverFb ? facebook_icon_hover : facebook_icon}
            alt="Facebook"
            onMouseEnter={hdlFbMouseEnter}
            onMouseLeave={hdlFbMouseLeave}
          />
        </button>
      </div>
    </>
  );
}

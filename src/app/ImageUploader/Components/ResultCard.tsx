import React from "react";
import Image from "next/image";
import check_icon from "../../../../public/check_icon.svg";

export default function ResultCard({ result }: { result: UploadResult }) {
  return (
    <div className="flex flex-col items-center justify-center shadow-lg rounded-xl min-w-[400px] px-8 py-10">
      <div className="rounded-full bg-[#219653] p-1">
        <Image src={check_icon} width={25} height={25} alt="Check" />
      </div>
      <h1 className="text-left text-lg text-[#4F4F4F] mt-4">
        Uploaded successfully!
      </h1>
      <div className="bg-red-200 min-w-[338px] min-h-[224px] mt-8 p-8 rounded-xl">
        <p className="text-red-800">Error</p>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-[#F6F8FB] min-w-[338px] min-h-[34px] mt-8 p-0.25">
        <div className="p-1">
          <p className="text-[#4F4F4F] text-xs">images.yourdomain.com</p>
        </div>
        <button className="bg-[#2F80ED] rounded-lg text-xs text-white p-3 hover:bg-blue-200 hover:text-gray-700">
          Copy Link
        </button>
      </div>
    </div>
  );
}

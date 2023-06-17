import React from "react";
import Image from "next/image";
import check_icon from "../../../../public/check_icon.svg";

export default function ResultCard({ result }: { result: UploadResult }) {
  return (
    <div className="flex flex-col items-center justify-center shadow-lg rounded-xl min-w-[400px] px-8 py-10">
      <div className="rounded-full bg-[#219653] p-1">
        <Image src={check_icon} width={25} height={25} alt="Check" />
      </div>
      <div className="bg-red-200 min-w-[338px] min-h-[224px] mt-8 p-8 rounded-lg">
        <p className="text-red-800">Error</p>
      </div>
    </div>
  );
}

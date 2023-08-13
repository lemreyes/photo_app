import React from "react";
import Image from "next/image";
import check_icon from "../../../../public/check_icon.svg";
import x_icon from "../../../../public/x_icon.svg";

export default function ResultCard({ result }: { result: UploadResult }) {
  return (
    <div className="flex flex-col items-center justify-center shadow-lg rounded-xl min-w-[400px] px-8 py-10">
      {result.result ? (
        <div className="rounded-full bg-[#219653] p-1">
          <Image src={check_icon} width={25} height={25} alt="Check" />
        </div>
      ) : (
        <div className="rounded-full bg-[#b6312c] p-1">
          <Image src={x_icon} width={25} height={25} alt="Check" />
        </div>
      )}
      <h1 className="text-left text-lg text-[#4F4F4F] mt-4">
        {result.result ? "Uploaded successfully!" : "Upload failed!"}
      </h1>
      <div className="min-w-[338px] min-h-[224px] mt-8 p-8 rounded-xl">
        {result.result ? (
          <Image
            src={result.path}
            width={300}
            height={300}
            alt="uploaded image"
          />
        ) : (
          <p className="text-red-800">Error</p>
        )}
      </div>
      <div className="flex items-center justify-between rounded-lg bg-[#F6F8FB] min-w-[338px] min-h-[34px] mt-8 p-0.25 gap-2">
        <input
          id="image_link"
          className="text-[#4F4F4F] text-xs p-3 rounded-lg w-full border"
          value={result.path}
        />
        <button className="bg-[#2F80ED] rounded-lg text-xs text-white p-3 hover:bg-blue-200 hover:text-gray-700">
          Copy
        </button>
      </div>
    </div>
  );
}

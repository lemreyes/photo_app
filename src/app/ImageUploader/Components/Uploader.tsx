import React, { ChangeEvent, useRef } from "react";
import Image from "next/image";
import upload_icon from "../../../../public/image_upload_icon.svg";

export default function Uploader() {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log("fileObj is", fileObj);

    // reset file input
    event.target.value = "";

    // is now empty
    console.log(event.target.files);

    // can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };

  return (
    <div className="flex flex-col items-center justify-center shadow-lg rounded-xl px-8 py-10">
      <h1 className="text-center text-lg text-gray-700">Upload your image</h1>
      <p className="text-center text-xs text-gray-400 mt-2">
        File should be jpeg, png...
      </p>
      <div className="flex flex-col items-center justify-center border border-[#97BEF4] rounded-xl border-dashed mt-8 p-10">
        <Image src={upload_icon} alt="upload" priority />
        <p className="mt-4 text-center text-xs text-gray-400">
          Drag & Drop your image here
        </p>
      </div>
      <p className="mt-4 text-center text-xs text-gray-400">Or</p>
      <button
        className="bg-blue-500 hover:bg-blue-200 rounded-lg text-white hover:text-gray-700 px-4 py-2 text-xs mt-6"
        onClick={handleClick}
      >
        Choose a file
      </button>
      <input
        className="hidden"
        ref={fileRef}
        type="file"
        onChange={handleFileChange}
        accept=".jpg, .jpeg, .png"
      />
    </div>
  );
}

import React from "react";

export default function ImageUploader() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="shadow-lg rounded-[12px] px-32 py-124">
        <h1 className="text-center">Upload your image</h1>
        <p className="text-center">File should be jpeg, png...</p>
        <div className="border-2 border-[#97BEF4] rounded-[12px] border-dashed p-10"></div>
      </div>
    </div>
  );
}

import React from "react";

export default function ProgressBar() {
  return (
    <div className="flex flex-col items-start justify-center shadow-lg rounded-[12px] min-w-[400px] px-8 py-10">
      <h1 className="text-left text-lg text-gray-700">Uploading...</h1>
      <div className="mt-8 min-w-[340px] h-1 bg-gray-300">
        <div className="h-1 w-20 bg-green-700"></div>
      </div>
    </div>
  );
}

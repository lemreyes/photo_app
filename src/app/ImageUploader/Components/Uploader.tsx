import React, { ChangeEvent, DragEvent, useRef, useState } from "react";
import Image from "next/image";
import image_placeholder from "../../../../public/image_placeholder.svg";

export default function Uploader({
  hdlUpdateUploadState,
}: {
  hdlUpdateUploadState: (newUploadState: string) => void;
}) {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [srcPreview, setSrcPreview] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

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

    // reset file input
    event.target.value = "";

    const src = URL.createObjectURL(fileObj);
    setSrcPreview(src);
    setImageFile(fileObj);
  };

  const handleFileUpload = async () => {
    if (!imageFile) {
      return;
    }

    // update upload state
    hdlUpdateUploadState("uploading");

    console.log("Upload: ", imageFile);

    const body = new FormData();
    body.append("file", imageFile);
    console.log("BODY: ", body);

    const response = await fetch("/api/upload", {
      method: "POST",
      body,
    });

    // 
  };

  const handleOnDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const fileObj = event.dataTransfer.files[0];
    if (!fileObj) {
      return;
    }

    console.log("fileObj", fileObj);

    const src = URL.createObjectURL(fileObj);
    console.log("src", src);
    setSrcPreview(src);
    setImageFile(fileObj);
  };

  const handleOnDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center shadow-lg rounded-xl px-8 py-10">
      <h1 className="text-center text-lg text-gray-700">Upload your image</h1>
      <p className="text-center text-xs text-gray-400 mt-2">
        File should be jpeg, png...
      </p>
      <div
        className="flex flex-col items-center justify-center border border-[#97BEF4] rounded-xl border-dashed mt-8 p-10"
        onDrop={handleOnDrop}
        onDragOver={handleOnDragOver}
      >
        {srcPreview === "" ? (
          <Image src={image_placeholder} alt="upload" priority />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={srcPreview}
            alt="upload"
            width={114}
            height={"auto"}
            loading={"lazy"}
          />
        )}
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
      <button
        className="bg-[#219653] hover:bg-[#6ceba3] rounded-lg text-white hover:text-gray-700 px-4 py-2 text-lg mt-12 min-w-[258px] flex items-center justify-center gap-x-2"
        onClick={handleFileUpload}
      >
        <span>Upload</span>
      </button>
    </div>
  );
}

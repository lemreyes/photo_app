"use client";

import React, { useEffect, useState } from "react";
import Uploader from "./Components/Uploader";
import ProgressBar from "./Components/ProgressBar";

export default function ImageUploader() {
  const [uploadState, setUploadState] = useState<string | undefined>("init");

  useEffect(() => {
    setUploadState("uploading");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {uploadState === "init" && <Uploader />}
      {uploadState === "uploading" && <ProgressBar />}
    </div>
  );
}

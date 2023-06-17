"use client";

import React, { useEffect, useState } from "react";
import Uploader from "./Components/Uploader";
import ProgressBar from "./Components/ProgressBar";
import UploadResult from "./Components/ResultCard";

export default function ImageUploader() {
  const [uploadState, setUploadState] = useState<string | undefined>("init");

  useEffect(() => {
    setUploadState("complete");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {uploadState === "init" && <Uploader />}
      {uploadState === "uploading" && <ProgressBar />}
      {uploadState === "complete" && <UploadResult />}
    </div>
  );
}

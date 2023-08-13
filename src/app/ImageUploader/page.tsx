"use client";

import React, { useEffect, useState } from "react";
import Uploader from "./Components/Uploader";
import ProgressBar from "./Components/ProgressBar";
import ResultCard from "./Components/ResultCard";

export default function ImageUploader() {
  const [uploadState, setUploadState] = useState<string | undefined>("init");
  const [uploadResult, setUploadResult] = useState<UploadResult>({
    result: false,
    path: "",
  });

  useEffect(() => {
    setUploadState("init");
  }, []);

  const hdlUpdateUploadState = (newUploadState: string) => {
    setUploadState(newUploadState);
  };

  const hdlUpdateUploadResult = (uploadResult: UploadResult) => {
    setUploadResult(uploadResult);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {uploadState === "init" && (
        <Uploader
          hdlUpdateUploadState={hdlUpdateUploadState}
          hdlUpdateUploadResult={hdlUpdateUploadResult}
        />
      )}
      {uploadState === "uploading" && <ProgressBar />}
      {uploadState === "complete" && <ResultCard result={uploadResult} />}
    </div>
  );
}

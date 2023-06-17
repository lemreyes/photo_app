"use client";

import React, { useState } from "react";
import Uploader from "./Components/Uploader";

export default function ImageUploader() {
  const [uploadState, setUploadState] = useState<string | undefined>("init");

  setUploadState("init");

  // render based on upload state
  if (uploadState === "init") {
    return <Uploader />;
  } else if (uploadState === "uploading") {
  } else if (uploadState === "finish") {
  } else {
    // nothing
  }
}

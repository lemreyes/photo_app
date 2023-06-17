import { motion } from "framer-motion";
import React from "react";

export default function ProgressBar() {
  return (
    <div className="flex flex-col items-start justify-center shadow-lg rounded-xl min-w-[400px] px-8 py-10">
      <h1 className="text-left text-lg text-[#4F4F4F]">Uploading...</h1>
      <div className="mt-8 min-w-[340px] h-1 bg-[#F2F2F2]">
        <motion.div
          className="h-1 max-w-[100px] bg-[#2F80ED]"
          animate={{ x: [0, 240, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </div>
    </div>
  );
}

"use client";

import React, { useRef, useState } from "react";
import progressbarimg from "../../public/assets/Mask group.png";
import Image from "next/image";

export default function ProgressBar() {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(45); // Starting progress

  const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    let newProgress = ((e.clientX - rect.left) / rect.width) * 100;
    newProgress = Math.max(0, Math.min(100, newProgress)); // Clamp value
    setProgress(newProgress);
  };

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div
        ref={progressBarRef}
       className="relative rounded cursor-pointer w-full h-[42px] bg-[#138db1] border-[3px] border-[#003e58]"
        onClick={handleDrag}
      >
        {/* Fill with gradient and white border */}
        <div
          className="absolute h-[33px] rounded transition-all duration-200 mt-[2px] ml-[5px] mr-[10px] mb-[2px]"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(to right, #f057c2, #fda6e2)",
          }}
        />

        {/* Label Fixed at Start Inside Progress Bar */}
        <h5 className="absolute left-2 top-1/2 -translate-y-1/2 text-[24px] z-10 pointer-events-none font-normal text-[#f057c2]">
          Until next price increase
        </h5>

        {/* Bear Avatar at the end of progress */}
        <div
          className="absolute cursor-pointer bg-[#ef53c0] z-30 rounded-full top-[-3px]"
          style={{ left: `calc(${progress}% - 20px)` }}
          onMouseDown={() => {
            const onMouseMove = (eMove: MouseEvent) => handleDrag(eMove as any);
            const onMouseUp = () => {
              window.removeEventListener("mousemove", onMouseMove);
              window.removeEventListener("mouseup", onMouseUp);
            };
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
          }}
        >
          <Image
            src={progressbarimg}
            alt="Bear"
            className="w-[49px] h-[42px]"
          />
        </div>
      </div>
    </div>
  );
}

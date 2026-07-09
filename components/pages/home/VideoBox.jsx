import SubHeadBox from "@/components/Layout/SubHeadBox";
import Image from "next/image";
import React from "react";

const VideoBox = () => {
  return (
    <div
      id="demo"
      className="w-full aspect-video gap-4 flex flex-col justify-center items-center"
    >
      <SubHeadBox text={"Demostrative Video"} />

      <div className="w-[95%] h-[95%] rounded-xl bg-line/20 border-black" />
    </div>
  );
};

export default VideoBox;

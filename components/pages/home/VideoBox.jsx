import SubHeadBox from "@/components/Layout/SubHeadBox";
import Image from "next/image";
import React from "react";

const VideoBox = () => {
  return (
    <div className="w-full aspect-video gap-4 flex flex-col justify-center items-center">
      <SubHeadBox text={"Demostrative Video"} />

      <Image
        src={
          "https://img.magnific.com/free-psd/creative-youtube-thumbnail-design-template_505751-6257.jpg?semt=ais_hybrid&w=740&q=80"
        }
        width={1000}
        height={1000}
        className="w-[95%] h-[95%] rounded-sm "
        alt="video"
      />
    </div>
  );
};

export default VideoBox;

"use client";
import SubHeadBox from "@/components/Layout/SubHeadBox";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const VideoBox = () => {
  return (
    <div
      id="demo"
      className="w-full aspect-video gap-4 flex flex-col justify-center items-center"
    >
      <SubHeadBox text={"Demostrative Video"} />

      <motion.div
        initial={{ y: 22, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.32, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="w-[95%] h-[95%] rounded-xl bg-line/20 border-black"
      />
    </div>
  );
};

export default VideoBox;

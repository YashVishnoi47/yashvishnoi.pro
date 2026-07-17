"use client";
import React from "react";
import { motion } from "framer-motion";

const SubHeadBox = ({ text }) => {
  return (
    <motion.div
      initial={{ y: 22, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.24, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="w-full h-15 border-b border-line border-t flex justify-start items-center 
       bg-[repeating-linear-gradient(45deg,var(--color-line-lite)_0px,var(--color-line-lite)_1px,transparent_1px,transparent_10px)] px-4
    "
    >
      <h3 className="h-fit flex justify-center items-center text-[28px] text-primary-text font-pixel font-bold bg-background/95 backdrop:blur-2xl tracking-tight">
        {text || "This iS HeadingBox"}
      </h3>
    </motion.div>
  );
};

export default SubHeadBox;

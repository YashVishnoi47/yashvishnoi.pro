"use client";
import React from "react";
import { motion } from "framer-motion";

const SubHeadBox = ({ text }) => {
  return (
    <div className="w-full flex justify-center  items-center h-15 border-b border-line border-t">
      <motion.div
        className="w-full max-w-maximum-width h-full  flex justify-start items-center relative
        px-4 border-x border-line overflow-hidden
    "
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
            backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
          }}
        />
        <motion.h3
          initial={{ y: 22, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.24, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="h-fit flex justify-center items-center text-[28px] text-primary-text font-pixel font-bold bg-background/95 backdrop:blur-2xl tracking-tight relative z-1"
        >
          {text || "This iS HeadingBox"}
        </motion.h3>
      </motion.div>
    </div>
  );
};

// bg-[repeating-linear-gradient(45deg,var(--color-line-lite)_0px,var(--color-line-lite)_1px,transparent_1px,transparent_10px)]
export default SubHeadBox;

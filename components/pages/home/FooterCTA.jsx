"use client";
import SubHeadBox from "@/components/Layout/SubHeadBox";
import { cn } from "@/lib/utils";
import React from "react";
import { LuLayoutTemplate } from "react-icons/lu";
import { SiHostinger } from "react-icons/si";
import { motion } from "framer-motion";

const FooterCTA = () => {
  const offers = [
    {
      heading: "Free Hostinger Plan, 1 Year",
      subheading:
        "We host and maintain your automation backend on Hostinger for a full year — no server costs, no setup headaches, nothing for you to manage.",
      icon: <SiHostinger size={40} />,
      value: "$150+ value",
    },
    {
      heading: "Free Landing Page",
      subheading:
        "A custom-coded page built specifically for your firm, designed to turn visitors into booked consultations before your AI receptionist even picks up.",
      icon: <LuLayoutTemplate size={40} />,
      value: "$1,200+ value",
    },
  ];

  return (
    <div className="w-full h-fit flex flex-col justify-start items-start">
      <SubHeadBox text={`Bonus Elements`} />

      <motion.div
        initial={{ y: 22, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.36,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="w-full min-h-80 flex md:flex-row flex-col justify-center items-center gap-"
      >
        {offers.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "md:w-1/2  w-full h-80 relative p-4 flex flex-col justify-center items-center border-line bg-line/5 gap-2",
              idx === 0 && "border-r",
            )}
          >
            <div className="absolute px-2 py-1 flex justify-center items-center text-[12px] top-4 right-4 bg-line/20 border border-line text-primary-text rounded-[4px]">
              {item.value}
            </div>

            <div className="w-full flex justify-center items-center h-[65%]">
              <div className="p-4 flex justify-center items-center bg-black/2 dark:bg-white/4 border border-line rounded-[8px] shadow-lg shadow-line">
                {item.icon}
              </div>
            </div>

            <div className="w-[100%] h-[35%] flex flex-col gap-1 justify-center items-start">
              <p className="text-[20px] font-semibold text-primary-text">
                {item.heading}
              </p>
              <span className="text-[14px] w-[100%] text-pretty text-secondary-text">
                {item.subheading}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FooterCTA;

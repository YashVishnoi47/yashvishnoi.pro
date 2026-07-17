"use client";
import React from "react";
import SecondaryButton from "@/components/ui/SecondaryButton";
import PrimaryButtonDark from "@/components/ui/PrimaryButtonDark";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      id="#home"
      className="w-full h-fit flex flex-col justify-start gap-8 items-start mt-8 px-4"
    >
      <div className="w-full flex flex-col justify-start items-start gap-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="md:text-[64px] sm:text-[54px] text-[42px] text-primary-text font-pixel font-bold text-balance leading-[1.08] tracking-tighter"
        >
          Turn missed calls into revenue
        </motion.h1>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.08, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="md:w-[85%] w-full md:text-[18px] text-[14px] font-medium text-secondary-text text-pretty"
        >
          Legal Intake OS™ is an AI receptionist for law firms — answering calls
          24/7, qualifying leads, and booking consultations automatically, so no
          client ever reaches voicemail.
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.16, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full flex justify-start items-start gap-4"
        >
          <PrimaryButtonDark arrow={true} text="Book a call" />
          <SecondaryButton text="Watch Demo" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

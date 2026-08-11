"use client";
import React from "react";
import SecondaryButton from "@/components/ui/SecondaryButton";
import PrimaryButtonDark from "@/components/ui/PrimaryButtonDark";
import { motion } from "framer-motion";
import PrimaryButtonV2 from "@/components/ui/PrimaryButtonV2";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      id="#home"
      className="max-w-maximum-width w-full h-[500px] flex flex-col justify-center gap-8 items-start px-4 relative border-x border-line border-t-background"
    >
      <div
        className="
    absolute inset-0 z-0 pointer-events-none
    [--grid-line:rgba(75,85,99,0.08)]
    [--grid-dot:rgba(55,65,81,0.12)]
    dark:[--grid-line:hsl(0,0%,10%)]
    dark:[--grid-dot:hsl(0,0%,10%)]
  "
        style={{
          backgroundImage: `
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 19px,
        var(--grid-line) 19px,
        var(--grid-line) 20px,
        transparent 20px,
        transparent 39px,
        var(--grid-line) 39px,
        var(--grid-line) 40px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 19px,
        var(--grid-line) 19px,
        var(--grid-line) 20px,
        transparent 20px,
        transparent 39px,
        var(--grid-line) 39px,
        var(--grid-line) 40px
      ),
      radial-gradient(
        circle at 20px 20px,
        var(--grid-dot) 2px,
        transparent 2px
      ),
      radial-gradient(
        circle at 40px 40px,
        var(--grid-dot) 2px,
        transparent 2px
      )
    `,
          backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
        }}
      />

      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-background"
        style={{
          maskImage:
            "radial-gradient(ellipse 120% 100% at 50% -10%, transparent 50%, black 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 120% 100% at 50% -10%, transparent 50%, black 80%)",
        }}
      />

      <div className="w-full flex flex-col justify-start items-center gap-6 relative z-2 mb-12 mt-8">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="md:text-[54px] w-[100%] sm:text-[54px] text-[42px] text-primary-text font-pixel font-bold leading-[1.09] tracking-tighter text-center flex flex-col justify-center items-center"
        >
          {/* <h1 className={"text-[16px] tracking-tight mb-4"}>Legal Intake OS™</h1> */}
          Turn missed calls into
          <br />
          booked consultations and revenue
        </motion.h1>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.08, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="md:w-[80%] w-full md:text-[18px] text-[14px] font- text-secondary-text text-pretty text-center"
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
          className="w-full flex justify-center items-start gap-4"
        >
          <Link href="/bookCall">
            <PrimaryButtonV2 text="Talk with Yash" />
          </Link>
          <SecondaryButton text="Watch Demo" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

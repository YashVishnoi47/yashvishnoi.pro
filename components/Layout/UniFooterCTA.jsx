"use client";
import React from "react";
import SubHeadBox from "./SubHeadBox";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import PrimaryButtonDark from "../ui/PrimaryButtonDark";
import { motion } from "framer-motion";

const UniFooterCTA = () => {
  const text = "Stop Losing Clients to";
  const text2 = "Voicemail";
  const text3 = " Start Booking Them";

  return (
    <div
      id="tech"
      className="w-full max-w-[800px] border-t border-x border-line h-fit flex flex-col justify-start gap-4 items-start relative"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
      linear-gradient(45deg, transparent 49%, var(--line-color-pat-lite) 49%, var(--line-color) 51%, transparent 51%),
      linear-gradient(-45deg, transparent 49%, var(--line-color-pat-lite) 49%, var(--line-color) 51%, transparent 51%)
    `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="w-full h-100 flex flex-col gap-8 justify-center items-center relative z-1">
        <div
          className="
    absolute inset-0 -z-10
    bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,0.95)_18%,rgba(255,255,255,0.75)_35%,rgba(255,255,255,0.45)_55%,rgba(255,255,255,0.15)_75%,rgba(255,255,255,0)_100%)]
    dark:bg-[radial-gradient(circle_at_center,rgba(0,0,0,1)_0%,rgba(0,0,0,0.95)_18%,rgba(0,0,0,0.75)_35%,rgba(0,0,0,0.45)_55%,rgba(0,0,0,0.15)_75%,rgba(0,0,0,0)_100%)]
  "
        />

        <div className="w-full flex justify-center items-center flex-col">
          <p className="w-[70%] flex flex-wrap justify-center items-center text-center md:text-[42px] text-[28px] text-primary-text font-bold text-balance leading-tight">
            {text.split(" ").map((word, idx) => (
              <motion.span
                initial={{ y: 14, opacity: 0, filter: "blur(6px)" }}
                whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.5,
                  delay: 0.08 + idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                key={idx}
              >
                {word}
                {idx !== text.split(" ").length - 1 && "\u00A0"}
              </motion.span>
            ))}
          </p>
          <p className="w-[90%] text-center md:text-[42px] text-[28px] text-primary-text font-bold text-balance leading-tight relative z-2 flex flex-wrap justify-center items-center">
            <motion.span
              initial={{ y: 14, opacity: 0, filter: "blur(6px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                delay: 0.08 + text.split(" ").length * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              Voicemail.{"\u00A0"}
            </motion.span>
            <span className="text-white flex flex-wrap justify-center items-center w-fit bg-black dark:text-black dark:bg-white group relative z-2">
              {text3.split(" ").map((word, idx) => (
                <motion.span
                  initial={{ y: 14, opacity: 0, filter: "blur(6px)" }}
                  whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay:
                      0.08 + (text.split(" ").length + 1) * 0.08 + idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  key={idx}
                >
                  {word}
                  {idx !== text3.split(" ").length - 1 && "\u00A0"}
                </motion.span>
              ))}
            </span>
          </p>
        </div>

        <div className="w-full flex justify-center items-start gap-4">
          <PrimaryButtonDark arrow={true} text="Book a call" />
          <SecondaryButton text="Watch Demo" />
        </div>
      </div>
    </div>
  );
};

export default UniFooterCTA;

"use client";
import SubHeadBox from "@/components/Layout/SubHeadBox";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  Mic,
  BookOpenCheck,
  PhoneIncoming,
  History,
  Siren,
  Mail,
  KeyRound,
  ShieldCheck,
  ChevronsDownUp,
  ChevronsUpDown,
} from "lucide-react";
import LogoBox from "@/components/shared/LogoBox";

const FAQ = () => {
  const [open, setOpen] = React.useState([]);
  const IconStyles = "size-5 text-accent-color";

  const FAQS = [
    {
      question: "Will the AI sound robotic?",
      ans: "No. You choose the voice, and it's designed to handle natural back-and-forth conversation, including interruptions.",
      icon: <Mic className={IconStyles} />,
    },
    {
      question: "Can it answer questions specific to our firm?",
      ans: "Yes — it's trained on a knowledge base built entirely from the information you provide.",
      icon: <BookOpenCheck className={IconStyles} />,
    },
    {
      question: "Does it screen out spam calls?",
      ans: "No — every incoming call is answered, so genuine prospects calling after hours or from unfamiliar numbers are never accidentally missed.",
      icon: <PhoneIncoming className={IconStyles} />,
    },
    {
      question: "Does it remember a caller from a previous call?",
      ans: "Each call is handled based on the information shared during that conversation.",
      icon: <History className={IconStyles} />,
    },
    {
      question: "What happens with real emergencies?",
      ans: "Emergency calls are detected and routed immediately — never left waiting.",
      icon: <Siren className={IconStyles} />,
    },
    {
      question: "Does it call leads back automatically?",
      ans: "Follow-up can happen through automated email, or your firm's preferred method.",
      icon: <Mail className={IconStyles} />,
    },
    {
      question: "Who owns the system once it's built?",
      ans: "Your firm does — 100%, with no vendor lock-in.",
      icon: <KeyRound className={IconStyles} />,
    },
    {
      question: "Is our client information kept confidential?",
      ans: "The system is configured around your firm's approved workflows, and ownership of all data collected stays with your firm.",
      icon: <ShieldCheck className={IconStyles} />,
    },
  ];
  return (
    <div
      id="faq"
      className="max-w-maximum-width w-full h-fit flex flex-col justify-start gap-4 items-start border-x border-line"
    >
      <motion.div
        initial={{ y: 22, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.36,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="w-full h-fit gap4 flex justify-center items-start flex-wrap"
      >
        {FAQS.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "h-45 md:w-[50%] w-full flex flex-col justify-start items-start border-y border-line border-r border-t-background px-4 py-6 gap-4 ",
              idx % 2 === 1 && "border-r-0",
            )}
          >
            <div
              key={idx}
              className={cn(
                "h-fit w-full flex justify-start items-center bg-background group transition-all duration-300 ease-in-out",
              )}
            >
              <LogoBox>{item.icon}</LogoBox>

              <p className="text-[16px] text-primary-text font-medium">
                {item.question || "Some text here"}
              </p>
            </div>

            <div className="flex justify-start items-start">
              <span className="text-[16px] text-secondary-text">
                {item.ans}{" "}
              </span>
            </div>
          </div>
        ))}

        <div
          className={cn(
            "w-full h-12 flex gap-1 justify-center items-center border-y border-line",
            open.includes(5) || (open.includes(7) && "border-t"),
          )}
        >
          <span className="text-[14px] text-secondary-text">
            Can't find the answer you're looking for?
          </span>{" "}
          <Link
            href="/bookCall"
            className="text-[14px] text-accent-color font-medium underline decoration-black"
          >
            Talk to Yash
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;

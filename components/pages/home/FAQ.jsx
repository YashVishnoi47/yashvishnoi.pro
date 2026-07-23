"use client";
import SubHeadBox from "@/components/Layout/SubHeadBox";
import { cn } from "@/lib/utils";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [open, setOpen] = React.useState([]);
  const FAQS = [
    {
      question: "Will the AI sound robotic?",
      ans: "No. You choose the voice, and it's designed to handle natural back-and-forth conversation, including interruptions.",
    },
    {
      question: "Can it answer questions specific to our firm?",
      ans: "Yes — it's trained on a knowledge base built entirely from the information you provide.",
    },
    {
      question: "Does it screen out spam calls?",
      ans: " No — every incoming call is answered, so genuine prospects calling after hours or from unfamiliar numbers are never accidentally missed.",
    },
    {
      question: "Does it remember a caller from a previous call?",
      ans: "Each call is handled based on the information shared during that conversation.",
    },
    {
      question: "What happens with real emergencies?",
      ans: "Emergency calls are detected and routed immediately — never left waiting.",
    },
    {
      question: "Does it call leads back automatically?",
      ans: "Follow-up currently happens through automated email, not outbound calling.",
    },
    {
      question: "Who owns the system once it's built?",
      ans: "Your firm does — 100%, with no vendor lock-in.",
    },
    {
      question: "Is our client information kept confidential?",
      ans: "The system is configured around your firm's approved workflows, and ownership of all data collected stays with your firm.",
    },
  ];
  return (
    <div
      id="faq"
      className="max-w-[800px] w-full h-fit flex flex-col justify-start gap-4 items-start border-x border-line"
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
        className="w-full h-fit flex justify-center items-start flex-wrap my-4 border-t border-line"
      >
        {FAQS.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "h-fit md:w-[50%] w-full flex flex-col justify-start items-start border-y border-line border-r border-t-background",
              idx % 2 === 1 && "border-r-0",
            )}
          >
            <div
              key={idx}
              onClick={() => {
                if (open.includes(idx)) {
                  setOpen(open.filter((i) => i !== idx));
                } else {
                  setOpen([...open, idx]);
                }
              }}
              className={cn(
                "h-fit w-full flex justify-between items-center gap-4 p-4 cursor-pointer bg-background hover:bg-black/3 dark:hover:bg-white/5 group transition-all duration-300 ease-in-out",
              )}
            >
              <p className="text-[15px] text-primary-text ">
                {item.question || "Some text here"}
              </p>

              {open.includes(idx) ? (
                <ChevronsDownUp size={16} className="text-secondary-text" />
              ) : (
                <ChevronsUpDown size={16} className="text-secondary-text" />
              )}
            </div>

            {open.includes(idx) && (
              <div className="flex justify-start items-start p-4">
                <span className="text-[14px] text-primary-text font-medium">
                  {item.ans}{" "}
                </span>
              </div>
            )}
          </div>
        ))}

        <div
          className={cn(
            "w-full h-12 flex gap-1 justify-center items-center border-b border-line",
            open.includes(5) || (open.includes(7) && "border-t"),
          )}
        >
          <span className="text-[14px] text-secondary-text">
            Can't find the answer you're looking for?
          </span>
          <Link
            href="/bookCall"
            className="text-[14px] text-primary-text font-medium hover:underline"
          >
            Talk to Yash
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;

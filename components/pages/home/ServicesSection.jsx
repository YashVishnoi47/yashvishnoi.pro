"use client";
import SubHeadBox from "@/components/Layout/SubHeadBox";
import { cn } from "@/lib/utils";
import React from "react";
import {
  PhoneCall,
  AudioLines,
  BrainCog,
  ListChecks,
  Siren,
  UserCheck,
  CalendarCheck,
  RefreshCw,
  MailCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      name: "24/7 Live Answering",
      desc: "No missed calls, no voicemail, no sick days.",
      logo: <PhoneCall className="size-5 text-secondary-text" />,
    },
    {
      name: "Natural, Human-Like Voice",
      desc: "You choose the voice that fits your firm's tone.",
      logo: <AudioLines className="size-5 text-secondary-text" />,
    },
    {
      name: "Custom Knowledge Base",
      desc: "Trained on information your firm provides, to answer real questions accurately.",
      logo: <BrainCog className="size-5 text-secondary-text" />,
    },
    {
      name: "Lead Qualification",
      desc: "Every caller is asked the right questions before being passed along.",
      logo: <ListChecks className="size-5 text-secondary-text" />,
    },
    {
      name: "Emergency Detection & Routing",
      desc: "Urgent matters reach a human immediately.",
      logo: <Siren className="size-5 text-secondary-text" />,
    },
    {
      name: "Qualified-Lead Transfer",
      desc: "Only real prospects reach your team — your attorneys' time stays protected.",
      logo: <UserCheck className="size-5 text-secondary-text" />,
    },
    {
      name: "Calendar-Based Booking",
      desc: "Consultations are booked directly against attorney availability.",
      logo: <CalendarCheck className="size-5 text-secondary-text" />,
    },
    {
      name: "CRM Synchronization",
      desc: "Every lead is synced to your firm's CRM.",
      logo: <RefreshCw className="size-5 text-secondary-text" />,
    },
    {
      name: "Email Follow-Up",
      desc: "Every lead is sent a follow-up email.",
      logo: <MailCheck className="size-5 text-secondary-text" />,
    },
    {
      name: "Email Reminders",
      desc: "Every lead is sent a follow-up email.",
      logo: <MailCheck className="size-5 text-secondary-text" />,
    },
  ];

  return (
    <div
      id="features"
      className="max-w-[800px] border-x border-line w-full h-fit flex flex-col justify-start gap-4 items-start"
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
        className="w-full h-fit border-line border-b flex justify-center items-center flex-wrap my-4"
      >
        {services.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "h-14 md:w-[50%] w-full flex justify-start items-center gap-4 p-4 border-y border-line cursor-pointer bg-background hover:bg-black/3 dark:hover:bg-white/5 group transition-all duration-300 ease-in-out border-r border-b-background",
              idx % 2 === 1 && "border-r-0",
            )}
          >
            <div className="p-2 border border-line bg-line/15 rounded-sm">
              {item.logo}
            </div>
            <p className="text-[15px] text-primary-text ">
              {item.name || "Some text here"}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesSection;

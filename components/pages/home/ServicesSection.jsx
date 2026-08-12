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
import LogoBox from "@/components/shared/LogoBox";

const ServicesSection = () => {
  const services = [
    {
      name: "24/7 Live Answering",
      desc: "Every call gets answered day or night — no voicemail, no missed leads, no sick days.",
      logo: <PhoneCall className="size-5 " />,
    },
    {
      name: "Natural, Human-Like Voice",
      desc: "Callers talk to a natural-sounding AI voice you pick to match your firm's tone.",
      logo: <AudioLines className="size-5 " />,
    },
    {
      name: "Custom Knowledge Base",
      desc: "Trained on your firm's own information, so it answers real questions accurately.",
      logo: <BrainCog className="size-5 " />,
    },
    {
      name: "Lead Qualification",
      desc: "Every caller is asked the right questions upfront before ever reaching your team.",
      logo: <ListChecks className="size-5 " />,
    },
    {
      name: "Emergency Detection & Routing",
      desc: "Urgent, time-sensitive matters are flagged and routed to a human immediately.",
      logo: <Siren className="size-5 " />,
    },
    {
      name: "Qualified-Lead Transfer",
      desc: "Only real, qualified prospects get passed through — your attorneys' time stays protected.",
      logo: <UserCheck className="size-5 " />,
    },
    {
      name: "Calendar-Based Booking",
      desc: "Consultations are booked straight into your calendar, based on real attorney availability.",
      logo: <CalendarCheck className="size-5 " />,
    },
    {
      name: "CRM Synchronization",
      desc: "Every lead is automatically synced to your firm's CRM — no manual data entry needed.",
      logo: <RefreshCw className="size-5 " />,
    },
    {
      name: "Email Follow-Up",
      desc: "Every lead gets an automatic follow-up email, so no prospect is left waiting.",
      logo: <MailCheck className="size-5" />,
    },
    {
      name: "Email Reminders",
      desc: "Upcoming consultations trigger automatic reminders, keeping no-shows to a minimum.",
      logo: <MailCheck className="size-5" />,
    },
  ];

  return (
    <div
      id="features"
      className="max-w-maximum-width border-x border-line w-full h-fit flex flex-col justify-start gap-4 items-start"
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
        className="w-full h-fit  flex justify-center items-center flex-wrap"
      >
        {services.map((item, idx) => (
          <div
            className={cn(
              "h-40 py-4 md:w-1/2 w-full border border-line p-4 flex flex-col gap-4 hover:bg-line/10 transition-all duration-200 ease-in-out",
              idx % 2 === 1 ? "border-r-0 border-l-0" : "border-l-0",
              idx === 8 && "border-b-0",
              idx === 9 && "border-b-0",
            )}
            key={idx}
          >
            <LogoBox>{item.logo}</LogoBox>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-bold text-primary-text">
                {item.name}
              </p>
              <p className="text-[14px] tracking-wide text-pretty text-secondary-text">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesSection;

"use client";
import SubHeadBox from "@/components/Layout/SubHeadBox";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ChevronsDownUp,
  ChevronsUpDown,
  Clock4,
  Dot,
  PhoneCall,
  BookOpen,
  Settings2,
  ClipboardCheck,
  Rocket,
  TrendingUp,
} from "lucide-react";

import React from "react";

const ProcessSection = () => {
  const [open, setOpen] = React.useState([]);
  const steps = [
    {
      heading: "Discovery Call",
      description:
        "We learn your firm's practice areas, workflow, and call-handling needs.",
      duration: "15–20 min",
      icon: <PhoneCall size={18} className="text-secondary-text" />,
      details: [
        "Understand your practice areas and typical case types",
        "Map your current intake process and pain points",
        "Identify what a 'qualified lead' looks like for your firm",
        "Discuss call volume and peak hours",
      ],
      deliverable: "A clear scope of what your AI receptionist needs to handle",
    },
    {
      heading: "Knowledge Base Setup",
      description:
        "We gather your FAQs, intake questions, fee structures, and firm policies to train your AI receptionist.",
      duration: "1–2 days",
      icon: <BookOpen size={18} className="text-secondary-text" />,
      details: [
        "Collect your firm's FAQs and common caller questions",
        "Document fee structures and consultation policies",
        "Define intake questions specific to your practice areas",
        "Set escalation rules for sensitive or urgent matters",
      ],
      deliverable: "A structured knowledge base ready for training",
    },
    {
      heading: "Build & Configure",
      description:
        "Your receptionist is set up with your chosen voice, call routing rules, calendar access, and CRM connection.",
      duration: "3–5 days",
      icon: <Settings2 size={18} className="text-secondary-text" />,
      details: [
        "Select and configure your AI receptionist's voice",
        "Set up call routing and emergency escalation paths",
        "Connect your calendar for consultation booking",
        "Integrate with your firm's CRM",
      ],
      deliverable: "A fully configured AI receptionist, ready for testing",
    },
    {
      heading: "Test & Review",
      description:
        "You test real call scenarios yourself and request any changes before it ever talks to a client.",
      duration: "1–2 days",
      icon: <ClipboardCheck size={18} className="text-secondary-text" />,
      details: [
        "Run live test calls covering common scenarios",
        "Review call transcripts and voice quality together",
        "Request adjustments to tone, routing, or responses",
        "Approve before go-live — nothing launches without your sign-off",
      ],
      deliverable: "A tested, approved system with your final sign-off",
    },
    {
      heading: "Go Live",
      description:
        "Your AI receptionist starts answering calls, qualifying leads, and booking consultations 24/7.",
      duration: "Day 1 of launch",
      icon: <Rocket size={18} className="text-secondary-text" />,
      details: [
        "Your AI receptionist starts answering all incoming calls",
        "Leads are qualified and routed automatically",
        "Consultations are booked directly to your calendar",
        "You get access to a live dashboard of calls and leads",
      ],
      deliverable: "A live, working AI receptionist handling real calls",
    },
    {
      heading: "Ongoing Optimization",
      description:
        "We monitor call transcripts and refine responses monthly to keep accuracy and conversion high.",
      duration: "Ongoing",
      icon: <TrendingUp size={18} className="text-secondary-text" />,
      details: [
        "Monthly review of call transcripts and outcomes",
        "Refine responses based on real caller questions",
        "Update knowledge base as your firm's needs change",
        "Monthly performance report: calls answered, leads booked",
      ],
      deliverable: "A monthly report + a system that keeps improving",
    },
  ];

  

  return (
    <div id="process" className="w-full h-fit flex flex-col justify-start gap-4 items-start">
      <SubHeadBox text={`Our Process`} />

      <div className="w-full flex flex-col justify-start items-start gap-">
        {steps.map((step, idx) => (
          <div
            className={cn(
              "w-full flex flex-col justify-center items-start gap-2 border-b border-line relative min-h-15",
              idx === 0 && "border-t",
            )}
            key={idx}
          >
            <div
              className="w-full h-15 flex justify-center items-center px-4 hover:bg-line/20 cursor-pointer"
              onClick={() =>
                setOpen((prev) =>
                  prev.includes(idx)
                    ? prev.filter((item) => item !== idx)
                    : [...prev, idx],
                )
              }
            >
              <div className="w-full flex gap-2 items-center justify-between ">
                <div className="flex justify-center items-center gap-4">
                  <div className="p-2 rounded-[4px] flex justify-center items-center border border-line bg-line/20">
                    {step.icon}
                  </div>
                  <p className="text-[18px] font-medium">{step.heading}</p>
                </div>

                <div className="flex justify-center items-center gap-2">
                  <p className="text-[14px] text-secondary-text">
                    Step {idx + 1}
                  </p>
                  {open.includes(idx) ? (
                    <ChevronsDownUp size={16} className="text-secondary-text" />
                  ) : (
                    <ChevronsUpDown size={16} className="text-secondary-text" />
                  )}
                </div>
              </div>
            </div>

            {open.includes(idx) && (
              <div className="flex flex-col justify-start items-start px-12 gap-2 relative pb-2">
                <div className="h-full w-[1px] bg-line absolute left-8 -top-5" />

                <p className="text-[14px] text-primary-text flex gap-2">
                  <ArrowRight size={16} className="text-secondary-text" />
                  {step.description}
                </p>

                {step.details.map((detail, idx) => (
                  <p
                    key={idx}
                    className="text-[14px] text-primary-text flex gap-2"
                  >
                    <ArrowRight size={16} className="text-secondary-text" />
                    {detail}
                  </p>
                ))}

                <div className="w-full flex flex-col gap- mt-2">
                  <p className="text-[12px] flex gap-2 font-medium text-primary-text uppercase tracking-wide">
                    {/* <Clock4 size={16} className="text-secondary-text" /> */}
                    Time: {step.duration}
                  </p>
                  <p className="text-[13px] font-medium text-primary-text pt-1">
                    Deliverable: {step.deliverable}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;

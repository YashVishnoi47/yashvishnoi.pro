"use client";
import SubHeadBox from "@/components/Layout/SubHeadBox";
import Link from "next/link";
import React from "react";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const AboutSection = () => {
  const socials = [
    {
      icons: <FaXTwitter size={16} />,
      link: "https://twitter.com/yourhandle",
      name: "Twitter / X",
    },
    {
      icons: <FaLinkedin size={16} />,
      link: "https://linkedin.com/in/yourhandle",
      name: "LinkedIn",
    },
    {
      icons: <FaGithub size={16} />,
      link: "https://github.com/yourhandle",
      name: "GitHub",
    },
  ];
  return (
    <div
      id="about"
      className="w-full h-fit flex flex-col justify-start gap-4 items-start"
    >
      <SubHeadBox text={`About me`} />

      <motion.div
        initial={{ y: 22, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.36,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="w-full flex flex-col gap-4 justify-start items-start p-4"
      >
        <p className="text-[16px] text-secondary-text text-pretty">
          I'm{" "}
          <span className="text-primary-text font-medium">Yash Vishnoi</span>,
          the developer behind Legal Intake OS™. I'm a full-stack developer
          focused on building practical, production-ready systems — not just
          prototypes.
        </p>
        <p className="text-[16px] text-secondary-text text-pretty">
          My work centers on{" "}
          <span className="text-primary-text font-medium">
            AI and automation
          </span>
          : building tools that solve real operational problems, from
          custom-coded web applications to AI-powered systems that handle real
          business workflows end-to-end.
        </p>
        <p className="text-[16px] text-secondary-text text-pretty">
          I built Legal Intake OS™ after seeing how many law firms{" "}
          <span className="text-primary-text font-medium">
            lose qualified leads
          </span>{" "}
          simply because no one was available to answer the phone. My goal with
          every project is the same: build something that works reliably, from
          day one, with no unnecessary complexity.
        </p>
      </motion.div>
      {/* <div className="w-full h-10 flex justify-center items-center border-y border-line">
        <div className="h-full w-[20%] border-r border-line p-4 flex justify-start items-center">
          <span className="text-[14px] text-secondary-text font-medium">
            Follow me -{" "}
          </span>
        </div>
        <div className="h-full w-[80%] flex justify-start items-center border-line">
          {socials.map((social, idx) => (
            <Link
              href={social.link}
              key={idx}
              target="_blank"
              className="h-full flex justify-center items-center aspect-square border-r border-line hover:bg-line/20 "
            >
              {social.icons}
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default AboutSection;

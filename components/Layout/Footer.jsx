"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import LegalIntakeOSicon from "@/assets/svg/LegalIntakeOSicon";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [hovered, setHovered] = useState(null);

  const links = [
    {
      name: "Home",
      link: "/#",
    },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Demo",
      link: "/#demo",
    },
    {
      name: "Features",
      link: "/#features",
    },
    // {
    //   name: "Process",
    //   link: "/#process",
    // },
    // {
    //   name: "Tech Stack",
    //   link: "/#tech",
    // },
    // {
    //   name: "FAQ's",
    //   link: "/#faq",
    // },
  ];

  const socials = [
    {
      icons: (
        <FaXTwitter
          size={18}
          className="text-secondary-text hover:text-primary-text transition-all duration-200 ease-in-out"
        />
      ),
      link: "https://x.com/Yash_Vishnoi7",
      name: "Twitter / X",
    },
    {
      icons: (
        <FaLinkedin
          size={18}
          className="text-secondary-text hover:text-primary-text transition-all duration-200 ease-in-out"
        />
      ),
      link: "https://www.linkedin.com/in/yash-vishnoi-654318384/",
      name: "LinkedIn",
    },
    {
      icons: (
        <FaGithub
          size={18}
          className="text-secondary-text hover:text-primary-text transition-all duration-200 ease-in-out"
        />
      ),
      link: "https://github.com/YashVishnoi47/yashvishnoi.pro",
      name: "GitHub",
    },
    {
      icons: (
        <IoMdMail
          size={18}
          className="text-secondary-text hover:text-primary-text transition-all duration-200 ease-in-out"
        />
      ),
      link: "mailto:hello@yashvishnoi.pro",
      name: "Mail",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center border-t border-line items-center h-fit ">
      <div className="max-w-maximum-width justify-between flex w-full border-x border-line px-4 py-12">
        <div className="w-1/2 h-full flex gap-3 flex-col justify-center items-start">
          <div className={"flex gap-2 justify-center items-center"}>
            <LegalIntakeOSicon width={40} height={40} />
            <p className="text-[20px] font-bold font-pixel tracking-tighter cursor-default">
              Legal Intake OS™
            </p>
          </div>
          <p className="text-[16px] w-[75%] text-pretty leading-snug text-secondary-text">
            Turn missed calls into booked consultations and revenue
          </p>

          <div className="flex gap-3 mt-2">
            {socials.map((item, idx) => (
              <Link key={idx} target="_blank" href={item.link}>
                {item.icons}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-1/2 h-full flex justify-end gap-24 gap- order border-black items-start ">
          <div className="flex w-1/ flex-col gap-3 justify-start items-start">
            <p className="text-[12px] uppercase font-medium text-[hsl(0,0%,60%)]">
              Explore
            </p>
            <div className="flex flex-col gap-3">
              {links.map((item, idx) => (
                <Link
                  className="text-[14px] font-medium text-secondary-text hover:text-primary-text transition-all duration-200 ease-in-out border--[1.5px] dark:border-black border-white hover:border-primary-text relative w-fit"
                  href={item.link}
                  onMouseEnter={() => {
                    setHovered(idx);
                  }}
                  onMouseLeave={() => {
                    setHovered(null);
                  }}
                  key={idx}
                >
                  {item.name}

                  <AnimatePresence>
                    {hovered === idx && (
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "100%", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="h-[1.3px] w-full bg-black absolute bottom-0 z-2 left-0"
                      />
                    )}
                  </AnimatePresence>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex w-1/ flex-col gap-3 justify-start items-start">
            <p className="text-[12px] uppercase font-medium text-[hsl(0,0%,60%)]">
              Socials
            </p>
            <div className="flex flex-col gap-3">
              <SocialsLinks socials={socials} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-maximum-width flex justify-center items-center border-t border-line">
        <div className="max-w-maximum-width flex w-full h-fit border-x border-line p-4 flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-t-background">
          <p className="text-[14px] text-secondary-text mb12">
            Built and designed by{" "}
            <Link
              target="_blank"
              className="hover:text-primary-text font-medium underline underline-offset-2"
              href={"https://yashvishnoi.site/"}
            >
              Yash Vishnoi
            </Link>
          </p>
          <p className="text-[14px] text-secondary-text mb12">
            <Link
              target="_blank"
              className="hover:text-primary-text  underline-offset-2"
              href={"https://github.com/YashVishnoi47/yashvishnoi.pro"}
            >
              hello@yashvishnoi.pro
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const SocialsLinks = ({ socials }) => {
  const [hovered, setHovered] = useState(null);

  return socials.map((item, idx) => {
    if (item.name !== "Mail")
      return (
        <Link
          className="text-[14px] font-medium text-secondary-text hover:text-primary-text transition-all duration-200 ease-in-out border--[1.5px] dark:border-black border-white hover:border-primary-text relative w-fit"
          href={item.link}
          onMouseEnter={() => {
            setHovered(idx);
          }}
          onMouseLeave={() => {
            setHovered(null);
          }}
          key={idx}
        >
          {item.name}

          <AnimatePresence>
            {hovered === idx && (
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="h-[1.3px] w-full bg-black absolute bottom-0 z-2 left-0"
              />
            )}
          </AnimatePresence>
        </Link>
      );
  });
};

export default Footer;

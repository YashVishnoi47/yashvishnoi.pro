import Link from "next/link";
import React from "react";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  const links = [
    {
      name: "Home",
      link: "/#",
    },
    {
      name: "Demo",
      link: "/#demo",
    },
    {
      name: "Features",
      link: "/#features",
    },
    {
      name: "Process",
      link: "/#process",
    },
    {
      name: "Tech Stack",
      link: "/#tech",
    },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "FAQ's",
      link: "/#faq",
    },
  ];
  const socials = [
    {
      icons: <FaXTwitter size={14} />,
      link: "https://x.com/Yash_Vishnoi7",
      name: "Twitter / X",
    },
    {
      icons: <FaLinkedin size={14} />,
      link: "https://www.linkedin.com/in/yash-vishnoi-654318384/",
      name: "LinkedIn",
    },
    {
      icons: <FaGithub size={14} />,
      link: "https://github.com/YashVishnoi47/yashvishnoi.pro",
      name: "GitHub",
    },
    {
      icons: <IoMdMail size={14} />,
      link: "mailto:hello@yashvishnoi.pro",
      name: "Mail",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center border border-line h-fit">
      <div className="max-w-[800px] flex flex-col w-full h-full border-x border-line ">
        <div className="w-full h-fit flex flex-col justify-center items-center p-4 gap-4 border-b border-line">
          <span className="text-[16px] text-secondary-text">Navigate</span>

          <div className="w-[40%] flex gap-x-4 gap-y-2 flex-wrap justify-center items-center">
            {links.map((item, idx) => (
              <Link
                className="text-[14px] text-secondary-text hover:text-primary-text transition-all duration-200 ease-in-out"
                href={item.link}
                key={idx}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full h-fit flex flex-col justify-center items-center p-4 gap-4">
          <span className="text-[16px] text-secondary-text">Connect</span>

          <div className="w-[95%] flex gap-x-2 gap-y-2 flex-wrap justify-center items-start">
            {socials.map((item, idx) => (
              <Tooltip key={idx}>
                <Link
                  href={item.link}
                  target={item.name !== "Mail" ? "_blank" : ""}
                >
                  <TooltipTrigger
                    className={
                      "text-[14px] p-2 border border-line rounded-[4px] bg-line/20 text-secondary-text hover:bg-line/40 hover:text-primary-text font-medium transition-all duration-200 ease-in-out cursor-pointer"
                    }
                  >
                    {item.icons}
                  </TooltipTrigger>
                </Link>
                <TooltipContent>{item.name}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center border-t border-line">
        <div className="max-w-[800px] flex w-full h-fit border-x border-line px-4 py-6  flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-t-background">
          <p className="text-[14px] text-secondary-text">
            Built and designed by{" "}
            <Link
              target="_blank"
              className="hover:text-primary-text font-medium underline underline-offset-2"
              href={"https://yashvishnoi.pro/"}
            >
              Yash Vishnoi
            </Link>
          </p>
          <p className="text-[14px] text-secondary-text">
            I like building things properly. Here's the{" "}
            <Link
              target="_blank"
              className="hover:text-primary-text font-medium underline underline-offset-2"
              href={"https://github.com/YashVishnoi47/yashvishnoi.pro"}
            >
              code
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

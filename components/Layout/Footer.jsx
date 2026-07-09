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
      link: "https://twitter.com/yourhandle",
      name: "Twitter / X",
    },
    {
      icons: <FaLinkedin size={14} />,
      link: "https://linkedin.com/in/yourhandle",
      name: "LinkedIn",
    },
    {
      icons: <FaGithub size={14} />,
      link: "https://github.com/yourhandle",
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
      <div className="max-w-[800px] flex w-full h-full border-x border-line">
        <div className="w-1/2 h-fit flex flex-col justify-start items-start p-4 gap-4  border-r border-line">
          <span className="text-[16px] text-secondary-text">Navigate</span>

          <div className="w-[85%] flex gap-x-2 gap-y-2 flex-wrap justify-start items-start">
            {links.map((item, idx) => (
              <Link
                className="text-[14px] text-secondary-text hover:text-primary-text"
                href={item.link}
                key={idx}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-1/2 h-fit flex flex-col justify-start items-start p-4 gap-4">
          <span className="text-[16px] text-secondary-text">Contact</span>

          <div className="w-[95%] flex gap-x-2 gap-y-2 flex-wrap justify-start items-start">
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
        <div className="max-w-[800px] flex w-full h-fit border-x border-line px-4 py-6 border-t flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t-background">
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

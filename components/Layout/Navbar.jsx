"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [hovered, setHovered] = React.useState();
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "2-min Demo",
      href: "/about",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Process",
      href: "/",
    },
  ];
  return (
    <div className="w-full h-15 flex justify-center items-center border-b border-line">
      <div className="w-[800px] border-r border-line h-full flex justify-between items-center px-1">
        <div className="w-[30%] flex gap-4 justify-start items-center">
          <div className="w-12 h-12 rounded-lg bg-black/10" />
          <h1 className="text-[24px] font-bold cursor-pointer font-pixel leading-tight tracking-tight">
            Yash Vishnoi
          </h1>
        </div>

        <div className="w-[70%] h-full gap-2 flex justify-end items-center">
          <div className="flex gap-4 justify-center border-r pr-4">
              {links.map((item, idx) => (
                <Link
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(0)}
                  className="text-[14px] font-semibold text-secondary-text hover:text-primary-text transition-all duration-200 ease-in-out border-b-2 border-white hover:border-primary-text relative"
                  href={item.href}
                  key={idx}
                >
                  {item.name}

                  {/* {hovered === idx && (
                    <motion.span
                      layoutId="hovernav"
                      className="h-[2px] w-full bg-black absolute bottom-0 z-2 left-1/2 -translate-x-1/2"
                    />
                  )} */}
                </Link>
              ))}
          </div>

          <Link
            className="px-2 py-1 hover:bg-black/2 flex gap-2 justify-center items-center group transition-all duration-200 ease-in-out rounded-[2px] active:scale-[0.98] border border-white hover:border-black/2"
            target="_blank"
            href="https://github.com/YashVishnoi47/yashvishnoi.pro"
          >
            <Image src="/icons/github.svg" width={18} height={18} />
            <span className="ml2 text-[14px] font-medium text-secondary-text group-hover:text-primary-text transition-all duration-200 ease-in-out">
              Github
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

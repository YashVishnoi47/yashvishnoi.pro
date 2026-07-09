import SubHeadBox from "@/components/Layout/SubHeadBox";
import { Kbd } from "@/components/ui/kbd";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { BsJavascript } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
  SiTypescript,
  SiVercel,
  SiRadixui,
  SiMongodb,
  SiRedis,
  SiRender,
  SiHostinger,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiJsonwebtokens,
  SiSocketdotio,
  SiN8N,
  SiGit,
  SiGithub,
  SiNotion,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const TechSection = () => {
  const TS = [
    {
      heading: "What Powers Your Intake System?",
      techs: [
        {
          name: "OpenAI (GPT)",
          icon: <SiN8N size={13} />,
          link: "https://openai.com",
        },
        {
          name: "Retell AI",
          icon: null,
          link: "https://www.retellai.com",
        },
        {
          name: "N8N",
          icon: <SiN8N size={13} />,
          link: "https://n8n.io",
        },
      ],
    },
    {
      heading: "Artificial Intelligence",
      techs: [
        {
          name: "ChatGPT",
          icon: null,
          link: "https://chat.openai.com/",
        },
        {
          name: "Claude",
          icon: null, // no reliable Simple Icons entry as of my knowledge
          link: "https://claude.ai",
        },
        {
          name: "Gemini",
          icon: null, // same issue
          link: "https://gemini.google.com",
        },
      ],
    },
    {
      heading: "Frontend",
      techs: [
        {
          name: "React JS",
          icon: <FaReact size={13} />,
          link: "https://react.dev",
        },
        {
          name: "Next JS",
          icon: <SiNextdotjs size={13} />,
          link: "https://nextjs.org",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss size={13} />,
          link: "https://tailwindcss.com",
        },
        {
          name: "ShadCN UI",
          icon: <SiShadcnui size={13} />,
          link: "https://ui.shadcn.com",
        },
        {
          name: "Motion",
          icon: <SiFramer size={13} />,
          link: "https://motion.dev",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript size={13} />,
          link: "https://www.typescriptlang.org",
        },
      ],
    },
    {
      heading: "Backend",
      techs: [
        {
          name: "Node.js",
          icon: <SiNodedotjs size={13} />,
          link: "https://nodejs.org",
        },
        {
          name: "Express",
          icon: <SiExpress size={13} />,
          link: "https://expressjs.com",
        },
        {
          name: "Docker",
          icon: <SiDocker size={13} />,
          link: "https://www.docker.com",
        },
        {
          name: "JWT",
          icon: <SiJsonwebtokens size={13} />,
          link: "https://jwt.io",
        },
        {
          name: "Socket.io",
          icon: <SiSocketdotio size={13} />,
          link: "https://socket.io",
        },
      ],
    },
    {
      heading: "Hosting and Database",
      techs: [
        {
          name: "Vercel",
          icon: <SiVercel size={13} />,
          link: "https://vercel.com",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb size={13} />,
          link: "https://www.mongodb.com",
        },
        {
          name: "Redis",
          icon: <SiRedis size={13} />,
          link: "https://redis.io",
        },
        {
          name: "Render",
          icon: <SiRender size={13} />,
          link: "https://render.com",
        },
        {
          name: "Hostinger",
          icon: <SiHostinger size={13} />,
          link: "https://www.hostinger.com",
        },
      ],
    },
    {
      heading: "Tools",
      techs: [
        {
          name: "VS Code",
          icon: <VscVscode size={13} />,
          link: "https://code.visualstudio.com",
        },
        {
          name: "Git",
          icon: <SiGit size={13} />,
          link: "https://git-scm.com",
        },
        {
          name: "GitHub",
          icon: <SiGithub size={13} />,
          link: "https://github.com",
        },
        {
          name: "Notion",
          icon: <SiNotion size={13} />,
          link: "https://notion.so",
        },
        {
          name: "Figma",
          icon: <SiFigma size={13} />,
          link: "https://www.figma.com",
        },
      ],
    },
  ];
  return (
    <div id="tech" className="w-full h-fit flex flex-col justify-start gap-4 items-start">
      <SubHeadBox text={`Our Tech Stack`} />

      <div className="w-full h-fit flex flex-col justify-center items-center">
        {TS.map((item, idx) => (
          <div
            className={cn(
              "w-full min-h-15 sm:gap-0 gap-2 sm:py-0 py-2 border-b border-line flex sm:flex-row flex-col justify-between items-center",
              idx === 0 && "border-t",
            )}
            key={idx}
          >
            <div className="h-fit sm:w-[25%] w-full flex gap-1 justify-start items-start border- border-line px-2 py-2">
              <span className="text-[14px] text-secondary-text">
                0{idx + 1}.
              </span>
              <span className="text-[14px] text-secondary-text font-medium">
                {item.heading}
              </span>
            </div>

            <div className="w-[0.5px] h-15 bg-line sm:flex hidden" />

            <div className="h-full sm:w-[75%] w-full flex flex-wrap gap-2 justify-start items-start px-2">
              {item.techs.map((tech, idx) => (
                <Link
                  className="text-[12px] text-secondary-text border border-line rounded-full px-2 select-none bg-line/10 flex justify-center items-center gap-2 hover:bg-line/30 py-[0.5px]"
                  key={idx}
                  href={tech.link || "/"}
                  target="_blank"
                >
                  {tech.icon}
                  <span className="text-primary-text">{tech.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSection;

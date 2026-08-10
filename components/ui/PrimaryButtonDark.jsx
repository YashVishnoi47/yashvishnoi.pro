import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PrimaryButtonDark = ({ text, arrow = false, cls, image = false }) => {
  return (
    <Link
      href="/bookCall"
      className={cn(
        "bg-accent-color hover:bg-accent-color/95 cursor-pointer rounded-[8px] transition-all duration-300 ease-out flex justify-center items-center gap-2 group active:scale-[0.97] border-accent-color border",
        image && "px-1.5 py-1.5 ",
        arrow && "px-3 py-1.5",
        !arrow && !image && "px-4 py-1.5",
        cls,
      )}
    >
      <span className={cn("text-[hsl(0,0%,95%)] dark:text-[hsl(0,0%,5%)]", image && "ml-1")}>
        {text || "Click me"}
      </span>
      {arrow && (
        <ArrowRight
          size={16}
          className="text-[hsl(0,0%,90%)] dark:text-[hsl(0,0%,10%)] group-hover:translate-x-1 group-hover:text-[hsl(0,0%,95%)] scale-[0.95] group-hover:scale-[1] transition-all duration-300 ease-out"
        />
      )}
      {image && (
        <Image
          src="/yash-vishnoi.jpeg"
          unoptimized
          className="rounded-[4px] size-6 object-cover border border-white"
          width={24}
          height={24}
          alt="github"
        />
      )}
    </Link>
  );
};

export default PrimaryButtonDark;

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const PrimaryButtonDark = ({ text, arrow = false, cls }) => {
  return (
    <Link
      href="/bookCall"
      className={cn(
        "px-4 py-1.5 bg-[hsl(0,0%,2%)] dark:bg-[hsl(0,0%,98%)] dark:hover:bg-[hsl(0,0%,90%)] hover:bg-[hsl(0,0%,10%)] cursor-pointer rounded-[8px] transition-all duration-300 ease-out flex justify-center items-center gap-1.5 group active:scale-[0.97] hover:shadow-[-3px_-3px_5px_0px_rgba(244,244,244,0.2)_inset] dark:hover:shadow-[-3px_-3px_5px_0px_rgba(0,0,0,0.2)_inset] hover:scale-[1.01]",
        cls,
      )}
    >
      <span className="text-[hsl(0,0%,95%)] dark:text-[hsl(0,0%,5%)]">
        {text || "Click me"}
      </span>
      {arrow && (
        <ArrowRight
          size={16}
          className="text-[hsl(0,0%,90%)] dark:text-[hsl(0,0%,10%)] group-hover:translate-x-1 group-hover:text-[hsl(0,0%,95%)] scale-[0.95] group-hover:scale-[1] transition-all duration-300 ease-out"
        />
      )}
    </Link>
  );
};

export default PrimaryButtonDark;

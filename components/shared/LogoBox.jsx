import { cn } from "@/lib/utils";
import React from "react";

const LogoBox = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex aspect-square size-8 items-center justify-center rounded-sm bg-linear-to-b from-accent-color/70 to-accent-color/90 dark:from-neutral-200 dark:to-white shadow-lg ring-1 ring-white/20 dark:ring-black/10 ring-offset-2 ring-offset-accent-color dark:ring-offset-white ring-inset mr-4 text-white dark:text-black",
        className,

        "transition-all duration-200 ease-in-out",
      )}
    >
      {children}
    </div>
  );
};

export default LogoBox;

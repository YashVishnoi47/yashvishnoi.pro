import { cn } from "@/lib/utils";
import React from "react";

const LogoBox = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex aspect-square size-10 items-center justify-center rounded-md bg-accent-color/10 dark:bg-white/10 mr-4 text-accent-color dark:text-neutral-200",
        className,
        "transition-all duration-200 ease-in-out",
      )}
    >
      {children}
    </div>
  );
};

export default LogoBox;
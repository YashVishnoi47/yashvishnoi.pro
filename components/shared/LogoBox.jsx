import { cn } from "@/lib/utils";
import React from "react";

const LogoBox = ({ children, className }) => {
  return (
    <div class="relative flex aspect-square size-8 items-center justify-center rounded-sm bg-linear-to-b from-blue-400 to-blue-600 align-middle shadow-lg ring-1 ring-white/20 ring-offset-2 ring-offset-blue-500 ring-inset">
      {children}
    </div>
  );
};

export default LogoBox;
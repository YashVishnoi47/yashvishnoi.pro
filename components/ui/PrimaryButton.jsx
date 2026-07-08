import { ArrowRight } from "lucide-react";
import React from "react";

const PrimaryButton = ({ text, arrow = false }) => {
  return (
    <button className="px-4 py-1.5 bg-button-bg dark:hover:bg-[hsl(0,0%,10%)] hover:bg-[hsl(0,0%,90%)] cursor-pointer rounded-[8px] transition-all duration-300 ease-out flex justify-center items-center gap-1.5 group active:scale-[0.97] border border-background hover:border-line">
      <span className="text-primary-text">{text || "Click me"}</span>
      {arrow && (
        <ArrowRight
          size={16}
          className="text-secondary-text group-hover:translate-x-1 group-hover:text-primary-text scale-[0.95] group-hover:scale-[1] transition-all duration-300 ease-out"
        />
      )}
    </button>
  );
};

export default PrimaryButton;

import React from "react";
import VideoBox from "./VideoBox";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { Video } from "lucide-react";
import PrimaryButtonDark from "@/components/ui/PrimaryButtonDark";

const HeroSection = () => {
  return (
    <div
      id="#home"
      className="w-full h-fit flex flex-col justify-start gap-8 items-start mt-12 px-4"
    >
      <div className="w-full flex flex-col justify-start items-start gap-6">
        <h1 className="md:text-[64px] sm:text-[54px] text-[42px] text-primary-text font-pixel font-bold text-balance leading-[1.10] tracking-tight">
          Turn missed calls into revenue
        </h1>
        <h2 className="md:w-[90%] w-full md:text-[18px] text-[14px] font-medium text-secondary-text text-pretty">
          We build AI receptionists for law firms and service-based businesses
          that answer calls 24/7, capture and qualify leads, book appointments
          automatically.
        </h2>

        <div className="w-full flex justify-start items-start gap-4">
          <PrimaryButton arrow={true} text="Book a call" />
          <SecondaryButton text="Watch Demo" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

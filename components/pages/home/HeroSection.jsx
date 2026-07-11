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
        <h2 className="md:w-[85%] w-full md:text-[18px] text-[14px] font-medium text-secondary-text text-pretty">
          Legal Intake OS™ is an AI receptionist for law firms — answering calls 24/7, qualifying leads, and booking consultations automatically, so no client ever reaches voicemail.
        </h2>

        <div className="w-full flex justify-start items-start gap-4">
          <PrimaryButtonDark arrow={true} text="Book a call" />
          <SecondaryButton text="Watch Demo" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

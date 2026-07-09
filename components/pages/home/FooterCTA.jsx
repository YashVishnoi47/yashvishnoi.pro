import SubHeadBox from "@/components/Layout/SubHeadBox";
import React from "react";

const FooterCTA = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-start gap-4 items-start">
      <SubHeadBox text={`Bonus`} />

      <div className="w-full h-80"></div>
    </div>
  );
};

export default FooterCTA;

import React from "react";

const SubHeadBox = ({ text }) => {
  return (
    <div
      className="w-full h-15 border-b border-line border-t flex justify-start items-center 
       bg-[repeating-linear-gradient(45deg,var(--color-line-lite)_0px,var(--color-line-lite)_1px,transparent_1px,transparent_10px)] px-4
    "
    >
      <h3 className="h-fit flex justify-center items-center text-[28px] text-primary-text font-pixel font-bold bg-background/95 backdrop:blur-2xl">
        {text || "This iS HeadingBox"}
      </h3>
    </div>
  );
};

export default SubHeadBox;

"use client";
import React from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "talkwithyash" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="max-w-[800px] gap-12 w-full min-h-[100vh] border dark:border-t-black border-t-white border-line flex flex-col justify-center items-center border-b-background">
      <Cal
        namespace="talkwithyash"
        calLink="yash-vishnoi-ou1y8q/talkwithyash"
        style={{
          width: "100%",
          height: "100%",
          overflow: "scroll",
        }}
        config={{
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
          theme: "light",
        }}
      />
    </div>
  );
};

export default page;

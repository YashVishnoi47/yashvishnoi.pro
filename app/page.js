import HeroSection from "@/components/pages/home/HeroSection";
import VideoBox from "@/components/pages/home/VideoBox";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[800px] gap-12 w-full h-[200vh] border dark:border-t-black border-t-white border-line flex flex-col justify-start items-start">
      <HeroSection />
      <VideoBox />

    </div>
  );
}

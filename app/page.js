import AboutSection from "@/components/pages/home/AboutSection";
import FAQ from "@/components/pages/home/FAQ";
import HeroSection from "@/components/pages/home/HeroSection";
import ProcessSection from "@/components/pages/home/ProcessSection";
import ServicesSection from "@/components/pages/home/ServicesSection";
import TechSection from "@/components/pages/home/TechSection";
import VideoBox from "@/components/pages/home/VideoBox";

export default function Home() {
  return (
    <div className="max-w-[800px] gap-12 w-full min-h-[200vh] border dark:border-t-black border-t-white border-line flex flex-col justify-start items-start border-b-white">
      <HeroSection />
      <VideoBox />
      <ServicesSection />
      <ProcessSection />
      <TechSection />
      <AboutSection />
      <FAQ />

      {/* <div className="h-[50vh]"></div> */}
    </div>
  );
}

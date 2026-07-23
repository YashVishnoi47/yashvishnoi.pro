import SubHeadBox from "@/components/Layout/SubHeadBox";
import AboutSection from "@/components/pages/home/AboutSection";
import FAQ from "@/components/pages/home/FAQ";
import FooterCTA from "@/components/pages/home/FooterCTA";
import HeroSection from "@/components/pages/home/HeroSection";
import ProcessSection from "@/components/pages/home/ProcessSection";
import ServicesSection from "@/components/pages/home/ServicesSection";
import VideoBox from "@/components/pages/home/VideoBox";

export default function Home() {
  return (
    <div className="gap12 w-full min-h-[200vh] border dark:border-t-black border-t-white border-line flex flex-col justify-start items-center border-b-background">
      <HeroSection />

      {/* Video Box */}
      <div className="w-full flex flex-col justify-center items-center gap">
        <SubHeadBox text={"Demostrative Video"} />
        <VideoBox />
      </div>

      {/* Services Section */}
      <div className="w-full flex flex-col justify-center items-center gap-">
        <SubHeadBox text={`Your 24/7 Intake System`} />
        <ServicesSection />
      </div>

      {/* Process */}
      <div className="w-full flex flex-col justify-center items-center gap-">
        <SubHeadBox text={`Our Process`} />
        <ProcessSection />
      </div>

      {/* About */}
      <div className="w-full flex flex-col justify-center items-center gap-">
        <SubHeadBox text={`About me`} />
        <AboutSection />
      </div>

      {/* FAQ */}
      <div className="w-full flex flex-col justify-center items-center gap-">
        <SubHeadBox text={`FAQ's`} />
        <FAQ />
      </div>

      {/* Bonus Elements */}
      <div className="w-full flex flex-col justify-center items-center gap-">
        <SubHeadBox text={`Bonus Elements`} />
        <FooterCTA /> {/* Bonus Elements */}
      </div>
    </div>
  );
}

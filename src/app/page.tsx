import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import GreyFrame from "@/components/GreyFrame";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="animate-fade-in">
        <HeroSection />
      </div>
      <div className="animate-slide-in-left">
        <AboutSection />
      </div>
      <div className="animate-slide-in-right">
        <WorkSection />
      </div>
      <div className="animate-fade-in">
        <GreyFrame />
      </div>
      <div className="animate-fade-in">
        <Footer />
      </div>
    </main>
  );
}

import HeroSection from "../../components/studyIndia/HeroSection";
import StateSelector from "../../components/studyIndia/StateSelector";
import WhyIndia from "../../components/studyIndia/WhyIndia"
import CTASection from "../../components/studyIndia/CTASection";

export default function StudyIndia() {
  return (
    <main className="bg-[#050008]">
      <HeroSection />
      <StateSelector />
      <WhyIndia />
      <CTASection />
    </main>
  );
}
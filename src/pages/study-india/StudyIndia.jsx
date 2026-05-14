import AnimatedSection from "../../components/AnimatedSection";
import HeroSection from "../../components/studyIndia/HeroSection";
import StateSelector from "../../components/studyIndia/StateSelector";
import WhyIndia from "../../components/studyIndia/WhyIndia"
import CTASection from "../../components/studyIndia/CTASection";

 function StudyIndia() {
  return (
    <main className="bg-[#050008]">
      <HeroSection />
      
      <AnimatedSection>
        <StateSelector />
      </AnimatedSection>
      
      <AnimatedSection>
        <WhyIndia />
      </AnimatedSection>

      <AnimatedSection>
        <CTASection />
      </AnimatedSection>
    </main>
  );
}
export default StudyIndia;
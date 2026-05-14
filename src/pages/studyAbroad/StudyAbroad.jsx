import AnimatedSection from "../../components/AnimatedSection";
import HeroSection from "../../components/studyAbroad/HeroSection";
import WhyAbroad from "../../components/studyAbroad/WhyAbroad";
import CountrySelector from "../../components/studyAbroad/CountrySelector";
import StudyProcess from "../../components/studyAbroad/StudyProcess";
import CTA from "../../components/studyAbroad/CTA";

export default function StudyAbroad() {
  return (
    <>
      
        <HeroSection />
      
      <AnimatedSection>
        <WhyAbroad />
      </AnimatedSection>
      <AnimatedSection>
        <CountrySelector />
      </AnimatedSection>
      <AnimatedSection>
        <StudyProcess />
      </AnimatedSection>
      <AnimatedSection>
        <CTA />
      </AnimatedSection>
    </>
  );
}
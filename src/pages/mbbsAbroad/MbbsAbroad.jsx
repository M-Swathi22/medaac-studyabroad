import AnimatedSection from "../../components/AnimatedSection";
import Hero from "../../components/mbbsAbroad/Hero";
import WhyStudy from "../../components/mbbsAbroad/WhyStudy";
import CountrySelector from "../../components/mbbsAbroad/CountrySelector";
import AdmissionProcess from "../../components/mbbsAbroad/AdmissionProcess";
import Eligibility from "../../components/mbbsAbroad/Eligibility";
import FinalCTA from "../../components/mbbsAbroad/FinalCTA";

function MbbsAbroad() {
  return (
    <main className="bg-black text-white overflow-hidden">
      
        <Hero />
    
      <AnimatedSection>
        <WhyStudy />
      </AnimatedSection>
      <AnimatedSection>
        <CountrySelector />
      </AnimatedSection>
      <AnimatedSection>
        <AdmissionProcess />
      </AnimatedSection>
      <AnimatedSection>
        <Eligibility />
      </AnimatedSection>
      <AnimatedSection>
        <FinalCTA />
      </AnimatedSection>
    </main>
  );
}
export default MbbsAbroad;
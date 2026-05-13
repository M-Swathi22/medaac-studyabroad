import Hero from "../../components/mbbsAbroad/Hero";
import WhyStudy from "../../components/mbbsAbroad/WhyStudy";
import CountrySelector from "../../components/mbbsAbroad/CountrySelector";
import AdmissionProcess from "../../components/mbbsAbroad/AdmissionProcess";
import Eligibility from "../../components/mbbsAbroad/Eligibility";
import FinalCTA from "../../components/mbbsAbroad/FinalCTA";

export default function MbbsAbroad() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Hero />
      <WhyStudy />
      <CountrySelector />
      <AdmissionProcess />
      <Eligibility />
      <FinalCTA />
    </main>
  );
}
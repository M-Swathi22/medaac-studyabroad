// src/pages/studyAbroad/CountryPage.jsx

import { useParams } from "react-router-dom";

import { COUNTRIES } from "../../data/studyAbroadData";
import AnimatedSection from "../../components/AnimatedSection";

import CountryHero from "../../components/studyAbroad/CountryHero";
import WhyCountry from "../../components/studyAbroad/WhyCountry";
import UniversityList from "../../components/studyAbroad/UniversityList";
import CountryCTA from "../../components/studyAbroad/CountryCTA";

 function CountryPage() {
  const { countryId } = useParams();

  const country = COUNTRIES.find(
    (item) => item.id === countryId
  );

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Country Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <CountryHero country={country} />
      <AnimatedSection>
        <WhyCountry country={country} />
      </AnimatedSection>
      <AnimatedSection>
        <UniversityList country={country} />
      </AnimatedSection>
      <AnimatedSection>
        <CountryCTA country={country} />
      </AnimatedSection>
    </>
  );
}
export default CountryPage;
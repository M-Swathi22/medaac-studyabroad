// src/pages/studyAbroad/CountryPage.jsx

import { useParams, Navigate } from "react-router-dom";

import { COUNTRIES } from "../../data/studyAbroadData";

import CountryHero from "../../components/studyAbroad/country/CountryHero";
import WhyCountry from "../../components/studyAbroad/country/WhyCountry";
import UniversityList from "../../components/studyAbroad/country/UniversityList";
import CountryCTA from "../../components/studyAbroad/country/CountryCTA";

export default function CountryPage() {

  const { countryId } = useParams();

  /* FIND COUNTRY */
  const country = COUNTRIES.find(
    (item) => item.id === countryId
  );

  /* INVALID URL */
  if (!country) {
    return <Navigate to="/studyabroad" replace />;
  }

  return (
    <main
      style={{
        background: "var(--white)",
        fontFamily: "var(--font-main)",
      }}
    >

      <CountryHero country={country} />

      <WhyCountry country={country} />

      <UniversityList country={country} />

      <CountryCTA country={country} />

    </main>
  );
}
import { useParams } from "react-router-dom";

/* DATA */
import { COUNTRY_DATA } from "../../data/mbbsAbroadData";
import AnimatedSection from "../../components/AnimatedSection";

/* Components */
import CountryHero from "../../components/mbbsAbroad/country/CountryHero";
import WhyCountry from "../../components/mbbsAbroad/country/WhyCountry";
import Universities from "../../components/mbbsAbroad/country/Universities";
import StudentLife from "../../components/mbbsAbroad/country/StudentLife";
import CountryCTA from "../../components/mbbsAbroad/country/CountryCTA";

export default function CountryPage() {
  const { country } = useParams();

  const data = COUNTRY_DATA[country];

  /* NOT FOUND */
  if (!data) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--dark)",
          color: "var(--white)",
          fontSize: "42px",
          fontWeight: "700",
          fontFamily: "var(--font-main)",
        }}
      >
        Country Not Found
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      <CountryHero
        country={data.country}
        image={data.heroImage}
        description={data.description}
        stats={data.stats}
      />

      {/* WHY COUNTRY */}
      <AnimatedSection>
        <WhyCountry
          country={data.country}
          title={data.whyTitle}
          description={data.whyDescription}
          benefits={data.benefits}
        />
      </AnimatedSection>

      {/* UNIVERSITIES */}
      <AnimatedSection>
        <Universities countryData={data} />
      </AnimatedSection>

      {/* STUDENT LIFE */}
      <AnimatedSection>
        <StudentLife
          country={data.country}
          title={data.studentLifeTitle}
          description={data.studentLifeDescription}
        points={data.studentLifePoints}
        image={data.studentLifeImage}
      />
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <CountryCTA country={data.country} />
      </AnimatedSection>
    </>
  );
}
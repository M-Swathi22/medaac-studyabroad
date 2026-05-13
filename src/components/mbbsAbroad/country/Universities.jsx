import PremiumUniversityCards from "../../common/PremiumUniversityCards";

export default function Universities({ countryData }) {
  return (
    <section>
      <PremiumUniversityCards
        country={countryData.country}
        universities={countryData.universities}
      />
    </section>
  );
}
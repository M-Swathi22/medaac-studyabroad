import PremiumUniversityCards from "../../common/PremiumUniversityCards";

 function Universities({ countryData }) {
  return (
    <section>
      <PremiumUniversityCards
        country={countryData.country}
        universities={countryData.universities}
      />
    </section>
  );
}
export default Universities;
import { useParams } from "react-router-dom";
import CityCard from "../components/CityCard";

const STATE_DATA = {
  tamilnadu: {
    name: "Tamil Nadu",
    cities: [
      { id: "chennai", name: "Chennai" },
      { id: "vellore", name: "Vellore" },
      { id: "madurai", name: "Madurai" },
    ],
  },
  karnataka: {
    name: "Karnataka",
    cities: [
      { id: "bangalore", name: "Bangalore" },
      { id: "mysore", name: "Mysore" },
    ],
  },
  andhra: {
    name: "Andhra Pradesh",
    cities: [
      { id: "guntur", name: "Guntur" },
      { id: "vijayawada", name: "Vijayawada" },
    ],
  },
};

 function StatePage() {
  const { stateId } = useParams();

  const state = STATE_DATA[stateId];

  // ❗ STOP EXECUTION if state not found
  if (!state) {
    return <div className="text-white p-10">State not found</div>;
  }

  // ✅ SAFE fallback
  const cities = state.cities || [];

  return (
    <div className="p-10 bg-black min-h-screen">
      <h1 className="text-white text-2xl mb-6">
        {state.name} Cities
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {cities.length > 0 ? (
          cities.map((city) => (
            <CityCard
              key={city.id}
              city={city}
              stateId={stateId}
            />
          ))
        ) : (
          <p className="text-gray-400">No cities available</p>
        )}
      </div>
    </div>
  );
}
export default StatePage;
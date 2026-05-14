// src/components/studyAbroad/CountryCTA.jsx

 function CountryCTA({ country }) {
  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(180deg,#FFF7FA 0%, #ffffff 100%)",
        fontFamily: "var(--font-main)",
      }}
    >
      <div className="max-w-[1000px] mx-auto px-6">
        
        <div className="bg-[#FFE4EF] border border-pink-100 rounded-[40px] p-10 md:p-16 text-center">
          
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-black">
            Start Your Journey To{" "}
            <span style={{ color: "var(--primary)" }}>
              {country.name}
            </span>
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-8 max-w-2xl mx-auto">
            Connect with our expert counselors and get complete
            admission guidance for top universities in{" "}
            {country.name}.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            
            <button
              className="px-8 py-4 rounded-full font-bold text-white transition-all duration-300"
              style={{
                background: "var(--primary)",
              }}
            >
              Apply Now
            </button>

            <button
              className="px-8 py-4 rounded-full font-bold border-2 transition-all duration-300"
              style={{
                borderColor: "var(--primary)",
                color: "var(--primary)",
                background: "#fff",
              }}
            >
              Talk To Counselor
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
export default CountryCTA;
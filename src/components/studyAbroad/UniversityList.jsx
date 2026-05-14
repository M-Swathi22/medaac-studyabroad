// src/components/studyAbroad/UniversityList.jsx

import { motion } from "framer-motion";

/* STAT CELL */
function StatCell({ label, value, border = "", highlight = false }) {
  return (
    <div className={`p-3.5 ${border} border-black/[0.07]`}>
      <p className="text-[11px] text-gray-400 mb-1">
        {label}
      </p>

      <p
        className={`text-sm font-semibold ${
          highlight ? "text-[var(--primary)]" : "text-[var(--dark)]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function UniversityList({ country }) {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, var(--primary-light) 35%, #ffffff 100%)",
        fontFamily: "var(--font-main)",
      }}
    >
      {/* Glow Effects */}
      <div
        className="absolute -top-24 -left-24 w-[280px] h-[280px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(225,10,111,0.10) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-[-120px] right-[-120px] w-[260px] h-[260px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(225,10,111,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(var(--primary) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold tracking-[2px] uppercase"
            style={{
              background: "rgba(225,10,111,0.08)",
              color: "var(--primary)",
            }}
          >
            Prestigious Universities
          </span>

          <h2
            className="mt-6 text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: "var(--dark)" }}
          >
            Top Medical Universities in{" "}
            <span style={{ color: "var(--primary)" }}>
              {country.name}
            </span>
          </h2>

          <p
            className="mt-6 text-base md:text-lg leading-8"
            style={{ color: "var(--gray)" }}
          >
            Explore globally recognized medical universities with affordable tuition fees,
            English-medium programs, and modern infrastructure.
          </p>
        </div>

        {/* University Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {country.universityList?.map((uni, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[24px] bg-white border border-black/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Flag */}
                <div
                  className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.90)",
                    color: "var(--dark)",
                  }}
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-5 h-4 object-cover rounded-sm"
                  />

                  <span>{country.name}</span>
                </div>

                {/* University Name */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {uni.name}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                <div className="grid grid-cols-2 rounded-2xl overflow-hidden border border-black/[0.07]">
                  
                  <StatCell
                    label="World Rank"
                    value={uni.worldRank}
                    border="border-r border-b"
                  />

                  <StatCell
                    label="Duration"
                    value={uni.duration}
                    border="border-b"
                  />

                  <StatCell
                    label="Course Fee"
                    value={uni.fees}
                    border="border-r border-b"
                    highlight
                  />

                  <StatCell
                    label="Food"
                    value={uni.food}
                    border="border-b"
                  />

                  <StatCell
                    label="Students"
                    value={uni.students}
                    border="border-r"
                  />

                  <StatCell
                    label="Accommodation"
                    value={uni.accommodation}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default  UniversityList;


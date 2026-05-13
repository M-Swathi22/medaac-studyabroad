import { motion } from "framer-motion";

export default function PremiumUniversityCards({
  title,
  subtitle,
  country,
  universities,
}) {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg,#ffffff 0%,var(--primary-light) 35%,#ffffff 100%)",
        fontFamily: "var(--font-main)",
      }}
    >
      {/* Glow */}
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

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(var(--primary) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
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
            {title}{" "}
            <span style={{ color: "var(--primary)" }}>
              {country}
            </span>
          </h2>

          <p
            className="mt-6 text-base md:text-lg leading-8"
            style={{ color: "var(--gray)" }}
          >
            {subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {universities.map((uni, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[22px] bg-white border border-black/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.08)] flex flex-col"
            >
              {/* Image */}
              <div className="relative h-[230px] overflow-hidden">
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Flag */}
                <div
                  className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    color: "var(--dark)",
                  }}
                >
                  {uni.flag && (
                    <img
                      src={uni.flag}
                      alt={country}
                      className="w-5 h-4 rounded-sm object-cover"
                    />
                  )}

                  <span>{uni.country || country}</span>
                </div>

                {/* Name */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white leading-snug drop-shadow">
                    {uni.name}
                  </h3>
                </div>
              </div>

              {/* Stats */}
              <div className="p-5 flex flex-col flex-1">

                <div className="grid grid-cols-2 rounded-2xl overflow-hidden border border-black/[0.07]">

                  <StatCell
                    label="World Rank"
                    value={uni.worldRank}
                    border="border-r border-b"
                  />

                  <StatCell
                    label="Course Duration"
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

function StatCell({
  label,
  value,
  border = "",
  highlight = false,
}) {
  return (
    <div className={`p-3.5 ${border} border-black/[0.07]`}>
      <p className="text-[11px] text-gray-400 mb-0.5">
        {label}
      </p>

      <p
        className="text-sm font-semibold"
        style={{
          color: highlight
            ? "var(--primary)"
            : "var(--dark)",
        }}
      >
        {value}
      </p>
    </div>
  );
}
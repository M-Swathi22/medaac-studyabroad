import { motion } from "framer-motion";
import { GraduationCap, Users, Globe2 } from "lucide-react";

export default function CountryHero({ country }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "var(--white)",
        fontFamily: "var(--font-main)",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={country.image}
          alt={country.name}
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 45%, rgba(225,10,111,0.28) 100%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 py-28 md:py-36">

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >

          {/* FLAG */}
          <div
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-7"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(18px)",
            }}
          >
            <img
              src={country.flag}
              alt={country.name}
              className="w-7 h-7 rounded-full object-cover"
            />

            <span
              className="text-white text-sm font-semibold tracking-wide"
            >
              Study Destination
            </span>
          </div>

          {/* TITLE */}
          <h1
            className="text-[2.8rem] md:text-[5rem] font-extrabold leading-[1.05]"
            style={{
              color: "#ffffff",
              letterSpacing: "-0.04em",
            }}
          >
            Study in{" "}
            <span style={{ color: "#ff4fa0" }}>
              {country.name}
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="mt-7 text-[1rem] md:text-[1.1rem] leading-[1.9] max-w-2xl"
            style={{
              color: "rgba(255,255,255,0.82)",
            }}
          >
            Explore top universities, affordable tuition fees,
            global career opportunities, and internationally
            recognized education in {country.name}.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-5 mt-10">

            {/* Universities */}
            <div
              className="flex items-center gap-4 px-5 py-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "var(--primary)",
                }}
              >
                <GraduationCap size={22} color="#ffffff" />
              </div>

              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "#ffffff" }}
                >
                  {country.universities}+
                </h3>

                <p
                  className="text-sm"
                  style={{
                    color: "rgba(255,255,255,0.72)",
                  }}
                >
                  Universities
                </p>
              </div>
            </div>

            {/* Students */}
            <div
              className="flex items-center gap-4 px-5 py-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "#ffffff",
                }}
              >
                <Users size={22} color="#E10A6F" />
              </div>

              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "#ffffff" }}
                >
                  {country.students}
                </h3>

                <p
                  className="text-sm"
                  style={{
                    color: "rgba(255,255,255,0.72)",
                  }}
                >
                  Students
                </p>
              </div>
            </div>

            {/* Tuition */}
            <div
              className="flex items-center gap-4 px-5 py-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.18)",
                }}
              >
                <Globe2 size={22} color="#ffffff" />
              </div>

              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "#ffffff" }}
                >
                  {country.tuition}
                </h3>

                <p
                  className="text-sm"
                  style={{
                    color: "rgba(255,255,255,0.72)",
                  }}
                >
                  Tuition Fee
                </p>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
// src/components/studyabroad/CountryCard.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Users,
  MapPin,
} from "lucide-react";

export default function CountryCard({ country, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Link
        to={`/studyabroad/${country.id}`}
        className="block h-full"
      >
        <div
          className="relative h-full overflow-hidden rounded-[30px] transition-all duration-500 group-hover:-translate-y-2"
          style={{
            background: "var(--white)",
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
          }}
        >
          {/* HOVER GLOW */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(225,10,111,0.02) 0%, rgba(225,10,111,0.06) 100%)",
            }}
          />

          {/* IMAGE */}
          <div className="relative h-[240px] overflow-hidden">
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.82) 100%)",
              }}
            />

            {/* FLAG */}
            <div
              className="absolute top-5 left-5 w-14 h-14 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.14)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
              }}
            >
              <img
                src={country.flag}
                alt={country.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* BOTTOM CONTENT */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <h3
                  className="text-[1.5rem] font-bold leading-none"
                  style={{
                    color: "#fff",
                    fontFamily: "var(--font-main)",
                  }}
                >
                  {country.name}
                </h3>

                <div className="flex items-center gap-1.5 mt-2">
                  <MapPin size={13} color="rgba(255,255,255,0.7)" />

                  <span
                    className="text-[0.78rem]"
                    style={{
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    Study Destination
                  </span>
                </div>
              </div>

              <div
                className="px-4 py-2 rounded-full text-[0.72rem] font-semibold"
                style={{
                  background: "rgba(255,255,255,0.14)",
                  color: "#fff",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {country.tuition}
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="relative p-6">
            {/* DESCRIPTION */}
            <p
              className="text-[0.92rem] leading-[1.8]"
              style={{
                color: "var(--gray)",
                fontFamily: "var(--font-main)",
              }}
            >
              Explore top universities, globally recognized degrees,
              affordable tuition fees, and better international career
              opportunities in {country.name}.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {/* UNIVERSITIES */}
              <div
                className="rounded-2xl p-4"
                style={{
                  background: "#FFF4F8",
                  border: "1px solid rgba(225,10,111,0.08)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: "var(--primary)",
                    }}
                  >
                    <GraduationCap size={18} color="#fff" />
                  </div>

                  <div>
                    <h4
                      className="text-[1.2rem] font-extrabold leading-none"
                      style={{ color: "var(--dark)" }}
                    >
                      {country.universities}+
                    </h4>

                    <p
                      className="text-[0.68rem] font-semibold uppercase tracking-wider mt-1"
                      style={{ color: "var(--primary)" }}
                    >
                      Universities
                    </p>
                  </div>
                </div>
              </div>

              {/* STUDENTS */}
              <div
                className="rounded-2xl p-4"
                style={{
                  background: "var(--light)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: "var(--dark)",
                    }}
                  >
                    <Users size={18} color="#fff" />
                  </div>

                  <div>
                    <h4
                      className="text-[1.2rem] font-extrabold leading-none"
                      style={{ color: "var(--dark)" }}
                    >
                      {country.students}
                    </h4>

                    <p
                      className="text-[0.68rem] font-semibold uppercase tracking-wider mt-1"
                      style={{ color: "var(--gray)" }}
                    >
                      Students
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* COURSES */}
            <div className="flex flex-wrap gap-2 mt-6">
              {country.courses.map((course, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-[0.72rem] font-semibold"
                  style={{
                    background: "#FFF4F8",
                    color: "var(--primary)",
                    border: "1px solid rgba(225,10,111,0.12)",
                  }}
                >
                  {course}
                </span>
              ))}
            </div>

            {/* BUTTON */}
            <div className="mt-7">
              <div
                className="w-full flex items-center justify-center py-3 rounded-2xl font-semibold text-[0.9rem] transition-all duration-300"
                style={{
                  background: "var(--primary)",
                  color: "#fff",
                  boxShadow: "0 10px 25px rgba(225,10,111,0.22)",
                  fontFamily: "var(--font-main)",
                }}
              >
                Explore {country.name}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
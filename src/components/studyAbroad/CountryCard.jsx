// src/components/studyabroad/CountryCard.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, Users, ArrowUpRight, MapPin } from "lucide-react";

export default function CountryCard({ country, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-40px" }}
      className="group relative h-full"
    >
      <Link to={`/study-abroad/${country.id}`} className="block h-full rounded-[28px]">

        {/* CARD */}
        <div
          className="relative h-full flex flex-col overflow-hidden rounded-[28px] transition-all duration-500"
          style={{
            background: "var(--white)",
            border: "1px solid var(--border)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 32px 72px rgba(225,10,111,0.2), 0 8px 24px rgba(0,0,0,0.07)";
            e.currentTarget.style.borderColor = "rgba(225,10,111,0.2)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)";
            e.currentTarget.style.borderColor = "var(--border)";
          }}
        >

          {/* ── IMAGE ── */}
          <div className="relative overflow-hidden" style={{ height: "220px", flexShrink: 0 }}>
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
            />

            {/* Dark gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.08) 40%, rgba(10,10,10,0.78) 100%)",
              }}
            />

            {/* Top-left: flag + country name */}
            <div
              className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.13)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="w-5 h-5 rounded-full object-cover"
                style={{ boxShadow: "0 0 0 1.5px rgba(255,255,255,0.35)" }}
              />
              <span
                className="text-white text-xs font-semibold tracking-wide"
                style={{ fontFamily: "var(--font-main)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
              >
                {country.name}
              </span>
            </div>

            {/* Top-right: arrow button */}
            <div
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: "var(--primary)",
                boxShadow: "0 4px 14px rgba(225,10,111,0.5)",
              }}
            >
              <ArrowUpRight size={16} color="#ffffff" />
            </div>

            {/* Bottom-left: tuition */}
            <div className="absolute bottom-4 left-4">
              <div
                className="px-3.5 py-1.5 rounded-full text-white text-[0.72rem] font-bold tracking-wide"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  fontFamily: "var(--font-main)",
                }}
              >
                {country.tuition}
              </div>
            </div>

            {/* Bottom-right: location pill */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5">
              <MapPin size={11} color="rgba(255,255,255,0.7)" />
              <span
                className="text-[0.7rem] font-medium"
                style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-main)" }}
              >
                {country.name}
              </span>
            </div>
          </div>

          {/* ── CONTENT ── */}
          <div
            className="flex flex-col flex-1 p-5 gap-4"
            style={{ fontFamily: "var(--font-main)" }}
          >
            {/* Hover radial glow */}
            <div
              className="absolute bottom-0 right-0 w-56 h-56 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(circle, rgba(225,10,111,0.07) 0%, transparent 70%)",
              }}
            />

            {/* Title + subtitle */}
            <div className="relative z-10">
              <h3
                className="text-[1.15rem] font-bold leading-snug"
                style={{ color: "var(--dark)", letterSpacing: "-0.025em" }}
              >
                Study in {country.name}
              </h3>
              <p
                className="mt-1 text-[0.78rem] leading-relaxed"
                style={{ color: "var(--gray)" }}
              >
                World-class education, rich culture, and exceptional career
                opportunities await you.
              </p>
            </div>

            {/* Divider */}
            <div
              className="relative z-10"
              style={{ height: "1px", background: "var(--border)" }}
            />

            {/* Stats row */}
            <div className="relative z-10 flex items-center gap-3">

              {/* Universities */}
              <div
                className="flex-1 flex items-center gap-3 rounded-2xl px-4 py-3"
                style={{
                  background: "var(--primary-light)",
                  border: "1px solid rgba(225,10,111,0.1)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--primary)" }}
                >
                  <GraduationCap size={15} color="#ffffff" />
                </div>
                <div>
                  <p
                    className="text-[1.1rem] font-extrabold leading-none"
                    style={{ color: "var(--dark)", letterSpacing: "-0.03em" }}
                  >
                    {country.universities}+
                  </p>
                  <p
                    className="text-[0.65rem] font-semibold uppercase tracking-widest mt-0.5"
                    style={{ color: "var(--primary)" }}
                  >
                    Universities
                  </p>
                </div>
              </div>

              {/* Students */}
              <div
                className="flex-1 flex items-center gap-3 rounded-2xl px-4 py-3"
                style={{
                  background: "var(--light)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--dark)" }}
                >
                  <Users size={15} color="#ffffff" />
                </div>
                <div>
                  <p
                    className="text-[1.1rem] font-extrabold leading-none"
                    style={{ color: "var(--dark)", letterSpacing: "-0.03em" }}
                  >
                    {country.students}
                  </p>
                  <p
                    className="text-[0.65rem] font-semibold uppercase tracking-widest mt-0.5"
                    style={{ color: "var(--gray)" }}
                  >
                    Students
                  </p>
                </div>
              </div>

            </div>

            {/* Courses */}
            <div className="relative z-10 flex flex-wrap gap-1.5">
              {country.courses.map((course, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-[0.7rem] font-semibold transition-all duration-200 cursor-default"
                  style={{
                    background: "var(--light)",
                    color: "var(--dark-light)",
                    border: "1px solid var(--border)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "var(--primary-light)";
                    e.currentTarget.style.color = "var(--primary)";
                    e.currentTarget.style.borderColor = "rgba(225,10,111,0.3)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "var(--light)";
                    e.currentTarget.style.color = "var(--dark-light)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  {course}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div
              className="relative z-10 mt-auto pt-4 flex items-center justify-between"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <span className="text-[0.72rem] font-medium" style={{ color: "var(--gray)" }}>
                View all programs
              </span>
              <div
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.75rem] font-bold transition-all duration-300"
                style={{
                  background: "var(--primary-light)",
                  color: "var(--primary)",
                  border: "1px solid rgba(225,10,111,0.15)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "var(--primary)";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor = "var(--primary)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(225,10,111,0.35)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "var(--primary-light)";
                  e.currentTarget.style.color = "var(--primary)";
                  e.currentTarget.style.borderColor = "rgba(225,10,111,0.15)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Explore Country
                <ArrowUpRight size={13} />
              </div>
            </div>

          </div>
        </div>
      </Link>
    </motion.div>
  );
}
// src/components/studyabroad/CountrySelector.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountryCard from "./CountryCard";
import { COUNTRIES } from "../../data/studyAbroadData";
import { Globe2, ChevronDown, ChevronUp } from "lucide-react";

const INITIAL_COUNT = 6;

export default function CountrySelector() {
  const [showAll, setShowAll] = useState(false);

  const visibleCountries = showAll ? COUNTRIES : COUNTRIES.slice(0, INITIAL_COUNT);

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--white)", fontFamily: "var(--font-main)" }}
    >
      {/* ── BACKGROUND ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, var(--white) 0%, #FFF4F8 50%, var(--white) 100%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--border) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
          opacity: 0.55,
        }}
      />

      {/* Blob top-center */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(225,10,111,0.07) 0%, transparent 68%)",
          filter: "blur(70px)",
        }}
      />

      {/* Blob bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(225,10,111,0.04) 0%, transparent 68%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[0.7rem] font-bold uppercase tracking-[0.22em] mb-6"
            style={{
              background: "var(--primary-light)",
              color: "var(--primary)",
              border: "1px solid rgba(225,10,111,0.15)",
            }}
          >
            <Globe2 size={12} />
            Global Destinations
          </div>

          <h2
            className="text-[2.5rem] md:text-[3.2rem] font-extrabold leading-[1.1] tracking-tight"
            style={{ color: "var(--dark)" }}
          >
            Choose Your{" "}
            <span style={{ color: "var(--primary)" }}>Dream Country</span>
          </h2>

          <p
            className="mt-5 text-[0.95rem] md:text-[1.05rem] leading-[1.85] max-w-lg mx-auto"
            style={{ color: "var(--gray)" }}
          >
            Explore top study-abroad destinations with globally recognized
            universities, affordable tuition, and outstanding career outcomes.
          </p>
        </motion.div>

        {/* ── GRID ── */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleCountries.map((country, index) => (
              <motion.div
                key={country.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                transition={{ duration: 0.45, delay: index < INITIAL_COUNT ? 0 : (index - INITIAL_COUNT) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <CountryCard country={country} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── VIEW ALL / SHOW LESS BUTTON ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center gap-3"
        >
          {/* Count label */}
          <p className="text-[0.8rem] font-medium" style={{ color: "var(--gray)" }}>
            Showing{" "}
            <span className="font-bold" style={{ color: "var(--dark)" }}>
              {visibleCountries.length}
            </span>{" "}
            of{" "}
            <span className="font-bold" style={{ color: "var(--dark)" }}>
              {COUNTRIES.length}
            </span>{" "}
            destinations
          </p>

          {/* Button */}
          <button
            onClick={() => setShowAll(prev => !prev)}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-[0.88rem] transition-all duration-300"
            style={{
              background: "var(--white)",
              color: "var(--primary)",
              border: "2px solid var(--primary)",
              fontFamily: "var(--font-main)",
              boxShadow: "0 4px 20px rgba(225,10,111,0.1)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--primary)";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(225,10,111,0.35)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "var(--white)";
              e.currentTarget.style.color = "var(--primary)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(225,10,111,0.1)";
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp size={17} />
              </>
            ) : (
              <>
                View All {COUNTRIES.length} Countries
                <ChevronDown size={17} />
              </>
            )}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
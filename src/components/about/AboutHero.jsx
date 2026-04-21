import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "../../assets/images/hero1.jpg";

function AboutHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ fontFamily: "var(--font-main)" }}
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Students planning study abroad"
          className="w-full h-full object-cover"
        />
      </div>

      {/* PREMIUM OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              100deg,
              rgba(10,10,10,0.95) 0%,
              rgba(10,10,10,0.85) 40%,
              rgba(225,10,111,0.20) 75%,
              transparent 100%
            )
          `,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          {/* SUBTITLE */}
          <p className="uppercase font-semibold mb-3 tracking-wider text-sm text-[var(--primary-light)]">
            About Medaac
          </p>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white">
            Study Abroad Without{" "}
            <span className="text-[var(--primary)]">
              Confusion or Hidden Fees
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-base md:text-lg leading-relaxed text-white/90">
            We guide you from university selection to visa approval with complete
            transparency, expert support, and zero guesswork.
          </p>

          {/* 🔥 PREMIUM TRUST STRIP (NOT BADGES) */}
          <div
            className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(6px)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--primary)" }}
            />
            <p className="text-sm text-white/80">
              Trusted by 1000+ students across 15+ countries
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <button
              className="group flex items-center gap-2 px-9 py-4 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--primary)",
                color: "#fff",
                boxShadow: "0 10px 30px rgba(225,10,111,0.35)",
              }}
            >
              Get Free Consultation
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutHero;
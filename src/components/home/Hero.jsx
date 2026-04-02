import { motion } from "framer-motion";
import {
  Search, ArrowRight, Star,
  Globe2, GraduationCap, BadgeCheck, Users,
} from "lucide-react";
import heroImg from "../../assets/images/hero.avif";

/* ───────── DATA ───────── */
const stats = [
  { icon: Globe2, value: "15+", label: "Countries" },
  { icon: GraduationCap, value: "500+", label: "Universities" },
  { icon: BadgeCheck, value: "95%", label: "Success Rate" },
  { icon: Users, value: "2K+", label: "Students Placed" },
];

const steps = [
  { num: "1", text: "Choose your country & course", chip: "Free" },
  { num: "2", text: "Get your university shortlist", chip: "Expert" },
  { num: "3", text: "Visa & admission support", chip: "End-to-end" },
];

const tags = ["MBBS Russia", "BDS Georgia", "MBBS Ukraine", "MBBS Canada"];

const avatars = [
  "https://i.pravatar.cc/50?img=11",
  "https://i.pravatar.cc/50?img=12",
  "https://i.pravatar.cc/50?img=13",
];

/* ───────── ANIMATION ───────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

/* ═══════════════════════════════════ */

function Hero() {
  return (
    <section
      className="relative flex flex-col overflow-hidden min-h-screen"
      style={{
        fontFamily: "var(--font-main)",
        background: "linear-gradient(135deg,#0d2f33 0%,#0f3338 55%,#0b2328 100%)",
      }}
    >

      {/* BACKGROUND */}
      <div
        className="absolute -top-36 -left-36 w-[540px] h-[540px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(10,114,122,0.18), transparent)",
        }}
      />
      <div
        className="absolute -bottom-28 right-0 w-[420px] h-[420px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(247,148,29,0.12), transparent)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* MAIN */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 px-6 md:px-16 xl:px-24 pt-28 pb-10">

        {/* LEFT */}
        <div className="flex flex-col justify-center gap-6">

          {/* Badge */}
          <motion.div {...fadeUp(0)}>
            <span
              className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold tracking-widest uppercase"
              style={{
                borderColor: "rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.08)",
                color: "var(--primary-light)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--secondary)" }}
              />
              Admissions Open — 2025–26
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-extrabold leading-tight text-white"
            style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)" }}
          >
            Your Dream{" "}
            <span style={{ color: "var(--primary-light)" }}>
              Medical Career
            </span>
            <br />Starts Abroad
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.15)}
            className="text-sm leading-relaxed max-w-md"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Expert guidance from country selection to visa processing —
            secure your seat in a top global university stress-free.
          </motion.p>

          {/* Search */}
          <motion.div {...fadeUp(0.2)} className="max-w-md">
            <div
              className="flex items-center rounded-full overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Search size={16} className="ml-4" style={{ color: "rgba(255,255,255,0.4)" }} />
              <input
                type="text"
                placeholder="Search country or course..."
                className="flex-1 bg-transparent px-3 py-3 text-sm outline-none"
                style={{ color: "white" }}
              />
              <button
                className="m-1 px-5 py-2 rounded-full text-sm font-bold text-white flex items-center gap-2"
                style={{ background: "var(--secondary)" }}
              >
                Search <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div {...fadeUp(0.25)} className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-xs rounded-full"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeUp(0.3)} className="flex items-center gap-4">
            <button
              className="px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2"
              style={{ background: "var(--secondary)" }}
            >
              Get Free Counselling <ArrowRight size={14} />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex">
                {avatars.map((a, i) => (
                  <img
                    key={i}
                    src={a}
                    className="w-8 h-8 rounded-full border-2"
                    style={{
                      borderColor: "var(--primary-dark)",
                      marginLeft: i !== 0 ? -8 : 0,
                    }}
                  />
                ))}
              </div>

              <div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} fill="var(--secondary)" stroke="none" />
                  ))}
                </div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                  <span className="text-white font-semibold">2,000+</span> students placed
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-4 justify-end"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img src={heroImg} alt="hero" className="w-full h-[300px] object-cover" />
          </div>

          <div
            className="rounded-2xl p-5"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <p className="text-xs uppercase mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
              How It Works
            </p>

            {steps.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-2 border-t first:border-none"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "rgba(10,114,122,0.25)",
                    color: "var(--primary-light)",
                  }}
                >
                  {s.num}
                </div>

                <p className="flex-1 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                  {s.text}
                </p>

                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(247,148,29,0.2)",
                    color: "var(--secondary)",
                  }}
                >
                  {s.chip}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="flex items-center gap-3 px-6 py-5">
              <Icon size={18} style={{ color: "var(--primary-light)" }} />
              <div>
                <p className="text-white font-bold">{s.value}</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {s.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Hero;
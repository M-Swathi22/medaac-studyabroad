import { motion } from "framer-motion";
import {
  Search, ArrowRight, Star,
  Globe2, GraduationCap, BadgeCheck, Users,
} from "lucide-react";
import heroImg from "../../assets/images/hero.avif";

/* ─── DATA ─── */
const stats = [
  { icon: Globe2,        value: "15+",  label: "Countries"       },
  { icon: GraduationCap, value: "500+", label: "Universities"    },
  { icon: BadgeCheck,    value: "95%",  label: "Success Rate"    },
  { icon: Users,         value: "2K+",  label: "Students Placed" },
];

const steps = [
  { num: "1", text: "Choose your country & course",  chip: "Free"       },
  { num: "2", text: "Get your university shortlist",  chip: "Expert"     },
  { num: "3", text: "Visa & admission support",       chip: "End-to-end" },
];

const tags    = ["MBBS Russia", "BDS Georgia", "MBBS Ukraine", "MBBS Canada"];
const avatars = [
  "https://i.pravatar.cc/50?img=11",
  "https://i.pravatar.cc/50?img=12",
  "https://i.pravatar.cc/50?img=13",
];

/* ─── THEME ─── */
const PRIMARY   = "#2a9da6";
const SECONDARY = "#e05c2a";   /* changed: deeper burnt-orange / terracotta */
const SEC_CHIP  = "rgba(224,92,42,0.15)";
const SEC_TEXT  = "#e8834e";
const BORDER    = "rgba(255,255,255,0.09)";

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

 function Hero() {
  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{
        minHeight: "100svh",
        background: "linear-gradient(135deg,#0d2f33 0%,#0f3338 55%,#0b2328 100%)",
      }}
    >
      {/* ── glows ── */}
      <div
        className="absolute -top-36 -left-36 w-[540px] h-[540px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(10,114,122,0.18) 0%,transparent 65%)" }}
      />
      <div
        className="absolute -bottom-28 right-0 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(224,92,42,0.10) 0%,transparent 65%)" }}
      />

      {/* ── dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.045) 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ════ MAIN GRID ════ */}
      <div
        className="relative z-10 flex-1 w-full
                   grid grid-cols-1 md:grid-cols-2
                   pt-28 sm:pt-32 pb-8 sm:pb-10
                   gap-10 md:gap-6 lg:gap-8
                   items-start md:items-stretch
                   px-5 sm:px-10 lg:px-16 xl:px-24"
      >

        {/* ════ LEFT ════ */}
        <div className="flex flex-col justify-center gap-6">

   
          

          {/* headline */}
          <motion.h1
            {...fadeUp(0.08)}
            className="font-extrabold leading-[1.12] text-white"
            style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)" }}
          >
            Your Dream{" "}
            <span className="relative inline-block" style={{ color: PRIMARY }}>
              Medical Career
              <svg
                viewBox="0 0 300 10"
                className="absolute -bottom-1 left-0 w-full"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M0 7 Q75 1 150 6 Q225 11 300 5"
                  stroke={SECONDARY}
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />Starts Abroad
          </motion.h1>

          {/* subtext */}
          <motion.p
            {...fadeUp(0.15)}
            className="leading-[1.80]"
            style={{
              fontSize: "clamp(14px, 1.4vw, 16.5px)",
              color: "rgba(255,255,255,0.50)",
              maxWidth: 460,
            }}
          >
            Expert guidance from country selection to visa processing — secure your
            seat in a top global university, completely stress-free.
          </motion.p>

          {/* search — pill / fully rounded */}
          <motion.div {...fadeUp(0.21)}>
            <div
              className="flex items-center overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: `1px solid ${BORDER}`,
                borderRadius: "999px",   /* ← fully rounded pill */
                maxWidth: 480,
              }}
            >
              <Search size={16} className="ml-4 shrink-0" style={{ color: "rgba(255,255,255,0.28)" }} />
              <input
                type="text"
                placeholder="Search country or course..."
                className="flex-1 px-3 py-3.5 outline-none bg-transparent"
                style={{
                  color: "white",
                  fontFamily: "inherit",
                  fontSize: 13.5,
                }}
              />
              <button
                className="m-[5px] flex items-center gap-2 px-5 py-2.5
                           text-[13px] font-bold text-white shrink-0
                           active:scale-95 transition-transform hover:opacity-90"
                style={{
                  background: SECONDARY,
                  borderRadius: "999px",  /* ← fully rounded */
                }}
              >
                Search <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>

          {/* tags — fully rounded pills */}
          <motion.div {...fadeUp(0.27)} className="flex flex-wrap items-center gap-2">
            <span
              className="text-[11px] font-medium"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              Popular:
            </span>
            {tags.map((t) => (
              <button
                key={t}
                className="text-[11.5px] px-4 py-1.5 transition-colors hover:text-white"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "rgba(255,255,255,0.48)",
                  borderRadius: "999px",   /* ← fully rounded */
                }}
              >
                {t}
              </button>
            ))}
          </motion.div>

          {/* CTA + social proof — fully rounded button */}
          <motion.div
            {...fadeUp(0.33)}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-1"
          >
            <button
              className="inline-flex items-center gap-2 px-7 py-3.5
                         text-[14px] font-bold text-white
                         active:scale-95 transition-all hover:opacity-90"
              style={{
                background: SECONDARY,
                borderRadius: "999px",   /* ← fully rounded */
              }}
            >
              Get Free Counselling <ArrowRight size={15} />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-9 h-9 rounded-full object-cover"
                    style={{ border: "2px solid #0f3338", marginLeft: i === 0 ? 0 : -9 }}
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-[2px] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill={SECONDARY} stroke="none" />
                  ))}
                </div>
                <p className="text-[11.5px]" style={{ color: "rgba(255,255,255,0.38)" }}>
                  <strong className="text-white font-semibold">2,000+</strong> students placed
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ════ RIGHT ════ */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="flex flex-col justify-end gap-4 pt-0 md:pt-14 lg:pt-20"
        >
          {/* image — taller */}
          <div className="relative rounded-2xl overflow-hidden w-full">
            <img
              src={heroImg}
              alt="Medical students abroad"
              className="w-full object-cover object-top"
              style={{ height: "clamp(240px, 34vh, 340px)" }}   /* ← taller */
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top,rgba(13,47,51,0.65) 0%,transparent 55%)",
              }}
            />
            {/* floating badge */}
            <div
              className="absolute top-3 right-3 flex items-center gap-2.5 px-3 py-2"
              style={{
                background: "rgba(10,30,34,0.80)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.11)",
                borderRadius: "999px",   /* ← fully rounded pill badge */
              }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(42,157,166,0.25)" }}
              >
                <GraduationCap size={14} style={{ color: PRIMARY }} />
              </div>
              <div>
                <p className="text-[13px] font-extrabold text-white leading-none">400+</p>
                <p className="text-[9.5px] mt-[3px]" style={{ color: "rgba(255,255,255,0.42)" }}>
                  Admissions this year
                </p>
              </div>
            </div>
          </div>

          {/* how it works */}
          <div
            className="w-full rounded-2xl px-5 py-5"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${BORDER}`,
            }}
          >
            <p
              className="text-[10px] font-bold tracking-[0.12em] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.30)" }}
            >
              How It Works
            </p>
            <div>
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3"
                  style={{
                    borderTop: i !== 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  {/* step number — fully rounded circle */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center
                               text-[12px] font-extrabold shrink-0"
                    style={{ background: "rgba(42,157,166,0.20)", color: PRIMARY }}
                  >
                    {s.num}
                  </div>
                  <p
                    className="text-[13px] font-medium flex-1"
                    style={{ color: "rgba(255,255,255,0.72)" }}
                  >
                    {s.text}
                  </p>
                  {/* chip — fully rounded */}
                  <span
                    className="text-[10px] font-semibold px-3 py-1 shrink-0"
                    style={{
                      background: SEC_CHIP,
                      color: SEC_TEXT,
                      borderRadius: "999px",
                    }}
                  >
                    {s.chip}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ════ STATS BAR ════ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.48 }}
        className="relative z-10 grid grid-cols-2 md:grid-cols-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 px-5 sm:px-8 lg:px-10 xl:px-14 py-5"
              style={{
                background: i % 2 === 0 ? "rgba(255,255,255,0.035)" : "rgba(255,255,255,0.02)",
                borderLeft: i % 2 !== 0  ? "1px solid rgba(255,255,255,0.06)" : "none",
                borderTop:  i >= 2       ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(42,157,166,0.18)" }}
              >
                <Icon size={17} style={{ color: PRIMARY }} />
              </div>
              <div>
                <p className="text-lg sm:text-xl font-extrabold text-white leading-none">
                  {s.value}
                </p>
                <p
                  className="text-[10px] sm:text-[11px] mt-1"
                  style={{ color: "rgba(255,255,255,0.32)" }}
                >
                  {s.label}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
export default Hero;
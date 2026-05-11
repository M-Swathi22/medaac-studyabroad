// src/components/studyabroad/StudyProcess.jsx

import { motion } from "framer-motion";
import {
  Search,
  FileText,
  Briefcase,
  Home,
  Plane,
  BadgeCheck,
} from "lucide-react";

/* ─────────────────────────────────────────────
   PROCESS STEPS
───────────────────────────────────────────── */

const STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Career Counselling",
    tag: "Free Consultation",
    desc: "Our experts help you choose the right country, university, and course based on your goals, budget, and profile.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Admission & Documentation",
    tag: "Expert Handling",
    desc: "We handle applications, university procedures, documentation, and offer-letter processing — confusion-free.",
  },
  {
    icon: Briefcase,
    step: "03",
    title: "Visa Assistance",
    tag: "High Success Rate",
    desc: "Complete visa guidance including financial documentation, interview prep, and embassy support for smooth approvals.",
  },
  {
    icon: Home,
    step: "04",
    title: "Accommodation Support",
    tag: "Verified Options",
    desc: "We help arrange safe and comfortable accommodation options near universities well before your departure date.",
  },
  {
    icon: Plane,
    step: "05",
    title: "Travel & Departure",
    tag: "Full Guidance",
    desc: "From flight booking guidance to airport assistance, we ensure you travel confidently to your destination country.",
  },
  {
    icon: BadgeCheck,
    step: "06",
    title: "Post Arrival Support",
    tag: "Ongoing Support",
    desc: "Even after reaching abroad, our team continues supporting you with onboarding, local guidance, and university assistance.",
    highlight: true,
  },
];

/* ─────────────────────────────────────────────
   ARROW ICON
───────────────────────────────────────────── */
function ArrowRight({ size = 13 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   CARD
───────────────────────────────────────────── */
function StepCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className="group relative min-w-0"
    >
      <div
        className="relative h-full rounded-[24px] p-7 overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          background: item.highlight
            ? "linear-gradient(145deg, #FDE6F0 0%, #FFF8FB 60%)"
            : "var(--white)",
          border: item.highlight
            ? "1px solid rgba(225,10,111,0.18)"
            : "1px solid rgba(225,10,111,0.07)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
          cursor: "default",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px) scale(1.015)";
          e.currentTarget.style.boxShadow =
            "0 28px 64px rgba(225,10,111,0.13), 0 8px 24px rgba(0,0,0,0.06)";
          e.currentTarget.style.borderColor = "rgba(225,10,111,0.22)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
          e.currentTarget.style.borderColor = item.highlight
            ? "rgba(225,10,111,0.18)"
            : "rgba(225,10,111,0.07)";
        }}
      >
        {/* Hover shimmer overlay */}
        <div
          className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] pointer-events-none"
          style={{
            background:
              "linear-gradient(145deg, rgba(225,10,111,0.03) 0%, transparent 60%)",
          }}
        />

        {/* Step watermark */}
        <div
          className="absolute top-3 right-4 text-[3.8rem] font-black leading-none select-none transition-colors duration-[400ms]"
          style={{
            color: item.highlight
              ? "rgba(225,10,111,0.10)"
              : "rgba(225,10,111,0.055)",
            letterSpacing: "-0.03em",
          }}
        >
          {item.step}
        </div>

        {/* Icon */}
        <div
          className="relative z-10 w-14 h-14 rounded-[16px] flex items-center justify-center mb-5 transition-all duration-[400ms] group-hover:-rotate-6 group-hover:scale-[1.08]"
          style={{
            background:
              item.highlight
                ? "linear-gradient(135deg, #E10A6F, #7a0039)"
                : "linear-gradient(135deg, var(--primary), var(--primary-dark))",
            boxShadow: "0 10px 26px rgba(225,10,111,0.28)",
          }}
        >
          <Icon size={22} color="#fff" strokeWidth={2} />
        </div>

        {/* Step badge */}
        <div
          className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.14em] rounded-full px-2.5 py-0.5 mb-2.5"
          style={{
            color: "var(--primary)",
            background: "rgba(225,10,111,0.07)",
          }}
        >
          Step {item.step}
        </div>

        {/* Title */}
        <h3
          className="relative z-10 text-[1rem] font-bold leading-[1.3] mb-2.5"
          style={{ color: "var(--dark)" }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className="relative z-10 text-[0.825rem] leading-[1.85]"
          style={{ color: "var(--gray)" }}
        >
          {item.desc}
        </p>

        {/* Footer tag (reveals on hover) */}
        <div
          className="relative z-10 mt-4 pt-3.5 flex items-center gap-1.5 text-[0.78rem] font-semibold opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[350ms]"
          style={{
            color: "var(--primary)",
            borderTop: "1px solid rgba(225,10,111,0.08)",
          }}
        >
          <ArrowRight />
          {item.tag}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export default function StudyProcess() {
  return (
    <section
      className="relative py-[72px] overflow-hidden"
      style={{ background: "#FFF8FB", fontFamily: "var(--font-main)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(225,10,111,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Background glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(225,10,111,0.09) 0%, transparent 68%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-10">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-[18px] py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.22em] mb-5"
            style={{
              background: "rgba(225,10,111,0.07)",
              color: "var(--primary)",
              border: "1px solid rgba(225,10,111,0.14)",
            }}
          >
            {/* Pulse dot */}
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "var(--primary)" }}
            />
            Admission Journey
          </div>

          <h2
            className="font-extrabold leading-[1.1] mb-3.5"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.9rem)",
              color: "var(--dark)",
            }}
          >
            Your Complete{" "}
            <span style={{ color: "var(--primary)" }}>
              Study Abroad Process
            </span>
          </h2>

          <p
            className="text-[0.98rem] leading-[1.9] max-w-[560px] mx-auto"
            style={{ color: "var(--gray)" }}
          >
            From counselling to university admission and visa approval, we guide
            students through every step with complete transparency and professional
            support.
          </p>
        </motion.div>

        {/* ── ONE-ROW GRID ── */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(6, 1fr)" }}
        >
          {STEPS.map((item, index) => (
            <StepCard key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
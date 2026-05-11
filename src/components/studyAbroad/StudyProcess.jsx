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
   DATA
───────────────────────────────────────────── */
const STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Career Counselling",
    desc: "Our experts help you choose the right country, university, and course based on your goals, budget, and academic profile.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Admission & Documentation",
    desc: "We handle applications, procedures, documentation, and offer-letter processing without confusion or delays.",
  },
  {
    icon: Briefcase,
    step: "03",
    title: "Visa Assistance",
    desc: "Complete visa guidance including financial documentation, interview prep, and embassy support for smooth approvals.",
  },
  {
    icon: Home,
    step: "04",
    title: "Accommodation Support",
    desc: "We help arrange safe and comfortable stays near universities well before your departure date.",
  },
  {
    icon: Plane,
    step: "05",
    title: "Travel & Departure",
    desc: "From flight booking guidance to airport assistance, we ensure you travel confidently to your destination.",
  },
  {
    icon: BadgeCheck,
    step: "06",
    title: "Post Arrival Support",
    desc: "Even after reaching abroad, our team supports you with onboarding, local guidance, and university assistance.",
    highlight: true,
  },
];

/* ─────────────────────────────────────────────
   CARD
───────────────────────────────────────────── */
function StepCard({ item, index }) {
  const Icon = item.icon;
  const isLast = !!item.highlight;

  const handleMouseEnter = (e) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(-12px)";
    el.style.boxShadow = isLast
      ? "0 32px 70px rgba(225,10,111,0.18), 0 8px 28px rgba(0,0,0,0.06)"
      : "0 32px 70px rgba(225,10,111,0.12), 0 8px 28px rgba(0,0,0,0.06)";
    el.style.borderColor = "rgba(225,10,111,0.2)";
    el.querySelector(".sp-wm").style.color = "rgba(225,10,111,0.09)";
    el.querySelector(".sp-icon-box").style.transform =
      "translateY(-4px) rotate(-5deg)";
    el.querySelector(".sp-icon-box").style.boxShadow =
      "0 16px 40px rgba(225,10,111,0.38)";
    el.querySelector(".sp-inner-glow").style.opacity = "1";
    el.querySelector(".sp-top-bar").style.opacity = "1";
  };

  const handleMouseLeave = (e) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(0)";
    el.style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
    el.style.borderColor = isLast
      ? "rgba(225,10,111,0.18)"
      : "rgba(225,10,111,0.07)";
    el.querySelector(".sp-wm").style.color = isLast
      ? "rgba(225,10,111,0.09)"
      : "rgba(225,10,111,0.045)";
    el.querySelector(".sp-icon-box").style.transform =
      "translateY(0) rotate(0deg)";
    el.querySelector(".sp-icon-box").style.boxShadow = isLast
      ? "0 8px 30px rgba(225,10,111,0.35)"
      : "0 8px 24px rgba(225,10,111,0.28)";
    el.querySelector(".sp-inner-glow").style.opacity = "0";
    el.querySelector(".sp-top-bar").style.opacity = "0";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className="min-w-0"
    >
      <div
        className="relative h-full overflow-hidden"
        style={{
          borderRadius: "26px",
          padding: "30px 22px 28px",
          cursor: "default",
          background: isLast
            ? "linear-gradient(150deg, #FDE6F0 0%, #FFF8FB 55%)"
            : "#ffffff",
          border: isLast
            ? "1.5px solid rgba(225,10,111,0.18)"
            : "1.5px solid rgba(225,10,111,0.07)",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          transition:
            "transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Top accent bar */}
        <div
          className="sp-top-bar"
          style={{
            position: "absolute",
            top: 0,
            left: "24px",
            right: "24px",
            height: "3px",
            borderRadius: "0 0 6px 6px",
            background:
              "linear-gradient(90deg, transparent, rgba(225,10,111,0.25), transparent)",
            opacity: 0,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* Inner radial glow */}
        <div
          className="sp-inner-glow"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "26px",
            background:
              "radial-gradient(circle at 30% 0%, rgba(225,10,111,0.065) 0%, transparent 60%)",
            opacity: 0,
            transition: "opacity 0.5s ease",
            pointerEvents: "none",
          }}
        />

        {/* Large watermark number */}
        <div
          className="sp-wm"
          style={{
            position: "absolute",
            bottom: "-14px",
            right: "10px",
            fontSize: "6.5rem",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            color: isLast
              ? "rgba(225,10,111,0.09)"
              : "rgba(225,10,111,0.045)",
            userSelect: "none",
            pointerEvents: "none",
            transition: "color 0.4s ease",
            fontFamily: "var(--font-main)",
          }}
        >
          {item.step}
        </div>

        {/* Icon box */}
        <div
          className="sp-icon-box"
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "22px",
            position: "relative",
            zIndex: 1,
            background: isLast
              ? "linear-gradient(135deg, #E10A6F 0%, #880040 100%)"
              : "linear-gradient(135deg, #E10A6F, #B90958)",
            boxShadow: isLast
              ? "0 8px 30px rgba(225,10,111,0.35)"
              : "0 8px 24px rgba(225,10,111,0.28)",
            transition:
              "transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease",
          }}
        >
          <Icon size={22} color="#fff" strokeWidth={2} />
        </div>

        {/* Step pill */}
        <div
          style={{
            display: "inline-block",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#E10A6F",
            background: "rgba(225,10,111,0.07)",
            borderRadius: "100px",
            padding: "3px 11px",
            marginBottom: "12px",
            position: "relative",
            zIndex: 1,
          }}
        >
          Step {item.step}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "0.95rem",
            fontWeight: 700,
            color: "var(--dark)",
            lineHeight: 1.3,
            marginBottom: "10px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--gray)",
            lineHeight: 1.85,
            position: "relative",
            zIndex: 1,
          }}
        >
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SECTION
───────────────────────────────────────────── */
export default function StudyProcess() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#FFF8FB",
        fontFamily: "var(--font-main)",
        padding: "72px 0 88px",
      }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(225,10,111,0.055) 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Top centre glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "460px",
          background:
            "radial-gradient(ellipse, rgba(225,10,111,0.08) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />

      {/* Bottom-right ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-120px",
          right: "-100px",
          width: "500px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(225,10,111,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        className="relative mx-auto"
        style={{ maxWidth: "1380px", padding: "0 36px" }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "60px" }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 20px",
              borderRadius: "100px",
              background: "rgba(225,10,111,0.07)",
              border: "1px solid rgba(225,10,111,0.15)",
              color: "#E10A6F",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "22px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#E10A6F",
                display: "inline-block",
                animation: "sp-pulse 2s ease-in-out infinite",
              }}
            />
            Admission Journey
          </div>

          <h2
            style={{
              fontSize: "clamp(1.9rem, 3.2vw, 2.85rem)",
              fontWeight: 800,
              color: "var(--dark)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Your Complete{" "}
            <span style={{ color: "#E10A6F" }}>Study Abroad Process</span>
          </h2>

          <p
            style={{
              fontSize: "0.97rem",
              color: "var(--gray)",
              lineHeight: 1.9,
              maxWidth: "540px",
              margin: "0 auto",
            }}
          >
            From counselling to university admission and visa approval, we guide
            students through every step with complete transparency and
            professional support.
          </p>
        </motion.div>

        {/* One-row grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "14px",
          }}
        >
          {STEPS.map((item, index) => (
            <StepCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Scoped keyframe */}
      <style>{`
        @keyframes sp-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.65); }
        }
      `}</style>
    </section>
  );
}
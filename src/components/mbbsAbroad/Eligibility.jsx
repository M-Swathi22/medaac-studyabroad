import { motion } from "framer-motion";
import {
  BadgeCheck,
  GraduationCap,
  CalendarDays,
  FileText,
  Globe2,
  HeartPulse,
} from "lucide-react";

const ELIGIBILITY_DATA = [
  {
    id: "01",
    title: "NEET Qualified",
    desc: "Must qualify NEET exam as per NMC guidelines for MBBS abroad.",
    icon: BadgeCheck,
  },
  {
    id: "02",
    title: "50% PCB Marks",
    desc: "Minimum 50% in Physics, Chemistry & Biology required.",
    icon: GraduationCap,
  },
  {
    id: "03",
    title: "17+ Years Age",
    desc: "Complete 17 years by 31st December of admission year.",
    icon: CalendarDays,
  },
  {
    id: "04",
    title: "Valid Documents",
    desc: "Passport, NEET scorecard & certificates are mandatory.",
    icon: FileText,
  },
  {
    id: "05",
    title: "English Medium",
    desc: "Must be comfortable studying medicine fully in English.",
    icon: Globe2,
  },
  {
    id: "06",
    title: "Medical Fitness",
    desc: "Basic fitness certificate may be required by universities.",
    icon: HeartPulse,
  },
];

/** Wrap text into lines of max `maxChars` characters */
function wrapText(text, maxChars) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (test.length <= maxChars) {
      current = test;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 5);
}

/*
  SVG viewBox: 160 × 300
  ─ V-notch: width 56px centred, depth 20px
  ─ Arrow bottom point at 50% x, 100% y
  ─ Top corner radius ~12
*/
const VB_W = 160;
const VB_H = 300;
const CARD_PATH =
  "M12,0 L52,0 L80,20 L108,0 L148,0 Q160,0 160,12 L160,240 L80,300 L0,240 L0,12 Q0,0 12,0 Z";

function EligibilityCard({ item, index }) {
  const Icon = item.icon;
  const descLines = wrapText(item.desc, 20);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "var(--font-main)",
      }}
    >
      {/* ── Hexagon badge ── */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "64px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.12))",
        }}
      >
        <svg viewBox="0 0 64 64" width="64" height="64" style={{ position: "absolute", inset: 0 }}>
          <polygon
            points="32,2 60,17 60,47 32,62 4,47 4,17"
            fill="var(--white)"
            stroke="rgba(225,10,111,0.12)"
            strokeWidth="1.5"
          />
        </svg>
        <span
          style={{
            position: "relative",
            zIndex: 1,
            color: "var(--primary)",
            fontSize: "1.35rem",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          {item.id}
        </span>
      </div>

      {/* ── Reduced gap: 4px only ── */}
      <div style={{ height: "4px", flexShrink: 0 }} />

      {/* ── Card body ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          filter: "drop-shadow(0 10px 20px rgba(225,10,111,0.22))",
          transition: "filter 0.32s ease, transform 0.32s ease",
          cursor: "default",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-7px)";
          e.currentTarget.style.filter =
            "drop-shadow(0 18px 30px rgba(225,10,111,0.38))";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.filter =
            "drop-shadow(0 10px 20px rgba(225,10,111,0.22))";
        }}
      >
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", display: "block" }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id={`shine-${index}`} x1="0" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.18" />
              <stop offset="55%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Card fill */}
          <path d={CARD_PATH} fill="var(--primary)" />

          {/* Shine */}
          <path d={CARD_PATH} fill={`url(#shine-${index})`} />

          {/* ── Title ── large, bold, readable */}
          {item.title.split(" ").length <= 2 ? (
            // single line title
            <text
              x="80" y="60"
              textAnchor="middle"
              fill="white"
              fontFamily="'Poppins', sans-serif"
              fontWeight="800"
              fontSize="14"
              letterSpacing="0.5"
            >
              {item.title.toUpperCase()}
            </text>
          ) : (
            // two-line title
            item.title.toUpperCase().split(" ").reduce((acc, word, i, arr) => {
              if (i === 0) acc.push(word);
              else if (i === Math.ceil(arr.length / 2)) acc.push(" " + word);
              else acc[acc.length - 1] += " " + word;
              return acc;
            }, []).map((line, i) => (
              <text
                key={i}
                x="80" y={52 + i * 17}
                textAnchor="middle"
                fill="white"
                fontFamily="'Poppins', sans-serif"
                fontWeight="800"
                fontSize="13"
                letterSpacing="0.5"
              >
                {line.trim()}
              </text>
            ))
          )}

          {/* ── Divider ── */}
          <line
            x1="50" y1="78" x2="110" y2="78"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* ── Description — large enough to read ── */}
          {descLines.map((line, i) => (
            <text
              key={i}
              x="80"
              y={96 + i * 18}
              textAnchor="middle"
              fill="rgba(255,255,255,0.9)"
              fontFamily="'Poppins', sans-serif"
              fontWeight="400"
              fontSize="11.5"
            >
              {line}
            </text>
          ))}
        </svg>

        {/* ── Icon circle over bottom arrow ── */}
        <div
          style={{
            position: "absolute",
            bottom: "8%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 4,
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            background: "var(--white)",
            border: "2px solid rgba(225,10,111,0.18)",
            boxShadow: "0 6px 16px rgba(225,10,111,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={19} color="var(--primary)" strokeWidth={1.8} />
        </div>
      </div>

      {/* Floor shadow */}
      <div
        style={{
          marginTop: "5px",
          width: "50%",
          height: "7px",
          borderRadius: "50%",
          background: "rgba(225,10,111,0.1)",
          filter: "blur(5px)",
        }}
      />
    </motion.div>
  );
}

export default function MBBSEligibilitySection() {
  return (
    <section
      style={{
        background: "var(--light)",
        fontFamily: "var(--font-main)",
        padding: "100px 24px 110px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "5px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(225,10,111,0.3)",
              background: "rgba(225,10,111,0.07)",
              color: "var(--primary)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            MBBS Abroad Eligibility
          </span>

          <h2
            style={{
              color: "var(--dark)",
              fontSize: "clamp(1.75rem, 3.8vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              margin: "0 0 16px",
            }}
          >
            Admission{" "}
            <span style={{ color: "var(--primary)" }}>Eligibility Requirements</span>
          </h2>

          <p
            style={{
              color: "var(--gray)",
              fontSize: "1rem",
              lineHeight: 1.8,
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Students applying for MBBS abroad must satisfy the following eligibility
            criteria approved by universities and NMC regulations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="elig-grid">
          {ELIGIBILITY_DATA.map((item, index) => (
            <EligibilityCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .elig-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .elig-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 28px 20px;
          }
        }
        @media (max-width: 580px) {
          .elig-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px 14px;
          }
        }
      `}</style>
    </section>
  );
}
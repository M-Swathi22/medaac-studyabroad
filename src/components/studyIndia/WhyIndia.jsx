import { useState } from "react";

const POINTS = [
  {
    num: "01",
    tag: "Language Advantage",
    title: "100% English Medium Education",
    desc: "All medical programs are taught fully in English — stronger comprehension, confident patient communication, zero language friction.",
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    num: "02",
    tag: "Real-World Practice",
    title: "Stronger Clinical Exposure",
    desc: "High daily patient volumes in Indian hospitals give you hands-on experience that most foreign universities simply cannot match.",
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    num: "03",
    tag: "Career-Ready Path",
    title: "Better for NEET PG & Indian Practice",
    desc: "Your syllabus, training, and licensing are calibrated for India — a direct, uninterrupted path from degree to practice.",
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    num: "04",
    tag: "Zero Friction",
    title: "No Cultural or Language Barriers",
    desc: "Study in a familiar environment — no lifestyle shock, no adaptation stress. Your full energy goes into becoming a better doctor.",
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    num: "05",
    tag: "Extensive Choice",
    title: "Wide Network of Recognised Colleges",
    desc: "700+ NMC-approved institutions with structured curriculum, strong academic systems, and proven graduate outcomes.",
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    num: "06",
    tag: "Proven Structure",
    title: "Stable Academic System",
    desc: "Consistent syllabus, reliable exams, and structured internships — a dependable foundation you can build your entire career on.",
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
];

function Card({ item, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 20,
        padding: "30px 26px 26px",
        cursor: "default",
        background: "#fff",
        border: `1px solid ${hovered ? "rgba(225,10,111,0.28)" : "#ede8f0"}`,
        boxShadow: hovered
          ? "0 22px 52px rgba(225,10,111,0.11), 0 6px 20px rgba(0,0,0,0.05)"
          : "0 2px 12px rgba(120,0,60,0.04)",
        transform: hovered ? "translateY(-7px)" : "none",
        transition:
          "transform 0.32s cubic-bezier(.16,1,.3,1), box-shadow 0.32s cubic-bezier(.16,1,.3,1), border-color 0.22s",
        animation: `fadeUp 0.5s ease ${index * 0.055}s both`,
      }}
    >
      {/* Warm inner gradient overlay — fades on hover */}
      <div
        style={{
          position: "absolute", inset: 0, borderRadius: 20,
          background: "linear-gradient(145deg, rgba(253,230,240,0.45) 0%, rgba(255,255,255,0) 60%)",
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s",
          pointerEvents: "none",
        }}
      />

      {/* Top gradient bar */}
      <div
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: "linear-gradient(90deg, var(--primary) 0%, rgba(225,10,111,0) 100%)",
          borderRadius: "20px 20px 0 0",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      {/* Watermark number */}
      <div
        style={{
          position: "absolute", top: 20, right: 22,
          fontSize: 48, fontWeight: 900, lineHeight: 1,
          letterSpacing: "-0.04em",
          color: hovered ? "var(--primary-light)" : "#ede8f0",
          transition: "color 0.3s",
          userSelect: "none",
          fontFamily: "var(--font-main)",
        }}
      >
        {item.num}
      </div>

      {/* Icon */}
      <div
        style={{
          width: 50, height: 50, borderRadius: 14,
          background: hovered ? "var(--primary)" : "var(--primary-light)",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 16,
          transform: hovered ? "scale(1.08) rotate(-3deg)" : "none",
          transition: "background 0.25s, transform 0.3s cubic-bezier(.16,1,.3,1)",
        }}
      >
        <div
          style={{
            color: hovered ? "#fff" : "var(--primary)",
            display: "flex",
            transition: "color 0.25s",
          }}
        >
          {item.icon}
        </div>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: 14.5, fontWeight: 700, color: "var(--dark)",
          lineHeight: 1.32, marginBottom: 9, maxWidth: "88%",
          fontFamily: "var(--font-main)",
        }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: 12.5, color: "var(--gray)", lineHeight: 1.72, fontFamily: "var(--font-main)" }}>
        {item.desc}
      </p>

      {/* Reveal tag */}
      <div
        style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          marginTop: 18, fontSize: 10.5, fontWeight: 700,
          color: "var(--primary)", letterSpacing: "0.05em", textTransform: "uppercase",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "none" : "translateY(5px)",
          transition: "opacity 0.28s, transform 0.28s",
          fontFamily: "var(--font-main)",
        }}
      >
        <span style={{ width: 12, height: 1.5, background: "var(--primary)", borderRadius: 2, flexShrink: 0, display: "block" }} />
        {item.tag}
      </div>
    </div>
  );
}

export default function WhyIndia() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.3; transform: scale(0.6); }
        }
      `}</style>

      <section
        style={{
          fontFamily: "var(--font-main)",
          padding: "90px 0 84px",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #fff9fb 0%, #ffffff 55%, #f8f9fb 100%)",
        }}
      >
        {/* Dot grid — centre-masked, no blobs */}
        <div
          style={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            backgroundImage: "radial-gradient(circle, rgba(225,10,111,0.07) 1.2px, transparent 1.2px)",
            backgroundSize: "30px 30px",
            maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)",
          }}
        />

        <div
          style={{
            maxWidth: 1160, margin: "0 auto",
            padding: "0 clamp(20px,5vw,56px)",
            position: "relative", zIndex: 1,
          }}
        >
          {/* ── HEADER ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 40,
              alignItems: "flex-end",
              marginBottom: 60,
            }}
          >
            <div>
              {/* Eyebrow */}
              <div
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "var(--primary-light)", color: "var(--primary)",
                  fontSize: 10.5, fontWeight: 700, letterSpacing: "0.13em",
                  textTransform: "uppercase", padding: "6px 14px",
                  borderRadius: 100, marginBottom: 20,
                  border: "1px solid rgba(225,10,111,0.2)",
                }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)", animation: "pulse 2s ease-in-out infinite" }} />
                Medical Education in India
              </div>

              {/* Title — only "Why Choose India?" */}
              <h2
                style={{
                  fontSize: "clamp(26px,3.6vw,44px)",
                  fontWeight: 800, color: "var(--dark)",
                  lineHeight: 1.13, letterSpacing: "-0.026em",
                  marginBottom: 16,
                }}
              >
                Why Choose{" "}
                <span style={{ color: "var(--primary)" }}>India?</span>
              </h2>

              <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.78, maxWidth: 500 }}>
                India offers stronger academic alignment, richer clinical
                exposure, and a clearer path — purpose-built for doctors
                planning to build their career at home.
              </p>
            </div>

            {/* Single KPI badge */}
            <div
              style={{
                background: "var(--primary)",
                borderRadius: 18, padding: "22px 32px",
                textAlign: "center", minWidth: 152, flexShrink: 0,
              }}
            >
              <div style={{ fontSize: 32, fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em", color: "#fff" }}>
                700+
              </div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", marginTop: 5, lineHeight: 1.5 }}>
                <span style={{ display: "block" }}>NMC Approved</span>
                <span style={{ display: "block" }}>Colleges</span>
              </div>
            </div>
          </div>

          {/* ── CARD GRID ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 18,
            }}
          >
            {POINTS.map((item, i) => (
              <Card key={i} item={item} index={i} />
            ))}
          </div>

          {/* ── QUOTE BANNER ── */}
          <div
            style={{
              marginTop: 44,
              background: "var(--dark)",
              borderRadius: 20,
              padding: "36px 44px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Giant decorative quote mark */}
            <div
              style={{
                position: "absolute", top: -10, left: 32,
                fontSize: 130, lineHeight: 1, fontWeight: 900,
                color: "rgba(225,10,111,0.12)",
                fontFamily: "Georgia, serif",
                pointerEvents: "none", userSelect: "none",
              }}
            >
              "
            </div>

            <p
              style={{
                fontSize: 17, fontWeight: 600,
                color: "#fff", lineHeight: 1.65,
                letterSpacing: "-0.01em",
                maxWidth: 780,
                position: "relative", zIndex: 1,
                marginBottom: 18,
                fontFamily: "var(--font-main)",
              }}
            >
              “Learning gives creativity, creativity leads to thinking, thinking provides knowledge, and knowledge makes you great.”
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 10, position: "relative", zIndex: 1 }}>
              <div style={{ width: 28, height: 2, background: "var(--primary)", borderRadius: 2 }} />
              <span style={{ fontSize: 11.5, fontWeight: 600, color: "rgba(255,255,255,.45)", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-main)" }}>
               A. P. J. Abdul Kalam &nbsp;·&nbsp; India
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
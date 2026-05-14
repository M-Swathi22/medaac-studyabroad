import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Globe,
  GraduationCap,
  Stethoscope,
  Wallet,
  Building2,
  Users,
} from "lucide-react";

const points = [
  {
    icon: Wallet,
    title: "Affordable Tuition Fees",
    desc: "Study MBBS abroad at globally recognized universities with budget-friendly fee structures, saving significantly versus domestic private colleges.",
    stat: "70%",
    statLabel: "Lower Cost",
  },
  {
    icon: GraduationCap,
    title: "English Medium Education",
    desc: "Medical programs are taught entirely in English for international students, ensuring seamless learning without language barriers.",
    stat: "100%",
    statLabel: "English Medium",
  },
  {
    icon: Globe,
    title: "Global Career Opportunities",
    desc: "Build international medical exposure and unlock career opportunities across continents with a globally accredited degree.",
    stat: "190+",
    statLabel: "Countries",
  },
  {
    icon: Stethoscope,
    title: "Modern Clinical Training",
    desc: "Gain hands-on hospital experience with advanced medical infrastructure, state-of-the-art labs, and real patient exposure from Year 1.",
    stat: "1000+",
    statLabel: "Bed Hospitals",
  },
  {
    icon: Building2,
    title: "NMC Approved Universities",
    desc: "Study at universities recognized by NMC, WHO, and other international medical councils, ensuring your degree is valid worldwide.",
    stat: "500+",
    statLabel: "Universities",
  },
  {
    icon: Users,
    title: "International Community",
    desc: "Experience multicultural student life, global networking, and diverse clinical exposures that enrich both your personal and professional growth.",
    stat: "50+",
    statLabel: "Nationalities",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Card({ item, index }) {
  const Icon = item.icon;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "32px 28px 28px",
        borderRadius: "20px",
        background: "var(--white)",
        /* Always-visible pink border */
        border: "2px solid #E10A6F",
        overflow: "hidden",
        cursor: "default",
        transition:
          "transform 0.38s cubic-bezier(0.22,1,0.36,1), box-shadow 0.38s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 22px 50px rgba(225,10,111,0.28)"
          : "0 2px 10px rgba(225,10,111,0.1)",
      }}
    >
      {/*
        ── Edge-flood fill effect ──
        Four panels, each anchored to one edge, scale toward center from that edge.
        Because all four fire simultaneously the colour appears to rush in from every
        edge at once, meeting in the middle and filling the card completely.
      */}

      {/* Top edge → scales downward */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "100%",
          background: "var(--primary)",
          transformOrigin: "top center",
          transform: hovered ? "scaleY(1)" : "scaleY(0)",
          transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Bottom edge → scales upward */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "100%",
          background: "var(--primary)",
          transformOrigin: "bottom center",
          transform: hovered ? "scaleY(1)" : "scaleY(0)",
          transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Left edge → scales rightward */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, left: 0, bottom: 0,
          width: "100%",
          background: "var(--primary)",
          transformOrigin: "left center",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Right edge → scales leftward */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, right: 0, bottom: 0,
          width: "100%",
          background: "var(--primary)",
          transformOrigin: "right center",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* === Card content — always above flood layers === */}
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* Header: icon left, stat right */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "22px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: hovered ? "rgba(255,255,255,0.18)" : "#FDE6F0",
              border: `1px solid ${hovered ? "rgba(255,255,255,0.35)" : "rgba(225,10,111,0.2)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "background 0.38s ease, border-color 0.38s ease",
            }}
          >
            <Icon size={22} color={hovered ? "#fff" : "var(--primary)"} strokeWidth={1.7} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1px", flexShrink: 0 }}>
            <span
              style={{
                fontSize: "1.35rem",
                fontWeight: 800,
                color: hovered ? "#fff" : "var(--primary)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                fontFamily: "var(--font-main)",
                transition: "color 0.35s ease",
              }}
            >
              {item.stat}
            </span>
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 600,
                color: hovered ? "rgba(255,255,255,0.78)" : "var(--gray)",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                fontFamily: "var(--font-main)",
                transition: "color 0.35s ease",
              }}
            >
              {item.statLabel}
            </span>
          </div>
        </div>

        {/* Accent divider */}
        <div
          style={{
            width: "32px",
            height: "3px",
            borderRadius: "999px",
            background: hovered ? "rgba(255,255,255,0.65)" : "var(--primary)",
            marginBottom: "14px",
            transition: "background 0.35s ease",
          }}
        />

        {/* Title */}
        <h3
          style={{
            color: hovered ? "#fff" : "var(--dark)",
            fontSize: "1.05rem",
            fontWeight: 700,
            lineHeight: 1.3,
            margin: "0 0 10px",
            letterSpacing: "-0.015em",
            fontFamily: "var(--font-main)",
            transition: "color 0.35s ease",
          }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          style={{
            color: hovered ? "rgba(255,255,255,0.88)" : "var(--gray)",
            fontSize: "0.875rem",
            lineHeight: 1.8,
            margin: 0,
            fontFamily: "var(--font-main)",
            transition: "color 0.35s ease",
          }}
        >
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

 function WhyStudy() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        position: "relative",
        padding: "110px 24px 120px",
        backgroundColor: "#FDE6F0",   /* light pink */
        fontFamily: "var(--font-main)",
        overflow: "hidden",
      }}
    >
      {/* Decorative radial glows */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-140px", left: "-140px",
          width: "520px", height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(225,10,111,0.12) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-100px", right: "-100px",
          width: "380px", height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(225,10,111,0.09) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />
      {/* Dot grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(225,10,111,0.14) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* === Section Header === */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 72px" }}
        >
          <h2
            style={{
              color: "var(--dark)",
              fontSize: "clamp(2rem, 4vw, 2.9rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              margin: "0 0 20px",
              fontFamily: "var(--font-main)",
            }}
          >
            Why Study{" "}
            <span style={{ color: "var(--primary)" }}>MBBS Abroad?</span>
          </h2>

          <p
            style={{
              color: "var(--gray)",
              fontSize: "1rem",
              lineHeight: 1.8,
              margin: 0,
              fontFamily: "var(--font-main)",
            }}
          >
            Explore globally recognised medical education with affordable tuition,
            modern infrastructure, and international career opportunities.
          </p>
        </motion.div>

        {/* === Cards Grid === */}
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "22px",
          }}
        >
          {points.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </div>

        {/* === Bottom CTA strip === */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: "72px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Social proof row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { value: "10,000+", label: "Students Enrolled" },
              { value: "15+",     label: "Years of Expertise" },
              { value: "98%",     label: "Visa Success Rate" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px",
                  padding: "0 28px",
                  borderRight: i < 2 ? "1px solid rgba(225,10,111,0.25)" : "none",
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "var(--dark)",
                    letterSpacing: "-0.04em",
                    fontFamily: "var(--font-main)",
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--gray)",
                    fontWeight: 500,
                    fontFamily: "var(--font-main)",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <button
            style={{
              marginTop: "8px",
              padding: "14px 36px",
              borderRadius: "999px",
              background: "var(--primary)",
              color: "#fff",
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.01em",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-main)",
              boxShadow: "0 8px 28px rgba(225,10,111,0.3)",
              transition: "transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--primary-dark)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 14px 36px rgba(225,10,111,0.38)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--primary)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(225,10,111,0.3)";
            }}
          >
            Start Your MBBS Journey →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
export default WhyStudy;
import { motion } from "framer-motion";
import heroImg from "../../assets/images/mbbs-hero.webp";
import { Link } from "react-router-dom";

const STATS = [
  { value: "500+", label: "Students Guided"   },
  { value: "100%", label: "Admission Support" },
  { value: "3",    label: "Top Destinations"  },
  { value: "10+",  label: "Years Experience"  },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay },
});

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "var(--font-main)",
      }}
    >
      {/* Background image */}
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Overlay — matches CoursesHero reference style */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(
              120deg,
              rgba(10,10,10,0.92) 0%,
              rgba(10,10,10,0.78) 35%,
              rgba(10,10,10,0.55) 55%,
              rgba(225,10,111,0.15) 75%,
              rgba(248,249,251,0.85) 95%,
              var(--light) 100%
            )
          `,
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "860px",
          padding: "60px 28px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Eyebrow badge */}
        <motion.span
          {...fade(0)}
          style={{
            display: "inline-block",
            padding: "6px 18px",
            borderRadius: "999px",
            border: "1px solid rgba(225,10,111,0.35)",
            background: "rgba(225,10,111,0.08)",
            color: "var(--primary)",
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          NMC Approved Universities
        </motion.span>

        {/* Heading */}
        <motion.h1
          {...fade(0.12)}
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 5.2vw, 3.75rem)",
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: "-0.025em",
            color: "var(--white)",
          }}
        >
          Study{" "}
          <span style={{ color: "var(--primary)" }}>MBBS Abroad</span>
          <br />
          in Top Countries
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...fade(0.24)}
          style={{
            margin: "22px 0 0",
            fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
            color: "rgba(255,255,255,0.52)",
            lineHeight: 1.8,
            maxWidth: "540px",
          }}
        >
          Explore affordable medical education in Georgia, Tajikistan, and Uzbekistan
          with complete admission guidance and visa support.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fade(0.36)}
          style={{
            marginTop: "38px",
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            justifyContent: "center",
          }}
        >
          <Link
            to="#countries"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 30px",
              borderRadius: "10px",
              background: "var(--primary)",
              color: "var(--white)",
              fontFamily: "var(--font-main)",
              fontWeight: 600,
              fontSize: "0.92rem",
              textDecoration: "none",
              transition: "background 0.2s ease, transform 0.15s ease",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--primary-dark)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "var(--primary)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Explore Countries
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "13px 30px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "transparent",
              color: "rgba(255,255,255,0.82)",
              fontFamily: "var(--font-main)",
              fontWeight: 500,
              fontSize: "0.92rem",
              textDecoration: "none",
              transition: "border-color 0.2s ease, color 0.2s ease, transform 0.15s ease",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(225,10,111,0.5)";
              e.currentTarget.style.color = "var(--white)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
              e.currentTarget.style.color = "rgba(255,255,255,0.82)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Free Counseling
          </Link>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
          style={{
            width: "48px",
            height: "1px",
            background: "rgba(255,255,255,0.14)",
            margin: "52px auto 0",
          }}
        />

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.62, duration: 0.6 }}
          style={{
            marginTop: "36px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            width: "100%",
            maxWidth: "620px",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
                padding: "0 16px",
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-main)",
                  fontSize: "clamp(1.25rem, 2.4vw, 1.65rem)",
                  fontWeight: 700,
                  color: "var(--primary)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-main)",
                  fontSize: "0.68rem",
                  color: "rgba(255,255,255,0.36)",
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  whiteSpace: "nowrap",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/studyabroad-hero.jpg";

/* ─────────────────────────────────────────────
   COUNTER
───────────────────────────────────────────── */
function Counter({ target, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = null;
    const duration = 1500;

    const animate = (time) => {
      if (!start) start = time;

      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   STATS
───────────────────────────────────────────── */
const STATS = [
  {
    target: 5000,
    suffix: "+",
    label: "Students Placed",
  },
  {
    target: 100,
    suffix: "+",
    label: "Universities",
  },
  {
    target: 30,
    suffix: "+",
    label: "Countries",
  },
  {
    target: 98,
    suffix: "%",
    label: "Visa Success",
  },
];

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
export default function HeroSection() {
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 600], [0, 90]);

  return (
    <section
      className="relative min-h-screen overflow-hidden font-[var(--font-main)]"
      style={{
        paddingTop: "120px",
      }}
    >
      {/* ───────────────── BACKGROUND IMAGE ───────────────── */}
      <motion.img
        src={heroImg}
        alt="Study Abroad"
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[110%] object-cover scale-105"
      />

      {/* ───────────────── MAIN OVERLAY ───────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(8,8,8,0.78) 0%,
              rgba(12,12,12,0.62) 35%,
              rgba(15,15,15,0.42) 60%,
              rgba(225,10,111,0.16) 100%
            )
          `,
        }}
      />

      {/* ───────────────── RADIAL DEPTH ───────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.28), rgba(0,0,0,0.55))",
        }}
      />

      {/* ───────────────── PINK GLOW ───────────────── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] rounded-full blur-3xl"
        style={{
          background: "rgba(225,10,111,0.16)",
        }}
      />

      {/* ───────────────── CONTENT ───────────────── */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">

          {/* SMALL LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-7"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--primary)" }}
            />

            <span
              className="text-[11px] uppercase tracking-[0.2em] font-semibold"
              style={{
                color: "rgba(255,255,255,0.88)",
              }}
            >
              Trusted Global Education Partner
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-bold leading-tight"
            style={{
              fontSize: "clamp(42px,6vw,72px)",
              color: "var(--white)",
              letterSpacing: "-0.04em",
              textShadow: "0 5px 24px rgba(0,0,0,0.45)",
            }}
          >
            Build Your Future
            <br />

            <span
              style={{
                color: "var(--primary)",
              }}
            >
              Beyond Borders.
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="mt-7 max-w-2xl mx-auto text-lg leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.86)",
              textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
          >
            Get access to globally recognized universities, affordable tuition,
            expert admission guidance, and complete visa support for your
            international education journey.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="mt-10 flex justify-center gap-4 flex-wrap"
          >
            {/* PRIMARY */}
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: "var(--primary)",
                color: "#ffffff",
                boxShadow: "0 10px 28px rgba(225,10,111,0.32)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--primary-dark)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--primary)";
                e.currentTarget.style.transform = "translateY(0px)";
              }}
            >
              Apply Now
            </Link>

            {/* SECONDARY */}
            <a
              href="#countries"
              className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                border: "1px solid rgba(255,255,255,0.22)",
                background: "rgba(255,255,255,0.06)",
                color: "#ffffff",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }}
            >
              Explore Countries
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-16 flex flex-wrap justify-center gap-5"
          >
            {STATS.map((item) => (
              <div
                key={item.label}
                className="min-w-[160px] px-7 py-5 rounded-3xl text-center"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <h3
                  className="text-3xl font-bold"
                  style={{
                    color: "var(--white)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  <Counter
                    target={item.target}
                    suffix={item.suffix}
                  />
                </h3>

                <p
                  className="mt-2 text-[11px] uppercase tracking-[0.18em] font-medium"
                  style={{
                    color: "rgba(255,255,255,0.72)",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
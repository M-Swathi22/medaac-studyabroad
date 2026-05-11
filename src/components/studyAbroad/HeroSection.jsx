import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import heroBg from "../../assets/images/studyabroad-hero.jpg";

/* ─── Floating Particle ─── */
function Particle({ x, y, size, delay, duration }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: "rgba(225,10,111,0.3)",
        filter: "blur(1px)",
      }}
      animate={{
        y: [0, -28, 0],
        opacity: [0.15, 0.5, 0.15],
        scale: [1, 1.3, 1],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ─── Animated Counter ─── */
function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime;
    const duration = 1800;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ─── Destinations ─── */
const destinations = [
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇳🇿", name: "New Zealand" },
];

/* ─── Main Hero ─── */
export default function HeroSection() {
  const containerRef = useRef(null);
  const [activeDestination, setActiveDestination] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  /* cycle destination pills */
  useEffect(() => {
    const id = setInterval(
      () => setActiveDestination(prev => (prev + 1) % destinations.length),
      2500
    );
    return () => clearInterval(id);
  }, []);

  /* stable particles (no re-random on re-render) */
  const particles = useRef(
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: (i * 11.3 + 5) % 100,
      y: (i * 17.7 + 8) % 100,
      size: (i % 4) + 3,
      delay: (i * 0.6) % 4,
      duration: (i % 4) + 4,
    }))
  ).current;

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-[100svh] overflow-hidden"
      style={{ paddingTop: "clamp(100px, 14vh, 140px)" }}
    >

      {/* ── BG IMAGE WITH PARALLAX ── */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="w-full h-[115%] object-cover object-center"
          style={{ transform: "scale(1.05)" }}
        />
      </motion.div>

      {/* ── OVERLAYS — light enough so image shows clearly ── */}

      {/* Base dark — 50% opacity only */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Center-focused vignette: center is brightest, edges darker */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse 80% 80% at 50% 50%,
            rgba(0,0,0,0.15) 0%,
            rgba(0,0,0,0.52) 100%
          )`,
        }}
      />

      {/* Bottom fade so stats stay readable */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
        }}
      />

      {/* Subtle pink bloom at top-center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(225,10,111,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* ── PARTICLES ── */}
      {particles.map(p => <Particle key={p.id} {...p} />)}

      {/* ── MAIN CONTENT — fully centered ── */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center"
        style={{ y: contentY, opacity }}
      >

        {/* EYEBROW */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="h-px w-8"
            style={{ background: "linear-gradient(90deg, transparent, rgba(225,10,111,0.8))" }}
          />
          <span
            className="text-xs font-semibold tracking-[0.22em] uppercase"
            style={{ color: "rgba(225,10,111,0.95)" }}
          >
            Study Abroad Simplified
          </span>
          <div
            className="h-px w-8"
            style={{ background: "linear-gradient(90deg, rgba(225,10,111,0.8), transparent)" }}
          />
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          className="font-black text-white leading-[1.05] tracking-tight"
          style={{
            fontSize: "clamp(2.6rem, 7vw, 5rem)",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          Build Your Future
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #e10a6f 0%, #ff5aa5 50%, #e10a6f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% auto",
              animation: "shimmer 4s linear infinite",
            }}
          >
            Beyond Borders.
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          className="mt-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "rgba(215,210,220,0.88)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          From choosing the right university to securing your visa — we guide every step
          of your international education journey with precision and care.
        </motion.p>

        {/* DESTINATION PILLS */}
        <motion.div
          className="mt-7 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {destinations.map((d, i) => (
            <motion.button
              key={d.name}
              onClick={() => setActiveDestination(i)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
              animate={{
                background: activeDestination === i
                  ? "rgba(225,10,111,0.22)"
                  : "rgba(255,255,255,0.08)",
                borderColor: activeDestination === i
                  ? "rgba(225,10,111,0.55)"
                  : "rgba(255,255,255,0.15)",
                color: activeDestination === i
                  ? "rgba(255,150,200,1)"
                  : "rgba(200,195,210,0.85)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{ border: "1px solid", transition: "background 0.3s, color 0.3s" }}
            >
              <span>{d.flag}</span>
              {d.name}
            </motion.button>
          ))}
        </motion.div>

        {/* CTA ROW */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          {/* Primary */}
          <Link to="#countries">
            <motion.button
              className="relative px-8 py-3.5 rounded-full text-sm font-bold text-white overflow-hidden"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "linear-gradient(135deg, #e10a6f, #b50858)",
                boxShadow: "0 8px 32px rgba(225,10,111,0.4), 0 0 0 1px rgba(225,10,111,0.3)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Countries
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.button>
          </Link>

          {/* Secondary */}
          <motion.button
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              border: "1px solid rgba(225,10,111,0.4)",
              color: "rgba(255,160,200,0.95)",
              background: "rgba(225,10,111,0.08)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="flex items-center justify-center w-6 h-6 rounded-full"
              style={{ background: "rgba(225,10,111,0.2)" }}
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Book Free Consultation
          </motion.button>
        </motion.div>

        {/* STATS ROW */}
        <motion.div
          className="mt-14 flex flex-wrap justify-center gap-x-12 gap-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          {[
            { end: 5000, suffix: "+", label: "Students Placed" },
            { end: 100, suffix: "+", label: "Partner Universities" },
            { end: 10, suffix: "+", label: "Countries" },
            { end: 98, suffix: "%", label: "Visa Success Rate" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p
                className="text-3xl md:text-4xl font-black tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  background:
                    "linear-gradient(135deg, #ffffff 0%, rgba(255,160,200,0.85) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <Counter end={stat.end} suffix={stat.suffix} />
              </p>
              <p
                className="text-xs mt-1 tracking-wide uppercase"
                style={{ color: "rgba(180,175,195,0.65)" }}
              >
                {stat.label}
              </p>
              <div
                className="mt-2 h-px w-10 mx-auto"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(225,10,111,0.6), transparent)",
                }}
              />
            </div>
          ))}
        </motion.div>

      </motion.div>

      {/* ── SHIMMER KEYFRAME ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>

    </section>
  );
}
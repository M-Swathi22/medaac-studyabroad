import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/study-india-hero.jpg";

/* Counter */
function Counter({ target, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const duration = 1400;

    const animate = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const STATS = [
  { target: 500, suffix: "+", label: "Top Colleges" },
  { target: 4, suffix: "", label: "States Covered" },
  { target: 98, suffix: "%", label: "Placement Rate" },
];

 function HeroSection() {

  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <section className="relative h-[100vh] overflow-hidden font-[var(--font-main)]">

      {/* Background */}
      <motion.img
        src={heroImg}
        alt="Study in India"
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-[110%] object-cover scale-105 brightness-[1.05]"
      />

      {/* Global balanced gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              120deg,
              rgba(10,10,10,0.65) 0%,
              rgba(10,10,10,0.45) 30%,
              rgba(10,10,10,0.25) 55%,
              rgba(225,10,111,0.10) 75%,
              rgba(248,249,251,0.35) 92%,
              rgba(248,249,251,0.45) 100%
            )
          `,
        }}
      />

      {/* 🔥 Focus overlay (ONLY for readability) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.45), transparent 65%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(42px,6vw,72px)] font-bold leading-tight"
            style={{
              color: "var(--white)",
              textShadow: "0 4px 18px rgba(0,0,0,0.6)",
            }}
          >
            Study in{" "}
            <span style={{ color: "var(--primary)" }}>
              India
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-lg leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.92)",
              textShadow: "0 3px 12px rgba(0,0,0,0.5)",
            }}
          >
            Explore top universities across India with globally recognized degrees, affordable tuition, and strong career opportunities.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 flex justify-center gap-4 flex-wrap"
          >
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full font-medium transition"
              style={{
                background: "var(--primary)",
                color: "#fff",
                boxShadow: "0 6px 20px rgba(225,10,111,0.35)",
              }}
            >
              Apply Now
            </Link>

            <a
              href="#states"
              className="px-8 py-3 rounded-full border transition"
              style={{
                border: "1px solid rgba(255,255,255,0.5)",
                color: "#fff",
                backdropFilter: "blur(4px)",
              }}
            >
              Explore States
            </a>
          </motion.div>

          {/* Trust bar */}
          <div className="mt-14 flex justify-center">
            <div
              className="flex gap-10 flex-wrap justify-center px-6 py-4 rounded-full"
              style={{
                background: "rgba(0,0,0,0.35)",
                backdropFilter: "blur(6px)",
              }}
            >
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-xl font-bold text-white">
                    <Counter target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-white/90 uppercase tracking-wide mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default HeroSection;
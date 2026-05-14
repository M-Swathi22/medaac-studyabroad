import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useState } from "react";
import {
  Globe,
  GraduationCap,
  Briefcase,
  BadgeDollarSign,
 BookOpen,
  Plane,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const FEATURES = [
  {
    icon: Globe,
    title: "Global Exposure",
    desc: "Experience diverse cultures and build an international mindset that sets you apart from the rest.",
    num: "01",
    tag: "Culture & Mindset",
  },
  {
    icon: GraduationCap,
    title: "Top Universities",
    desc: "Study in globally recognized institutions with modern infrastructure and world-class faculty.",
    num: "02",
    tag: "World-Class Education",
  },
  {
    icon: Briefcase,
    title: "Career Growth",
    desc: "Access better job prospects and international career pathways after your graduation abroad.",
    num: "03",
    tag: "Global Opportunities",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Study",
    desc: "Choose from budget-friendly countries offering high-quality education and a great lifestyle.",
    num: "04",
    tag: "Budget Friendly",
  },
  {
    icon: BookOpen,
    title: "English Medium",
    desc: "Study in English without language barriers across the most sought-after global destinations.",
    num: "05",
    tag: "No Language Barrier",
  },
  {
    icon: Plane,
    title: "Global Life",
    desc: "Gain independence, confidence, and real-world global experience that shapes your entire life.",
    num: "06",
    tag: "Life Experience",
  },
];

/* ─────────────────────────────────────────────────────────────
   PARTICLES
───────────────────────────────────────────────────────────── */
function Particles({ active }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 18,
        right: 18,
        width: 52,
        height: 52,
        pointerEvents: "none",
        zIndex: 20,
      }}
    >
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * 360;
        const rad = (angle * Math.PI) / 180;
        const tx = Math.cos(rad) * 33;
        const ty = Math.sin(rad) * 33;

        return (
          <motion.div
            key={i}
            animate={
              active
                ? {
                    x: tx,
                    y: ty,
                    opacity: [0, 1, 0],
                    scale: [0, 1.3, 0],
                  }
                : {
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0,
                  }
            }
            transition={{
              duration: 0.55,
              delay: i * 0.03,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: i % 2 === 0 ? 5 : 3,
              height: i % 2 === 0 ? 5 : 3,
              borderRadius: "50%",
              background: "#E10A6F",
              marginTop: -2.5,
              marginLeft: -2.5,
            }}
          />
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   FEATURE CARD
───────────────────────────────────────────────────────────── */
function FeatureCard({ icon: Icon, title, desc, num, tag, index }) {
  const cardRef = useRef(null);

  const [hovered, setHovered] = useState(false);
  const [ripple, setRipple] = useState(null);

  /* 3D TILT */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useTransform(my, [-80, 80], [5, -5]);
  const rotateY = useTransform(mx, [-80, 80], [-5, 5]);

  /* SPOTLIGHT */
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);

  const spotBg = useTransform(
    [spotX, spotY],
    ([sx, sy]) =>
      hovered
        ? `radial-gradient(
            260px circle at ${sx}% ${sy}%,
            rgba(225,10,111,0.03) 0%,
            transparent 65%
          ), #ffffff`
        : "#ffffff"
  );

  function onMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();

    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    mx.set(cx - rect.width / 2);
    my.set(cy - rect.height / 2);

    spotX.set((cx / rect.width) * 100);
    spotY.set((cy / rect.height) * 100);
  }

  function onMouseEnter(e) {
    setHovered(true);

    const rect = cardRef.current.getBoundingClientRect();

    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      id: Date.now(),
    });
  }

  function onMouseLeave() {
    mx.set(0);
    my.set(0);

    animate(spotX, 50, { duration: 0.5 });
    animate(spotY, 50, { duration: 0.5 });

    setHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
    >
      {/* BORDER */}
      <div
        style={{
          borderRadius: 22,
          padding: 1.5,
          background: hovered ? "#E10A6F" : "#D4D4D8",
          transition: "0.3s",
          height: "100%",
        }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            background: "rgba(255,255,255,0.96)",
            fontFamily: "var(--font-main)",
          }}
          animate={{
            boxShadow: hovered
              ? "0 28px 72px rgba(225,10,111,0.12)"
              : "0 2px 12px rgba(0,0,0,0.06)",
          }}
          transition={{ duration: 0.3 }}
          className="relative rounded-[20px] p-7 pt-[92px] flex flex-col gap-4 h-full overflow-hidden"
        >
          {/* SPOTLIGHT */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 20,
              background: spotBg,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* RIPPLE */}
          {ripple && (
            <motion.div
              key={ripple.id}
              initial={{
                width: 0,
                height: 0,
                opacity: 0.18,
              }}
              animate={{
                width: 520,
                height: 520,
                opacity: 0,
              }}
              transition={{
                duration: 0.75,
                ease: "easeOut",
              }}
              onAnimationComplete={() => setRipple(null)}
              style={{
                position: "absolute",
                borderRadius: "50%",
                background: "rgba(225,10,111,0.08)",
                top: ripple.y,
                left: ripple.x,
                transform: "translate(-50%,-50%)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
          )}

          {/* TOP SHIMMER */}
          <motion.div
            animate={{
              scaleX: hovered ? 1 : 0,
              opacity: hovered ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background:
                "linear-gradient(90deg, transparent 0%, #E10A6F 35%, #B90958 65%, transparent 100%)",
              transformOrigin: "left",
              borderRadius: "20px 20px 0 0",
              zIndex: 8,
            }}
          />

          {/* BOTTOM BAR */}
          <motion.div
            animate={{
              width: hovered ? "100%" : "0%",
            }}
            transition={{ duration: 0.45 }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 3,
              background:
                "linear-gradient(90deg, #E10A6F, #B90958)",
              borderRadius: "0 0 20px 20px",
              zIndex: 8,
            }}
          />

          {/* WATERMARK */}
          <motion.span
            animate={{
              color: hovered
                ? "rgba(225,10,111,0.05)"
                : "rgba(0,0,0,0.03)",
            }}
            transition={{ duration: 0.35 }}
            style={{
              position: "absolute",
              bottom: 16,
              left: 22,
              fontSize: "clamp(3.5rem,6vw,5rem)",
              fontWeight: 900,
              lineHeight: 1,
              fontFamily: "'Playfair Display', serif",
              userSelect: "none",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            {num}
          </motion.span>

          {/* PINK SHAPE */}
          <motion.div
            animate={{
              scale: hovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.35 }}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 110,
              height: 110,
              borderBottomLeftRadius: 90,
              background: "#E10A6F",
              zIndex: 2,
            }}
          />

          {/* HIGHLIGHT */}
          <motion.div
            animate={{
              opacity: hovered ? 1 : 0,
            }}
            transition={{ duration: 0.35 }}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 110,
              height: 110,
              borderBottomLeftRadius: 90,
              background:
                "radial-gradient(circle at 70% 20%, rgba(255,255,255,0.28), transparent 55%)",
              zIndex: 3,
            }}
          />

          {/* PARTICLES */}
          <Particles active={hovered} />

          {/* ICON */}
          <motion.div
            animate={{
              y: hovered ? -4 : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              top: 18,
              right: 18,
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              boxShadow: hovered
                ? "0 10px 28px rgba(225,10,111,0.24)"
                : "0 2px 12px rgba(0,0,0,0.1)",
            }}
          >
            <motion.div
              animate={{
                rotate: hovered ? [0, -10, 8, -3, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <Icon size={24} strokeWidth={1.8} color="#E10A6F" />
            </motion.div>
          </motion.div>

          {/* TAG */}
          <motion.span
            animate={{
              background: hovered ? "#FDE6F0" : "#F3F4F6",
              color: hovered ? "#B90958" : "#6B7280",
            }}
            transition={{ duration: 0.25 }}
            style={{
              position: "relative",
              zIndex: 10,
              alignSelf: "flex-start",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "5px 11px",
              borderRadius: 999,
            }}
          >
            {tag}
          </motion.span>

          {/* TITLE */}
          <motion.h3
            animate={{
              x: hovered ? 2 : 0,
            }}
            transition={{ duration: 0.25 }}
            style={{
              position: "relative",
              zIndex: 10,
              fontSize: 18,
              fontWeight: 700,
              lineHeight: 1.35,
              color: "#0F172A",
              margin: 0,
            }}
          >
            {title}
          </motion.h3>

          {/* DESC */}
          <p
            style={{
              position: "relative",
              zIndex: 10,
              fontSize: 13.5,
              lineHeight: 1.8,
              color: "#475569",
              margin: 0,
              flex: 1,
            }}
          >
            {desc}
          </p>

          {/* FOOTER */}
          <div style={{ position: "relative", zIndex: 10 }}>
            <motion.div
              animate={{
                background: hovered
                  ? "linear-gradient(90deg, rgba(225,10,111,0.18), transparent)"
                  : "#E5E7EB",
              }}
              transition={{ duration: 0.3 }}
              style={{
                height: 1,
                width: "100%",
                marginBottom: 12,
              }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  animate={{
                    background: hovered
                      ? d === 0
                        ? "#E10A6F"
                        : d === 1
                        ? "rgba(225,10,111,0.4)"
                        : "rgba(225,10,111,0.16)"
                      : "#D1D5DB",
                    width: hovered && d === 0 ? 24 : 7,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: d * 0.05,
                  }}
                  style={{
                    height: 7,
                    borderRadius: 99,
                    display: "inline-block",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────────── */
 function WhyAbroad() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg,#fff8fb 0%,#ffffff 50%,#fff5f9 100%)",
        }}
      />

      {/* TOP GLOW */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px]"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(225,10,111,0.08) 0%, transparent 68%)",
          filter: "blur(48px)",
        }}
      />

      {/* GRID DOTS */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(225,10,111,0.06) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.25,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">

            <div
              style={{
                height: 1,
                width: 32,
                background:
                  "linear-gradient(90deg, transparent, #E10A6F)",
              }}
            />

            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#E10A6F",
              }}
            >
              Why Go Global
            </span>

            <div
              style={{
                height: 1,
                width: 32,
                background:
                  "linear-gradient(90deg, #E10A6F, transparent)",
              }}
            />

          </div>

          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 700,
              color: "#121212",
              lineHeight: 1.15,
            }}
          >
            Why Study <span style={{ color: "#E10A6F" }}>Abroad</span>
          </h2>

          <p
            style={{
              marginTop: 16,
              maxWidth: 500,
              marginInline: "auto",
              fontSize: 14,
              lineHeight: 1.8,
              color: "#64748B",
            }}
          >
            Discover global opportunities and build a future beyond borders
            with expert guidance every step of the way.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((item, i) => (
            <FeatureCard key={i} {...item} index={i} />
          ))}
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
      `}</style>
    </section>
  );
}

export default WhyAbroad;
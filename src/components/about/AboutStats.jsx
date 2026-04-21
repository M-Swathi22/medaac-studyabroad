import { motion } from "framer-motion";
import {
  Globe2,
  GraduationCap,
  BadgeCheck,
  Users,
} from "lucide-react";
import { useState } from "react";

/* ─── DATA ─── */
const stats = [
  { icon: Globe2, value: "15+", label: "Countries" },
  { icon: GraduationCap, value: "500+", label: "Universities" },
  { icon: BadgeCheck, value: "95%", label: "Success Rate" },
  { icon: Users, value: "2K+", label: "Students Placed" },
];

/* ─── Floating Orb ─── */
function Orb({ style }) {
  return (
    <div className="absolute rounded-full pointer-events-none" style={style} />
  );
}

function AboutStats() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className="relative py-20 md:py-24 overflow-hidden"
      style={{
        backgroundColor: "var(--dark)",
        fontFamily: "var(--font-main)",
      }}
    >

      {/* BACKGROUND (unchanged) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, var(--dark-light) 0%, var(--dark) 35%, var(--dark-light) 65%, var(--dark) 100%)",
        }}
      />

      <Orb
        style={{
          top: "-140px",
          left: "-100px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--primary) 18%, transparent) 0%, transparent 70%)",
        }}
      />

      <Orb
        style={{
          bottom: "-120px",
          right: "-80px",
          width: "420px",
          height: "420px",
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--primary) 12%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--white)" }}>
            Our Impact in Numbers
          </h2>
          <p
            className="mt-3 text-sm md:text-base"
            style={{
              color: "color-mix(in srgb, var(--white) 50%, transparent)",
            }}
          >
            Real results backed by consistent performance
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            const isActive = hovered === i;

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-6 text-center"
                style={{
                  background:
                    "color-mix(in srgb, var(--white) 5%, transparent)",
                  border:
                    "1px solid color-mix(in srgb, var(--white) 10%, transparent)",
                  backdropFilter: "blur(8px)",

                  /* 🔥 CORE EFFECT */
                  transform: isActive
                    ? "translateY(-10px) scale(1.04)"
                    : "scale(1)",
                  opacity:
                    hovered !== null && !isActive ? 0.6 : 1,

                  boxShadow: isActive
                    ? "0 25px 60px color-mix(in srgb, var(--primary) 35%, transparent)"
                    : "0 6px 18px rgba(0,0,0,0.2)",

                  transition: "all 0.35s ease",
                }}
              >

                {/* ICON */}
                <div
                  className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{
                    background: isActive
                      ? "color-mix(in srgb, var(--primary) 30%, transparent)"
                      : "color-mix(in srgb, var(--primary) 15%, transparent)",
                  }}
                >
                  <Icon size={20} style={{ color: "var(--primary)" }} />
                </div>

                {/* VALUE */}
                <h3
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{
                    color: "var(--white)",
                    transform: isActive ? "scale(1.08)" : "scale(1)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {s.value}
                </h3>

                {/* LABEL */}
                <p
                  className="text-xs md:text-sm mt-2"
                  style={{
                    color:
                      "color-mix(in srgb, var(--white) 45%, transparent)",
                  }}
                >
                  {s.label}
                </p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutStats;

import { motion } from "framer-motion";
import {
  Building2,
  UtensilsCrossed,
  ShieldCheck,
  Globe2,
  Users,
} from "lucide-react";

const ICONS = [Building2, UtensilsCrossed, ShieldCheck, Globe2];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

 function StudentLife({
  country,
  title,
  description,
  points,
  image,
}) {
  return (
    <section
      style={{
        padding: "110px 20px",
        background: `
          radial-gradient(
            circle at top left,
            rgba(225,10,111,0.10),
            transparent 30%
          ),
          radial-gradient(
            circle at bottom right,
            rgba(225,10,111,0.08),
            transparent 28%
          ),
          linear-gradient(
            135deg,
            var(--dark) 0%,
            var(--dark-light) 100%
          )
        `,
        fontFamily: "var(--font-main)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        .sl-bento {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 16px;
          align-items: start;
          position: relative;
          z-index: 2;
        }

        /* Background glow elements */
        .sl-bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.18;
          pointer-events: none;
        }

        .sl-bg-glow.one {
          width: 280px;
          height: 280px;
          background: var(--primary);
          top: -60px;
          left: -80px;
        }

        .sl-bg-glow.two {
          width: 240px;
          height: 240px;
          background: var(--primary-dark);
          bottom: -60px;
          right: -60px;
        }

        /* ── Left column ── */
        .sl-left {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sl-cell-img {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          aspect-ratio: 1 / 1;
          width: 100%;
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        }

        .sl-cell-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .sl-cell-img:hover img {
          transform: scale(1.04);
        }

        .sl-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10,10,10,0.45) 0%,
            transparent 60%
          );
          pointer-events: none;
        }

        /* Stat card */
        .sl-stat-card {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 24px 26px;
          display: flex;
          align-items: center;
          gap: 18px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.18);
        }

        .sl-stat-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: rgba(225,10,111,0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          flex-shrink: 0;
        }

        /* ── Right column ── */
        .sl-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sl-cell-text {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          padding: 40px 38px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 18px 40px rgba(0,0,0,0.18);
        }

        .sl-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(225,10,111,0.12);
          border: 1px solid rgba(225,10,111,0.25);
          border-radius: 999px;
          padding: 7px 16px;
          margin-bottom: 22px;
          width: fit-content;
          backdrop-filter: blur(8px);
        }

        .sl-cell-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .sl-pt {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 28px 26px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          cursor: default;
          transition:
            border-color 0.28s ease,
            background 0.28s ease,
            transform 0.3s cubic-bezier(0.22,1,0.36,1),
            box-shadow 0.3s ease;
        }

        .sl-pt:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(225,10,111,0.38);
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(225,10,111,0.12);
        }

        .sl-pt:hover .sl-pt-icon {
          background: var(--primary) !important;
          color: #fff !important;
        }

        .sl-pt-icon {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: rgba(225,10,111,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          flex-shrink: 0;
          transition: background 0.28s ease, color 0.28s ease;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .sl-bento {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 520px) {
          .sl-cell-points {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Background Glow */}
      <div className="sl-bg-glow one" />
      <div className="sl-bg-glow two" />

      <div className="sl-bento">

        {/* ══ LEFT COLUMN ══ */}
        <div className="sl-left">

          {/* Image */}
          <motion.div
            className="sl-cell-img"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={image} alt={`Student life in ${country}`} />
            <div className="sl-img-overlay" />
          </motion.div>

          {/* Stat Card */}
          <motion.div className="sl-stat-card" {...fadeUp(0.15)}>
            <div className="sl-stat-icon">
              <Users size={24} />
            </div>

            <div>
              <p
                style={{
                  color: "#fff",
                  fontSize: "26px",
                  fontWeight: "800",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  margin: "0 0 6px",
                  fontFamily: "var(--font-main)",
                }}
              >
                1000+
              </p>

              <p
                style={{
                  color: "rgba(255,255,255,0.56)",
                  fontSize: "13.5px",
                  lineHeight: "1.55",
                  margin: 0,
                  fontFamily: "var(--font-main)",
                }}
              >
                Indian students currently pursuing MBBS in {country}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ══ RIGHT COLUMN ══ */}
        <div className="sl-right">

          {/* Text */}
          <motion.div className="sl-cell-text" {...fadeUp(0.1)}>
            <div className="sl-eyebrow">
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  flexShrink: 0,
                }}
              />

              <span
                style={{
                  color: "var(--primary)",
                  fontSize: "11px",
                  fontWeight: "600",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-main)",
                }}
              >
                Student Life · {country}
              </span>
            </div>

            <h2
              style={{
                color: "#fff",
                fontSize: "clamp(28px, 3.5vw, 46px)",
                fontWeight: "700",
                lineHeight: "1.1",
                letterSpacing: "-0.025em",
                margin: "0 0 18px",
                fontFamily: "var(--font-main)",
              }}
            >
              {title}
            </h2>

            <div
              style={{
                width: "40px",
                height: "3px",
                borderRadius: "2px",
                background: "var(--primary)",
                marginBottom: "20px",
                opacity: 0.8,
              }}
            />

            <p
              style={{
                color: "rgba(255,255,255,0.60)",
                fontSize: "15.5px",
                lineHeight: "1.95",
                margin: 0,
                fontFamily: "var(--font-main)",
              }}
            >
              {description}
            </p>
          </motion.div>

          {/* Point Cards */}
          <div className="sl-cell-points">
            {points.map((item, index) => {
              const Icon = ICONS[index % ICONS.length];

              return (
                <motion.div
                  key={index}
                  className="sl-pt"
                  {...fadeUp(0.18 + index * 0.07)}
                >
                  <div className="sl-pt-icon">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3
                      style={{
                        color: "#fff",
                        fontSize: "15.5px",
                        fontWeight: "700",
                        lineHeight: "1.35",
                        margin: "0 0 8px",
                        fontFamily: "var(--font-main)",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        color: "rgba(255,255,255,0.55)",
                        fontSize: "13.5px",
                        lineHeight: "1.8",
                        margin: 0,
                        fontFamily: "var(--font-main)",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
export default StudentLife;
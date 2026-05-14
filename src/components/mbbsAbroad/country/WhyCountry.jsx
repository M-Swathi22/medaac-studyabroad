import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  Wallet,
  Hospital,
  BookOpen,
  Users,
  ShieldCheck,
  Award,
} from "lucide-react";

const ICONS = [
  GraduationCap,
  Globe2,
  Wallet,
  Hospital,
  BookOpen,
  Users,
  ShieldCheck,
  Award,
];

const ACCENTS = [
  "var(--primary)",
  "var(--primary-dark)",
  "#f03b8c",
  "#d10867",
  "var(--primary)",
  "var(--primary-dark)",
  "#f03b8c",
  "#d10867",
];

 function WhyCountry({
  country,
  title,
  description,
  benefits,
}) {
  return (
    <section
      style={{
        padding: "110px 20px",
        background: "var(--light)",
        fontFamily: "var(--font-main)",
        overflow: "hidden",
      }}
    >
      <style>{`
        /* ── Grid ── */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        @media (max-width: 1100px) {
          .why-grid { grid-template-columns: repeat(3, 1fr); gap: 28px; }
        }
        @media (max-width: 780px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 480px) {
          .why-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            max-width: 340px;
            margin-left: auto;
            margin-right: auto;
          }
        }

        /* ── Card ── */
        .infocard {
          position: relative;
          background: var(--white);
          border-radius: 14px 14px 0 0;
          min-height: 320px;
          padding: 0 22px 26px;
          overflow: visible;
          cursor: pointer;

          clip-path: polygon(
            0 0,
            100% 0,
            100% 87%,
            50% 100%,
            0 87%
          );

          box-shadow:
            0 8px 20px rgba(0, 0, 0, 0.06),
            0 2px 4px rgba(0, 0, 0, 0.04);

          transition:
            transform 0.42s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.42s ease;
        }

        /* ── Hover: lift + pink glow shadow only ── */
        .infocard:hover {
          transform: translateY(-16px) scale(1.03);
          box-shadow:
            0 36px 64px rgba(225, 10, 111, 0.20),
            0 16px 32px rgba(225, 10, 111, 0.14),
            0 0 0 2px rgba(225, 10, 111, 0.14);
        }

        /* ── Active tap (mobile) ── */
        .infocard:active {
          transform: translateY(-6px) scale(1.01);
          transition-duration: 0.15s;
        }

        /* ── Side paper folds (child divs) ── */
        .fold-left,
        .fold-right {
          position: absolute;
          top: 14px;
          width: 16px;
          height: 85%;
          background: #edf0f5;
          z-index: -1;
          border-radius: 10px;
          transition:
            background 0.35s ease,
            transform 0.42s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .fold-left  { left: -8px;  transform: skewY(4deg); }
        .fold-right { right: -8px; transform: skewY(-4deg); }

        .infocard:hover .fold-left {
          background: #dde1ec;
          transform: skewY(4deg) translateY(-5px);
        }
        .infocard:hover .fold-right {
          background: #dde1ec;
          transform: skewY(-4deg) translateY(-5px);
        }

        /* ── Top badge ── */
        .top-badge {
          position: relative;
          width: 108px;
          height: 120px;
          margin: 0 auto;
          border-radius: 0 0 28px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow:
            inset 0 2px 0 rgba(255, 255, 255, 0.25),
            0 12px 20px rgba(225, 10, 111, 0.18);
          transition:
            transform 0.42s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.42s ease;
          z-index: 1;
        }

        /* Pulse ring on hover */
        @keyframes pulseRing {
          0%   { box-shadow: inset 0 2px 0 rgba(255,255,255,0.35), 0 20px 36px rgba(225,10,111,0.38), 0 0 0 0   rgba(225,10,111,0.42); }
          70%  { box-shadow: inset 0 2px 0 rgba(255,255,255,0.35), 0 20px 36px rgba(225,10,111,0.38), 0 0 0 14px rgba(225,10,111,0); }
          100% { box-shadow: inset 0 2px 0 rgba(255,255,255,0.35), 0 20px 36px rgba(225,10,111,0.38), 0 0 0 0   rgba(225,10,111,0); }
        }

        .infocard:hover .top-badge {
          transform: scale(1.1) translateY(3px);
          animation: pulseRing 1.5s ease-out infinite;
        }

        .top-badge-tab-left,
        .top-badge-tab-right {
          position: absolute;
          top: -1px;
          width: 15px;
          height: 14px;
          border-radius: 4px 4px 0 0;
        }
        .top-badge-tab-left  { left: -2px;  background: rgba(255,255,255,0.30); }
        .top-badge-tab-right { right: -2px; background: rgba(0,0,0,0.08); }

        .step-text {
          color: rgba(255, 255, 255, 0.88);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          line-height: 1;
          font-family: var(--font-main);
          transition: letter-spacing 0.35s ease;
        }

        .infocard:hover .step-text {
          letter-spacing: 2.2px;
        }

        .step-number {
          color: var(--white);
          font-size: 42px;
          font-weight: 800;
          line-height: 1;
          margin-top: 4px;
          letter-spacing: -0.03em;
          font-family: var(--font-main);
          transition: transform 0.35s ease;
        }

        .infocard:hover .step-number {
          transform: scale(1.1);
        }

        /* ── Arrow ── */
        .mini-arrow {
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          margin: 22px auto 18px;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .infocard:hover .mini-arrow {
          transform: translateX(7px) scale(1.35);
        }

        /* ── Card text — NO color changes ── */
        .card-title {
          color: var(--dark);
          font-size: 18px;
          font-weight: 700;
          line-height: 1.45;
          text-align: center;
          margin-bottom: 12px;
          font-family: var(--font-main);
          transition: transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .infocard:hover .card-title {
          transform: translateY(-3px);
        }

        .card-desc {
          color: var(--gray);
          font-size: 14px;
          line-height: 1.9;
          text-align: center;
          margin: 0;
          font-family: var(--font-main);
        }

        /* ── Bottom icon ── */
        .bottom-icon {
          margin-top: 24px;
          display: flex;
          justify-content: center;
        }

        .bottom-icon svg {
          stroke-width: 1.8;
          transition:
            transform 0.42s cubic-bezier(0.34, 1.56, 0.64, 1),
            filter 0.38s ease;
        }

        .infocard:hover .bottom-icon svg {
          transform: scale(1.28) rotate(-8deg) translateY(-2px);
          filter: drop-shadow(0 4px 10px rgba(225, 10, 111, 0.40));
        }

        /* ── Mobile header adjustments ── */
        @media (max-width: 600px) {
          .why-section-header {
            margin-bottom: 48px !important;
          }
          .why-section-header p {
            font-size: 15px !important;
          }
        }

        /* ── Touch devices ── */
        @media (hover: none) {
          .infocard:hover {
            transform: none;
            box-shadow:
              0 8px 20px rgba(0, 0, 0, 0.06),
              0 2px 4px rgba(0, 0, 0, 0.04);
          }

          .infocard:hover .top-badge      { transform: none; animation: none; }
          .infocard:hover .card-title     { transform: none; }
          .infocard:hover .mini-arrow     { transform: none; }
          .infocard:hover .bottom-icon svg{ transform: none; filter: none; }
          .infocard:hover .fold-left      { background: #edf0f5; transform: skewY(4deg); }
          .infocard:hover .fold-right     { background: #edf0f5; transform: skewY(-4deg); }

          .infocard:active {
            transform: translateY(-6px) scale(1.01);
            box-shadow:
              0 14px 28px rgba(225, 10, 111, 0.14),
              0 6px 12px rgba(225, 10, 111, 0.10);
          }
        }
      `}</style>

      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        {/* ── Header ── */}
        <div
          className="why-section-header"
          style={{
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 72px",
          }}
        >
          <span
            style={{
              color: "var(--primary)",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontFamily: "var(--font-main)",
            }}
          >
            Why Choose{" "}
            <span style={{ color: "#f03b8c", fontWeight: "800" }}>
              {country}
            </span>
          </span>

          <h2
            style={{
              color: "var(--dark)",
              fontSize: "clamp(34px,4vw,58px)",
              lineHeight: "1.12",
              fontWeight: "800",
              marginTop: "18px",
              marginBottom: "18px",
              letterSpacing: "-0.03em",
              fontFamily: "var(--font-main)",
            }}
          >
            {title}
          </h2>

          <p
            style={{
              color: "var(--gray)",
              fontSize: "16px",
              lineHeight: "1.9",
              margin: 0,
              fontFamily: "var(--font-main)",
            }}
          >
            {description}
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="why-grid">
          {benefits.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            const accent = ACCENTS[index % ACCENTS.length];

            return (
              <motion.div
                key={index}
                className="infocard"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >
                {/* Paper fold sides */}
                <div className="fold-left" />
                <div className="fold-right" />

                {/* Top Badge */}
                <div
                  className="top-badge"
                  style={{
                    background: `linear-gradient(180deg, ${accent} 0%, var(--primary-dark) 100%)`,
                  }}
                >
                  <div className="top-badge-tab-left" />
                  <div className="top-badge-tab-right" />
                  <span className="step-text">STEP</span>
                  <span className="step-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Arrow */}
                <div
                  className="mini-arrow"
                  style={{ borderLeft: `10px solid ${accent}` }}
                />

                {/* Content */}
                <div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                </div>

                {/* Icon */}
                <div className="bottom-icon">
                  <Icon size={34} color={accent} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyCountry;
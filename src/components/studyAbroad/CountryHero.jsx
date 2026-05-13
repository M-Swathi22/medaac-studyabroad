import { motion } from "framer-motion";
import { GraduationCap, Users, Globe2, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

export default function CountryHero({ country }) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        fontFamily: "var(--font-main)",
      }}
    >
      <style>{`
        /* ── Floating particles ── */
        @keyframes floatUp {
          0%   { transform: translateY(0px); opacity: 0; }
          20%  { opacity: 0.5; }
          80%  { opacity: 0.2; }
          100% { transform: translateY(-100px); opacity: 0; }
        }

        .hero-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--primary);
          animation: floatUp linear infinite;
          pointer-events: none;
        }

        /* ── Stat card ── */
        .stat-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          border-radius: 14px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.10);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          cursor: default;
          position: relative;
          overflow: hidden;
          transition:
            background 0.35s ease,
            border-color 0.35s ease,
            transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.38s ease;
        }

        .stat-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(225,10,111,0.08) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .stat-card:hover {
          background: rgba(255,255,255,0.10);
          border-color: rgba(225,10,111,0.35);
          transform: translateX(-6px);
          box-shadow: 0 8px 32px rgba(225,10,111,0.18), inset 0 1px 0 rgba(255,255,255,0.12);
        }

        .stat-card:hover::before { opacity: 1; }

        .stat-bar {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%) scaleY(0);
          width: 3px;
          height: 60%;
          background: linear-gradient(to bottom, var(--primary), transparent);
          border-radius: 0 2px 2px 0;
          transition: transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .stat-card:hover .stat-bar { transform: translateY(-50%) scaleY(1); }

        .stat-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(225,10,111,0.12);
          border: 1px solid rgba(225,10,111,0.20);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition:
            background 0.35s ease,
            border-color 0.35s ease,
            transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .stat-card:hover .stat-icon-wrap {
          background: rgba(225,10,111,0.22);
          border-color: rgba(225,10,111,0.40);
          transform: scale(1.1) rotate(-5deg);
        }

        /* ── Buttons ── */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 34px;
          border-radius: 14px;
          background: var(--primary);
          color: var(--white);
          font-size: 15px;
          font-weight: 600;
          font-family: var(--font-main);
          border: none;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 12px 32px rgba(225,10,111,0.32), inset 0 1px 0 rgba(255,255,255,0.2);
          transition:
            background 0.25s ease,
            transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.35s ease;
        }

        .btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-3px);
          box-shadow: 0 18px 42px rgba(225,10,111,0.42), inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .btn-primary:active { transform: translateY(-1px); }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 34px;
          border-radius: 14px;
          background: rgba(255,255,255,0.05);
          color: var(--white);
          font-size: 15px;
          font-weight: 600;
          font-family: var(--font-main);
          border: 1px solid rgba(255,255,255,0.16);
          cursor: pointer;
          text-decoration: none;
          backdrop-filter: blur(10px);
          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .btn-ghost:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.28);
          transform: translateY(-3px);
        }

        .btn-ghost:active { transform: translateY(-1px); }

        /* ── Trust strip items ── */
        .trust-item {
          display: flex;
          align-items: center;
          gap: 10px;
          transition: opacity 0.25s ease;
        }

        .trust-item:hover { opacity: 0.85; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .hero-main-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-stats-col {
            flex-direction: row !important;
            flex-wrap: wrap;
            min-width: unset !important;
          }
          .stat-card {
            flex: 1 1 180px;
          }
          .stat-card:hover {
            transform: translateY(-4px) translateX(0) !important;
          }
        }

        @media (max-width: 600px) {
          .hero-content-pad {
            padding: 0 1.25rem 3.5rem !important;
          }
          .hero-stats-col {
            flex-direction: column !important;
          }
          .stat-card { flex: unset; }
          .hero-cta-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .btn-primary,
          .btn-ghost {
            width: 100%;
            justify-content: center;
          }
          .trust-strip {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
          }
        }
      `}</style>

      {/* ── BACKGROUND ── */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src={country.image}
          alt={country.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "scale(1.05)",
          }}
        />
        {/* Main dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.72) 40%, rgba(10,10,10,0.18) 100%)",
          }}
        />
        {/* Side vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(10,10,10,0.5) 0%, transparent 55%, rgba(10,10,10,0.25) 100%)",
          }}
        />
        {/* Pink tint bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            background: "linear-gradient(to top, rgba(225,10,111,0.05) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ── PARTICLES ── */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="hero-particle"
          style={{
            left: `${14 + i * 14}%`,
            bottom: `${8 + (i % 3) * 6}%`,
            animationDuration: `${4.5 + i * 1.1}s`,
            animationDelay: `${i * 0.9}s`,
            width: i % 2 === 0 ? "3px" : "2px",
            height: i % 2 === 0 ? "3px" : "2px",
          }}
        />
      ))}

      {/* ── CONTENT ── */}
      <div
        className="hero-content-pad"
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          padding: "0 2.5rem 5rem",
        }}
      >
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "2rem",
          }}
        >
          <img
            src={country.flag}
            alt={country.name}
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid rgba(255,255,255,0.18)",
            }}
          />
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", fontWeight: 400 }}>
            Study Destinations
          </span>
          <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "13px" }}>/</span>
          <span style={{ color: "var(--primary)", fontSize: "13px", fontWeight: 500 }}>
            {country.name}
          </span>
        </motion.div>

        {/* Main grid */}
        <div
          className="hero-main-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 260px",
            alignItems: "flex-end",
            gap: "3.5rem",
          }}
        >
          {/* ── LEFT ── */}
          <div>
            {/* NMC badge */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "9px 20px",
                borderRadius: "999px",
                background: "rgba(225,10,111,0.12)",
                border: "1px solid rgba(225,10,111,0.30)",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: "var(--white)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                  fontFamily: "var(--font-main)",
                }}
              >
                NMC &amp; WHO Approved Universities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.10 }}
              style={{
                color: "var(--white)",
                fontSize: "clamp(42px, 7vw, 82px)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                margin: "0 0 1.25rem",
                fontFamily: "var(--font-main)",
              }}
            >
              Study in{" "}
              <span
                style={{
                  color: "var(--primary)",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                {country.name}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.65 }}
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(to right, var(--primary), rgba(225,10,111,0.25))",
                    borderRadius: "2px",
                    transformOrigin: "left",
                    display: "block",
                  }}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.20 }}
              style={{
                color: "rgba(255,255,255,0.70)",
                fontSize: "clamp(15px, 1.6vw, 17px)",
                lineHeight: 1.85,
                maxWidth: "500px",
                margin: "0 0 2.2rem",
                fontWeight: 400,
                fontFamily: "var(--font-main)",
              }}
            >
              {country.description ||
                `Explore world-class universities, scholarships, and career pathways in ${country.name}. Trusted by thousands of students worldwide.`}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.30 }}
              className="hero-cta-row"
              style={{ display: "flex", gap: "14px", alignItems: "center", flexWrap: "wrap", marginBottom: "44px" }}
            >
              <a href="/contact" className="btn-primary">
                Free Counseling
                <ArrowRight size={18} strokeWidth={2.4} />
              </a>
              <a href="/mbbs-abroad" className="btn-ghost">
                Explore Other Countries
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="trust-strip"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "28px",
              }}
            >
              {[
                { icon: GraduationCap, text: "Globally Recognized Universities" },
                { icon: Globe2,        text: "English Medium Programs" },
                { icon: ShieldCheck,   text: "Complete Visa Assistance" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="trust-item">
                    <Icon size={20} color="var(--primary)" strokeWidth={1.8} />
                    <span
                      style={{
                        color: "rgba(255,255,255,0.75)",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "var(--font-main)",
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ── RIGHT: STAT CARDS ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="hero-stats-col"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              minWidth: "220px",
            }}
          >
            {[
              {
                icon: <GraduationCap size={19} color="var(--primary)" strokeWidth={1.9} />,
                value: `${country.universities}+`,
                label: "Universities",
              },
              {
                icon: <Users size={19} color="var(--primary)" strokeWidth={1.9} />,
                value: country.students,
                label: "International Students",
              },
              {
                icon: <Globe2 size={19} color="var(--primary)" strokeWidth={1.9} />,
                value: country.tuition,
                label: "Avg. Tuition / Year",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="stat-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.45 + i * 0.1 }}
              >
                <div className="stat-bar" />
                <div className="stat-icon-wrap">{stat.icon}</div>
                <div>
                  <div
                    style={{
                      color: "var(--white)",
                      fontSize: "clamp(22px, 2.8vw, 28px)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      fontFamily: "var(--font-main)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "13px",
                      marginTop: "3px",
                      fontWeight: 400,
                      fontFamily: "var(--font-main)",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          style={{
            marginTop: "3.5rem",
            height: "1px",
            background:
              "linear-gradient(to right, rgba(225,10,111,0.6), rgba(255,255,255,0.06), transparent)",
            transformOrigin: "left",
          }}
        />
      </div>
    </section>
  );
}
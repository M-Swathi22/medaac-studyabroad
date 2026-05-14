import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { STUDY_INDIA_DATA } from "../../data/studyIndiaData";

/* ─────────────────── AMBIENT BACKGROUND ─────────────────── */
function AmbientBg() {
  return (
    <div aria-hidden style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: "-20%", left: "50%",
        transform: "translateX(-50%)",
        width: "80vw", height: "70vw", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(225,10,111,0.055) 0%, rgba(225,10,111,0.02) 40%, transparent 70%)",
        animation: "bgDrift 24s ease-in-out infinite alternate",
      }} />
      <div style={{
        position: "absolute", top: "20%", right: "-18%",
        width: "50vw", height: "50vw", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(255,110,176,0.04) 0%, transparent 65%)",
        animation: "bgDrift 30s ease-in-out infinite alternate-reverse",
      }} />
      <div style={{
        position: "absolute", bottom: "0%", left: "-10%",
        width: "45vw", height: "45vw", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(225,10,111,0.038) 0%, transparent 65%)",
        animation: "bgDrift 20s ease-in-out infinite alternate",
        animationDelay: "6s",
      }} />
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.022 }}>
        <filter id="spNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#spNoise)" />
      </svg>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.018 }}>
        <defs>
          <pattern id="spDots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(225,10,111,1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#spDots)" />
      </svg>
    </div>
  );
}

/* ─────────────────── CITY CARD ─────────────────── */
const CITY_ICONS = ["🏙️", "🎓", "🏥", "🌆", "🏛️", "🌇", "🏫", "📍"];

function CityCard({ city, stateId, index }) {
  const [hovered, setHovered] = useState(false);
  const isFirst = index === 0;

  return (
    <Link
      to={`/study-india/${stateId}/${city.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", flexDirection: "column",
        textDecoration: "none",
        borderRadius: 28,
        position: "relative", overflow: "hidden",
        background: hovered ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.72)",
        border: hovered
          ? "1.5px solid rgba(225,10,111,0.32)"
          : "1.5px solid rgba(255,255,255,0.9)",
        boxShadow: hovered
          ? "0 32px 72px rgba(225,10,111,0.14), 0 12px 28px rgba(0,0,0,0.06), 0 0 0 1px rgba(225,10,111,0.06)"
          : "0 4px 24px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.03), 0 0 0 1px rgba(255,255,255,0.6)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        transform: hovered ? "translateY(-8px) scale(1.01)" : "translateY(0) scale(1)",
        transition: "all 0.42s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
        animation: `cardReveal 0.5s ${index * 0.07}s ease both`,
      }}
    >
      {/* Animated gradient top border */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: hovered ? 4 : 3,
        background: isFirst
          ? "linear-gradient(90deg, #E10A6F, #ff6eb0, #E10A6F)"
          : "linear-gradient(90deg, transparent 0%, rgba(225,10,111,0.5) 40%, rgba(255,110,176,0.7) 60%, transparent 100%)",
        backgroundSize: "200% 100%",
        animation: hovered ? "shimmerLine 2s linear infinite" : "none",
        opacity: hovered ? 1 : 0.55,
        transition: "height 0.3s, opacity 0.3s",
      }} />

      <div style={{ padding: "30px 28px 26px", display: "flex", flexDirection: "column", flex: 1 }}>

        {/* Top row: icon + badge */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>

          {/* Icon */}
          <div style={{ position: "relative", width: 58, height: 58 }}>
            <div style={{
              position: "absolute", inset: -4, borderRadius: 22,
              background: "radial-gradient(circle, rgba(225,10,111,0.18) 0%, transparent 70%)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.4s",
            }} />
            <div style={{
              width: 58, height: 58, borderRadius: 18,
              background: hovered
                ? "linear-gradient(145deg, rgba(225,10,111,0.14), rgba(255,110,176,0.08))"
                : "linear-gradient(145deg, rgba(225,10,111,0.07), rgba(255,110,176,0.04))",
              border: `1.5px solid ${hovered ? "rgba(225,10,111,0.24)" : "rgba(225,10,111,0.10)"}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 26,
              transition: "all 0.35s",
              transform: hovered ? "rotate(-4deg) scale(1.08)" : "rotate(0deg) scale(1)",
              position: "relative", zIndex: 1,
            }}>
              {CITY_ICONS[index % CITY_ICONS.length]}
            </div>
          </div>

          {/* Badge */}
          {isFirst ? (
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              background: "linear-gradient(135deg, #E10A6F, #ff6eb0)",
              borderRadius: 100, padding: "5px 13px",
              fontFamily: "var(--font-main)", fontSize: 10, fontWeight: 700,
              color: "#fff", letterSpacing: "0.10em", textTransform: "uppercase",
              boxShadow: "0 4px 14px rgba(225,10,111,0.35)",
            }}>
              ⭐ Popular
            </div>
          ) : (
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              background: "rgba(225,10,111,0.06)",
              border: "1px solid rgba(225,10,111,0.12)",
              borderRadius: 100, padding: "5px 13px",
              fontFamily: "var(--font-main)", fontSize: 10, fontWeight: 600,
              color: "var(--primary)", letterSpacing: "0.08em", textTransform: "uppercase",
            }}>
              📍 {city.collegeCount || "5+"} Colleges
            </div>
          )}
        </div>

        {/* City name */}
        <h3 style={{
          fontFamily: "var(--font-main)", fontSize: 20, fontWeight: 800,
          color: hovered ? "var(--primary)" : "var(--dark)",
          letterSpacing: "-0.025em", margin: "0 0 10px",
          lineHeight: 1.15,
          transition: "color 0.3s",
        }}>
          {city.name}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: "var(--font-main)", fontSize: 13.5,
          color: "var(--gray)", lineHeight: 1.7,
          margin: "0 0 24px", flex: 1, fontWeight: 400,
        }}>
          {city.description || "Top colleges available for direct admissions with expert guidance and guaranteed seats."}
        </p>

        {/* Footer */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          paddingTop: 18,
          borderTop: `1px solid ${hovered ? "rgba(225,10,111,0.10)" : "rgba(0,0,0,0.05)"}`,
          transition: "border-color 0.3s",
        }}>
          <span style={{
            fontFamily: "var(--font-main)", fontSize: 12.5,
            color: hovered ? "var(--primary)" : "var(--gray)",
            fontWeight: 600, display: "flex", alignItems: "center", gap: 6,
            transition: "color 0.3s",
          }}>
            <span style={{
              display: "inline-block", width: 6, height: 6, borderRadius: "50%",
              background: "var(--primary)",
              boxShadow: hovered ? "0 0 0 3px rgba(225,10,111,0.18)" : "none",
              transition: "box-shadow 0.3s",
            }} />
            Explore Colleges
          </span>

          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: hovered
              ? "linear-gradient(135deg, var(--primary), #ff6eb0)"
              : "rgba(225,10,111,0.07)",
            border: `1.5px solid ${hovered ? "transparent" : "rgba(225,10,111,0.14)"}`,
            color: hovered ? "#fff" : "var(--primary)",
            fontSize: 16, fontWeight: 700,
            boxShadow: hovered ? "0 6px 18px rgba(225,10,111,0.35)" : "none",
            transform: hovered ? "translateX(4px) rotate(-35deg)" : "translateX(0) rotate(0deg)",
            transition: "all 0.38s cubic-bezier(0.16, 1, 0.3, 1)",
          }}>
            →
          </div>
        </div>
      </div>

      {/* Bottom inner glow */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
        background: "linear-gradient(0deg, rgba(225,10,111,0.04) 0%, transparent 100%)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s",
        pointerEvents: "none",
        borderRadius: "0 0 28px 28px",
      }} />
    </Link>
  );
}

/* ─────────────────── NOT FOUND ─────────────────── */
function NotFound({ onBack }) {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 24,
      fontFamily: "var(--font-main)",
      background: "linear-gradient(145deg, #fff8fb 0%, #fdf2f7 50%, #fff5f0 100%)",
      textAlign: "center", padding: 24, position: "relative",
    }}>
      <AmbientBg />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          width: 80, height: 80, borderRadius: 24,
          background: "linear-gradient(135deg, rgba(225,10,111,0.10), rgba(255,110,176,0.07))",
          border: "1.5px solid rgba(225,10,111,0.16)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 34, margin: "0 auto 24px",
        }}>🗺️</div>
        <h2 style={{ fontFamily: "var(--font-main)", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: "var(--dark)", margin: "0 0 14px" }}>
          State Not Found
        </h2>
        <p style={{ fontFamily: "var(--font-main)", fontSize: 15, color: "var(--gray)", maxWidth: 340, lineHeight: 1.7, margin: "0 auto 32px" }}>
          We couldn't find this state. The link may be incorrect or the page has moved.
        </p>
        <button onClick={onBack} style={{
          padding: "14px 38px", borderRadius: 14, border: "none", cursor: "pointer",
          fontFamily: "var(--font-main)", fontSize: 14, fontWeight: 700,
          color: "#fff", background: "linear-gradient(135deg, var(--primary), #d4076a)",
          boxShadow: "0 10px 28px rgba(225,10,111,0.32)",
        }}>
          Go Back
        </button>
      </div>
    </div>
  );
}

/* ─────────────────── MAIN PAGE ─────────────────── */
 function StatePage() {
  const { stateId } = useParams();
  const navigate = useNavigate();
  const [heroVisible, setHeroVisible] = useState(false);

  const state = STUDY_INDIA_DATA.find((s) => s.id === stateId);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 60);
    return () => clearTimeout(t);
  }, [stateId]);

  if (!state) return <NotFound onBack={() => navigate(-1)} />;

  const cities = state.cities || [];

  return (
    <div style={{
      fontFamily: "var(--font-main)",
      minHeight: "100vh",
      position: "relative",
      /* warm ivory-blush — cards pop as crisp white against this */
      background: "linear-gradient(155deg, #fff9fb 0%, #fef4f8 25%, #fff8f2 55%, #fdf5fa 80%, #fff9fc 100%)",
    }}>

      <style>{`
        @keyframes bgDrift {
          0%   { transform: translateX(-50%) translate(0, 0) scale(1); }
          100% { transform: translateX(-50%) translate(2%, 5%) scale(1.07); }
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(22px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes shimmerLine {
          0%   { background-position: 0%   0%; }
          100% { background-position: 200% 0%; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1);    }
          50%       { opacity: .4; transform: scale(.75); }
        }
        @keyframes gradShift {
          0%   { background-position: 0%   50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0%   50%; }
        }
        * { box-sizing: border-box; }

        .sp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 22px;
        }
        @media (max-width: 860px) { .sp-grid { grid-template-columns: 1fr 1fr !important; gap: 16px; } }
        @media (max-width: 540px) { .sp-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .sp-pills { justify-content: center !important; } }
      `}</style>

      <AmbientBg />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ══════════════════ HERO ══════════════════ */}
        <section style={{ position: "relative", overflow: "hidden" }}>

          <div aria-hidden style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: `
              radial-gradient(ellipse 75% 65% at 50% -10%, rgba(225,10,111,0.07) 0%, transparent 55%),
              radial-gradient(ellipse 40% 30% at 92% 35%, rgba(185,9,88,0.04) 0%, transparent 55%)
            `,
          }} />

          <div style={{
            maxWidth: 820, margin: "0 auto",
            padding: "clamp(106px,11vw,152px) clamp(24px,5vw,48px) clamp(72px,9vw,108px)",
            display: "flex", flexDirection: "column", alignItems: "center",
            textAlign: "center", position: "relative", zIndex: 2,
          }}>

            {/* Breadcrumb nav */}
            <div style={{
              width: "100%", display: "flex", justifyContent: "center",
              marginBottom: 44,
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.5s, transform 0.5s",
            }}>
              <nav style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
                <button onClick={() => navigate(-1)} style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  background: "rgba(255,255,255,0.85)",
                  border: "1.5px solid rgba(225,10,111,0.14)",
                  color: "var(--primary)", padding: "10px 18px", borderRadius: 12,
                  fontFamily: "var(--font-main)", fontWeight: 700, fontSize: 13, cursor: "pointer",
                  backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                  transition: "all 0.22s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(225,10,111,0.08)"; e.currentTarget.style.transform = "translateX(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.85)"; e.currentTarget.style.transform = "translateX(0)"; }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3"
                    strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  Back
                </button>

                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  padding: "9px 16px", borderRadius: 11,
                  background: "rgba(255,255,255,0.82)",
                  border: "1.5px solid rgba(225,10,111,0.11)",
                  backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}>
                  <span style={{ fontFamily: "var(--font-main)", fontSize: 12, fontWeight: 600, color: "var(--gray)" }}>Study India</span>
                  <span style={{ color: "rgba(225,10,111,0.40)", fontSize: 14, lineHeight: 1 }}>›</span>
                  <span style={{ fontFamily: "var(--font-main)", fontSize: 12, fontWeight: 700, color: "var(--primary)" }}>{state.name}</span>
                </div>
              </nav>
            </div>

            {/* Live badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              padding: "8px 22px", borderRadius: 100,
              background: "rgba(255,255,255,0.80)",
              border: "1.5px solid rgba(225,10,111,0.14)",
              backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
              marginBottom: 26,
              boxShadow: "0 4px 18px rgba(225,10,111,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.52s 0.07s, transform 0.52s 0.07s",
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: "50%", display: "inline-block",
                background: "var(--primary)", flexShrink: 0,
                animation: "pulse 2.3s ease-in-out infinite",
                boxShadow: "0 0 0 3px rgba(225,10,111,0.18)",
              }} />
              <span style={{
                fontFamily: "var(--font-main)", fontSize: 11.5, fontWeight: 700,
                color: "var(--primary)", letterSpacing: "0.13em", textTransform: "uppercase",
              }}>
                {cities.length}+ Cities · Admissions Open 2025
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "var(--font-main)",
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.038em",
              color: "var(--dark)", margin: 0,
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.56s 0.12s, transform 0.56s 0.12s",
            }}>
              Study in{" "}
              <span style={{
                background: "linear-gradient(110deg, var(--primary) 0%, #ff6eb0 45%, var(--primary-dark) 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradShift 6s ease infinite",
                display: "inline-block",
              }}>
                {state.name}
              </span>
            </h1>

            {/* Accent line trio */}
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              margin: "22px auto 26px",
              opacity: heroVisible ? 1 : 0,
              transition: "opacity 0.5s 0.18s",
            }}>
              <div style={{ width: 24, height: 2, borderRadius: 2, background: "rgba(225,10,111,0.20)" }} />
              <div style={{ width: 56, height: 4, borderRadius: 4, background: "linear-gradient(90deg, var(--primary), #ff6eb0)" }} />
              <div style={{ width: 24, height: 2, borderRadius: 2, background: "rgba(225,10,111,0.20)" }} />
            </div>

            {/* Tagline */}
            <p style={{
              fontFamily: "var(--font-main)", color: "var(--gray)",
              lineHeight: 1.85, fontSize: "clamp(14.5px, 1.9vw, 17px)",
              maxWidth: 530, margin: "0 auto 40px",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.56s 0.22s, transform 0.56s 0.22s",
            }}>
              {state.tagline ||
                `Discover the best colleges across ${state.name} with expert counselling, guaranteed seats, and transparent admissions.`}
            </p>

            {/* Feature pills */}
            <div className="sp-pills" style={{
              display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.56s 0.28s, transform 0.56s 0.28s",
            }}>
              {[
                { icon: "🏙️", text: `${cities.length}+ Cities` },
                { icon: "✅", text: "MCI Approved" },
                { icon: "🎯", text: "Direct Admission" },
                { icon: "📞", text: "Free Counselling" },
                { icon: "🏆", text: "Top Ranked" },
              ].map(({ icon, text }) => (
                <span key={text} style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  padding: "10px 20px", borderRadius: 100,
                  background: "rgba(255,255,255,0.88)",
                  border: "1.5px solid rgba(225,10,111,0.11)",
                  backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
                  fontFamily: "var(--font-main)", fontSize: 13, fontWeight: 600,
                  color: "var(--dark)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
                  transition: "all 0.22s", cursor: "default",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(225,10,111,0.28)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 7px 20px rgba(225,10,111,0.10)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(225,10,111,0.11)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)";
                  }}
                >
                  <span style={{ fontSize: 15 }}>{icon}</span>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ DIVIDER ══════════════════ */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,72px)" }}>
          <div style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(225,10,111,0.10) 20%, rgba(225,10,111,0.16) 50%, rgba(225,10,111,0.10) 80%, transparent)",
          }} />
        </div>

        {/* ══════════════════ CITY SECTION ══════════════════ */}
        <section style={{
          maxWidth: 1280, margin: "0 auto",
          padding: "60px clamp(24px,5vw,72px) 110px",
        }}>

          {/* Section header */}
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 38, flexWrap: "wrap", gap: 14,
            animation: "fadeUp 0.5s 0.1s ease both",
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{
                  width: 4, height: 22, borderRadius: 4,
                  background: "linear-gradient(180deg, var(--primary), #ff6eb0)",
                }} />
                <span style={{
                  fontFamily: "var(--font-main)", fontSize: 11, fontWeight: 700,
                  color: "var(--primary)", letterSpacing: "0.16em", textTransform: "uppercase",
                }}>
                  Explore Cities
                </span>
              </div>
              <h2 style={{
                fontFamily: "var(--font-main)",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 900, letterSpacing: "-0.028em",
                color: "var(--dark)", margin: 0, lineHeight: 1.15,
              }}>
                Choose Your City
              </h2>
              <p style={{
                fontFamily: "var(--font-main)", fontSize: 14,
                color: "var(--gray)", marginTop: 8,
              }}>
                Select a city to discover colleges and available seats in {state.name}
              </p>
            </div>

            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "11px 20px", borderRadius: 14,
              background: "rgba(255,255,255,0.88)",
              border: "1.5px solid rgba(225,10,111,0.12)",
              backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{ fontFamily: "var(--font-main)", fontSize: 14, fontWeight: 700, color: "var(--dark)" }}>
                {cities.length} <span style={{ fontWeight: 500, color: "var(--gray)" }}>Cities</span>
              </span>
            </div>
          </div>

          {/* City grid */}
          {cities.length > 0 ? (
            <>
              <div className="sp-grid">
                {cities.map((city, i) => (
                  <CityCard key={city.id} city={city} stateId={state.id} index={i} />
                ))}
              </div>

              {/* CTA Banner */}
              <div style={{
                marginTop: 52, position: "relative", overflow: "hidden",
                borderRadius: 28,
                background: "rgba(255,255,255,0.82)",
                border: "1.5px solid rgba(225,10,111,0.12)",
                backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 8px 40px rgba(225,10,111,0.07), 0 2px 10px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
                padding: "36px 44px",
                display: "flex", alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap", gap: 26,
                animation: "fadeUp 0.5s 0.2s ease both",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: "8%", right: "8%", height: 2.5,
                  background: "linear-gradient(90deg, transparent, var(--primary), #ff6eb0, transparent)",
                  borderRadius: "0 0 3px 3px",
                }} />
                <div aria-hidden style={{
                  position: "absolute", right: -80, top: "50%", transform: "translateY(-50%)",
                  width: 280, height: 280, borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(225,10,111,0.06) 0%, transparent 70%)",
                  pointerEvents: "none",
                }} />

                <div style={{ position: "relative", zIndex: 1, maxWidth: 520 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{
                      width: 7, height: 7, borderRadius: "50%",
                      background: "var(--primary)", display: "inline-block",
                      animation: "pulse 2s ease-in-out infinite",
                      boxShadow: "0 0 0 3px rgba(225,10,111,0.16)",
                    }} />
                    <span style={{
                      fontFamily: "var(--font-main)", fontSize: 11, fontWeight: 700,
                      color: "var(--primary)", letterSpacing: "0.12em", textTransform: "uppercase",
                    }}>
                      Free · No Commitment · Instant Reply
                    </span>
                  </div>
                  <p style={{
                    fontFamily: "var(--font-main)",
                    fontSize: "clamp(17px, 2.2vw, 22px)",
                    fontWeight: 900, color: "var(--dark)",
                    margin: "0 0 8px", letterSpacing: "-0.022em", lineHeight: 1.25,
                  }}>
                    Not sure which city to choose?
                  </p>
                  <p style={{
                    fontFamily: "var(--font-main)", fontSize: 14,
                    color: "var(--gray)", margin: 0, lineHeight: 1.7,
                  }}>
                    Our expert counsellors will match you with the right college in {state.name} — based on your budget, scores, and goals.
                  </p>
                </div>

                <div style={{ position: "relative", zIndex: 1, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button style={{
                    display: "inline-flex", alignItems: "center", gap: 9,
                    padding: "14px 22px", borderRadius: 14,
                    border: "1.5px solid rgba(225,10,111,0.20)",
                    cursor: "pointer", whiteSpace: "nowrap",
                    fontFamily: "var(--font-main)", fontSize: 14, fontWeight: 700,
                    color: "var(--primary)", background: "rgba(225,10,111,0.06)",
                    transition: "all 0.24s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(225,10,111,0.12)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(225,10,111,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16, flexShrink: 0 }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M11.93 0C5.346 0 0 5.346 0 11.93c0 2.103.551 4.083 1.515 5.8L.051 23.948l6.38-1.634A11.862 11.862 0 0011.93 23.86c6.584 0 11.93-5.346 11.93-11.93S18.514 0 11.93 0zm0 21.785a9.813 9.813 0 01-4.999-1.369l-.358-.213-3.713.951.984-3.597-.234-.369A9.79 9.79 0 012.145 11.93c0-5.393 4.392-9.785 9.785-9.785 5.394 0 9.786 4.392 9.786 9.785 0 5.394-4.392 9.855-9.786 9.855z" />
                    </svg>
                    WhatsApp Us
                  </button>

                  <button style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    padding: "14px 30px", borderRadius: 14, border: "none",
                    cursor: "pointer", whiteSpace: "nowrap",
                    fontFamily: "var(--font-main)", fontSize: 14, fontWeight: 700,
                    color: "#fff",
                    background: "linear-gradient(135deg, var(--primary) 0%, #c8066b 100%)",
                    boxShadow: "0 10px 30px rgba(225,10,111,0.30), 0 2px 8px rgba(225,10,111,0.18)",
                    transition: "all 0.26s",
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "linear-gradient(135deg, var(--primary-dark) 0%, #a00558 100%)";
                      e.currentTarget.style.boxShadow = "0 16px 44px rgba(225,10,111,0.40)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "linear-gradient(135deg, var(--primary) 0%, #c8066b 100%)";
                      e.currentTarget.style.boxShadow = "0 10px 30px rgba(225,10,111,0.30), 0 2px 8px rgba(225,10,111,0.18)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Get Free Counselling
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div style={{
              textAlign: "center", padding: "72px 24px",
              background: "rgba(255,255,255,0.72)", borderRadius: 24,
              border: "1.5px solid rgba(225,10,111,0.09)",
              backdropFilter: "blur(14px)",
            }}>
              <div style={{ fontSize: 44, marginBottom: 18 }}>🏙️</div>
              <p style={{ fontFamily: "var(--font-main)", fontWeight: 700, fontSize: 17, color: "var(--dark)", margin: "0 0 8px" }}>
                Coming Soon
              </p>
              <p style={{ fontFamily: "var(--font-main)", color: "var(--gray)", fontSize: 14, margin: 0 }}>
                Cities for {state.name} will be listed shortly. Please check back soon.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
export default StatePage;
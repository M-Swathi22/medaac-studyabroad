import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { COURSE_DATA } from "../data/courseData";

const FULL_DETAIL = ["mbbs", "bsc-nursing", "bpt", "paramedical"];

const CATEGORY_LABELS = {
  medical: "Medical",
  nursing: "Nursing",
  paramedical: "Paramedical",
  engineering: "Engineering",
  allied: "Allied Health",
  bsc: "B.Sc",
  management: "Management",
};

/* ─── Floating particle background ─── */
function ParticleBg() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {[...Array(10)].map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            width: 3 + (i % 3) * 2,
            height: 3 + (i % 3) * 2,
            borderRadius: "50%",
            background: i % 2 === 0 ? "var(--primary)" : "rgba(225,10,111,0.25)",
            opacity: 0.06 + (i % 4) * 0.02,
            top: `${(i * 19 + 8) % 100}%`,
            left: `${(i * 29 + 12) % 100}%`,
            animation: `floatDot ${8 + (i % 3) * 3}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Back + Category Nav (above stat cards) ─── */
function CourseNavRow({ category, courseTitle, onBack }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 32,
        flexWrap: "wrap",
      }}
    >
      {/* ── Pink-style back button from CourseCategory ── */}
      <button
        onClick={onBack}
        className="cd-back-row-btn"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(225,10,111,0.08)",
          border: "1px solid rgba(225,10,111,0.2)",
          color: "var(--primary)",
          padding: "10px 20px",
          borderRadius: 12,
          fontFamily: "var(--font-main)",
          fontWeight: 600,
          fontSize: 14,
          cursor: "pointer",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: 16, height: 16 }}
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back
      </button>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "8px 16px",
          borderRadius: 8,
          background: "var(--primary-light)",
          border: "1.5px solid rgba(225,10,111,0.15)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-main)",
            fontSize: 12,
            fontWeight: 700,
            color: "var(--primary)",
            textTransform: "capitalize",
          }}
        >
          {CATEGORY_LABELS[category] || category?.replace(/-/g, " ")}
        </span>
        <span style={{ color: "var(--primary)", fontSize: 14, lineHeight: 1 }}>›</span>
        <span
          style={{
            fontFamily: "var(--font-main)",
            fontSize: 12,
            fontWeight: 600,
            color: "var(--primary-dark)",
          }}
        >
          {courseTitle}
        </span>
      </div>
    </div>
  );
}

/* ─── Stat Card ─── */
function StatCard({ label, value, icon, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      ref={ref}
      className="cd-stat-card"
      style={{
        position: "relative",
        padding: "28px 24px",
        borderRadius: 18,
        background:
          "linear-gradient(145deg, rgba(26,26,26,0.95) 0%, rgba(18,18,18,0.98) 100%)",
        border: "1px solid rgba(225,10,111,0.15)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.14)",
        backdropFilter: "blur(20px)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 3,
          background: "linear-gradient(90deg, var(--primary), #ff6eb0)",
          borderRadius: "18px 18px 0 0",
          transformOrigin: "left",
          animation: `slideRight 0.6s ease ${delay}ms forwards`,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -20, right: -20,
          width: 80, height: 80,
          borderRadius: "50%",
          background: "var(--primary)",
          opacity: 0.07,
          filter: "blur(18px)",
        }}
      />
      <div
        style={{
          width: 44, height: 44,
          borderRadius: 12,
          background: "rgba(225,10,111,0.12)",
          border: "1px solid rgba(225,10,111,0.20)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20,
          marginBottom: 16,
        }}
      >
        {icon}
      </div>
      <p
        style={{
          fontFamily: "var(--font-main)",
          color: "var(--primary)",
          fontSize: 10, fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: 7,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: "var(--font-main)",
          color: "#ffffff",
          fontSize: 14, fontWeight: 500,
          lineHeight: 1.6,
        }}
      >
        {value}
      </p>
    </div>
  );
}

/* ─── Section heading ─── */
function SectionHeading({ children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div
        style={{
          width: 36, height: 4, borderRadius: 4,
          background: "linear-gradient(90deg, var(--primary), #ff6eb0)",
          marginBottom: 12,
          transformOrigin: "left",
          animation: "slideRight 0.5s ease forwards",
        }}
      />
      <h2
        style={{
          fontFamily: "var(--font-main)",
          fontSize: "clamp(1.3rem, 2.8vw, 1.75rem)",
          fontWeight: 800,
          color: "var(--dark)",
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        {children}
      </h2>
    </div>
  );
}

/* ─── Highlight item ─── */
function HighlightItem({ text }) {
  return (
    <li
      className="cd-highlight-item"
      style={{
        display: "flex", alignItems: "flex-start", gap: 14,
        padding: "12px 16px",
        borderRadius: 10,
        background: "var(--white)",
        border: "1px solid var(--border)",
        marginBottom: 10,
        listStyle: "none",
        cursor: "default",
      }}
    >
      <span
        style={{
          flexShrink: 0, marginTop: 6,
          width: 8, height: 8,
          borderRadius: "50%",
          background: "var(--primary)",
          display: "inline-block",
          boxShadow: "0 0 0 3px rgba(225,10,111,0.12)",
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-main)",
          fontSize: 14.5, color: "#374151",
          lineHeight: 1.7,
        }}
      >
        {text}
      </span>
    </li>
  );
}

/* ─── Tab button ─── */
function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="cd-tab-btn"
      style={{
        fontFamily: "var(--font-main)",
        fontSize: 14, fontWeight: 600,
        padding: "10px 26px",
        borderRadius: 100,
        border: active ? "none" : "1.5px solid var(--border)",
        cursor: "pointer",
        background: active ? "var(--primary)" : "var(--white)",
        color: active ? "#fff" : "var(--gray)",
        boxShadow: active ? "0 6px 20px rgba(225,10,111,0.28)" : "none",
        letterSpacing: "0.01em",
      }}
    >
      {label}
    </button>
  );
}

/* ══════════════════════════════════════════════════
   FULL COURSE PAGE
══════════════════════════════════════════════════ */
function FullCoursePage({ selected, category, onBack }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Overview", "Top Destinations"];

  const OverviewContent = () => (
    <div style={{ animation: "fadeSlideIn 0.35s ease" }}>
      <div style={{ marginBottom: 48 }}>
        <SectionHeading>About This Course</SectionHeading>
        <p
          style={{
            fontFamily: "var(--font-main)",
            color: "#4B5563",
            lineHeight: 1.9,
            fontSize: 15.5,
            maxWidth: 740,
            borderLeft: "3px solid var(--primary)",
            paddingLeft: 18,
            marginLeft: 2,
          }}
        >
          {selected.about ||
            `${selected.desc} This program blends rigorous academic training with hands-on clinical exposure across globally accredited institutions. Graduates are recognised worldwide and can pursue careers or specialisations in any country.`}
        </p>
      </div>
      <div>
        <SectionHeading>Key Highlights</SectionHeading>
        <ul style={{ padding: 0, margin: 0 }}>
          {(
            selected.highlights || [
              "Globally recognised degree accepted in 100+ countries",
              "Affordable tuition compared to private colleges",
              "English-medium instruction at top-ranked universities",
              "No entrance exam required for international admissions",
              "Hostel accommodation & student support provided",
              "Internship & residency opportunities post-graduation",
            ]
          ).map((h, i) => (
            <HighlightItem key={i} text={h} />
          ))}
        </ul>
      </div>
    </div>
  );

  const DestinationsContent = () => (
    <div style={{ animation: "fadeSlideIn 0.35s ease" }}>
      <SectionHeading>Top Study Destinations</SectionHeading>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {(
          selected.destinations || [
            { country: "Russia",      note: "Largest MBBS destination globally" },
            { country: "Philippines", note: "US-pattern curriculum"              },
            { country: "Kazakhstan",  note: "Affordable & WHO listed"            },
            { country: "Georgia",     note: "European standard education"        },
            { country: "Bangladesh",  note: "Similar curriculum, low cost"       },
            { country: "Nepal",       note: "SAARC region preference"            },
          ]
        ).map((d, i) => (
          <div
            key={i}
            className="cd-dest-card"
            style={{
              padding: "22px 22px 22px 26px",
              borderRadius: 16,
              background: "var(--white)",
              border: "1.5px solid var(--border)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0, top: 0, bottom: 0,
                width: 4,
                background: "linear-gradient(180deg, var(--primary), #ff6eb0)",
                borderRadius: "16px 0 0 16px",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-main)",
                fontWeight: 700, fontSize: 16,
                color: "var(--dark)", marginBottom: 5,
              }}
            >
              {d.country}
            </p>
            <p
              style={{
                fontFamily: "var(--font-main)",
                fontSize: 13, color: "var(--gray)",
                lineHeight: 1.55,
              }}
            >
              {d.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <CourseNavRow
        category={category}
        courseTitle={selected.title}
        onBack={onBack}
      />

      {/* ── STAT CARDS ── */}
      <div
        className="cd-stat-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 18,
          marginBottom: 60,
        }}
      >
        {[
          { label: "Duration",           value: selected.duration    || "5–6 Years",                      icon: "🕐", delay: 100 },
          { label: "Eligibility",        value: selected.eligibility || "10+2 with PCB / 50% marks",     icon: "📋", delay: 200 },
          { label: "Approx. Fees",       value: selected.fees        || "Varies by country & university", icon: "💰", delay: 300 },
          { label: "Global Recognition", value: "WHO · NMC · ECFMG listed universities",                 icon: "🌍", delay: 400 },
        ].map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </div>

      {/* ── TABS ── */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
        {tabs.map((t, i) => (
          <Tab key={t} label={t} active={activeTab === i} onClick={() => setActiveTab(i)} />
        ))}
      </div>

      {/* ── TAB PANEL ── */}
      <div
        key={activeTab}
        className="cd-tab-panel"
        style={{
          padding: "44px 48px",
          borderRadius: 24,
          background: "rgba(255,255,255,0.80)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
          animation: "fadeSlideIn 0.32s ease",
        }}
      >
        {activeTab === 0 ? <OverviewContent /> : <DestinationsContent />}
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════
   MINIMAL COURSE PAGE
══════════════════════════════════════════════════ */
function MinimalCoursePage({ selected, onEnquire, category, onBack }) {
  return (
    <div style={{ maxWidth: 520, margin: "0 auto", animation: "fadeSlideIn 0.5s ease" }}>
      <CourseNavRow
        category={category}
        courseTitle={selected.title}
        onBack={onBack}
      />

      <div
        style={{
          borderRadius: 28, overflow: "hidden",
          background: "var(--dark)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.28)",
          border: "1px solid rgba(225,10,111,0.18)",
          position: "relative",
        }}
      >
        <div style={{ height: 5, background: "linear-gradient(90deg, var(--primary), #ff6eb0)" }} />
        <div style={{ padding: "44px 40px 48px" }}>
          <span
            style={{
              display: "inline-block",
              padding: "5px 14px", borderRadius: 40,
              background: "rgba(225,10,111,0.12)",
              border: "1px solid rgba(225,10,111,0.25)",
              fontFamily: "var(--font-main)",
              fontSize: 12, fontWeight: 600,
              color: "var(--primary)",
              letterSpacing: "0.08em", textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Course Overview
          </span>
          <h2
            style={{
              fontFamily: "var(--font-main)",
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: 800, color: "#fff",
              lineHeight: 1.25, marginBottom: 16,
            }}
          >
            {selected.title}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-main)",
              color: "#9ca3af", lineHeight: 1.75,
              fontSize: 15, marginBottom: 32,
            }}
          >
            {selected.desc}
          </p>
          {selected.duration && (
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "8px 18px", borderRadius: 40,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                marginBottom: 36,
              }}
            >
              <span style={{ fontSize: 16 }}>🕐</span>
              <span
                style={{
                  fontFamily: "var(--font-main)",
                  fontSize: 13, fontWeight: 600,
                  color: "#d1d5db", letterSpacing: "0.02em",
                }}
              >
                {selected.duration}
              </span>
            </div>
          )}
          <button
            className="cd-cta-btn"
            onClick={onEnquire}
            style={{
              width: "100%", padding: "16px 0",
              borderRadius: 14, border: "none", cursor: "pointer",
              fontFamily: "var(--font-main)",
              fontSize: 16, fontWeight: 700,
              letterSpacing: "0.04em", color: "#fff",
              background: "var(--primary)",
              boxShadow: "0 10px 30px rgba(225,10,111,0.3)",
            }}
          >
            Enquire Now →
          </button>
          <p
            style={{
              fontFamily: "var(--font-main)",
              fontSize: 13, color: "#6b7280",
              textAlign: "center", marginTop: 14,
            }}
          >
            Free counselling · No commitment
          </p>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   CTA SECTION
══════════════════════════════════════════════════ */
function CourseCtaSection({ onEnquire }) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--primary-light)",
        padding: "88px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 18px", borderRadius: 100,
            background: "rgba(225,10,111,0.10)",
            border: "1px solid rgba(225,10,111,0.20)",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "var(--primary)",
              boxShadow: "0 0 6px rgba(225,10,111,0.6)",
              animation: "pulse 2s ease-in-out infinite",
              flexShrink: 0, display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-main)",
              fontSize: 11, fontWeight: 700,
              color: "var(--primary)",
              letterSpacing: "0.13em",
              textTransform: "uppercase",
            }}
          >
            Start Your Journey Today
          </span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-main)",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 900,
            color: "var(--dark)",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: 16,
          }}
        >
          Ready to Study{" "}
          <span
            style={{
              background: "linear-gradient(90deg, var(--primary), #ff6eb0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Abroad?
          </span>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-main)",
            fontSize: 15.5,
            color: "var(--gray)",
            lineHeight: 1.8,
            maxWidth: 460,
            marginInline: "auto",
            marginBottom: 40,
          }}
        >
          Talk to our expert counsellors for free. We guide you from course
          selection to visa approval — every step of the way.
        </p>

        <button
          className="cd-cta-btn"
          onClick={onEnquire}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "17px 42px",
            borderRadius: 14,
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-main)",
            fontSize: 15,
            fontWeight: 700,
            color: "#fff",
            background: "var(--primary)",
            boxShadow: "0 10px 32px rgba(225,10,111,0.28)",
            letterSpacing: "0.03em",
          }}
        >
          Get Free Counselling
          <svg
            viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            style={{ width: 16, height: 16 }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════ */
export default function CourseDetail() {
  const { category, course } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef(null);

  const courses = COURSE_DATA[category] || [];
  const selected = courses.find((c) => c.id === course);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 80);
    return () => clearTimeout(t);
  }, [course]);

  if (!selected) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 20,
          fontFamily: "var(--font-main)",
          background: "var(--light)",
          textAlign: "center", padding: 24,
        }}
      >
        <style>{`
          .cd-cta-btn { transition: all 0.28s ease; }
          .cd-cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 52px rgba(225,10,111,0.42) !important;
            background: var(--primary-dark) !important;
          }
        `}</style>
        <div
          style={{
            width: 72, height: 72, borderRadius: "50%",
            background: "var(--primary-light)",
            display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 32,
          }}
        >
          🎓
        </div>
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            fontWeight: 800, color: "var(--dark)",
            letterSpacing: "-0.02em",
            fontFamily: "var(--font-main)",
          }}
        >
          Course Not Found
        </h2>
        <p style={{ fontSize: 15, color: "var(--gray)", maxWidth: 360, lineHeight: 1.7, fontFamily: "var(--font-main)" }}>
          We couldn't find this course. It may have been moved or the link is incorrect.
        </p>
        <button
          className="cd-cta-btn"
          onClick={() => navigate("/courses")}
          style={{
            padding: "12px 32px", borderRadius: 12,
            border: "none", cursor: "pointer",
            fontFamily: "var(--font-main)",
            fontSize: 14, fontWeight: 700, color: "#fff",
            background: "var(--primary)",
            boxShadow: "0 8px 24px rgba(225,10,111,0.30)",
          }}
        >
          Browse All Courses
        </button>
      </div>
    );
  }

  const isFull = FULL_DETAIL.includes(course);
  const handleEnquire = () => {
    document.getElementById("course-cta")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleBack = () => navigate(-1);

  return (
    <div
      style={{
        fontFamily: "var(--font-main)",
        minHeight: "100vh",
        position: "relative",
        background: `
          radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,182,215,0.55) 0%, transparent 65%),
          radial-gradient(ellipse 55% 45% at 85% 20%,  rgba(255,145,185,0.22) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 10% 30%,  rgba(255,200,228,0.28) 0%, transparent 55%),
          radial-gradient(ellipse 70% 50% at 50% 100%, rgba(253,220,237,0.45) 0%, transparent 70%),
          linear-gradient(180deg, #fff8fb 0%, #fff2f7 40%, #fde8f2 75%, #fbd5e8 100%)
        `,
      }}
    >
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatDot {
          from { transform: translateY(0) scale(1); }
          to   { transform: translateY(-20px) scale(1.2); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes slideRight {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        * { box-sizing: border-box; }

        .cd-stat-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .cd-stat-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 28px 60px rgba(225,10,111,0.18) !important;
          border-color: rgba(225,10,111,0.4) !important;
        }
        .cd-dest-card {
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .cd-dest-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary) !important;
          box-shadow: 0 16px 40px rgba(225,10,111,0.12) !important;
        }
        .cd-tab-btn { transition: all 0.25s ease; }
        .cd-tab-btn:hover {
          border-color: var(--primary) !important;
          color: var(--primary) !important;
        }
        .cd-cta-btn { transition: all 0.28s ease; }
        .cd-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 52px rgba(225,10,111,0.42) !important;
          background: var(--primary-dark) !important;
        }

        /* ── Updated back button: pink style matching CourseCategory ── */
        .cd-back-row-btn {
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }
        .cd-back-row-btn:hover {
          background: rgba(225,10,111,0.15) !important;
          border-color: rgba(225,10,111,0.4) !important;
          transform: translateX(-3px);
        }

        .cd-highlight-item { transition: background 0.2s ease, transform 0.2s ease; }
        .cd-highlight-item:hover {
          background: var(--primary-light) !important;
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .cd-stat-grid { grid-template-columns: 1fr 1fr !important; }
          .cd-tab-panel { padding: 28px 20px !important; }
        }
        @media (max-width: 480px) {
          .cd-stat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <ParticleBg />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ════════ HERO ════════ */}
        <section
          ref={heroRef}
          style={{
            padding: "clamp(100px,14vw,160px) 24px clamp(60px,8vw,100px)",
            textAlign: "center",
          }}
        >
          {/* breadcrumb pill */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              marginBottom: 20, padding: "6px 16px", borderRadius: 40,
              background: "rgba(225,10,111,0.07)",
              border: "1px solid rgba(225,10,111,0.15)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-main)", fontSize: 12, fontWeight: 600,
                color: "var(--primary)", textTransform: "capitalize",
                letterSpacing: "0.06em",
              }}
            >
              {CATEGORY_LABELS[category] || category?.replace(/-/g, " ")}
            </span>
            <span style={{ color: "var(--primary)", fontSize: 12 }}>›</span>
            <span
              style={{
                fontFamily: "var(--font-main)", fontSize: 12, fontWeight: 600,
                color: "var(--gray)", textTransform: "capitalize",
              }}
            >
              {selected.title}
            </span>
          </div>

          {isFull && (
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
              <span
                style={{
                  padding: "5px 18px", borderRadius: 40,
                  background: "linear-gradient(90deg, var(--primary), #ff6eb0)",
                  fontFamily: "var(--font-main)", fontSize: 12, fontWeight: 700,
                  color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase",
                  boxShadow: "0 4px 14px rgba(225,10,111,0.35)",
                }}
              >
                ✦ Comprehensive Guide
              </span>
            </div>
          )}

          <h1
            style={{
              fontFamily: "var(--font-main)",
              fontSize: "clamp(2rem, 6vw, 3.8rem)",
              fontWeight: 900, color: "var(--dark)",
              lineHeight: 1.1, letterSpacing: "-0.03em",
              maxWidth: 780, marginInline: "auto", marginBottom: 20,
            }}
          >
            {selected.title}
          </h1>

          <div
            style={{
              width: 64, height: 5, borderRadius: 4,
              background: "linear-gradient(90deg, var(--primary), #ff6eb0)",
              marginInline: "auto", marginBottom: 24,
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-main)",
              maxWidth: 560, marginInline: "auto",
              color: "var(--gray)", lineHeight: 1.8,
              fontSize: "clamp(14px, 2vw, 16px)",
              marginBottom: 36,
            }}
          >
            {selected.desc}
          </p>

          <button
            className="cd-cta-btn"
            onClick={handleEnquire}
            style={{
              padding: "14px 32px", borderRadius: 12, border: "none",
              cursor: "pointer", fontFamily: "var(--font-main)",
              fontSize: 15, fontWeight: 700, color: "#fff",
              background: "var(--primary)",
              boxShadow: "0 8px 24px rgba(225,10,111,0.3)",
            }}
          >
            Free Counselling →
          </button>
        </section>

        {/* ════════ BODY ════════ */}
        <section
          style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px 100px" }}
        >
          {isFull ? (
            <FullCoursePage
              selected={selected}
              category={category}
              onBack={handleBack}
            />
          ) : (
            <MinimalCoursePage
              selected={selected}
              onEnquire={handleEnquire}
              category={category}
              onBack={handleBack}
            />
          )}
        </section>

        {/* ════════ CTA ════════ */}
        <div id="course-cta">
          <CourseCtaSection onEnquire={handleEnquire} />
        </div>

      </div>
    </div>
  );
}
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { COURSE_DATA } from "../data/courseData";

/* ================= CATEGORY META ================= */
const CATEGORY_META = {
  medical: {
    title: "Medical Courses",
    desc: "Choose the right medical program with globally recognized degrees and expert counselling support.",
  },
  nursing: {
    title: "Nursing Courses",
    desc: "Build a rewarding healthcare career with globally recognized nursing programs.",
  },
  paramedical: {
    title: "Paramedical Courses",
    desc: "Explore 25+ high-demand paramedical programs with strong career opportunities.",
  },
  engineering: {
    title: "Engineering Courses",
    desc: "Explore top engineering programs with global career opportunities.",
  },
};

export default function CourseCategory() {
  const { category } = useParams();
  const navigate = useNavigate();

  const courses = COURSE_DATA[category] || [];
  const meta = CATEGORY_META[category] || {
    title: "Courses",
    desc: "Explore available programs.",
  };

  const canGoBack = courses.length > 0;

  return (
    <div
      style={{
        fontFamily: "var(--font-main)",
        background: "linear-gradient(180deg,#ffffff 0%, #fff3f8 100%)",
        minHeight: "100vh",
      }}
    >
      {/* ================= HERO ================= */}
      <section
        style={{
          paddingTop: 160,
          paddingBottom: 110,
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 400,
            background:
              "radial-gradient(circle, rgba(225,10,111,0.18), transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
          <h1
            style={{
              fontSize: "3.2rem",
              fontWeight: 800,
              color: "var(--dark)",
            }}
          >
            {meta.title}
          </h1>

          <p style={{ marginTop: 18, color: "var(--gray)" }}>
            {meta.desc}
          </p>

          <button
            style={{
              marginTop: 30,
              background: "var(--primary)",
              color: "#fff",
              padding: "13px 30px",
              borderRadius: 14,
              border: "none",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 12px 40px rgba(225,10,111,0.4)",
              cursor: "pointer",
            }}
          >
            <Phone size={16} />
            Get Free Counselling
          </button>
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px 100px",
        }}
      >
        {/* ── BACK BUTTON ── */}
        <button
          onClick={() => canGoBack && navigate("/courses")}
          disabled={!canGoBack}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "9px 18px",
            borderRadius: 8,
            border: canGoBack
              ? "1.5px solid rgba(225,10,111,0.45)"
              : "1.5px solid #d1d5db",
            background: canGoBack
              ? "rgba(225,10,111,0.07)"
              : "#f3f4f6",
            cursor: canGoBack ? "pointer" : "not-allowed",
            fontFamily: "var(--font-main)",
            fontSize: 13,
            fontWeight: 600,
            color: canGoBack ? "var(--primary)" : "#9ca3af",
            marginBottom: 24,
            opacity: canGoBack ? 1 : 0.55,
            transition: "all 0.22s ease",
            boxShadow: canGoBack
              ? "0 2px 8px rgba(225,10,111,0.12)"
              : "none",
          }}
          onMouseEnter={(e) => {
            if (!canGoBack) return;
            e.currentTarget.style.background = "rgba(225,10,111,0.14)";
            e.currentTarget.style.borderColor = "rgba(225,10,111,0.7)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(225,10,111,0.22)";
          }}
          onMouseLeave={(e) => {
            if (!canGoBack) return;
            e.currentTarget.style.background = "rgba(225,10,111,0.07)";
            e.currentTarget.style.borderColor = "rgba(225,10,111,0.45)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(225,10,111,0.12)";
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: 14, height: 14 }}
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Courses
        </button>

        {/* ── AVAILABLE PROGRAMS HEADING ── */}
        <h2
          style={{
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 40,
            color: "var(--dark)",
          }}
        >
          Available Programs
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <Link
                key={course.id}
                to={`/courses/${category}/${course.id}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    borderRadius: 24,
                    padding: 28,
                    background:
                      "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(30,30,30,0.95))",
                    border: "1px solid rgba(255,255,255,0.08)",
                    position: "relative",
                    overflow: "hidden",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-10px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 25px 60px rgba(0,0,0,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* TOP GLOW STRIP */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: 4,
                      width: "100%",
                      background:
                        "linear-gradient(90deg, transparent, var(--primary), transparent)",
                    }}
                  />

                  {/* ICON + BADGE ROW */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 16,
                        background: "rgba(225,10,111,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={24} style={{ color: "var(--primary)" }} />
                    </div>

                    {/* duration badge */}
                    <span
                      style={{
                        fontSize: 12,
                        padding: "6px 12px",
                        borderRadius: 999,
                        background: "rgba(225,10,111,0.18)",
                        color: "#ff6bab",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {course.duration}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3
                    style={{
                      color: "#ffffff",
                      fontSize: 20,
                      fontWeight: 700,
                      marginBottom: 10,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                    }}
                  >
                    {course.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    style={{
                      color: "#c4c9d4",
                      fontSize: 14,
                      lineHeight: 1.7,
                      fontWeight: 400,
                    }}
                  >
                    {course.desc}
                  </p>

                  {/* FOOTER */}
                  <div
                    style={{
                      marginTop: 24,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        color: "#ff6bab",
                        fontWeight: 600,
                        letterSpacing: "0.01em",
                      }}
                    >
                      View Details
                    </span>

                    <ArrowRight size={18} style={{ color: "#ffffff" }} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "0 20px 120px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg,#141414,#1c1c1c)",
            borderRadius: 28,
            padding: "60px 30px",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 style={{ color: "#fff", fontSize: 30, fontWeight: 700 }}>
            Still Confused About Your Course?
          </h2>

          <p style={{ color: "#9ca3af", marginTop: 12 }}>
            Get expert guidance tailored to your career goals.
          </p>

          <button
            style={{
              marginTop: 28,
              background: "var(--primary)",
              color: "#fff",
              padding: "13px 30px",
              borderRadius: 14,
              border: "none",
              fontWeight: 600,
              boxShadow: "0 12px 40px rgba(225,10,111,0.4)",
              cursor: "pointer",
            }}
          >
            Get Free Counselling
          </button>
        </div>
      </section>
    </div>
  );
}
// CollegeCard.jsx
import { useState } from "react";

 function CollegeCard({ college, onClick, index = 0 }) {
  const [hovered, setHovered]     = useState(false);
  const [activeCourse, setActive] = useState(null);

  const courses = college.courses || ["MBBS", "BDS", "Nursing"];

  const handleCourse = (e, course) => {
    e.stopPropagation();
    setActive(prev => (prev === course ? null : course));
    // extend: navigate / open modal / filter here
  };

  return (
    <>
      <style>{`
        @keyframes pingGreen {
          0%,100% { box-shadow: 0 0 0 0 rgba(16,185,129,.45); }
          60%      { box-shadow: 0 0 0 6px rgba(16,185,129,0); }
        }
        @keyframes stripeFill {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* ── Card ── */
        .clg-card {
          position: relative;
          background: var(--white);
          border-radius: 22px;
          border: 1.5px solid var(--border);
          overflow: hidden;
          transition:
            transform .28s cubic-bezier(.22,1,.36,1),
            box-shadow .28s cubic-bezier(.22,1,.36,1),
            border-color .22s;
          font-family: var(--font-main);
        }
        .clg-card:hover {
          transform: translateY(-8px);
          border-color: rgba(225,10,111,.35);
          box-shadow:
            0 24px 56px rgba(225,10,111,.1),
            0 6px 18px rgba(0,0,0,.06);
        }

        /* ── Top stripe ── */
        .clg-stripe {
          height: 3px;
          background: linear-gradient(90deg, rgba(225,10,111,.18) 0%, rgba(255,95,168,.12) 100%);
          transition: background .3s;
        }
        .clg-card:hover .clg-stripe {
          background: linear-gradient(90deg, var(--primary) 0%, #FF5FA8 55%, #FFD6EC 100%);
        }

        /* ── Hover glow ── */
        .clg-glow {
          position: absolute; top: 0; left: 0; right: 0; height: 140px;
          background: radial-gradient(ellipse 80% 100% at 50% -10%,
            rgba(225,10,111,.06) 0%, transparent 70%);
          opacity: 0; transition: opacity .3s; pointer-events: none;
        }
        .clg-card:hover .clg-glow { opacity: 1; }

        /* ── Approved badge ── */
        .approved-badge {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(16,185,129,.07);
          border: 1.5px solid rgba(16,185,129,.2);
          padding: 4px 11px; border-radius: 50px;
          flex-shrink: 0;
        }
        .ping-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #10B981;
          animation: pingGreen 2.2s ease-in-out infinite;
        }

        /* ── Course tag ── */
        .course-tag {
          display: inline-flex; align-items: center;
          font-size: 10.5px; font-weight: 700;
          padding: 5px 14px; border-radius: 50px;
          cursor: pointer; font-family: var(--font-main);
          border: 1.5px solid rgba(225,10,111,.18);
          background: var(--primary-light);
          color: var(--primary);
          transition: all .17s cubic-bezier(.4,0,.2,1);
          letter-spacing: .1px;
          user-select: none;
        }
        .course-tag:hover {
          background: var(--primary);
          border-color: var(--primary);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(225,10,111,.26);
        }
        .course-tag.active {
          background: var(--primary) !important;
          border-color: var(--primary) !important;
          color: #fff !important;
          box-shadow: 0 4px 18px rgba(225,10,111,.32) !important;
        }

        /* ── Enquiry button ── */
        .enquiry-btn {
          width: 100%; padding: 13px 0;
          background: var(--primary);
          color: #fff; border: none; border-radius: 50px;
          font-size: 13px; font-weight: 700;
          cursor: pointer; font-family: var(--font-main);
          letter-spacing: .3px;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 6px 22px rgba(225,10,111,.28);
          transition: all .22s cubic-bezier(.4,0,.2,1);
          position: relative; overflow: hidden;
        }
        .enquiry-btn::before {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,.12) 0%, transparent 55%);
          border-radius: 50px;
        }
        .enquiry-btn:hover {
          background: var(--primary-dark);
          box-shadow: 0 10px 32px rgba(225,10,111,.38);
          transform: translateY(-2px);
        }
        .enquiry-btn:active { transform: translateY(0); }
      `}</style>

      <div
        className="clg-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        style={{ cursor: onClick ? "pointer" : "default" }}
      >
        {/* Top stripe */}
        <div className="clg-stripe"/>

        {/* Hover glow */}
        <div className="clg-glow"/>

        <div style={{ padding: "22px 22px 20px", position: "relative" }}>

          {/* ── Header ── */}
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-start", marginBottom: "10px",
          }}>
            <h2 style={{
              fontSize: "15px", fontWeight: "800",
              color: hovered ? "var(--primary)" : "var(--dark)",
              margin: 0, lineHeight: "1.4",
              flex: 1, paddingRight: "12px",
              transition: "color .22s",
              letterSpacing: "-0.2px",
              fontFamily: "var(--font-main)",
            }}>
              {college.name}
            </h2>

            <div className="approved-badge">
              <div className="ping-dot"/>
              <span style={{
                color: "#0D9E6E", fontSize: "9px",
                fontWeight: "700", letterSpacing: ".7px",
                textTransform: "uppercase",
              }}>Approved</span>
            </div>
          </div>

          {/* ── Location ── */}
          <div style={{
            display: "flex", alignItems: "center", gap: "5px",
            color: "var(--gray)", fontSize: "12px",
            marginBottom: "20px", fontWeight: "500",
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
              stroke="var(--primary)" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {college.cityId || "City"}, {college.stateId || "India"}
          </div>

          {/* ── Programmes label ── */}
          <p style={{
            margin: "0 0 10px",
            fontSize: "9.5px", fontWeight: "700",
            color: "var(--gray)",
            letterSpacing: "1.6px", textTransform: "uppercase",
          }}>Programmes</p>

          {/* ── Clickable course tags ── */}
          <div style={{
            display: "flex", flexWrap: "wrap",
            gap: "7px", marginBottom: "22px",
          }}>
            {courses.slice(0, 5).map((c) => (
              <button
                key={c}
                className={`course-tag${activeCourse === c ? " active" : ""}`}
                onClick={(e) => handleCourse(e, c)}
              >
                {c}
              </button>
            ))}
            {courses.length > 5 && (
              <span style={{
                fontSize: "10.5px", fontWeight: "600",
                padding: "5px 13px", borderRadius: "50px",
                color: "var(--gray)",
                border: "1.5px solid var(--border)",
                background: "transparent",
              }}>
                +{courses.length - 5}
              </span>
            )}
          </div>

          {/* ── Divider ── */}
          <div style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--border), transparent)",
            marginBottom: "18px",
          }}/>

          {/* ── Enquiry CTA ── */}
          <button
            className="enquiry-btn"
            onClick={(e) => { e.stopPropagation(); /* trigger enquiry */ }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Enquire Now
          </button>

        </div>
      </div>
    </>
  );
}
export default CollegeCard;
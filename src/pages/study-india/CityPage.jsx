// CityPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { STUDY_INDIA_DATA } from "../../data/studyIndiaData";
import CollegeCard from "../../components/studyIndia/CollegeCard";

 function CityPage() {
  const { stateId, cityId } = useParams();
  const navigate = useNavigate();

  const state = STUDY_INDIA_DATA.find(s => s.id === stateId);
  const city  = state?.cities.find(c => c.id === cityId);
  const colleges = useMemo(
    () =>
      (state?.colleges?.filter(c => c.cityId === cityId) || []).sort(
        (a, b) => (b.rating || 0) - (a.rating || 0)
      ),
    [state, cityId]
  );

  if (!state || !city) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        background: "#FEF0F5", fontFamily: "var(--font-main)", gap: "14px",
      }}>
        <div style={{ fontSize: "52px" }}>🏛️</div>
        <h2 style={{ fontWeight: "800", fontSize: "22px", margin: 0, color: "var(--dark)" }}>
          City Not Found
        </h2>
        <p style={{ color: "var(--gray)", fontSize: "14px", margin: 0 }}>
          This city doesn't exist in our records.
        </p>
        <button onClick={() => navigate(-1)} style={{
          marginTop: "8px", padding: "12px 32px",
          background: "var(--primary)", color: "#fff",
          border: "none", borderRadius: "50px", fontSize: "13px", fontWeight: "700",
          cursor: "pointer", fontFamily: "var(--font-main)",
          boxShadow: "0 6px 22px rgba(225,10,111,0.3)",
        }}>← Go Back</button>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#FEF0F5",
      fontFamily: "var(--font-main)",
      color: "var(--dark)",
      overflowX: "hidden",
    }}>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes blobDrift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(14px, -18px) scale(1.04); }
        }
        @keyframes blobDrift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-10px, 14px) scale(1.03); }
        }
        @keyframes blobDrift3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(8px, 12px) scale(1.02); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .a1 { animation: fadeUp .6s cubic-bezier(.22,1,.36,1) .05s both; }
        .a2 { animation: fadeUp .6s cubic-bezier(.22,1,.36,1) .15s both; }
        .a3 { animation: fadeUp .6s cubic-bezier(.22,1,.36,1) .25s both; }
        .a4 { animation: fadeUp .6s cubic-bezier(.22,1,.36,1) .35s both; }
        .a5 { animation: fadeUp .6s cubic-bezier(.22,1,.36,1) .45s both; }
        .a6 { animation: fadeIn .8s ease .5s both; }

        .card-wrap { animation: cardIn .5s cubic-bezier(.22,1,.36,1) both; }
        .card-wrap:nth-child(1) { animation-delay: .05s; }
        .card-wrap:nth-child(2) { animation-delay: .11s; }
        .card-wrap:nth-child(3) { animation-delay: .17s; }
        .card-wrap:nth-child(4) { animation-delay: .23s; }
        .card-wrap:nth-child(5) { animation-delay: .29s; }
        .card-wrap:nth-child(6) { animation-delay: .35s; }
        .card-wrap:nth-child(7) { animation-delay: .41s; }
        .card-wrap:nth-child(8) { animation-delay: .47s; }

        /* ── Nav ── */
        .city-nav {
          position: sticky; top: 0; z-index: 50;
          background: rgba(254,240,245,0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(225,10,111,.1);
        }

        /* ── Nav back button ── */
        .back-btn {
          display: inline-flex; align-items: center; gap: 7px;
          background: #fff;
          border: 1.5px solid rgba(225,10,111,.18);
          color: var(--dark);
          padding: 8px 18px; border-radius: 50px;
          font-size: 12.5px; font-weight: 600;
          cursor: pointer; font-family: var(--font-main);
          transition: all .2s cubic-bezier(.4,0,.2,1);
          box-shadow: 0 1px 6px rgba(225,10,111,.07);
        }
        .back-btn:hover {
          background: var(--primary);
          border-color: var(--primary);
          color: #fff;
          box-shadow: 0 6px 20px rgba(225,10,111,.25);
          transform: translateX(-2px);
        }
        .back-btn:hover .arr { transform: translateX(-2px); }
        .arr { transition: transform .2s; display: inline-flex; align-items: center; }

        /* ── Grid section back button ── */
        .grid-back-btn {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(255,255,255,0.85);
          border: 1.5px solid rgba(225,10,111,.18);
          color: var(--dark);
          padding: 9px 20px; border-radius: 50px;
          font-size: 12.5px; font-weight: 600;
          cursor: pointer; font-family: var(--font-main);
          transition: all .2s cubic-bezier(.4,0,.2,1);
          box-shadow: 0 2px 10px rgba(225,10,111,.07);
          backdrop-filter: blur(8px);
        }
        .grid-back-btn:hover {
          background: var(--primary);
          border-color: var(--primary);
          color: #fff;
          box-shadow: 0 6px 20px rgba(225,10,111,.25);
          transform: translateX(-2px);
        }
        .grid-back-btn:hover .garr { transform: translateX(-2px); }
        .garr { transition: transform .2s; display: inline-flex; align-items: center; }

        /* ── Breadcrumb ── */
        .bc-link {
          cursor: pointer; transition: color .15s; color: var(--gray);
        }
        .bc-link:hover { color: var(--primary) !important; }

        /* ── Hero gradient text ── */
        .hero-city-name {
          background: linear-gradient(118deg, var(--primary) 0%, #FF5FA8 55%, #E10A6F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        /* ── Section divider ── */
        .section-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(225,10,111,.15), transparent);
          transform-origin: left;
          animation: lineGrow .9s cubic-bezier(.22,1,.36,1) .4s both;
        }

        /* ── Stat chip ── */
        .stat-chip {
          display: flex; flex-direction: column; align-items: center; gap: 3px;
          background: rgba(255,255,255,0.75);
          border: 1.5px solid rgba(225,10,111,.13);
          border-radius: 18px;
          padding: 16px 28px;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 18px rgba(225,10,111,.07);
          transition: all .22s cubic-bezier(.4,0,.2,1);
        }
        .stat-chip:hover {
          background: rgba(255,255,255,0.95);
          border-color: rgba(225,10,111,.28);
          box-shadow: 0 8px 28px rgba(225,10,111,.12);
          transform: translateY(-2px);
        }

        /* ── Empty btn ── */
        .empty-btn {
          padding: 12px 32px;
          background: transparent;
          border: 1.5px solid var(--primary);
          color: var(--primary);
          border-radius: 50px; font-size: 13px; font-weight: 700;
          cursor: pointer; font-family: var(--font-main); transition: all .2s;
        }
        .empty-btn:hover {
          background: var(--primary); color: #fff;
          box-shadow: 0 8px 24px rgba(225,10,111,.28);
        }

        /* ── Scrollbar ── */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #FEF0F5; }
        ::-webkit-scrollbar-thumb { background: rgba(225,10,111,.22); border-radius: 5px; }
      `}</style>

      {/* ── Ambient background ── */}
      <div aria-hidden style={{
        position: "fixed", inset: 0,
        zIndex: 0, pointerEvents: "none", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-200px", right: "-160px",
          width: "780px", height: "780px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,182,215,.35) 0%, rgba(225,10,111,.04) 55%, transparent 75%)",
          animation: "blobDrift 18s ease-in-out infinite",
        }}/>
        <div style={{
          position: "absolute", bottom: "-150px", left: "-120px",
          width: "640px", height: "640px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,200,230,.28) 0%, rgba(225,10,111,.03) 55%, transparent 75%)",
          animation: "blobDrift2 22s ease-in-out infinite",
        }}/>
        <div style={{
          position: "absolute", top: "38%", left: "50%",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,160,200,.14) 0%, transparent 65%)",
          animation: "blobDrift3 15s ease-in-out infinite",
        }}/>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(225,10,111,.09) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }}/>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── STICKY NAV ── */}
        <nav className="city-nav">
          <div style={{
            maxWidth: "1240px", margin: "0 auto",
            padding: "0 clamp(20px,5vw,60px)",
            height: "60px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <button className="back-btn" onClick={() => navigate(-1)}>
              <span className="arr">
                <svg width="13" height="13" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </span>
              Back to {state.name}
            </button>

            <div style={{
              display: "flex", alignItems: "center", gap: "6px",
              fontSize: "11.5px",
            }}>
              <span className="bc-link" onClick={() => navigate("/study-india")}>Study India</span>
              <span style={{ color: "rgba(225,10,111,.3)", fontSize: "14px" }}>›</span>
              <span className="bc-link" onClick={() => navigate(`/study-india/${stateId}`)}>{state.name}</span>
              <span style={{ color: "rgba(225,10,111,.3)", fontSize: "14px" }}>›</span>
              <span style={{ color: "var(--primary)", fontWeight: "700" }}>{city.name}</span>
            </div>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section style={{
          minHeight: "calc(100vh - 60px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "clamp(60px,8vh,100px) clamp(24px,6vw,80px)",
          position: "relative",
        }}>

          {/* Location pill */}
          <div className="a1" style={{
            display: "inline-flex", alignItems: "center", gap: "7px",
            background: "rgba(255,255,255,0.72)",
            border: "1.5px solid rgba(225,10,111,.18)",
            padding: "6px 16px", borderRadius: "50px",
            marginBottom: "22px",
            backdropFilter: "blur(8px)",
            boxShadow: "0 3px 12px rgba(225,10,111,.07)",
          }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none"
              stroke="var(--primary)" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span style={{
              color: "var(--primary)", fontSize: "10.5px",
              fontWeight: "700", letterSpacing: "1.2px", textTransform: "uppercase",
            }}>
              {state.name} · India
            </span>
          </div>

          {/* Eyebrow */}
          <p className="a2" style={{
            margin: "0 0 8px",
            fontSize: "clamp(11px,1.1vw,12.5px)",
            fontWeight: "700",
            color: "rgba(225,10,111,.45)",
            letterSpacing: "3.5px",
            textTransform: "uppercase",
          }}>
            Colleges &amp; Institutions
          </p>

          {/* Big city name */}
          <h1 className="a3" style={{
            fontSize: "clamp(58px,9.5vw,112px)",
            fontWeight: "900",
            lineHeight: "0.95",
            letterSpacing: "-4px",
            margin: "0 0 22px",
            fontFamily: "var(--font-main)",
          }}>
            <span className="hero-city-name">{city.name}</span>
          </h1>

          {/* Accent rule */}
          <div className="a3" style={{
            display: "flex", alignItems: "center", gap: "12px",
            marginBottom: "20px",
          }}>
            <div style={{
              width: "48px", height: "1.5px", borderRadius: "2px",
              background: "linear-gradient(90deg, transparent, rgba(225,10,111,.4))",
            }}/>
            <div style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "var(--primary)",
              boxShadow: "0 0 0 4px rgba(225,10,111,.13)",
            }}/>
            <div style={{
              width: "48px", height: "1.5px", borderRadius: "2px",
              background: "linear-gradient(90deg, rgba(225,10,111,.4), transparent)",
            }}/>
          </div>

          {/* Subtitle */}
          <p className="a4" style={{
            fontSize: "clamp(14px,1.4vw,16px)",
            color: "var(--gray)",
            fontWeight: "400",
            maxWidth: "400px",
            lineHeight: "1.9",
            margin: "0 auto 38px",
          }}>
            Discover top-rated medical and professional institutions.
            Make your most important decision with clarity.
          </p>

          {/* Stats */}
          <div className="a4" style={{
            display: "flex", gap: "12px", flexWrap: "wrap",
            justifyContent: "center",
          }}>
            <div className="stat-chip">
              <span style={{ fontSize: "28px", fontWeight: "900", color: "var(--primary)", lineHeight: 1, letterSpacing: "-1px" }}>
                {colleges.length}
              </span>
              <span style={{ fontSize: "9.5px", fontWeight: "700", color: "var(--gray)", letterSpacing: "1.2px", textTransform: "uppercase", marginTop: "2px" }}>
                Institution{colleges.length !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="stat-chip">
              <span style={{ fontSize: "22px", fontWeight: "900", color: "#10B981", lineHeight: 1 }}>✓</span>
              <span style={{ fontSize: "9.5px", fontWeight: "700", color: "var(--gray)", letterSpacing: "1.2px", textTransform: "uppercase", marginTop: "2px" }}>
                Verified
              </span>
            </div>
            <div className="stat-chip">
              <span style={{ fontSize: "18px", fontWeight: "900", color: "var(--primary)", lineHeight: 1.2, letterSpacing: "-0.5px" }}>MCI</span>
              <span style={{ fontSize: "9.5px", fontWeight: "700", color: "var(--gray)", letterSpacing: "1.2px", textTransform: "uppercase", marginTop: "2px" }}>
                Approved
              </span>
            </div>
          </div>

        </section>

        {/* ══════════════════════════
            COLLEGES GRID
        ══════════════════════════ */}
        <section style={{
          background: "rgba(255,255,255,0.55)",
          borderTop: "1px solid rgba(225,10,111,.09)",
          backdropFilter: "blur(12px)",
          padding: "clamp(52px,6vw,88px) clamp(20px,5vw,60px) 100px",
        }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>

            {colleges.length > 0 ? (
              <>
                {/* ── Section header row: back button LEFT, rating badge RIGHT ── */}
                <div className="a6" style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "28px", flexWrap: "wrap", gap: "14px",
                }}>

                  {/* Left: back button + title stacked */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

                    {/* Back button — sits right above the college count heading */}
                    <button className="grid-back-btn" onClick={() => navigate(-1)}>
                      <span className="garr">
                        <svg width="13" height="13" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                      </span>
                      Back to {state.name}
                    </button>

                    {/* Title */}
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div style={{
                        width: "4px", height: "34px", borderRadius: "4px",
                        background: "linear-gradient(180deg, var(--primary), #FF5FA8)",
                        flexShrink: 0,
                      }}/>
                      <div>
                        <p style={{
                          margin: "0 0 3px", fontSize: "10px", fontWeight: "700",
                          color: "var(--primary)", letterSpacing: "1.8px", textTransform: "uppercase",
                        }}>All Institutions</p>
                        <h2 style={{
                          margin: 0, fontSize: "clamp(20px,2.2vw,28px)", fontWeight: "800",
                          color: "var(--dark)", letterSpacing: "-0.5px", lineHeight: "1.15",
                          fontFamily: "var(--font-main)",
                        }}>
                          {colleges.length} College{colleges.length !== 1 ? "s" : ""} in {city.name}
                        </h2>
                      </div>
                    </div>

                  </div>

                  {/* Right: sorted badge */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: "7px",
                    background: "rgba(255,255,255,0.85)",
                    border: "1.5px solid rgba(225,10,111,.18)",
                    padding: "8px 18px", borderRadius: "50px",
                    boxShadow: "0 2px 10px rgba(225,10,111,.07)",
                    alignSelf: "flex-start",
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                      stroke="var(--primary)" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <span style={{ fontSize: "11.5px", fontWeight: "700", color: "var(--primary)", letterSpacing: ".2px" }}>
                      Sorted by Rating
                    </span>
                  </div>

                </div>

                <div className="section-line" style={{ marginBottom: "40px" }}/>

                {/* Grid */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
                  gap: "24px",
                }}>
                  {colleges.map((college, i) => (
                    <div key={college.id} className="card-wrap">
                      <CollegeCard college={college} index={i} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "110px 20px" }}>
                <div style={{
                  width: "88px", height: "88px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.85)",
                  border: "2px solid rgba(225,10,111,.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 26px",
                  boxShadow: "0 8px 28px rgba(225,10,111,.09)",
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                    stroke="var(--primary)" strokeWidth="1.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: "21px", fontWeight: "800",
                  color: "var(--dark)", marginBottom: "10px",
                  fontFamily: "var(--font-main)",
                }}>No colleges listed yet</h3>
                <p style={{ color: "var(--gray)", fontSize: "14px", marginBottom: "32px", lineHeight: "1.75" }}>
                  We're updating our records for {city.name}.<br/>Check back soon.
                </p>
                <button className="empty-btn" onClick={() => navigate(-1)}>
                  ← Explore Other Cities
                </button>
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
export default CityPage;
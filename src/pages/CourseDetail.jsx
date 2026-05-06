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

/* ─── Floating dot particles ─── */
function ParticleBg() {
  return (
    <div aria-hidden style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", overflow:"hidden" }}>
      {[...Array(14)].map((_, i) => (
        <span key={i} style={{
          position:"absolute",
          width: 2 + (i % 3),
          height: 2 + (i % 3),
          borderRadius:"50%",
          background: i % 2 === 0 ? "var(--primary)" : "rgba(225,10,111,0.3)",
          opacity: 0.04 + (i % 4) * 0.012,
          top:`${(i * 17 + 5) % 100}%`,
          left:`${(i * 31 + 9) % 100}%`,
          animation:`floatDot ${9 + (i % 4) * 2}s ease-in-out infinite alternate`,
          animationDelay:`${i * 0.6}s`,
        }} />
      ))}
    </div>
  );
}

/* ─── Back + breadcrumb nav ─── */
function CourseNavRow({ category, courseTitle, onBack }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:40, flexWrap:"wrap" }}>
      <button onClick={onBack} className="cd-back-btn" style={{
        display:"inline-flex", alignItems:"center", gap:8,
        background:"rgba(225,10,111,0.07)", border:"1px solid rgba(225,10,111,0.18)",
        color:"var(--primary)", padding:"10px 20px", borderRadius:12,
        fontFamily:"var(--font-main)", fontWeight:600, fontSize:14, cursor:"pointer",
      }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round" style={{ width:16, height:16 }}>
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back
      </button>
      <div style={{
        display:"inline-flex", alignItems:"center", gap:6,
        padding:"8px 16px", borderRadius:8,
        background:"var(--primary-light)", border:"1.5px solid rgba(225,10,111,0.15)",
      }}>
        <span style={{ fontFamily:"var(--font-main)", fontSize:12, fontWeight:700, color:"var(--primary)", textTransform:"capitalize" }}>
          {CATEGORY_LABELS[category] || category?.replace(/-/g, " ")}
        </span>
        <span style={{ color:"var(--primary)", fontSize:14, lineHeight:1 }}>›</span>
        <span style={{ fontFamily:"var(--font-main)", fontSize:12, fontWeight:600, color:"var(--primary-dark)" }}>
          {courseTitle}
        </span>
      </div>
    </div>
  );
}

/* ─── Enquiry Form Card ─── */
function EnquiryCard({ courseTitle, onSuccess }) {
  const [form, setForm] = useState({ name:"", phone:"", city:"", course: courseTitle });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())              e.name  = "Name is required";
    if (!/^\d{10}$/.test(form.phone))   e.phone = "Enter a valid 10-digit number";
    if (!form.city.trim())              e.city  = "City is required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); onSuccess?.(); }, 1200);
  };

  const field = (key, label, type = "text", placeholder = "") => (
    <div style={{ marginBottom:16 }}>
      <label style={{ display:"block", fontFamily:"var(--font-main)", fontSize:11, fontWeight:700, color:"var(--gray)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:6 }}>{label}</label>
      <input
        type={type} value={form[key]}
        onChange={(ev) => { setForm(f => ({ ...f, [key]: ev.target.value })); setErrors(er => ({ ...er, [key]: undefined })); }}
        placeholder={placeholder}
        style={{ width:"100%", padding:"11px 14px", borderRadius:10, border: errors[key] ? "1.5px solid #ef4444" : "1.5px solid var(--border)", fontFamily:"var(--font-main)", fontSize:14, color:"var(--dark)", background:"var(--light)", outline:"none", transition:"border-color 0.2s ease, box-shadow 0.2s ease" }}
        onFocus={ev => { ev.target.style.borderColor = "var(--primary)"; ev.target.style.boxShadow = "0 0 0 3px rgba(225,10,111,0.10)"; }}
        onBlur={ev  => { ev.target.style.borderColor = errors[key] ? "#ef4444" : "var(--border)"; ev.target.style.boxShadow = "none"; }}
      />
      {errors[key] && <p style={{ fontFamily:"var(--font-main)", fontSize:11, color:"#ef4444", marginTop:4 }}>{errors[key]}</p>}
    </div>
  );

  if (submitted) {
    return (
      <div style={{ borderRadius:28, overflow:"hidden", background:"#fff", boxShadow:"0 28px 88px rgba(225,10,111,0.15), 0 4px 24px rgba(0,0,0,0.07)", border:"1px solid rgba(225,10,111,0.12)", padding:"52px 32px", textAlign:"center", animation:"fadeSlideIn 0.5s ease" }}>
        <div style={{ width:68, height:68, borderRadius:"50%", background:"linear-gradient(135deg, var(--primary), #ff6eb0)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", boxShadow:"0 12px 32px rgba(225,10,111,0.30)", fontSize:28 }}>✓</div>
        <h3 style={{ fontFamily:"var(--font-main)", fontSize:"1.3rem", fontWeight:800, color:"var(--dark)", marginBottom:10 }}>You're All Set!</h3>
        <p style={{ fontFamily:"var(--font-main)", fontSize:14, color:"var(--gray)", lineHeight:1.7, maxWidth:260, margin:"0 auto" }}>Our counsellor will call you within <strong style={{ color:"var(--primary)" }}>24 hours</strong> to guide you through the next steps.</p>
      </div>
    );
  }

  return (
    <div style={{ borderRadius:28, overflow:"hidden", background:"#fff", boxShadow:"0 28px 88px rgba(225,10,111,0.15), 0 4px 24px rgba(0,0,0,0.07)", border:"1px solid rgba(225,10,111,0.12)", position:"relative" }}>
      <div style={{ height:5, background:"linear-gradient(90deg, var(--primary), #ff6eb0, #ffb3d7)" }} />
      <div style={{ padding:"24px 28px 20px", background:"linear-gradient(135deg, #1c1c1c 0%, #141414 100%)", position:"relative", overflow:"hidden" }}>
        <div aria-hidden style={{ position:"absolute", top:-30, right:-30, width:110, height:110, borderRadius:"50%", background:"var(--primary)", opacity:0.09, filter:"blur(30px)" }} />
        <span style={{ display:"inline-block", padding:"4px 12px", borderRadius:40, background:"rgba(225,10,111,0.15)", border:"1px solid rgba(225,10,111,0.28)", fontFamily:"var(--font-main)", fontSize:11, fontWeight:700, color:"var(--primary)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:10, position:"relative", zIndex:1 }}>Free Counselling</span>
        <h3 style={{ fontFamily:"var(--font-main)", fontSize:"1.1rem", fontWeight:800, color:"#fff", lineHeight:1.3, margin:0, position:"relative", zIndex:1 }}>
          Get Expert Guidance for<br />
          <span style={{ background:"linear-gradient(90deg, var(--primary), #ff6eb0)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{courseTitle}</span>
        </h3>
        <p style={{ fontFamily:"var(--font-main)", fontSize:12, color:"#9ca3af", margin:"8px 0 0", position:"relative", zIndex:1 }}>No spam · Completely free · 24hr response</p>
      </div>
      <div style={{ padding:"24px 28px 28px" }}>
        <form onSubmit={handleSubmit} noValidate>
          {field("name",  "Your Name",    "text", "e.g. Arjun Kumar")}
          {field("phone", "Phone Number", "tel",  "10-digit mobile number")}
          {field("city",  "Your City",    "text", "e.g. Chennai")}
          <div style={{ marginBottom:20 }}>
            <label style={{ display:"block", fontFamily:"var(--font-main)", fontSize:11, fontWeight:700, color:"var(--gray)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:6 }}>Interested Course</label>
            <div style={{ padding:"11px 14px", borderRadius:10, border:"1.5px solid rgba(225,10,111,0.2)", background:"var(--primary-light)", fontFamily:"var(--font-main)", fontSize:14, fontWeight:600, color:"var(--primary)" }}>{courseTitle}</div>
          </div>
          <button type="submit" className="cd-cta-btn" disabled={loading} style={{ width:"100%", padding:"14px 0", borderRadius:13, border:"none", cursor: loading ? "not-allowed" : "pointer", fontFamily:"var(--font-main)", fontSize:15, fontWeight:700, color:"#fff", background: loading ? "linear-gradient(90deg,#c0c0c0,#a0a0a0)" : "var(--primary)", boxShadow: loading ? "none" : "0 8px 24px rgba(225,10,111,0.28)", display:"flex", alignItems:"center", justifyContent:"center", gap:8, opacity: loading ? 0.8 : 1 }}>
            {loading ? (<><span style={{ width:16, height:16, border:"2px solid rgba(255,255,255,0.4)", borderTopColor:"#fff", borderRadius:"50%", display:"inline-block", animation:"spin 0.7s linear infinite" }} />Submitting…</>) : (<>Request Callback <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width:15, height:15 }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></>)}
          </button>
          <div style={{ display:"flex", justifyContent:"center", gap:20, marginTop:16, flexWrap:"wrap" }}>
            {["🔒 100% Secure", "📞 24hr Callback", "✅ No Commitment"].map(t => <span key={t} style={{ fontFamily:"var(--font-main)", fontSize:11, color:"var(--gray)", fontWeight:500 }}>{t}</span>)}
          </div>
        </form>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   PREMIUM STAT CARD — unified brand pink, visible border
══════════════════════════════════════════════════ */
function StatCardIcon({ themeKey }) {
  const stroke = "#E10A6F";
  const icons = {
    duration: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke}
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l3.5 2"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeWidth="1.3" strokeOpacity="0.45"/>
      </svg>
    ),
    eligibility: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke}
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeOpacity="0.45" strokeWidth="1.3"/>
      </svg>
    ),
    fees: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke}
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v2M12 16v2"/>
        <path d="M9 9h4.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 0 0 3H15"/>
      </svg>
    ),
    global: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke}
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
          strokeOpacity="0.85"/>
        <path d="M5 7h14M5 17h14" strokeOpacity="0.35" strokeWidth="1.3"/>
      </svg>
    ),
  };
  return icons[themeKey] || null;
}

function StatCard({ themeKey, label, value, subtext, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 0.65s cubic-bezier(.22,1,.36,1), transform 0.65s cubic-bezier(.22,1,.36,1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div ref={ref} className="cd-stat-card" style={{
      borderRadius: 20,
      overflow: "hidden",
      background: "#0a0a10",
      /* ── Clearly visible pink border ── */
      border: "1.5px solid rgba(225,10,111,0.45)",
      boxShadow: "0 0 0 1px rgba(225,10,111,0.10), inset 0 1px 0 rgba(255,255,255,0.04)",
      position: "relative",
      cursor: "default",
    }}>
      {/* Pink ambient glow */}
      <div aria-hidden style={{
        position:"absolute", inset:0, pointerEvents:"none",
        background:`
          radial-gradient(ellipse 90% 65% at 85% 8%,  rgba(225,10,111,0.16) 0%, transparent 55%),
          radial-gradient(ellipse 55% 45% at 5%  88%, rgba(225,10,111,0.07) 0%, transparent 52%)
        `,
      }} />
      {/* Dot-grid texture */}
      <div aria-hidden style={{
        position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize:"18px 18px",
        maskImage:"radial-gradient(ellipse 100% 75% at 50% 0%, black 15%, transparent 72%)",
        WebkitMaskImage:"radial-gradient(ellipse 100% 75% at 50% 0%, black 15%, transparent 72%)",
      }} />

      {/* Top accent line */}
      <div style={{
        position:"absolute", top:0, left:0, right:0, height:2,
        background:"linear-gradient(90deg, transparent 0%, rgba(225,10,111,0.7) 30%, rgba(255,110,176,0.9) 60%, transparent 100%)",
      }} />

      {/* Card body */}
      <div style={{ padding:"26px 22px 24px", position:"relative", zIndex:2 }}>
        {/* Icon */}
        <div className="sc-icon" style={{
          width:54, height:54, borderRadius:16,
          background:"rgba(225,10,111,0.12)",
          border:"1px solid rgba(225,10,111,0.30)",
          display:"flex", alignItems:"center", justifyContent:"center",
          marginBottom:20,
          transition:"transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease",
        }}>
          <StatCardIcon themeKey={themeKey} />
        </div>

        {/* Badge chip */}
        <div style={{
          display:"inline-flex", alignItems:"center", gap:5,
          padding:"3px 10px", borderRadius:20,
          background:"rgba(225,10,111,0.10)",
          border:"1px solid rgba(225,10,111,0.30)",
          marginBottom:12,
        }}>
          <span style={{
            width:5, height:5, borderRadius:"50%",
            background:"var(--primary)", flexShrink:0,
            boxShadow:"0 0 0 2px rgba(225,10,111,0.25)",
            display:"inline-block",
          }} />
          <span style={{
            fontFamily:"var(--font-main)", fontSize:10, fontWeight:700,
            color:"var(--primary)", letterSpacing:"0.18em", textTransform:"uppercase",
          }}>{label}</span>
        </div>

        {/* Value */}
        <p style={{
          fontFamily:"var(--font-main)", fontSize:20, fontWeight:800,
          color:"#f1f5f9", margin:"0 0 6px",
          lineHeight:1.2, letterSpacing:"-0.02em",
        }}>{value}</p>

        {/* Subtext */}
        <p style={{
          fontFamily:"var(--font-main)", fontSize:12,
          color:"rgba(255,255,255,0.35)", margin:0,
          fontWeight:400, lineHeight:1.55,
        }}>{subtext}</p>
      </div>

      {/* Animated bottom bar */}
      <div style={{
        position:"absolute", bottom:0, left:0, right:0,
        height:3, background:"rgba(255,255,255,0.04)",
      }}>
        <div className="sc-bar" style={{
          height:"100%", width:"55%",
          background:"linear-gradient(90deg, var(--primary), #ff6eb0, #ffb3d7)",
          borderRadius:"0 2px 2px 0",
        }} />
      </div>
    </div>
  );
}

/* ─── Section Heading ─── */
function SectionHeading({ children }) {
  return (
    <div style={{ marginBottom:28 }}>
      <div style={{ width:36, height:4, borderRadius:4, background:"linear-gradient(90deg, var(--primary), #ff6eb0)", marginBottom:12 }} />
      <h2 style={{ fontFamily:"var(--font-main)", fontSize:"clamp(1.3rem, 2.8vw, 1.75rem)", fontWeight:800, color:"var(--dark)", margin:0, letterSpacing:"-0.02em" }}>{children}</h2>
    </div>
  );
}

/* ─── Highlight item ─── */
function HighlightItem({ text }) {
  return (
    <li className="cd-highlight-item" style={{ display:"flex", alignItems:"flex-start", gap:14, padding:"14px 18px", borderRadius:12, background:"var(--white)", border:"1px solid var(--border)", marginBottom:10, listStyle:"none", cursor:"default" }}>
      <span style={{ flexShrink:0, marginTop:7, width:8, height:8, borderRadius:"50%", background:"var(--primary)", display:"inline-block", boxShadow:"0 0 0 3px rgba(225,10,111,0.12)" }} />
      <span style={{ fontFamily:"var(--font-main)", fontSize:14.5, color:"#374151", lineHeight:1.7 }}>{text}</span>
    </li>
  );
}

/* ─── Tab button ─── */
function Tab({ label, active, onClick }) {
  return (
    <button onClick={onClick} className="cd-tab-btn" style={{
      fontFamily:"var(--font-main)", fontSize:14, fontWeight:600,
      padding:"10px 28px", borderRadius:100,
      border: active ? "none" : "1.5px solid var(--border)",
      cursor:"pointer",
      background: active ? "var(--primary)" : "var(--white)",
      color: active ? "#fff" : "var(--gray)",
      boxShadow: active ? "0 6px 22px rgba(225,10,111,0.30)" : "none",
      letterSpacing:"0.01em",
    }}>{label}</button>
  );
}

/* ══════════════════════════════════════════════════
   FULL COURSE PAGE
══════════════════════════════════════════════════ */
function FullCoursePage({ selected, category, onBack }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Overview", "Top Destinations"];

  const OverviewContent = () => (
    <div style={{ animation:"fadeSlideIn 0.35s ease" }}>
      <div style={{ marginBottom:48 }}>
        <SectionHeading>About This Course</SectionHeading>
        <p style={{ fontFamily:"var(--font-main)", color:"#4B5563", lineHeight:1.9, fontSize:15.5, maxWidth:740, borderLeft:"3px solid var(--primary)", paddingLeft:20, marginLeft:2 }}>
          {selected.about || `${selected.desc} This program blends rigorous academic training with hands-on clinical exposure across globally accredited institutions. Graduates are recognised worldwide and can pursue careers or specialisations in any country.`}
        </p>
      </div>
      <div>
        <SectionHeading>Key Highlights</SectionHeading>
        <ul style={{ padding:0, margin:0 }}>
          {(selected.highlights || [
            "Globally recognised degree accepted in 100+ countries",
            "Affordable tuition compared to private colleges",
            "English-medium instruction at top-ranked universities",
            "No entrance exam required for international admissions",
            "Hostel accommodation & student support provided",
            "Internship & residency opportunities post-graduation",
          ]).map((h, i) => <HighlightItem key={i} text={h} />)}
        </ul>
      </div>
    </div>
  );

  const DestinationsContent = () => (
    <div style={{ animation:"fadeSlideIn 0.35s ease" }}>
      <SectionHeading>Top Study Destinations</SectionHeading>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(230px, 1fr))", gap:18 }}>
        {(selected.destinations || [
          { country:"Russia",      flag:"🇷🇺", note:"Largest MBBS destination globally",  students:"12,000+" },
          { country:"Philippines", flag:"🇵🇭", note:"US-pattern curriculum",              students:"8,500+"  },
          { country:"Kazakhstan",  flag:"🇰🇿", note:"Affordable & WHO listed",            students:"6,200+"  },
          { country:"Georgia",     flag:"🇬🇪", note:"European standard education",        students:"4,800+"  },
          { country:"Bangladesh",  flag:"🇧🇩", note:"Similar curriculum, low cost",       students:"3,100+"  },
          { country:"Nepal",       flag:"🇳🇵", note:"SAARC region preference",            students:"2,400+"  },
        ]).map((d, i) => (
          <div key={i} className="cd-dest-card" style={{ padding:"24px 20px", borderRadius:20, background:"var(--white)", border:"1.5px solid var(--border)", boxShadow:"0 4px 20px rgba(0,0,0,0.05)", position:"relative", overflow:"hidden", display:"flex", flexDirection:"column", gap:10 }}>
            <div className="cd-dest-topbar" style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg, var(--primary), #ff6eb0)", borderRadius:"20px 20px 0 0", transform:"scaleX(0)", transformOrigin:"left", transition:"transform 0.3s ease" }} />
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <span style={{ fontSize:30, lineHeight:1, filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.12))" }}>{d.flag}</span>
              <div>
                <p style={{ fontFamily:"var(--font-main)", fontWeight:700, fontSize:16, color:"var(--dark)", margin:0, lineHeight:1.2 }}>{d.country}</p>
                {d.students && <p style={{ fontFamily:"var(--font-main)", fontSize:11, fontWeight:600, color:"var(--primary)", margin:"3px 0 0", letterSpacing:"0.04em" }}>{d.students} Indian students</p>}
              </div>
            </div>
            <div style={{ height:1, background:"var(--border)" }} />
            <p style={{ fontFamily:"var(--font-main)", fontSize:13, color:"var(--gray)", lineHeight:1.6, margin:0 }}>{d.note}</p>
            <div className="cd-dest-learn" style={{ display:"inline-flex", alignItems:"center", gap:5, color:"var(--primary)", fontFamily:"var(--font-main)", fontSize:12, fontWeight:700, letterSpacing:"0.04em", opacity:0, transition:"opacity 0.25s ease" }}>
              Learn more
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width:12, height:12 }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <CourseNavRow category={category} courseTitle={selected.title} onBack={onBack} />

      {/* Section label */}
      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:18 }}>
        <div style={{ width:4, height:18, borderRadius:4, background:"linear-gradient(180deg, var(--primary), #ff6eb0)" }} />
        <p style={{ fontFamily:"var(--font-main)", fontSize:11, fontWeight:700, color:"var(--primary)", letterSpacing:"0.18em", textTransform:"uppercase", margin:0 }}>Course at a Glance</p>
      </div>

      {/* Premium dark card container */}
      <div style={{
        borderRadius:28, padding:"28px",
        background:"#09090f",
        border:"1.5px solid rgba(225,10,111,0.35)",
        boxShadow:"0 0 0 1px rgba(225,10,111,0.08), 0 24px 80px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.04)",
        position:"relative", overflow:"hidden",
        marginBottom:64,
      }}>
        {/* Outer ambient glow */}
        <div aria-hidden style={{
          position:"absolute", inset:0, pointerEvents:"none",
          background:`
            radial-gradient(ellipse 55% 70% at 90% 50%, rgba(225,10,111,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 40% 50% at 5%  50%, rgba(225,10,111,0.05) 0%, transparent 55%)
          `,
        }} />

        <div className="cd-stat-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(210px, 1fr))", gap:16, position:"relative", zIndex:1 }}>
          {[
            { themeKey:"duration",    label:"Duration",           value: selected.duration    || "5–6 Years",     subtext:"Full medical degree program",    delay:80  },
            { themeKey:"eligibility", label:"Eligibility",        value: selected.eligibility || "10+2 with PCB", subtext:"Min. 50% marks required",        delay:160 },
            { themeKey:"fees",        label:"Approx. Fees",       value: selected.fees        || "₹3–25 LPA",     subtext:"Varies by country & university", delay:240 },
            { themeKey:"global",      label:"Global Recognition", value:"WHO · NMC · ECFMG",                      subtext:"Accepted in 100+ countries",     delay:320 },
          ].map((item) => <StatCard key={item.label} {...item} />)}
        </div>
      </div>

      {/* TABS */}
      <div style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:36 }}>
        {tabs.map((t, i) => <Tab key={t} label={t} active={activeTab === i} onClick={() => setActiveTab(i)} />)}
      </div>

      {/* TAB PANEL */}
      <div key={activeTab} className="cd-tab-panel" style={{ padding:"44px 48px", borderRadius:24, background:"rgba(255,255,255,0.84)", backdropFilter:"blur(20px)", border:"1px solid rgba(0,0,0,0.06)", boxShadow:"0 8px 48px rgba(0,0,0,0.07)", animation:"fadeSlideIn 0.32s ease" }}>
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
    <div style={{ maxWidth:520, margin:"0 auto", animation:"fadeSlideIn 0.5s ease" }}>
      <CourseNavRow category={category} courseTitle={selected.title} onBack={onBack} />
      <div style={{ borderRadius:28, overflow:"hidden", background:"var(--dark)", boxShadow:"0 32px 80px rgba(0,0,0,0.28)", border:"1px solid rgba(225,10,111,0.18)", position:"relative" }}>
        <div style={{ height:5, background:"linear-gradient(90deg, var(--primary), #ff6eb0)" }} />
        <div style={{ padding:"44px 40px 48px" }}>
          <span style={{ display:"inline-block", padding:"5px 14px", borderRadius:40, background:"rgba(225,10,111,0.12)", border:"1px solid rgba(225,10,111,0.25)", fontFamily:"var(--font-main)", fontSize:12, fontWeight:600, color:"var(--primary)", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:20 }}>Course Overview</span>
          <h2 style={{ fontFamily:"var(--font-main)", fontSize:"clamp(1.3rem, 3vw, 1.75rem)", fontWeight:800, color:"#fff", lineHeight:1.25, marginBottom:16 }}>{selected.title}</h2>
          <p style={{ fontFamily:"var(--font-main)", color:"#9ca3af", lineHeight:1.75, fontSize:15, marginBottom:32 }}>{selected.desc}</p>
          {selected.duration && (
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"8px 18px", borderRadius:40, background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", marginBottom:36 }}>
              <span style={{ fontSize:16 }}>🕐</span>
              <span style={{ fontFamily:"var(--font-main)", fontSize:13, fontWeight:600, color:"#d1d5db", letterSpacing:"0.02em" }}>{selected.duration}</span>
            </div>
          )}
          <button className="cd-cta-btn" onClick={onEnquire} style={{ width:"100%", padding:"16px 0", borderRadius:14, border:"none", cursor:"pointer", fontFamily:"var(--font-main)", fontSize:16, fontWeight:700, letterSpacing:"0.04em", color:"#fff", background:"var(--primary)", boxShadow:"0 10px 30px rgba(225,10,111,0.3)" }}>Enquire Now →</button>
          <p style={{ fontFamily:"var(--font-main)", fontSize:13, color:"#6b7280", textAlign:"center", marginTop:14 }}>Free counselling · No commitment</p>
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
    <section style={{ position:"relative", overflow:"hidden", background:"var(--primary-light)", padding:"88px 24px" }}>
      <div style={{ maxWidth:680, margin:"0 auto", position:"relative", zIndex:1, textAlign:"center" }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"6px 18px", borderRadius:100, background:"rgba(225,10,111,0.10)", border:"1px solid rgba(225,10,111,0.20)", marginBottom:24 }}>
          <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--primary)", boxShadow:"0 0 6px rgba(225,10,111,0.6)", animation:"pulse 2s ease-in-out infinite", flexShrink:0, display:"inline-block" }} />
          <span style={{ fontFamily:"var(--font-main)", fontSize:11, fontWeight:700, color:"var(--primary)", letterSpacing:"0.13em", textTransform:"uppercase" }}>Start Your Journey Today</span>
        </div>
        <h2 style={{ fontFamily:"var(--font-main)", fontSize:"clamp(1.75rem, 4vw, 2.75rem)", fontWeight:900, color:"var(--dark)", lineHeight:1.15, letterSpacing:"-0.03em", marginBottom:16 }}>
          Ready to Study{" "}
          <span style={{ background:"linear-gradient(90deg, var(--primary), #ff6eb0)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Abroad?</span>
        </h2>
        <p style={{ fontFamily:"var(--font-main)", fontSize:15.5, color:"var(--gray)", lineHeight:1.8, maxWidth:460, marginInline:"auto", marginBottom:40 }}>
          Talk to our expert counsellors for free. We guide you from course selection to visa approval — every step of the way.
        </p>
        <button className="cd-cta-btn" onClick={onEnquire} style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"17px 42px", borderRadius:14, border:"none", cursor:"pointer", fontFamily:"var(--font-main)", fontSize:15, fontWeight:700, color:"#fff", background:"var(--primary)", boxShadow:"0 10px 32px rgba(225,10,111,0.28)", letterSpacing:"0.03em" }}>
          Get Free Counselling
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width:16, height:16 }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
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
      <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:20, fontFamily:"var(--font-main)", background:"var(--light)", textAlign:"center", padding:24 }}>
        <style>{`.cd-cta-btn{transition:all .28s ease}.cd-cta-btn:hover{transform:translateY(-3px);box-shadow:0 20px 52px rgba(225,10,111,0.42)!important;background:var(--primary-dark)!important}`}</style>
        <div style={{ width:72, height:72, borderRadius:"50%", background:"var(--primary-light)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:32 }}>🎓</div>
        <h2 style={{ fontSize:"clamp(1.4rem,3vw,1.9rem)", fontWeight:800, color:"var(--dark)", letterSpacing:"-0.02em", fontFamily:"var(--font-main)" }}>Course Not Found</h2>
        <p style={{ fontSize:15, color:"var(--gray)", maxWidth:360, lineHeight:1.7, fontFamily:"var(--font-main)" }}>We couldn't find this course. It may have been moved or the link is incorrect.</p>
        <button className="cd-cta-btn" onClick={() => navigate("/courses")} style={{ padding:"12px 32px", borderRadius:12, border:"none", cursor:"pointer", fontFamily:"var(--font-main)", fontSize:14, fontWeight:700, color:"#fff", background:"var(--primary)", boxShadow:"0 8px 24px rgba(225,10,111,0.30)" }}>Browse All Courses</button>
      </div>
    );
  }

  const isFull = FULL_DETAIL.includes(course);
  const handleEnquire = () => document.getElementById("course-cta")?.scrollIntoView({ behavior:"smooth" });
  const handleBack = () => navigate(-1);

  return (
    <div style={{
      fontFamily:"var(--font-main)", minHeight:"100vh", position:"relative",
      background:`
        radial-gradient(ellipse 100% 60% at 50% -2%, rgba(255,170,210,0.52) 0%, transparent 58%),
        radial-gradient(ellipse 55% 45% at 95% 18%,  rgba(255,145,185,0.18) 0%, transparent 55%),
        radial-gradient(ellipse 45% 38% at 2%  28%,  rgba(255,200,228,0.20) 0%, transparent 50%),
        radial-gradient(ellipse 70% 50% at 50% 100%, rgba(253,220,237,0.38) 0%, transparent 65%),
        linear-gradient(180deg, #fff8fb 0%, #fff2f7 40%, #fde8f2 75%, #fbd5e8 100%)
      `,
    }}>
      <style>{`
        @keyframes fadeSlideIn { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes floatDot { from{transform:translateY(0) scale(1)} to{transform:translateY(-18px) scale(1.15)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.82)} }
        @keyframes shimmerGlow { 0%,100%{opacity:.55} 50%{opacity:.85} }
        @keyframes spin { to{transform:rotate(360deg)} }
        * { box-sizing:border-box; }

        /* ── Premium Stat Card hover ── */
        .cd-stat-card {
          transition: transform .4s cubic-bezier(.22,1,.36,1), border-color .35s ease, box-shadow .4s ease;
        }
        .cd-stat-card:hover {
          transform: translateY(-10px) !important;
          border-color: rgba(225,10,111,0.80) !important;
          box-shadow: 0 0 0 1px rgba(225,10,111,0.20), 0 32px 64px rgba(225,10,111,0.22), 0 8px 24px rgba(0,0,0,0.5) !important;
        }
        .cd-stat-card:hover .sc-bar { width: 100% !important; }
        .cd-stat-card:hover .sc-icon {
          transform: scale(1.08);
          box-shadow: 0 0 0 6px rgba(225,10,111,0.10) !important;
        }
        .sc-icon { transition: transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s ease; }
        .sc-bar { transition: width .55s cubic-bezier(.22,1,.36,1) !important; }

        /* ── Destination card ── */
        .cd-dest-card { transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease; }
        .cd-dest-card:hover { transform:translateY(-7px); border-color:rgba(225,10,111,.5)!important; box-shadow:0 20px 50px rgba(225,10,111,.14)!important; }
        .cd-dest-card:hover .cd-dest-topbar { transform:scaleX(1)!important; }
        .cd-dest-card:hover .cd-dest-learn  { opacity:1!important; }

        .cd-tab-btn { transition:all .25s ease; }
        .cd-tab-btn:hover { border-color:var(--primary)!important; color:var(--primary)!important; }

        .cd-cta-btn { transition:all .28s ease; }
        .cd-cta-btn:hover:not(:disabled) { transform:translateY(-3px); box-shadow:0 20px 52px rgba(225,10,111,.42)!important; background:var(--primary-dark)!important; }
        .cd-btn-outline { transition:all .28s ease; }
        .cd-btn-outline:hover { background:#fff!important; border-color:var(--primary)!important; transform:translateY(-3px); box-shadow:0 10px 28px rgba(225,10,111,.14)!important; }

        .cd-back-btn { transition:background .25s ease,border-color .25s ease,transform .25s ease; }
        .cd-back-btn:hover { background:rgba(225,10,111,.14)!important; border-color:rgba(225,10,111,.38)!important; transform:translateX(-3px); }

        .cd-highlight-item { transition:background .2s ease,transform .2s ease,box-shadow .2s ease; }
        .cd-highlight-item:hover { background:var(--primary-light)!important; transform:translateX(5px); box-shadow:0 4px 16px rgba(225,10,111,.08)!important; }

        .cd-hero-pill { display:inline-flex;align-items:center;gap:8px;padding:9px 20px;border-radius:40px;background:rgba(255,255,255,0.75);border:1.5px solid rgba(225,10,111,0.14);backdrop-filter:blur(12px);font-family:var(--font-main);font-size:13px;font-weight:600;color:var(--dark);transition:border-color .22s ease,background .22s ease,transform .22s ease;cursor:default; }
        .cd-hero-pill:hover { border-color:rgba(225,10,111,.34);background:rgba(255,255,255,.95);transform:translateY(-2px); }

        .cd-proof-val { font-family:var(--font-main);font-size:24px;font-weight:900;line-height:1.1;color:var(--dark); }
        .cd-proof-label { font-family:var(--font-main);font-size:11px;color:var(--gray);font-weight:500;margin-top:4px; }

        @media (max-width:960px) { .cd-hero-grid{grid-template-columns:1fr!important} .cd-hero-right{display:none!important} .cd-hero-left{align-items:center!important;text-align:center!important} }
        @media (max-width:768px) { .cd-stat-grid{grid-template-columns:1fr 1fr!important} .cd-tab-panel{padding:28px 20px!important} }
        @media (max-width:480px) { .cd-stat-grid{grid-template-columns:1fr!important} .cd-hero-actions{flex-direction:column!important} .cd-proof-sep{display:none!important} }
      `}</style>

      <ParticleBg />

      <div style={{ position:"relative", zIndex:1 }}>

        {/* ════ HERO ════ */}
        <section ref={heroRef} style={{ position:"relative", overflow:"hidden" }}>
          <div aria-hidden style={{ position:"absolute", inset:0, pointerEvents:"none", background:`radial-gradient(ellipse 70% 55% at 50% -10%, rgba(225,10,111,0.13) 0%, transparent 60%), radial-gradient(ellipse 40% 35% at 95% 30%, rgba(255,110,176,0.09) 0%, transparent 55%)`, animation:"shimmerGlow 7s ease-in-out infinite" }} />

          <div className="cd-hero-grid" style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(100px,12vw,148px) clamp(24px,5vw,72px) clamp(72px,9vw,112px)", display:"grid", gridTemplateColumns:"1fr 420px", gap:"clamp(36px,5vw,72px)", alignItems:"center", position:"relative", zIndex:2 }}>
            <div className="cd-hero-left" style={{ display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"6px 16px", borderRadius:100, background:"rgba(225,10,111,0.08)", border:"1px solid rgba(225,10,111,0.2)", marginBottom:16, animation:"fadeSlideIn .48s ease both" }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:"var(--primary)", display:"inline-block", animation:"pulse 2s ease-in-out infinite", boxShadow:"0 0 0 3px rgba(225,10,111,0.2)" }} />
                <span style={{ fontFamily:"var(--font-main)", fontSize:11, fontWeight:700, color:"var(--primary)", letterSpacing:"0.12em", textTransform:"uppercase" }}>{CATEGORY_LABELS[category] || category?.replace(/-/g," ")} · Expert Guided</span>
              </div>

              {isFull && (
                <div style={{ marginBottom:14, animation:"fadeSlideIn .5s .06s ease both" }}>
                  <span style={{ display:"inline-block", padding:"5px 16px", borderRadius:40, background:"linear-gradient(90deg, var(--primary), #ff6eb0)", fontFamily:"var(--font-main)", fontSize:11, fontWeight:700, color:"#fff", letterSpacing:"0.1em", textTransform:"uppercase", boxShadow:"0 4px 16px rgba(225,10,111,0.32)" }}>✦ Comprehensive Guide</span>
                </div>
              )}

              <h1 style={{ fontFamily:"var(--font-main)", fontSize:"clamp(2rem, 4vw, 3.5rem)", fontWeight:900, color:"var(--dark)", lineHeight:1.1, letterSpacing:"-0.03em", marginBottom:18, animation:"fadeSlideIn .58s .1s ease both" }}>{selected.title}</h1>
              <div style={{ width:56, height:5, borderRadius:4, background:"linear-gradient(90deg, var(--primary), #ff6eb0)", marginBottom:22, animation:"fadeSlideIn .52s .16s ease both" }} />
              <p style={{ fontFamily:"var(--font-main)", color:"var(--gray)", lineHeight:1.85, fontSize:"clamp(14px,1.8vw,16px)", marginBottom:28, maxWidth:560, animation:"fadeSlideIn .58s .22s ease both" }}>{selected.desc}</p>

              <div style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:32, animation:"fadeSlideIn .58s .28s ease both" }}>
                <span className="cd-hero-pill">🕐 {selected.duration || "5–6 Years"}</span>
                <span className="cd-hero-pill">🌍 100+ Countries</span>
                <span className="cd-hero-pill">📋 No Entrance Exam</span>
                <span className="cd-hero-pill">💰 Affordable Fees</span>
              </div>

              <div className="cd-hero-actions" style={{ display:"flex", gap:14, flexWrap:"wrap", marginBottom:44, animation:"fadeSlideIn .58s .34s ease both" }}>
                <button className="cd-cta-btn" onClick={handleEnquire} style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"15px 34px", borderRadius:14, border:"none", cursor:"pointer", fontFamily:"var(--font-main)", fontSize:15, fontWeight:700, color:"#fff", background:"var(--primary)", boxShadow:"0 10px 32px rgba(225,10,111,0.30)" }}>
                  Free Counselling <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width:16, height:16 }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
                <button className="cd-btn-outline" onClick={handleEnquire} style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"15px 34px", borderRadius:14, cursor:"pointer", fontFamily:"var(--font-main)", fontSize:15, fontWeight:700, color:"var(--primary)", background:"rgba(255,255,255,0.80)", border:"2px solid rgba(225,10,111,0.22)", backdropFilter:"blur(10px)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width:15, height:15 }}><circle cx="12" cy="12" r="10"/><polyline points="12 8 12 12 14 14"/></svg>
                  View Details
                </button>
              </div>

              <div style={{ display:"flex", alignItems:"center", flexWrap:"wrap", animation:"fadeSlideIn .58s .40s ease both" }}>
                {[{ val:"2,500+", label:"Students Placed" }, { val:"98%", label:"Visa Success" }, { val:"40+", label:"Partner Universities" }].map((p, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center" }}>
                    {i > 0 && <div className="cd-proof-sep" style={{ width:1, height:36, background:"var(--border)", margin:"0 24px" }} />}
                    <div><div className="cd-proof-val">{p.val}</div><div className="cd-proof-label">{p.label}</div></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cd-hero-right" style={{ animation:"fadeSlideIn .72s .22s ease both" }}>
              <EnquiryCard courseTitle={selected.title} />
            </div>
          </div>
        </section>

        {/* ════ BODY ════ */}
        <section style={{ maxWidth:1080, margin:"0 auto", padding:"0 24px 100px" }}>
          {isFull
            ? <FullCoursePage selected={selected} category={category} onBack={handleBack} />
            : <MinimalCoursePage selected={selected} onEnquire={handleEnquire} category={category} onBack={handleBack} />}
        </section>

        {/* ════ CTA ════ */}
        <div id="course-cta"><CourseCtaSection onEnquire={handleEnquire} /></div>
      </div>
    </div>
  );
}
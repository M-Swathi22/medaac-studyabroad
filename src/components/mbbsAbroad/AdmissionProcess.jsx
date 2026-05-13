import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  MessageCircleMore,
  University,
  FileText,
  BadgeCheck,
  ShieldCheck,
  Plane,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircleMore,
    title: "Free Counseling",
    desc: "Get expert one-on-one guidance to choose the right country, university, and course that matches your academic profile and budget.",
    detail: "Our certified counselors have helped 10,000+ students find their ideal MBBS destination. The session is 100% free, no obligations.",
  },
  {
    icon: University,
    title: "University Selection",
    desc: "We shortlist top NMC-approved medical universities tailored to your goals, scores, and financial plan — so you apply with confidence.",
    detail: "Choose from 200+ verified universities across Russia, Kazakhstan, Philippines, Georgia, and more — all with transparent fee structures.",
  },
  {
    icon: FileText,
    title: "Documentation",
    desc: "Our team assists with compiling academic transcripts, passport, photos, and all required certificates with zero hassle.",
    detail: "We provide a personalised checklist and review every document before submission to eliminate delays or rejections.",
  },
  {
    icon: BadgeCheck,
    title: "Admission Letter",
    desc: "Receive your official admission confirmation from the university. We verify authenticity and guide your next steps immediately.",
    detail: "Admission letters are typically issued within 7–14 business days. We liaise directly with the university on your behalf.",
  },
  {
    icon: ShieldCheck,
    title: "Visa Assistance",
    desc: "Full end-to-end visa support — from application filing to interview prep — with a 98% success rate across all destinations.",
    detail: "Our visa experts handle every country's specific requirements, including invitation letters, translations, and embassy appointments.",
  },
  {
    icon: Plane,
    title: "Travel & Departure",
    desc: "Pre-departure briefing, travel arrangements, and on-ground orientation so you land ready to begin your MBBS journey.",
    detail: "From airport pickup to hostel allocation — our on-ground teams ensure your first days abroad are completely stress-free.",
  },
];

export default function AdmissionProcess() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const ActiveIcon = steps[active].icon;
  const isThrottled = useRef(false);

  /* ─── Wheel on SECTION → change step ─── */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.preventDefault();
      if (isThrottled.current) return;
      isThrottled.current = true;

      if (e.deltaY > 0) {
        setDirection(1);
        setActive((p) => Math.min(steps.length - 1, p + 1));
      } else {
        setDirection(-1);
        setActive((p) => Math.max(0, p - 1));
      }

      setTimeout(() => { isThrottled.current = false; }, 650);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  /* ─── Touch swipe on card → change step ─── */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    let sx = 0, sy = 0;

    const onStart = (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; };
    const onEnd = (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) < Math.abs(dy) || Math.abs(dx) < 36) return;
      if (dx < 0) { setDirection(1);  setActive((p) => Math.min(steps.length - 1, p + 1)); }
      else         { setDirection(-1); setActive((p) => Math.max(0, p - 1)); }
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchend", onEnd, { passive: true });
    return () => { el.removeEventListener("touchstart", onStart); el.removeEventListener("touchend", onEnd); };
  }, []);

  const goTo = useCallback((index) => {
    if (index === active) return;
    setDirection(index > active ? 1 : -1);
    setActive(index);
  }, [active]);

  const cardVariants = {
    enter:  (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60, scale: 0.97 }),
    center:           ({ opacity: 1, x: 0, scale: 1 }),
    exit:   (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, scale: 0.97 }),
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "clamp(60px, 10vw, 100px) 24px clamp(70px, 10vw, 110px)",
        backgroundColor: "#FFF0F5",
        fontFamily: "var(--font-main)",
        overflow: "hidden",
      }}
    >
      {/* background blobs */}
      <div aria-hidden="true" style={{ position:"absolute", top:"-140px", right:"-140px", width:"520px", height:"520px", borderRadius:"50%", background:"radial-gradient(circle, rgba(225,10,111,0.10) 0%, transparent 65%)", pointerEvents:"none" }} />
      <div aria-hidden="true" style={{ position:"absolute", bottom:"-90px", left:"-90px", width:"380px", height:"380px", borderRadius:"50%", background:"radial-gradient(circle, rgba(225,10,111,0.07) 0%, transparent 65%)", pointerEvents:"none" }} />
      {/* dot grid */}
      <div aria-hidden="true" style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(225,10,111,0.10) 1px, transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none", opacity:0.45 }} />

      <div style={{ position:"relative", zIndex:1, maxWidth:"1100px", margin:"0 auto" }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity:0, y:24 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
          style={{ textAlign:"center", maxWidth:"580px", margin:"0 auto 56px" }}
        >
          <div style={{ display:"inline-flex", alignItems:"center", gap:"10px", marginBottom:"18px" }}>
            <div style={{ height:"1px", width:"32px", background:"var(--primary)", opacity:0.8 }} />
            <span style={{ fontSize:"0.65rem", fontWeight:700, color:"var(--primary)", letterSpacing:"0.13em", textTransform:"uppercase", fontFamily:"var(--font-main)" }}>
              How It Works
            </span>
            <div style={{ height:"1px", width:"32px", background:"var(--primary)", opacity:0.8 }} />
          </div>

          <h2 style={{
            color:"#1A1A2E",
            fontSize:"clamp(1.75rem, 4.5vw, 2.8rem)",
            fontWeight:900, lineHeight:1.1,
            letterSpacing:"-0.035em", margin:"0 0 14px",
            fontFamily:"var(--font-main)",
          }}>
            MBBS Abroad{" "}
            <span style={{ color:"var(--primary)" }}>Admission Process</span>
          </h2>

          <p style={{ color:"#9A6878", fontSize:"clamp(0.875rem, 2vw, 0.975rem)", lineHeight:1.8, margin:0, fontFamily:"var(--font-main)" }}>
            Six simple steps — from your first question to boarding your flight.
          </p>
        </motion.div>

        {/* ── Horizontal Stepper ── */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.6, delay:0.15, ease:[0.22,1,0.36,1] }}
          style={{
            display:"flex", alignItems:"flex-start", justifyContent:"center",
            marginBottom:"36px", overflowX:"auto", padding:"16px 8px 8px",
            scrollbarWidth:"none",
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = active === index;
            const isPast = index < active;

            return (
              <div key={index} style={{ display:"flex", alignItems:"flex-start", flexShrink:0 }}>
                <button
                  onClick={() => goTo(index)}
                  style={{
                    display:"flex", flexDirection:"column", alignItems:"center",
                    gap:"10px", background:"none", border:"none",
                    cursor:"pointer", padding:"4px 6px",
                    minWidth:"clamp(68px, 10vw, 100px)", outline:"none",
                  }}
                >
                  <div style={{ padding:"8px", position:"relative" }}>
                    {isActive && (
                      <motion.div
                        layoutId="activeRing"
                        style={{
                          position:"absolute", inset:"0px", borderRadius:"50%",
                          border:"2.5px solid rgba(225,10,111,0.55)",
                          boxShadow:"0 0 0 4px rgba(225,10,111,0.12), 0 0 18px rgba(225,10,111,0.25)",
                        }}
                        transition={{ type:"spring", stiffness:340, damping:28 }}
                      />
                    )}
                    <motion.div
                      animate={{
                        background: isActive ? "var(--primary)" : isPast ? "var(--primary)" : "#F9D5E5",
                        boxShadow: isActive ? "0 0 20px rgba(225,10,111,0.35)" : "none",
                      }}
                      transition={{ duration:0.28 }}
                      style={{
                        width:"clamp(40px, 6vw, 50px)", height:"clamp(40px, 6vw, 50px)",
                        borderRadius:"50%",
                        border: isActive ? "2px solid var(--primary)" : isPast ? "2px solid rgba(225,10,111,0.5)" : "2px solid rgba(225,10,111,0.2)",
                        display:"flex", alignItems:"center", justifyContent:"center",
                        position:"relative", zIndex:1,
                      }}
                    >
                      <Icon size={18} strokeWidth={1.8} color={isActive || isPast ? "#fff" : "rgba(225,10,111,0.45)"} />
                    </motion.div>
                  </div>

                  <span style={{
                    fontSize:"0.56rem", fontWeight:700, letterSpacing:"0.1em",
                    textTransform:"uppercase", fontFamily:"var(--font-main)",
                    color: isActive ? "var(--primary)" : isPast ? "rgba(225,10,111,0.5)" : "#D0A0B0",
                    transition:"color 0.3s ease",
                  }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span style={{
                    fontSize:"clamp(0.62rem, 1.4vw, 0.74rem)",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#1A1A2E" : isPast ? "#9A6878" : "#C090A0",
                    fontFamily:"var(--font-main)",
                    textAlign:"center", lineHeight:1.35, maxWidth:"80px",
                    transition:"color 0.3s ease",
                  }}>
                    {step.title}
                  </span>
                </button>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div style={{
                    width:"clamp(24px, 4vw, 52px)", height:"2px",
                    marginTop:"calc(clamp(40px, 6vw, 50px) / 2 + 8px)",
                    flexShrink:0, position:"relative",
                    background:"rgba(225,10,111,0.15)",
                    borderRadius:"999px", overflow:"hidden",
                  }}>
                    <motion.div
                      animate={{ scaleX: index < active ? 1 : 0 }}
                      transition={{ duration:0.4, ease:[0.22,1,0.36,1] }}
                      style={{
                        position:"absolute", inset:0,
                        background:"var(--primary)",
                        transformOrigin:"left", borderRadius:"999px",
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* ── Card Panel ── */}
        <div
          ref={cardRef}
          style={{
            maxWidth:"700px",
            margin:"0 auto",
            overflow:"hidden",
            borderRadius:"28px",
            userSelect:"none",
            touchAction:"pan-y",
          }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration:0.38, ease:[0.22,1,0.36,1] }}
              style={{
                padding:"clamp(24px, 5vw, 40px)",
                borderRadius:"28px",
                background:"#fff",
                border:"1px solid rgba(225,10,111,0.16)",
                boxShadow:"0 10px 52px rgba(225,10,111,0.10), 0 0 0 1px rgba(255,255,255,0.8) inset",
                display:"flex",
                alignItems:"flex-start",
                gap:"clamp(14px, 3vw, 26px)",
                position:"relative",
                overflow:"hidden",
              }}
            >
              {/* ghost number */}
              <div style={{
                position:"absolute", right:"14px", bottom:"-12px",
                fontSize:"clamp(64px, 13vw, 108px)", fontWeight:900,
                color:"rgba(225,10,111,0.05)", lineHeight:1,
                fontFamily:"var(--font-main)", letterSpacing:"-0.05em",
                userSelect:"none", pointerEvents:"none",
              }}>
                {String(active + 1).padStart(2, "0")}
              </div>

              {/* pink left bar */}
              <div style={{
                position:"absolute", left:0, top:"24px", bottom:"24px",
                width:"4px", borderRadius:"0 4px 4px 0",
                background:"var(--primary)", opacity:0.9,
              }} />

              {/* icon */}
              <div style={{
                width:"clamp(46px, 8vw, 58px)", height:"clamp(46px, 8vw, 58px)",
                borderRadius:"16px",
                background:"rgba(225,10,111,0.08)",
                border:"1px solid rgba(225,10,111,0.2)",
                display:"flex", alignItems:"center", justifyContent:"center",
                flexShrink:0, marginLeft:"12px",
              }}>
                <ActiveIcon size={22} color="var(--primary)" strokeWidth={1.7} />
              </div>

              {/* content */}
              <div style={{ flex:1, position:"relative", zIndex:1, minWidth:0 }}>
                <div style={{
                  fontSize:"0.58rem", fontWeight:700, color:"var(--primary)",
                  letterSpacing:"0.1em", textTransform:"uppercase",
                  fontFamily:"var(--font-main)", marginBottom:"6px",
                }}>
                  Step {String(active + 1).padStart(2, "0")} of {steps.length}
                </div>

                <h3 style={{
                  color:"#1A1A2E",
                  fontSize:"clamp(1rem, 3vw, 1.28rem)",
                  fontWeight:800, lineHeight:1.2,
                  margin:"0 0 10px", letterSpacing:"-0.022em",
                  fontFamily:"var(--font-main)",
                }}>
                  {steps[active].title}
                </h3>

                <p style={{
                  color:"#3A2030",
                  fontSize:"clamp(0.82rem, 2vw, 0.9rem)",
                  lineHeight:1.78, margin:"0 0 8px",
                  fontFamily:"var(--font-main)", fontWeight:500,
                }}>
                  {steps[active].desc}
                </p>

                <p style={{
                  color:"#9A6878",
                  fontSize:"clamp(0.75rem, 1.8vw, 0.84rem)",
                  lineHeight:1.7, margin:"0 0 22px",
                  fontFamily:"var(--font-main)",
                }}>
                  {steps[active].detail}
                </p>

                {/* bottom row: dots + hint */}
                <div style={{
                  display:"flex", alignItems:"center",
                  justifyContent:"space-between", flexWrap:"wrap", gap:"10px",
                }}>
                  {/* progress dots */}
                  <div style={{ display:"flex", gap:"6px", alignItems:"center" }}>
                    {steps.map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          width: i === active ? 22 : 7,
                          background: i === active
                            ? "var(--primary)"
                            : i < active
                            ? "rgba(225,10,111,0.38)"
                            : "rgba(225,10,111,0.14)",
                        }}
                        transition={{ duration:0.3 }}
                        style={{ height:"4px", borderRadius:"999px" }}
                      />
                    ))}
                  </div>

                  {/* interaction hint */}
                  <div style={{
                    display:"flex", alignItems:"center", gap:"5px",
                    fontSize:"0.68rem", color:"#C090A0",
                    fontFamily:"var(--font-main)", fontWeight:500,
                  }}>
                    <span>⟵</span>
                    <span className="ap-desktop-hint">Scroll anywhere</span>
                    <span className="ap-mobile-hint">Swipe card</span>
                    <span>⟶</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.6, delay:0.4, ease:[0.22,1,0.36,1] }}
          style={{ textAlign:"center", marginTop:"48px" }}
        >
          <motion.button
            whileHover={{ scale:1.04, boxShadow:"0 18px 44px rgba(225,10,111,0.40)" }}
            whileTap={{ scale:0.97 }}
            style={{
              padding:"clamp(12px, 2vw, 14px) clamp(28px, 5vw, 40px)",
              borderRadius:"999px", background:"var(--primary)", color:"#fff",
              fontSize:"clamp(0.83rem, 2vw, 0.92rem)", fontWeight:700,
              letterSpacing:"0.01em", border:"none",
              cursor:"pointer", fontFamily:"var(--font-main)",
              boxShadow:"0 8px 32px rgba(225,10,111,0.28)",
            }}
          >
            Start Free Counseling →
          </motion.button>
        </motion.div>

      </div>

      <style>{`
        .ap-mobile-hint  { display: none;   }
        .ap-desktop-hint { display: inline; }
        @media (max-width: 600px) {
          .ap-desktop-hint { display: none;   }
          .ap-mobile-hint  { display: inline; }
        }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
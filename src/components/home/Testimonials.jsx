import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/images/hero.avif";

const testimonials = [
  {
    name: "Arjun Menon",
    role: "MBBS · Russia",
    avatar: "https://i.pravatar.cc/120?img=33",
    text: "Medaac made the entire process seamless.",
    rating: 5,
  },
  {
    name: "Sneha Pillai",
    role: "BDS · Georgia",
    avatar: "https://i.pravatar.cc/120?img=47",
    text: "Matched my budget perfectly.",
    rating: 5,
  },
  {
    name: "Rahul Krishnan",
    role: "MBBS · Ukraine",
    avatar: "https://i.pravatar.cc/120?img=12",
    text: "Smooth admission process.",
    rating: 5,
  },
  {
    name: "Fathima Noor",
    role: "Nursing · Philippines",
    avatar: "https://i.pravatar.cc/120?img=44",
    text: "Great support even after joining.",
    rating: 5,
  },
  {
    name: "Aditya Varma",
    role: "MBBS · Kazakhstan",
    avatar: "https://i.pravatar.cc/120?img=15",
    text: "Very transparent. I 100% recommend Medaac.",
    rating: 5,
  },
  {
    name: "Lakshmi Priya",
    role: "BAMS · India",
    avatar: "https://i.pravatar.cc/120?img=56",
    text: "Quick and stress-free admission process.",
    rating: 5,
  },
];

const PILL_W = 170;
const PILL_H = 300;
const GAP    = 50;
const STEP   = PILL_W + GAP;
const AV_R   = 32;
const SVG_H  = 440;
const LINE_Y = SVG_H / 2;
const COPIES = 6;

const M_CARD_W = 150;
const M_CARD_H = 200;
const M_GAP    = 16;
const M_STEP   = M_CARD_W + M_GAP;
const M_AV_R   = 26;
const M_SVG_H  = 220;
const M_LINE_Y = M_SVG_H / 2;
const M_COPIES = 6;

function Stars({ count, size = 11 }) {
  return (
    <div style={{ display: "flex", gap: 2, justifyContent: "center" }}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="var(--secondary)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Station({ item, index }) {
  const isEven = index % 2 === 0;
  const cx     = index * STEP + PILL_W / 2;
  const pillX  = cx - PILL_W / 2;
  const pillY  = LINE_Y - PILL_H / 2;
  const avCY   = isEven ? pillY + PILL_H - 65 : pillY + 65;
  const textY  = isEven ? pillY + 18 : LINE_Y + 10;
  const clipId = `clip-${index}`;

  return (
    <g>
      <defs>
        <clipPath id={clipId}>
          <circle cx={cx} cy={avCY} r={AV_R - 2} />
        </clipPath>
      </defs>
      <ellipse cx={cx} cy={LINE_Y} rx={PILL_W / 2 + 10} ry={PILL_H / 2 + 10}
        fill="var(--primary)" fillOpacity="0.04" />
      <rect x={pillX} y={pillY} width={PILL_W} height={PILL_H} rx={PILL_W / 2}
        fill="white" stroke="var(--primary)" strokeOpacity="0.4" strokeWidth="1.2" />
      <line x1={pillX + 22} y1={LINE_Y} x2={pillX + PILL_W - 22} y2={LINE_Y}
        stroke="var(--primary)" strokeOpacity="0.12" strokeDasharray="3 3" />
      <circle cx={cx} cy={avCY} r={AV_R + 7}
        fill="none" stroke="var(--primary)" strokeOpacity="0.1" strokeWidth="6" />
      <circle cx={cx} cy={avCY} r={AV_R} fill="white" />
      <image href={item.avatar} x={cx - AV_R} y={avCY - AV_R}
        width={AV_R * 2} height={AV_R * 2}
        clipPath={`url(#${clipId})`} preserveAspectRatio="xMidYMid slice" />
      <circle cx={cx} cy={avCY} r={AV_R}
        fill="none" stroke="var(--primary)" strokeWidth="2.2" />
      <circle cx={cx} cy={LINE_Y} r={4}
        fill="white" stroke="var(--primary)" strokeWidth="1.5" strokeOpacity="0.5" />
      <foreignObject x={pillX + 12} y={textY} width={PILL_W - 24} height={118}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            textAlign: "center", gap: 5, fontFamily: "var(--font-main)",
            overflow: "hidden", height: "100%", padding: "2px 0",
          }}
        >
          <Stars count={item.rating} />
          <p style={{
            fontSize: 11, margin: 0, color: "var(--gray)", lineHeight: 1.45,
            display: "-webkit-box", WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical", overflow: "hidden",
          }}>
            "{item.text}"
          </p>
          <b style={{ fontSize: 12, color: "var(--dark)", marginTop: 2 }}>{item.name}</b>
          <span style={{
            fontSize: 10, color: "var(--primary)",
            background: "rgba(10,114,122,0.08)",
            padding: "2px 8px", borderRadius: 99,
          }}>
            {item.role}
          </span>
        </div>
      </foreignObject>
    </g>
  );
}

function MobileStation({ item, index }) {
  const cx    = index * M_STEP + M_CARD_W / 2;
  const cardX = cx - M_CARD_W / 2;
  const cardY = M_LINE_Y - M_CARD_H / 2;
  const avCY  = cardY + M_AV_R + 10;
  const clipId = `mclip-${index}`;

  return (
    <g>
      <defs>
        <clipPath id={clipId}>
          <circle cx={cx} cy={avCY} r={M_AV_R - 2} />
        </clipPath>
      </defs>
      <rect x={cardX} y={cardY} width={M_CARD_W} height={M_CARD_H} rx={16}
        fill="white" stroke="var(--primary)" strokeOpacity="0.3" strokeWidth="1" />
      <circle cx={cx} cy={avCY} r={M_AV_R + 5}
        fill="none" stroke="var(--primary)" strokeOpacity="0.1" strokeWidth="5" />
      <circle cx={cx} cy={avCY} r={M_AV_R} fill="white" />
      <image href={item.avatar} x={cx - M_AV_R} y={avCY - M_AV_R}
        width={M_AV_R * 2} height={M_AV_R * 2}
        clipPath={`url(#${clipId})`} preserveAspectRatio="xMidYMid slice" />
      <circle cx={cx} cy={avCY} r={M_AV_R}
        fill="none" stroke="var(--primary)" strokeWidth="2" />
      <line x1={cardX + 16} y1={avCY + M_AV_R + 8}
            x2={cardX + M_CARD_W - 16} y2={avCY + M_AV_R + 8}
        stroke="var(--primary)" strokeOpacity="0.1" strokeWidth="1" />
      <foreignObject x={cardX + 8} y={avCY + M_AV_R + 14}
        width={M_CARD_W - 16} height={M_CARD_H - (avCY - cardY) - M_AV_R - 22}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            textAlign: "center", gap: 4, fontFamily: "var(--font-main)",
            overflow: "hidden", height: "100%",
          }}
        >
          <Stars count={item.rating} size={9} />
          <p style={{
            fontSize: 9.5, margin: 0, color: "var(--gray)", lineHeight: 1.4,
            display: "-webkit-box", WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical", overflow: "hidden",
          }}>
            "{item.text}"
          </p>
          <b style={{ fontSize: 10.5, color: "var(--dark)", marginTop: 1 }}>{item.name}</b>
          <span style={{
            fontSize: 9, color: "var(--primary)",
            background: "rgba(10,114,122,0.08)",
            padding: "1px 7px", borderRadius: 99,
          }}>
            {item.role}
          </span>
        </div>
      </foreignObject>
    </g>
  );
}

function PillSlider({ items }) {
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const paused = useRef(false);
  const [offset, setOffset] = useState(0);

  const totalW   = items.length * STEP;
  const allItems = Array.from({ length: COPIES }, () => items).flat();
  const stripW   = allItems.length * STEP;

  useEffect(() => {
    function tick() {
      if (!paused.current) {
        posRef.current += 2;
        if (posRef.current >= totalW) posRef.current -= totalW;
        setOffset(posRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [totalW]);

  return (
    <div
      className="overflow-hidden w-full"
      style={{ height: SVG_H, position: "relative" }}
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, bottom: 0, width: 90,
        zIndex: 10, pointerEvents: "none",
        background: "linear-gradient(to right, var(--primary-light) 30%, transparent)",
      }} />
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0, width: 90,
        zIndex: 10, pointerEvents: "none",
        background: "linear-gradient(to left, var(--primary-light) 30%, transparent)",
      }} />
      <div style={{ transform: `translateX(-${offset}px)`, willChange: "transform" }}>
        <svg width={stripW} height={SVG_H} xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1={LINE_Y} x2={stripW} y2={LINE_Y}
            stroke="var(--primary)" strokeOpacity="0.18" strokeWidth="1" />
          {allItems.map((item, i) => (
            <Station key={i} item={item} index={i} />
          ))}
        </svg>
      </div>
    </div>
  );
}

function MobileSlider({ items }) {
  const posRef  = useRef(0);
  const rafRef  = useRef(null);
  const paused  = useRef(false);
  const startX  = useRef(null);
  const [offset, setOffset] = useState(0);

  const totalW   = items.length * M_STEP;
  const allItems = Array.from({ length: M_COPIES }, () => items).flat();
  const stripW   = allItems.length * M_STEP;

  useEffect(() => {
    function tick() {
      if (!paused.current) {
        posRef.current += 1.4;
        if (posRef.current >= totalW) posRef.current -= totalW;
        setOffset(posRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [totalW]);

  return (
    <div
      style={{ height: M_SVG_H, position: "relative", overflow: "hidden", width: "100%" }}
      onTouchStart={(e) => { paused.current = true; startX.current = e.touches[0].clientX; }}
      onTouchMove={(e) => {
        const dx = startX.current - e.touches[0].clientX;
        posRef.current = (posRef.current + dx * 0.4 + totalW) % totalW;
        startX.current = e.touches[0].clientX;
        setOffset(posRef.current);
      }}
      onTouchEnd={() => { paused.current = false; }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, bottom: 0, width: 40,
        zIndex: 10, pointerEvents: "none",
        background: "linear-gradient(to right, var(--primary-light) 40%, transparent)",
      }} />
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0, width: 40,
        zIndex: 10, pointerEvents: "none",
        background: "linear-gradient(to left, var(--primary-light) 40%, transparent)",
      }} />
      <div style={{ transform: `translateX(-${offset}px)`, willChange: "transform" }}>
        <svg width={stripW} height={M_SVG_H} xmlns="http://www.w3.org/2000/svg">
          {allItems.map((item, i) => (
            <MobileStation key={i} item={item} index={i} />
          ))}
        </svg>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section
      className="py-20 md:py-24 relative overflow-hidden"
      style={{ background: "var(--primary-light)" }}
    >
      {/* bg blobs */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 400, height: 400, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(10,114,122,0.07) 0%, transparent 70%)",
      }} />
      <div style={{
        position: "absolute", bottom: -100, left: -100,
        width: 360, height: 360, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(247,148,29,0.06) 0%, transparent 70%)",
      }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 relative z-10">

        {/* heading */}
        <div style={{ marginBottom: 52 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "var(--secondary)",
            fontFamily: "var(--font-main)", marginBottom: 10,
          }}>
            <span style={{ display: "inline-block", width: 18, height: 2, background: "var(--secondary)", borderRadius: 99 }} />
            Student Stories
            <span style={{ display: "inline-block", width: 18, height: 2, background: "var(--secondary)", borderRadius: 99 }} />
          </span>

          <h2 style={{
            fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800,
            lineHeight: 1.15, color: "var(--dark)",
            fontFamily: "var(--font-main)", margin: 0,
          }}>
            What Our{" "}
            <span style={{ color: "var(--primary)", borderBottom: "3px solid var(--secondary)", paddingBottom: 2 }}>
              Students Say
            </span>
          </h2>

          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 14 }}>
            <div style={{ height: 4, width: 52, borderRadius: 99, background: "var(--secondary)" }} />
            <div style={{ height: 4, width: 20, borderRadius: 99, background: "var(--primary)" }} />
            <div style={{ height: 4, width: 8, borderRadius: 99, background: "var(--secondary)", opacity: 0.4 }} />
          </div>
        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="flex md:hidden flex-col items-center gap-6">

          {/* IMAGE — fixed bottom clipping with extra margin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              position: "relative",
              width: 180, height: 180,
              flexShrink: 0,
              marginBottom: 28, /* ← room for the bottom badge */
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                background: "conic-gradient(var(--primary) 0deg, var(--secondary) 120deg, var(--primary) 240deg, var(--secondary) 360deg)",
              }}
            />
            <div style={{ position: "absolute", inset: 4, borderRadius: "50%", background: "var(--primary-light)" }} />
            <img src={heroImg} alt="Students" style={{
              position: "absolute", inset: 8, borderRadius: "50%",
              objectFit: "cover", objectPosition: "center top",
              width: "calc(100% - 16px)", height: "calc(100% - 16px)",
            }} />

            {/* badge — same as original */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{
                position: "absolute", bottom: -18, left: "50%",
                transform: "translateX(-50%)",
                display: "inline-flex", alignItems: "center", gap: 4,
                padding: "5px 12px", borderRadius: 999,
                background: "white",
                boxShadow: "0 4px 18px rgba(10,114,122,0.18)",
                border: "1px solid rgba(10,114,122,0.13)",
                whiteSpace: "nowrap", fontFamily: "var(--font-main)",
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="var(--secondary)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span style={{ fontSize: 12, fontWeight: 800, color: "var(--dark)" }}>4.9</span>
              <span style={{ fontSize: 9, color: "var(--gray)" }}>· 2K+ Reviews</span>
            </motion.div>

            {/* left tag — pulled in slightly so it doesn't overflow on narrow screens */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.5 }}
              style={{
                position: "absolute", top: 8, left: -6,
                background: "var(--primary)", borderRadius: 7,
                padding: "4px 9px", fontFamily: "var(--font-main)",
                fontSize: 9, fontWeight: 700, color: "white",
                whiteSpace: "nowrap", boxShadow: "0 3px 12px rgba(10,114,122,0.28)",
              }}
            >5000+ Admissions</motion.div>

            {/* right tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.62 }}
              style={{
                position: "absolute", top: 8, right: -6,
                background: "var(--secondary)", borderRadius: 7,
                padding: "4px 9px", fontFamily: "var(--font-main)",
                fontSize: 9, fontWeight: 700, color: "white",
                whiteSpace: "nowrap", boxShadow: "0 3px 12px rgba(247,148,29,0.3)",
              }}
            >15+ Countries</motion.div>
          </motion.div>

          {/* mobile slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ width: "100%" }}
          >
            <MobileSlider items={testimonials} />

            {/* mobile stats — 2×2 grid, centered on narrow screens */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px 24px",
              marginTop: 20,
              fontFamily: "var(--font-main)",
              width: "100%",
              maxWidth: 280,
              margin: "20px auto 0",
            }}>
              {[
                { val: "5000+", label: "Students Placed" },
                { val: "15+",   label: "Countries" },
                { val: "4.9★",  label: "Avg Rating" },
                { val: "100%",  label: "Visa Support" },
              ].map((s) => (
                <div key={s.label} style={{
                  display: "flex", flexDirection: "column", gap: 3,
                  alignItems: "center", textAlign: "center",
                }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "var(--primary)", lineHeight: 1 }}>{s.val}</span>
                  <span style={{ fontSize: 10, color: "var(--gray)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── DESKTOP LAYOUT (COMPLETELY UNTOUCHED) ── */}
        <div className="hidden md:flex flex-row gap-10 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              position: "relative", flexShrink: 0,
              width: "clamp(240px,26vw,320px)",
              height: "clamp(240px,26vw,320px)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                background: "conic-gradient(var(--primary) 0deg, var(--secondary) 120deg, var(--primary) 240deg, var(--secondary) 360deg)",
              }}
            />
            <div style={{ position: "absolute", inset: 4, borderRadius: "50%", background: "var(--primary-light)" }} />
            <img src={heroImg} alt="Students" style={{
              position: "absolute", inset: 8, borderRadius: "50%",
              objectFit: "cover", objectPosition: "center top",
              width: "calc(100% - 16px)", height: "calc(100% - 16px)",
            }} />

            <motion.div
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                position: "absolute", bottom: -22, left: "50%",
                transform: "translateX(-50%)",
                display: "inline-flex", alignItems: "center", gap: 5,
                padding: "6px 14px", borderRadius: 999,
                background: "white", boxShadow: "0 4px 18px rgba(10,114,122,0.18)",
                border: "1px solid rgba(10,114,122,0.13)",
                whiteSpace: "nowrap", fontFamily: "var(--font-main)",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--secondary)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span style={{ fontSize: 13, fontWeight: 800, color: "var(--dark)" }}>4.9</span>
              <span style={{ fontSize: 10, color: "var(--gray)" }}>· 2K+ Reviews</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.4 }}
              style={{
                position: "absolute", top: 12, left: -14,
                background: "var(--primary)", borderRadius: 8,
                padding: "5px 11px", fontFamily: "var(--font-main)",
                fontSize: 10, fontWeight: 700, color: "white",
                whiteSpace: "nowrap", boxShadow: "0 3px 12px rgba(10,114,122,0.28)",
              }}
            >5000+ Admissions</motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.62, duration: 0.4 }}
              style={{
                position: "absolute", top: 12, right: -18,
                background: "var(--secondary)", borderRadius: 8,
                padding: "5px 11px", fontFamily: "var(--font-main)",
                fontSize: 10, fontWeight: 700, color: "white",
                whiteSpace: "nowrap", boxShadow: "0 3px 12px rgba(247,148,29,0.3)",
              }}
            >15+ Countries</motion.div>

            <div className="hidden md:block" style={{
              position: "absolute", top: "50%", right: -38,
              transform: "translateY(-50%)",
              width: 34, height: 2,
              background: "linear-gradient(to right, var(--primary), rgba(10,114,122,0.15))",
            }} />
            <div className="hidden md:block" style={{
              position: "absolute", top: "50%", right: -50,
              transform: "translateY(-50%)",
              width: 11, height: 11, borderRadius: "50%",
              background: "var(--primary)",
              boxShadow: "0 0 0 4px rgba(10,114,122,0.18)",
            }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="flex-1 min-w-0 w-full"
            style={{ position: "relative" }}
          >
            <PillSlider items={testimonials} />

            <div style={{
              display: "flex", gap: 24, marginTop: 18,
              fontFamily: "var(--font-main)", flexWrap: "wrap",
            }}>
              {[
                { val: "5000+", label: "Students Placed" },
                { val: "15+",   label: "Countries" },
                { val: "4.9★",  label: "Avg Rating" },
                { val: "100%",  label: "Visa Support" },
              ].map((s) => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "var(--primary)", lineHeight: 1 }}>{s.val}</span>
                  <span style={{ fontSize: 10, color: "var(--gray)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
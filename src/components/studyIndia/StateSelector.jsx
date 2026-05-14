import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import tamilnaduImg from "../../assets/images/tamilnadu.jpg";
import karnatakaImg from "../../assets/images/karnataka.jpg";
import keralaImg from "../../assets/images/kerala.jpg";
import andhraImg from "../../assets/images/andhra.jpg";

const STATES = [
  {
    id: "tamilnadu",
    name: "Tamil Nadu",
    colleges: "150+",
    collegeLabel: "Colleges",
    tag: "MBBS & MD Hub",
    tagIcon: "🩺",
    highlight: "Stanley, Madras Medical & 150+ NEET-approved institutions.",
    desc: "The crown of South Indian medical education, home to legendary institutions setting the gold standard in healthcare training.",
    img: tamilnaduImg,
    number: "01",
  },
  {
    id: "karnataka",
    name: "Karnataka",
    colleges: "120+",
    collegeLabel: "Colleges",
    tag: "BDS & Surgery",
    tagIcon: "🦷",
    highlight: "Leading state for Dental, MBBS & PG specialisations.",
    desc: "A powerhouse for dental and surgical education, Karnataka's institutions consistently rank among India's finest.",
    img: karnatakaImg,
    number: "02",
  },
  {
    id: "kerala",
    name: "Kerala",
    colleges: "90+",
    collegeLabel: "Colleges",
    tag: "Nursing & Allied",
    tagIcon: "💉",
    highlight: "Nursing, Pharmacy & Allied Health Sciences.",
    desc: "Globally recognised for nursing excellence and allied health sciences, Kerala produces world-ready medical professionals.",
    img: keralaImg,
    number: "03",
  },
  {
    id: "andhra",
    name: "Andhra Pradesh",
    colleges: "110+",
    collegeLabel: "Colleges",
    tag: "Affordable MBBS",
    tagIcon: "🏥",
    highlight: "Quality MBBS & AYUSH degrees at affordable fees.",
    desc: "A rapidly growing medical hub offering accessible, high-quality education with modern campuses and experienced faculty.",
    img: andhraImg,
    number: "04",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const S = {
  section: {
    background: "#f8f7f4",
    padding: "100px 0 88px",
    fontFamily: "var(--font-main, 'Outfit', sans-serif)",
    position: "relative",
    overflow: "hidden",
  },
  bgGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage: `radial-gradient(circle, rgba(225,10,111,0.055) 1px, transparent 1px)`,
    backgroundSize: "40px 40px",
    pointerEvents: "none",
    opacity: 0.7,
  },
  bgBlob: {
    position: "absolute",
    top: -160,
    right: -200,
    width: 560,
    height: 560,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(225,10,111,0.09) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  inner: {
    maxWidth: 1260,
    margin: "0 auto",
    padding: "0 36px",
    position: "relative",
    zIndex: 1,
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 32,
    marginBottom: 52,
    flexWrap: "wrap",
  },
  headerLeft: {
    flex: "1 1 480px",
  },
  headerRight: {
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    gap: 32,
    paddingBottom: 4,
  },
  statBlock: {
    textAlign: "center",
  },
  statNum: {
    display: "block",
    fontSize: 28,
    fontWeight: 800,
    color: "var(--primary, #E10A6F)",
    lineHeight: 1,
    letterSpacing: "-0.03em",
  },
  statLabel: {
    display: "block",
    fontSize: 11,
    fontWeight: 600,
    color: "#6b6b6b",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 36,
    background: "rgba(0,0,0,0.12)",
    flexShrink: 0,
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.2em",
    color: "var(--primary, #E10A6F)",
    textTransform: "uppercase",
    marginBottom: 14,
    padding: "5px 12px 5px 6px",
    borderRadius: 999,
    background: "rgba(225,10,111,0.07)",
    border: "1px solid rgba(225,10,111,0.15)",
  },
  eyebrowDot: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    background: "var(--primary, #E10A6F)",
    display: "inline-block",
    flexShrink: 0,
  },
  heading: {
    fontSize: "clamp(30px, 3.4vw, 46px)",
    fontWeight: 800,
    color: "#0f0f0f",
    margin: "0 0 14px",
    lineHeight: 1.1,
    letterSpacing: "-0.025em",
  },
  headingAccent: {
    color: "var(--primary, #E10A6F)",
  },
  subheading: {
    fontSize: 15,
    color: "#555555",
    lineHeight: 1.72,
    maxWidth: 430,
    margin: 0,
    fontWeight: 400,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(265px, 1fr))",
    gap: 18,
    alignItems: "stretch",
  },
  card: (hovered) => ({
    position: "relative",
    height: 400,
    borderRadius: 20,
    overflow: "hidden",
    cursor: "pointer",
    background: "#0c0c0c",
    boxShadow: hovered
      ? "0 32px 72px rgba(225,10,111,0.24), 0 0 0 1.5px rgba(225,10,111,0.5), inset 0 1px 0 rgba(255,255,255,0.08)"
      : "0 2px 16px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.05)",
    transition: "box-shadow 0.35s ease",
  }),
  cardImg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(175deg, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.28) 30%, rgba(0,0,0,0.72) 62%, rgba(0,0,0,0.97) 100%)",
  },
  bottomScrim: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "55%",
    background: "linear-gradient(to top, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)",
  },
  cardNumber: (hovered) => ({
    position: "absolute",
    top: 14,
    right: 16,
    fontSize: 11,
    fontWeight: 700,
    color: hovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.3)",
    letterSpacing: "0.06em",
    transition: "color 0.3s",
    zIndex: 2,
  }),
  tagsRow: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 2,
  },
  tag: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.11em",
    color: "#ffffff",
    padding: "5px 11px",
    borderRadius: 999,
    background: "var(--primary, #E10A6F)",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    boxShadow: "0 2px 8px rgba(225,10,111,0.45)",
  },
  tagIcon: { fontSize: 11, lineHeight: 1 },
  cardBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "0 20px 20px",
    zIndex: 2,
  },
  collegePill: {
    display: "inline-flex",
    alignItems: "baseline",
    gap: 4,
    marginBottom: 10,
  },
  collegeNum: {
    fontSize: 13,
    fontWeight: 800,
    color: "#ffffff",
    lineHeight: 1,
  },
  collegeLabel: {
    fontSize: 10.5,
    fontWeight: 500,
    color: "rgba(255,255,255,0.65)",
    letterSpacing: "0.05em",
  },
  stateName: {
    fontSize: 24,
    fontWeight: 800,
    color: "#ffffff",
    margin: 0,
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
    textShadow: "0 1px 4px rgba(0,0,0,0.4)",
  },
  highlight: {
    fontSize: 12,
    fontWeight: 500,
    color: "rgba(255,255,255,0.72)",
    margin: "8px 0 0",
    lineHeight: 1.6,
    letterSpacing: "0.01em",
  },
  desc: {
    fontSize: 12.5,
    color: "rgba(255,255,255,0.82)",
    marginTop: 8,
    lineHeight: 1.68,
    fontWeight: 400,
  },
  divider: (hovered) => ({
    height: 1.5,
    width: hovered ? "100%" : 28,
    background: "var(--primary, #E10A6F)",
    marginTop: 14,
    borderRadius: 2,
    transition: "width 0.32s cubic-bezier(0.22,1,0.36,1)",
    boxShadow: hovered ? "0 0 8px rgba(225,10,111,0.5)" : "none",
  }),
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 13,
  },
  exploreLabel: (hovered) => ({
    fontSize: 11.5,
    fontWeight: 700,
    color: hovered ? "#ffffff" : "rgba(255,255,255,0.55)",
    letterSpacing: "0.05em",
    transition: "color 0.22s",
    textTransform: "uppercase",
  }),
  arrowBtn: (active) => ({
    width: 34,
    height: 34,
    borderRadius: "50%",
    border: `1.5px solid ${active ? "var(--primary, #E10A6F)" : "rgba(255,255,255,0.25)"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: active ? "var(--primary, #E10A6F)" : "rgba(255,255,255,0.06)",
    transition: "all 0.25s ease",
    flexShrink: 0,
    cursor: "pointer",
    outline: "none",
    backdropFilter: "blur(4px)",
  }),
  ctaWrap: {
    marginTop: 52,
    display: "flex",
    justifyContent: "center",
  },
  ctaCard: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: "18px 24px 18px 20px",
    background: "#ffffff",
    borderRadius: 16,
    border: "1px solid rgba(0,0,0,0.09)",
    boxShadow: "0 2px 24px rgba(0,0,0,0.06)",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  ctaIconWrap: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "rgba(225,10,111,0.08)",
    border: "1px solid rgba(225,10,111,0.16)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  ctaTextBlock: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  ctaTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#0f0f0f",
    lineHeight: 1.2,
  },
  ctaSub: {
    fontSize: 12,
    color: "#666666",
    lineHeight: 1.4,
    fontWeight: 400,
  },
  ctaDivider: {
    width: 1,
    height: 32,
    background: "rgba(0,0,0,0.1)",
    flexShrink: 0,
  },
  ctaBtn: {
    padding: "11px 28px",
    borderRadius: 999,
    background: "var(--primary, #E10A6F)",
    color: "#ffffff",
    fontWeight: 700,
    textDecoration: "none",
    fontSize: 13,
    letterSpacing: "0.04em",
    fontFamily: "inherit",
    display: "inline-block",
    whiteSpace: "nowrap",
    boxShadow: "0 4px 16px rgba(225,10,111,0.35)",
  },
};

const ArrowIcon = ({ color = "#fff" }) => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const CounselIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--primary, #E10A6F)" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

function StateCard({ state, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ y: hovered ? -8 : 0 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      style={S.card(hovered)}
    >
      <img
        src={state.img}
        alt={state.name}
        style={{
          ...S.cardImg,
          transform: hovered ? "scale(1.07)" : "scale(1)",
        }}
      />
      <div style={S.overlay} />
      <div style={S.bottomScrim} />
      <div style={S.cardNumber(hovered)}>{state.number}</div>
      <div style={S.tagsRow}>
        <div style={S.tag}>
          <span style={S.tagIcon}>{state.tagIcon}</span>
          {state.tag}
        </div>
      </div>
      <div style={S.cardBottom}>
        <div style={S.collegePill}>
          <span style={S.collegeNum}>{state.colleges}</span>
          <span style={S.collegeLabel}>{state.collegeLabel}</span>
        </div>
        <h3 style={S.stateName}>{state.name}</h3>
        <AnimatePresence mode="wait">
          {!hovered ? (
            <motion.p
              key="highlight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={S.highlight}
            >
              {state.highlight}
            </motion.p>
          ) : (
            <motion.p
              key="desc"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              style={S.desc}
            >
              {state.desc}
            </motion.p>
          )}
        </AnimatePresence>
        <div style={S.divider(hovered)} />
        <div style={S.footer}>
          <span style={S.exploreLabel(hovered)}>Explore Colleges</span>
          <motion.button
            whileTap={{ scale: 0.88 }}
            style={S.arrowBtn(hovered)}
            onClick={(e) => { e.stopPropagation(); onClick(); }}
            aria-label={`Explore ${state.name}`}
          >
            <ArrowIcon color="#fff" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

 function StateSelector() {
  const navigate = useNavigate();

  return (
    <section style={S.section}>
      {/* bgLine removed — only dot grid and blob remain */}
      <div style={S.bgGrid} />
      <div style={S.bgBlob} />

      <div style={S.inner}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={S.headerRow}
        >
          <div style={S.headerLeft}>
            <div style={S.eyebrow}>
              <span style={S.eyebrowDot} />
              Medical Education — India
            </div>
            <h2 style={S.heading}>
              Choose Your{" "}
              <span style={S.headingAccent}>Preferred State</span>
            </h2>
            <p style={S.subheading}>
              India's top medical education hubs — MBBS, BDS, Nursing & Allied
              Health courses across key South Indian states.
            </p>
          </div>
          <div style={S.headerRight}>
            <div style={S.statBlock}>
              <span style={S.statNum}>500+</span>
              <span style={S.statLabel}>Colleges</span>
            </div>
            <div style={S.statDivider} />
            <div style={S.statBlock}>
              <span style={S.statNum}>4</span>
              <span style={S.statLabel}>States</span>
            </div>
            <div style={S.statDivider} />
            <div style={S.statBlock}>
              <span style={S.statNum}>50+</span>
              <span style={S.statLabel}>Courses</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          style={S.grid}
        >
          {STATES.map((state) => (
            <StateCard
              key={state.id}
              state={state}
              onClick={() => navigate(`/study-india/${state.id}`)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={S.ctaWrap}
        >
          <div style={S.ctaCard}>
            <div style={S.ctaIconWrap}>
              <CounselIcon />
            </div>
            <div style={S.ctaTextBlock}>
              <span style={S.ctaTitle}>Not sure which state suits you?</span>
              <span style={S.ctaSub}>Our counsellors help you pick the right college & course.</span>
            </div>
            <div style={S.ctaDivider} />
            <motion.a
              href="/contact"
              whileHover={{ opacity: 0.9, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={S.ctaBtn}
            >
              Get Free Counselling
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default StateSelector;
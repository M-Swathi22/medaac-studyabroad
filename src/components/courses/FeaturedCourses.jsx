import { useState } from "react";
import { useNavigate } from "react-router-dom";

const COURSES = [
  {
    id: "mbbs",
    category: "medical",
    slug: "mbbs",
    tag: "Most Popular",
    icon: "🩺",
    cardBg: "linear-gradient(145deg,#1A0010 0%,#3D0024 55%,#5C0035 100%)",
    glowColor: "var(--primary)",
    title: "MBBS Abroad",
    subtitle: "Study Medicine at World-Class Universities",
    features: [
      "NMC & WHO Approved Universities",
      "Affordable Tuition Fees",
      "5.5 – 6 Year Full Program",
      "English Medium Instruction",
    ],
    highlights: [
      "✓ FMGE / MCI Coaching Support",
      "✓ Hostel & Visa Assistance Included",
    ],
    countries: ["🇷🇺 Russia", "🇺🇿 Uzbekistan", "🇰🇬 Kyrgyzstan", "🇵🇭 Philippines"],
    fee: "₹20L – ₹45L",
    badge: "High Demand",
  },
  {
    id: "nursing",
    category: "nursing",
    slug: "bsc-nursing",
    tag: "Trending",
    icon: "💉",
    cardBg: "linear-gradient(145deg,#0D001A 0%,#2A0050 55%,#3D0070 100%)",
    glowColor: "#9333EA",
    title: "B.Sc Nursing",
    subtitle: "Launch a Global Healthcare Career",
    features: [
      "4-Year Undergraduate Program",
      "Clinical Internship Included",
      "International Licensure Prep",
      "PR Pathway in Australia & Canada",
    ],
    highlights: [
      "✓ NCLEX / IELTS Coaching Support",
      "✓ Job Placement Assistance",
    ],
    countries: ["🇦🇺 Australia", "🇨🇦 Canada", "🇬🇧 UK", "🇩🇪 Germany"],
    fee: "₹12L – ₹28L",
    badge: "PR Pathway",
  },
  {
    id: "paramedical",
    category: "paramedical",
    slug: null,
    tag: "New",
    icon: "🧬",
    cardBg: "linear-gradient(145deg,#001A0D 0%,#003D24 55%,#005C35 100%)",
    glowColor: "#059669",
    title: "Paramedical Courses",
    subtitle: "Specialised Allied Health Programs",
    features: [
      "Radiology, Physiotherapy & more",
      "2 – 4 Year Programs",
      "Hospital Attachment Training",
      "Globally Recognised Degrees",
    ],
    highlights: [
      "✓ Specialisation-based Counselling",
      "✓ Scholarship Opportunities Available",
    ],
    countries: ["🇬🇧 UK", "🇦🇺 Australia", "🇩🇪 Germany", "🇮🇪 Ireland"],
    fee: "₹8L – ₹22L",
    badge: "Scholarship",
  },
];

const STATS = [
  { value: "5,000+", label: "Students Placed" },
  { value: "40+",    label: "Universities"     },
  { value: "15+",    label: "Countries"        },
  { value: "98%",    label: "Visa Success"     },
];

const ALL_TAB = { id: "all", icon: "◈", title: "All Courses" };

const STYLES = `
  .fc-section {
    width: 100%;
    background: var(--light);
    font-family: var(--font-main);
    padding: 80px 24px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }
  .fc-section-blob1 {
    position: absolute; top: -120px; right: -120px;
    width: 500px; height: 500px; border-radius: 50%;
    background: var(--primary); opacity: 0.04; filter: blur(80px);
    pointer-events: none;
  }
  .fc-section-blob2 {
    position: absolute; bottom: -80px; left: -80px;
    width: 400px; height: 400px; border-radius: 50%;
    background: var(--dark); opacity: 0.04; filter: blur(60px);
    pointer-events: none;
  }
  .fc-inner {
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
  }
  .fc-main-row {
    display: flex;
    gap: 32px;
    align-items: stretch;
    flex-wrap: wrap;
  }
  .fc-left-panel {
    width: 320px;
    flex-shrink: 0;
    border-radius: 28px;
    background: linear-gradient(160deg, var(--dark) 0%, var(--dark-light) 100%);
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    box-shadow: 0 24px 64px rgba(0,0,0,0.28);
    font-family: var(--font-main);
    box-sizing: border-box;
  }
  .fc-left-glow-top {
    position: absolute; top: -40px; left: -40px;
    width: 200px; height: 200px; border-radius: 50%;
    background: var(--primary); opacity: 0.15; filter: blur(60px);
    pointer-events: none;
  }
  .fc-left-glow-bottom {
    position: absolute; bottom: -30px; right: -30px;
    width: 160px; height: 160px; border-radius: 50%;
    background: var(--primary); opacity: 0.10; filter: blur(50px);
    pointer-events: none;
  }
  .fc-left-dots {
    position: absolute; inset: 0; opacity: 0.04;
    background-image: radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px);
    background-size: 24px 24px;
    pointer-events: none;
  }
  .fc-eyebrow {
    display: flex; align-items: center; gap: 8px;
    margin-bottom: 10px;
  }
  .fc-eyebrow-line { width: 28px; height: 2px; background: var(--primary); }
  .fc-eyebrow-text {
    font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.18em;
    color: var(--primary);
  }
  .fc-left-heading {
    font-size: 34px; font-weight: 800;
    line-height: 1.18; color: var(--white); margin: 0;
  }
  .fc-left-heading-accent {
    background-image: linear-gradient(135deg, var(--primary) 0%, #FF6FAD 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .fc-left-desc {
    margin-top: 12px; font-size: 13px;
    line-height: 1.7; color: rgba(255,255,255,0.5);
  }
  .fc-globe-wrap {
    position: relative; z-index: 1;
    display: flex; justify-content: center;
    margin: 28px 0;
  }
  .fc-globe-inner { position: relative; }
  .fc-globe-glow {
    position: absolute; inset: 0; margin: auto;
    width: 120px; height: 120px; border-radius: 50%;
    background: var(--primary); opacity: 0.2; filter: blur(28px);
  }
  .fc-globe-circle {
    width: 160px; height: 160px; border-radius: 50%;
    border: 1.5px solid rgba(255,255,255,0.10);
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    font-size: 68px; position: relative;
  }
  .fc-globe-ring {
    position: absolute; width: 200px; height: 200px;
    border-radius: 50%;
    border: 1px dashed rgba(225,10,111,0.3);
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
  .fc-globe-chip {
    position: absolute;
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 10px; padding: 6px 12px;
    font-size: 11px; font-weight: 600;
    color: var(--white); white-space: nowrap;
  }
  .fc-globe-chip.pink {
    background: rgba(225,10,111,0.18);
    border-color: rgba(225,10,111,0.3);
    color: #FF8FC5;
  }
  .fc-stats-grid {
    position: relative; z-index: 1;
    display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
  }
  .fc-stat-cell {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px; padding: 14px 10px;
    text-align: center; backdrop-filter: blur(6px);
  }
  .fc-stat-value {
    font-size: 20px; font-weight: 800; margin: 0;
    background-image: linear-gradient(135deg, var(--white) 0%, var(--primary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .fc-stat-label {
    font-size: 10.5px; color: rgba(255,255,255,0.45); margin: 3px 0 0;
  }
  .fc-left-cta {
    position: relative; z-index: 1; margin-top: 20px;
    width: 100%; padding: 14px 0; border-radius: 16px; border: none;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: var(--white); font-size: 14px; font-weight: 700;
    font-family: var(--font-main); cursor: pointer;
    box-shadow: 0 8px 28px rgba(225,10,111,0.34);
    letter-spacing: 0.02em; transition: all 0.2s;
  }
  .fc-left-cta:hover {
    box-shadow: 0 12px 36px rgba(225,10,111,0.44);
    transform: translateY(-2px);
  }
  .fc-right {
    flex: 1; min-width: 280px;
    display: flex; flex-direction: column;
    box-sizing: border-box;
  }
  .fc-right-heading-row {
    display: flex; align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap; gap: 12px; margin-bottom: 22px;
  }
  .fc-right-eyebrow {
    font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.18em;
    color: var(--primary); margin-bottom: 4px;
  }
  .fc-right-heading {
    font-size: 22px; font-weight: 800;
    color: var(--dark); margin: 0;
  }
  .fc-right-heading-accent { color: var(--primary); }
  .fc-filter-tabs {
    display: flex; gap: 10px;
    flex-wrap: wrap; margin-bottom: 24px;
  }
  .fc-filter-tab {
    padding: 8px 20px; border-radius: 999px;
    border: 1.5px solid var(--border);
    background: var(--white); color: var(--gray);
    font-size: 13px; font-weight: 500;
    font-family: var(--font-main); cursor: pointer;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    transition: all 0.22s; white-space: nowrap;
  }
  .fc-filter-tab.active {
    border-color: transparent;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: var(--white); font-weight: 700;
    box-shadow: 0 4px 16px rgba(225,10,111,0.27);
  }
  .fc-cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px; flex: 1;
  }
  .fc-card {
    background: var(--white); border-radius: 24px;
    overflow: hidden; display: flex; flex-direction: column;
    border: 1.5px solid var(--border);
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
    transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
    font-family: var(--font-main);
    cursor: pointer;
  }
  .fc-card:hover {
    box-shadow: 0 12px 32px rgba(0,0,0,0.10);
    transform: translateY(-2px);
  }
  .fc-card.active {
    border: 2px solid var(--primary);
    box-shadow: 0 20px 48px rgba(225,10,111,0.13);
    transform: translateY(-4px) scale(1.012);
  }
  .fc-card-header {
    position: relative; height: 180px; overflow: hidden;
  }
  .fc-card-dot-texture {
    position: absolute; inset: 0; opacity: 0.12;
    background-image: radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  .fc-card-glow-orb {
    position: absolute; bottom: -20px; right: -20px;
    width: 120px; height: 120px; border-radius: 50%;
    filter: blur(40px); opacity: 0.35; transition: opacity 0.4s;
  }
  .fc-card:hover .fc-card-glow-orb { opacity: 0.55; }
  .fc-card-brand-orb {
    position: absolute; top: -16px; left: -16px;
    width: 80px; height: 80px; border-radius: 50%;
    background: var(--primary); filter: blur(30px); opacity: 0.25;
  }
  .fc-card-icon {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 64px; transition: transform 0.35s ease;
  }
  .fc-card:hover .fc-card-icon { transform: scale(1.12); }
  .fc-card.active .fc-card-icon { transform: scale(1.08); }
  .fc-card-tag {
    position: absolute; top: 14px; left: 14px;
    background: var(--primary); color: var(--white);
    font-size: 10px; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    padding: 4px 12px; border-radius: 999px;
    box-shadow: 0 4px 12px rgba(225,10,111,0.35);
  }
  .fc-card-fee {
    position: absolute; bottom: 14px; right: 14px;
    background: rgba(0,0,0,0.55); backdrop-filter: blur(8px);
    color: var(--white); font-size: 11px; font-weight: 600;
    padding: 5px 12px; border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.12);
  }
  .fc-card-activebar {
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--primary-dark));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
  }
  .fc-card.active .fc-card-activebar { transform: scaleX(1); }
  .fc-card::after {
    content: "";
    display: block;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--primary-dark));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.38s cubic-bezier(0.34,1.56,0.64,1);
    border-radius: 0 0 24px 24px;
  }
  .fc-card.active::after { transform: scaleX(1); }
  .fc-card-body {
    flex: 1; display: flex; flex-direction: column;
    padding: 20px 22px;
  }
  .fc-badge {
    display: inline-block; margin-bottom: 8px;
    font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.1em;
    color: var(--primary); background: var(--primary-light);
    border: 1px solid rgba(225,10,111,0.18);
    padding: 3px 10px; border-radius: 999px;
  }
  .fc-card-title {
    font-size: 17px; font-weight: 700;
    color: var(--dark); margin: 0; line-height: 1.3;
    transition: color 0.22s;
  }
  .fc-card.active .fc-card-title { color: var(--primary); }
  .fc-card-subtitle { font-size: 12px; color: var(--gray); margin-top: 3px; }
  .fc-divider { height: 1px; background: var(--border); margin: 14px 0; }
  .fc-card.active .fc-divider {
    background: linear-gradient(90deg, var(--primary), transparent);
  }
  .fc-features {
    list-style: none; padding: 0; margin: 0 0 12px;
    display: flex; flex-direction: column; gap: 8px;
  }
  .fc-feature-item {
    display: flex; align-items: flex-start; gap: 8px;
    font-size: 13px; color: #374151;
  }
  .fc-feature-dot {
    margin-top: 5px; width: 6px; height: 6px;
    border-radius: 50%; background: var(--primary); flex-shrink: 0;
  }
  .fc-highlights {
    margin-bottom: 14px; display: flex; flex-direction: column; gap: 4px;
  }
  .fc-highlight-text {
    font-size: 12px; font-weight: 600; color: var(--primary-dark); margin: 0;
  }
  .fc-countries { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
  .fc-country-chip {
    font-size: 11px; font-weight: 500; color: #374151;
    background: var(--light); border: 1px solid var(--border);
    border-radius: 999px; padding: 3px 10px;
    transition: background 0.22s, border-color 0.22s, color 0.22s;
  }
  .fc-card.active .fc-country-chip {
    background: var(--primary-light);
    border-color: rgba(225,10,111,0.25);
    color: var(--primary-dark);
  }
  .fc-cta-btn {
    margin-top: auto; width: 100%; padding: 12px 0;
    border-radius: 14px; border: none;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: var(--white); font-size: 14px; font-weight: 700;
    font-family: var(--font-main); cursor: pointer;
    letter-spacing: 0.02em;
    box-shadow: 0 6px 20px rgba(225,10,111,0.25); transition: all 0.2s;
  }
  .fc-cta-btn:hover {
    box-shadow: 0 10px 28px rgba(225,10,111,0.38);
    transform: translateY(-1px);
  }
  .fc-bottom-strip {
    margin-top: 36px; border-radius: 20px;
    background: var(--white); border: 1.5px solid var(--border);
    padding: 20px 28px;
    display: flex; align-items: center;
    justify-content: space-between;
    flex-wrap: wrap; gap: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    box-sizing: border-box;
  }
  .fc-strip-left { display: flex; align-items: center; gap: 12px; }
  .fc-strip-icon-wrap {
    width: 44px; height: 44px; border-radius: 12px;
    background: var(--primary-light);
    display: flex; align-items: center; justify-content: center;
    font-size: 22px; flex-shrink: 0;
  }
  .fc-strip-title { margin: 0; font-size: 14px; font-weight: 700; color: var(--dark); }
  .fc-strip-sub   { margin: 0; font-size: 12px; color: var(--gray); }
  .fc-strip-expert-btn {
    padding: 10px 22px; border-radius: 12px; border: none;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: var(--white); font-size: 13px; font-weight: 700;
    font-family: var(--font-main); cursor: pointer;
    box-shadow: 0 6px 20px rgba(225,10,111,0.27);
    white-space: nowrap; transition: all 0.2s;
  }
  .fc-strip-expert-btn:hover {
    box-shadow: 0 10px 28px rgba(225,10,111,0.40);
    transform: translateY(-1px);
  }
  .fc-mobile-stats { display: none; }
  .fc-mobile-spacer { display: none; }

  @media (max-width: 1024px) {
    .fc-section { padding: 60px 20px; }
    .fc-left-panel { width: 280px; padding: 26px; }
    .fc-left-heading { font-size: 28px; }
    .fc-globe-circle { width: 130px; height: 130px; font-size: 54px; }
    .fc-globe-ring { width: 170px; height: 170px; }
    .fc-cards-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
    }
  }
  @media (max-width: 768px) {
    .fc-section { padding: 44px 16px; }
    .fc-main-row { flex-direction: column; gap: 20px; }
    .fc-left-panel { width: 100%; padding: 24px 22px; border-radius: 20px; }
    .fc-left-heading { font-size: 26px; }
    .fc-left-desc    { font-size: 12.5px; margin-bottom: 20px; }
    .fc-globe-wrap  { display: none; }
    .fc-stats-grid  { display: none; }
    .fc-left-cta    { padding: 12px 0; font-size: 13px; margin-top: 0; }
    .fc-mobile-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px; margin-bottom: 4px;
    }
    .fc-mobile-stat-cell {
      background: var(--white);
      border: 1.5px solid var(--border);
      border-radius: 14px; padding: 14px 10px;
      text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .fc-mobile-stat-value {
      font-size: 20px; font-weight: 800;
      margin: 0; color: var(--primary); font-family: var(--font-main);
    }
    .fc-mobile-stat-label {
      font-size: 10.5px; color: var(--gray);
      margin: 3px 0 0; font-family: var(--font-main);
    }
    .fc-mobile-spacer { display: block; height: 4px; }
    .fc-right-heading-row {
      flex-direction: column; align-items: flex-start;
      gap: 10px; margin-bottom: 16px; margin-top: 8px;
    }
    .fc-right-heading { font-size: 20px; }
    .fc-filter-tabs {
      flex-wrap: nowrap; overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 4px; gap: 8px;
      scrollbar-width: none; -ms-overflow-style: none;
    }
    .fc-filter-tabs::-webkit-scrollbar { display: none; }
    .fc-filter-tab { font-size: 12px; padding: 7px 16px; flex-shrink: 0; }
    .fc-cards-grid { grid-template-columns: 1fr; gap: 16px; }
    .fc-card.active { transform: translateY(-2px) scale(1); }
    .fc-card-header { height: 160px; }
    .fc-card-icon   { font-size: 56px; }
    .fc-card-body   { padding: 16px 18px; }
    .fc-card-title  { font-size: 16px; }
    .fc-bottom-strip {
      flex-direction: column; align-items: flex-start;
      padding: 18px 20px; gap: 14px; border-radius: 16px;
    }
    .fc-strip-left    { align-items: flex-start; }
    .fc-strip-expert-btn {
      width: 100%; padding: 13px 0;
      text-align: center; font-size: 14px;
    }
    .fc-strip-title { font-size: 13px; }
    .fc-strip-sub   { font-size: 11.5px; }
  }
  @media (max-width: 480px) {
    .fc-section    { padding: 36px 14px; }
    .fc-left-panel { padding: 20px 18px; border-radius: 18px; }
    .fc-left-heading { font-size: 24px; }
    .fc-left-cta   { padding: 11px 0; font-size: 13px; border-radius: 13px; }
    .fc-mobile-stats    { gap: 8px; }
    .fc-mobile-stat-value { font-size: 18px; }
    .fc-mobile-stat-cell  { padding: 12px 8px; border-radius: 12px; }
    .fc-right-heading { font-size: 18px; }
    .fc-cards-grid    { gap: 14px; }
    .fc-card-header   { height: 150px; }
    .fc-card-icon     { font-size: 50px; }
    .fc-card-body     { padding: 14px 16px; }
    .fc-card-title    { font-size: 15px; }
    .fc-feature-item  { font-size: 12.5px; }
    .fc-cta-btn       { font-size: 13px; padding: 11px 0; }
    .fc-bottom-strip    { padding: 16px; border-radius: 14px; }
    .fc-strip-icon-wrap { width: 38px; height: 38px; font-size: 18px; }
  }
  @media (max-width: 360px) {
    .fc-section      { padding: 28px 12px; }
    .fc-left-panel   { padding: 18px 16px; }
    .fc-left-heading { font-size: 22px; }
    .fc-filter-tab   { font-size: 11px; padding: 6px 13px; }
    .fc-card-title   { font-size: 14px; }
    .fc-mobile-stat-value { font-size: 17px; }
    .fc-right-heading     { font-size: 17px; }
    .fc-card-header  { height: 140px; }
    .fc-card-icon    { font-size: 46px; }
  }
`;

function CourseCard({ course, isActive, onSelect, navigate }) {
  const handleCardClick = () => {
    onSelect(course.id);
    const path = course.slug
      ? `/courses/${course.category}/${course.slug}`
      : `/courses/${course.category}`;
    navigate(path);
  };

  const handleKnowMore = (e) => {
    e.stopPropagation();
    const path = course.slug
      ? `/courses/${course.category}/${course.slug}`
      : `/courses/${course.category}`;
    navigate(path);
  };

  return (
    <div
      className={`fc-card ${isActive ? "active" : ""}`}
      onClick={handleCardClick}
    >
      <div className="fc-card-header" style={{ background: course.cardBg }}>
        <div className="fc-card-dot-texture" />
        <div className="fc-card-glow-orb" style={{ background: course.glowColor }} />
        <div className="fc-card-brand-orb" />
        <div className="fc-card-icon">{course.icon}</div>
        <span className="fc-card-tag">{course.tag}</span>
        <div className="fc-card-fee">{course.fee} / yr</div>
        <div className="fc-card-activebar" />
      </div>

      <div className="fc-card-body">
        <div>
          <span className="fc-badge">{course.badge}</span>
          <h3 className="fc-card-title">{course.title}</h3>
          <p className="fc-card-subtitle">{course.subtitle}</p>
        </div>
        <div className="fc-divider" />
        <ul className="fc-features">
          {course.features.map((f) => (
            <li key={f} className="fc-feature-item">
              <span className="fc-feature-dot" />
              {f}
            </li>
          ))}
        </ul>
        <div className="fc-highlights">
          {course.highlights.map((h) => (
            <p key={h} className="fc-highlight-text">{h}</p>
          ))}
        </div>
        <div className="fc-countries">
          {course.countries.map((c) => (
            <span key={c} className="fc-country-chip">{c}</span>
          ))}
        </div>
        <button className="fc-cta-btn" onClick={handleKnowMore}>
          Know More →
        </button>
      </div>
    </div>
  );
}

 function FeaturedCourses() {
  const [active, setActive] = useState("all");
  const navigate = useNavigate();

  const handleSelect = (id) => setActive(id);

  const tabs = [
    ALL_TAB,
    ...COURSES.map((c) => ({
      id: c.id,
      icon: c.icon,
      title: c.title,
      category: c.category,
    })),
  ];

  const handleTabClick = (tab) => {
    setActive(tab.id);
    if (tab.id === "all") {
      /* ✅ "All" tab scrolls to CoursesGrid, not this section */
      const section = document.getElementById("courses-grid-section");
      if (section) section.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate(`/courses/${tab.category}`);
  };

  return (
    <>
      <style>{STYLES}</style>

      {/* ✅ CHANGED: id is now "featured-courses-section" */}
      <section className="fc-section" id="featured-courses-section">
        <div className="fc-section-blob1" />
        <div className="fc-section-blob2" />

        <div className="fc-inner">
          <div className="fc-main-row">

            <div className="fc-left-panel">
              <div className="fc-left-glow-top" />
              <div className="fc-left-glow-bottom" />
              <div className="fc-left-dots" />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="fc-eyebrow">
                  <div className="fc-eyebrow-line" />
                  <span className="fc-eyebrow-text">Curated Programs</span>
                </div>
                <h2 className="fc-left-heading">
                  Featured
                  <br />
                  <span className="fc-left-heading-accent">Courses</span>
                </h2>
                <p className="fc-left-desc">
                  Handpicked international programs with end-to-end admission,
                  visa &amp; settlement support — from our expert counsellors.
                </p>
              </div>
              <div className="fc-globe-wrap">
                <div className="fc-globe-inner">
                  <div className="fc-globe-glow" />
                  <div className="fc-globe-circle">
                    🌍
                    <div className="fc-globe-ring" />
                  </div>
                  <div className="fc-globe-chip" style={{ top: -8, right: -58 }}>
                    40+ Countries
                  </div>
                  <div className="fc-globe-chip pink" style={{ bottom: -8, left: -62 }}>
                    5000+ Students
                  </div>
                </div>
              </div>
              <div className="fc-stats-grid">
                {STATS.map((s) => (
                  <div key={s.label} className="fc-stat-cell">
                    <p className="fc-stat-value">{s.value}</p>
                    <p className="fc-stat-label">{s.label}</p>
                  </div>
                ))}
              </div>
              <button className="fc-left-cta">Free Counselling →</button>
            </div>

            <div className="fc-right">
              <div className="fc-mobile-stats">
                {STATS.map((s) => (
                  <div key={s.label} className="fc-mobile-stat-cell">
                    <p className="fc-mobile-stat-value">{s.value}</p>
                    <p className="fc-mobile-stat-label">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="fc-mobile-spacer" />
              <div className="fc-right-heading-row">
                <div>
                  <p className="fc-right-eyebrow">Explore Programs</p>
                  <h3 className="fc-right-heading">
                    Pick your{" "}
                    <span className="fc-right-heading-accent">career path</span>
                  </h3>
                </div>
              </div>
              <div className="fc-filter-tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab)}
                    className={`fc-filter-tab ${active === tab.id ? "active" : ""}`}
                  >
                    {tab.icon} {tab.title}
                  </button>
                ))}
              </div>
              <div className="fc-cards-grid">
                {COURSES.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    isActive={active !== "all" && active === course.id}
                    onSelect={handleSelect}
                    navigate={navigate}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="fc-bottom-strip">
            <div className="fc-strip-left">
              <div className="fc-strip-icon-wrap">🎓</div>
              <div>
                <p className="fc-strip-title">
                  Not sure which course is right for you?
                </p>
                <p className="fc-strip-sub">
                  Our expert counsellors will guide you step by step — free of charge.
                </p>
              </div>
            </div>
            <button className="fc-strip-expert-btn">Talk to an Expert →</button>
          </div>
        </div>
      </section>
    </>
  );
}
export default FeaturedCourses;
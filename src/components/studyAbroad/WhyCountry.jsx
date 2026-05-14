import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Globe2,
  Briefcase,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    number: "01",
    title: "Top Ranked Universities",
    desc: "Study in globally recognized universities with modern infrastructure and advanced education systems.",
    stat: "500+ Universities",
  },
  {
    icon: Globe2,
    number: "02",
    title: "International Exposure",
    desc: "Experience multicultural environments, global networking, and internationally accepted degrees.",
    stat: "190+ Nationalities",
  },
  {
    icon: DollarSign,
    number: "03",
    title: "Affordable Tuition",
    desc: "Quality education with affordable tuition fees and budget-friendly living expenses for students.",
    stat: "40% Cost Savings",
  },
  {
    icon: Briefcase,
    number: "04",
    title: "Career Opportunities",
    desc: "Build strong international career opportunities with globally valuable academic qualifications.",
    stat: "92% Placement Rate",
  },
];

function FeatureCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="why-card"
    >
      {/* Number watermark */}
      <span className="card-watermark">{item.number}</span>

      {/* Top row: icon + arrow */}
      <div className="card-top">
        <div className="icon-wrap">
          <Icon size={22} />
        </div>
        <div className="card-arrow">
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Content */}
      <div className="card-content">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-desc">{item.desc}</p>
      </div>

      {/* Stat pill */}
      <div className="card-stat">
        <span className="stat-dot" />
        {item.stat}
      </div>
    </motion.div>
  );
}

 function WhyCountry({ country }) {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <>
      <style>{`
        .why-section {
          position: relative;
          padding: 120px 0;
          background: #fff;
          font-family: var(--font-main);
          overflow: hidden;
        }

        /* Decorative blobs */
        .why-blob-1 {
          position: absolute;
          top: -120px;
          right: -120px;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(225,10,111,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .why-blob-2 {
          position: absolute;
          bottom: -80px;
          left: -100px;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(225,10,111,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Dot grid pattern */
        .why-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(225,10,111,0.07) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%);
        }

        .why-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* ── HEADER ── */
        .why-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: end;
          margin-bottom: 72px;
        }
        @media (max-width: 768px) {
          .why-header { grid-template-columns: 1fr; gap: 24px; }
        }

        .why-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 18px;
        }
        .why-eyebrow-line {
          width: 28px;
          height: 2px;
          background: var(--primary);
          border-radius: 2px;
        }

        .why-heading {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 800;
          line-height: 1.1;
          color: var(--dark);
          letter-spacing: -0.02em;
          margin: 0;
        }
        .why-heading em {
          font-style: normal;
          color: var(--primary);
          position: relative;
        }
        .why-heading em::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 4px;
          width: 100%;
          height: 6px;
          background: var(--primary-light);
          z-index: -1;
          border-radius: 3px;
        }

        .why-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 24px;
        }
        @media (max-width: 768px) {
          .why-right { align-items: flex-start; }
        }

        .why-desc {
          font-size: 1rem;
          line-height: 1.85;
          color: var(--gray);
          max-width: 380px;
          margin: 0;
          text-align: right;
        }
        @media (max-width: 768px) {
          .why-desc { text-align: left; }
        }

        .why-students-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 18px 10px 10px;
          background: var(--primary-light);
          border-radius: 50px;
          border: 1px solid rgba(225,10,111,0.15);
        }
        .badge-avatars {
          display: flex;
        }
        .badge-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid #fff;
          background: linear-gradient(135deg, var(--primary), #ff6eb0);
          margin-left: -8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: 700;
          color: #fff;
        }
        .badge-avatar:first-child { margin-left: 0; }
        .badge-text {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--primary);
        }

        /* ── DIVIDER LINE ── */
        .why-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border) 20%, var(--border) 80%, transparent);
          margin-bottom: 56px;
        }

        /* ── GRID ── */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 24px;
          overflow: hidden;
        }
        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .why-grid { grid-template-columns: 1fr; }
        }

        /* ── CARD ── */
        .why-card {
          position: relative;
          background: #fff;
          padding: 40px 32px 32px;
          overflow: hidden;
          transition: background 0.3s ease;
          cursor: default;
        }
        .why-card:hover {
          background: var(--light);
          z-index: 1;
        }
        .why-card:hover .icon-wrap {
          background: var(--primary);
          color: #fff;
          transform: rotate(-6deg) scale(1.08);
        }
        .why-card:hover .card-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }
        .why-card:hover .card-watermark {
          opacity: 0.06;
          transform: translateY(-8px);
        }
        .why-card:hover .stat-dot {
          background: var(--primary);
          box-shadow: 0 0 0 4px rgba(225,10,111,0.15);
        }

        .card-watermark {
          position: absolute;
          top: -10px;
          right: 20px;
          font-size: 5.5rem;
          font-weight: 900;
          color: var(--dark);
          opacity: 0.04;
          line-height: 1;
          letter-spacing: -0.04em;
          pointer-events: none;
          transition: opacity 0.3s, transform 0.3s;
          user-select: none;
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s, color 0.3s, transform 0.3s;
          flex-shrink: 0;
        }

        .card-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gray);
          opacity: 0;
          transform: translate(-4px, 4px);
          transition: opacity 0.3s, transform 0.3s;
        }

        .card-content {
          margin-bottom: 28px;
        }

        .card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--dark);
          margin: 0 0 12px;
          line-height: 1.3;
        }

        .card-desc {
          font-size: 0.875rem;
          line-height: 1.85;
          color: var(--gray);
          margin: 0;
        }

        .card-stat {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--dark);
          letter-spacing: 0.01em;
        }

        .stat-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--border);
          flex-shrink: 0;
          transition: background 0.3s, box-shadow 0.3s;
        }

        /* ── BOTTOM BAR ── */
        .why-bottom {
          margin-top: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .why-bottom-text {
          font-size: 0.9rem;
          color: var(--gray);
          margin: 0;
        }
        .why-bottom-text strong {
          color: var(--dark);
          font-weight: 600;
        }

        .why-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: var(--primary);
          color: #fff;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          font-family: var(--font-main);
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          box-shadow: 0 4px 20px rgba(225,10,111,0.25);
        }
        .why-cta-btn:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(225,10,111,0.35);
        }
        .why-cta-btn svg {
          transition: transform 0.2s;
        }
        .why-cta-btn:hover svg {
          transform: translate(2px, -2px);
        }
      `}</style>

      <section className="why-section">
        <div className="why-dots" />
        <div className="why-blob-1" />
        <div className="why-blob-2" />

        <div className="why-inner">

          {/* ── HEADER ── */}
          <motion.div
            ref={headerRef}
            className="why-header"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Left */}
            <div>
              <div className="why-eyebrow">
                <span className="why-eyebrow-line" />
                Why Choose {country?.name ?? "This Country"}
              </div>
              <h2 className="why-heading">
                Benefits of Studying<br />
                in <em>{country?.name ?? "Abroad"}</em>
              </h2>
            </div>

            {/* Right */}
            <div className="why-right">
              <p className="why-desc">
                Discover why thousands of students choose{" "}
                {country?.name ?? "this destination"} every year for higher
                education, international exposure, and career growth.
              </p>
              <div className="why-students-badge">
                <div className="badge-avatars">
                  {["AK", "SR", "MJ", "NP"].map((init, i) => (
                    <div
                      key={i}
                      className="badge-avatar"
                      style={{ background: `linear-gradient(135deg, hsl(${330 + i * 15}, 80%, 55%), hsl(${340 + i * 15}, 70%, 70%))` }}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <span className="badge-text">10,000+ Students Enrolled</span>
              </div>
            </div>
          </motion.div>

          {/* ── DIVIDER ── */}
          <div className="why-divider" />

          {/* ── GRID ── */}
          <div className="why-grid">
            {features.map((item, index) => (
              <FeatureCard key={index} item={item} index={index} />
            ))}
          </div>

          {/* ── BOTTOM BAR ── */}
          <motion.div
            className="why-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="why-bottom-text">
              Ready to start your journey?{" "}
              <strong>Get free counselling today.</strong>
            </p>
            <a href="#contact" className="why-cta-btn">
              Talk to an Expert
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
}
export default WhyCountry;
import { Link } from "react-router-dom";

import mbbsImg       from "../../assets/images/course-mbbs.avif";
import nursingImg     from "../../assets/images/course-nursing.jpg";
import paramedicalImg from "../../assets/images/course-paramedical.webp";
import engineeringImg from "../../assets/images/course-engineering.webp";
import alliedImg      from "../../assets/images/course-allied.jpg";
import bscImg         from "../../assets/images/course-bsc.jpg";
import manageImg      from "../../assets/images/course-management.jpg";
import politehImg     from "../../assets/images/course-polytechnic.jpg";
import artsImg        from "../../assets/images/course-arts.jpg";

const courses = [
  { id:"medical",     category:"medical",     title:"Medical",              duration:"5.5 Yrs", image:mbbsImg,        index:"01", mode:"Full-time", type:"Degree"  },
  { id:"nursing",     category:"nursing",     title:"Nursing",              duration:"4 Yrs",   image:nursingImg,     index:"02", mode:"Full-time", type:"Degree"  },
  { id:"paramedical", category:"paramedical", title:"Paramedical Courses",  duration:"3–4 Yrs", image:paramedicalImg, index:"03", mode:"Full-time", type:"Diploma" },
  { id:"engineering", category:"engineering", title:"Engineering Courses",  duration:"4 Yrs",   image:engineeringImg, index:"04", mode:"Full-time", type:"Degree"  },
  { id:"allied",      category:"allied",      title:"Allied Courses",       duration:"3–4 Yrs", image:alliedImg,      index:"05", mode:"Full-time", type:"Degree"  },
  { id:"bsc",         category:"bsc",         title:"B.Sc Courses",         duration:"3 Yrs",   image:bscImg,         index:"06", mode:"Full-time", type:"Degree"  },
  { id:"management",  category:"management",  title:"Management Courses",   duration:"3–4 Yrs", image:manageImg,      index:"07", mode:"Full-time", type:"Degree"  },
  { id:"polytechnic", category:"polytechnic", title:"Polytechnic Courses",  duration:"2–3 Yrs", image:politehImg,     index:"08", mode:"Full-time", type:"Diploma" },
  { id:"arts",        category:"arts",        title:"Arts & Science Courses",duration:"3 Yrs",  image:artsImg,        index:"09", mode:"Full-time", type:"Degree"  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ width: 13, height: 13, display: "block" }}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function CourseCard({ course }) {
  return (
    <Link to={`/courses/${course.category}`} className="cc-link">
      <article className="cc-card">
        <div className="cc-band" />
        <div className="cc-img-wrap">
          <img src={course.image} alt={course.title} className="cc-img" />
          <div className="cc-scrim" />
          <div className="cc-shine" />
          <span className="cc-ghost" aria-hidden="true">{course.index}</span>
          <span className="cc-chip">{course.category}</span>
          <span className="cc-dur">{course.duration}</span>
          <div className="cc-title-wrap">
            <p className="cc-cat-label">{course.category} program</p>
            <h3 className="cc-title">{course.title}</h3>
          </div>
        </div>
        <div className="cc-body">
          <div className="cc-stat-row">
            <div className="cc-stat-item">
              <span className="cc-stat-label">Duration</span>
              <span className="cc-stat-value">{course.duration}</span>
            </div>
            <div className="cc-stat-item">
              <span className="cc-stat-label">Mode</span>
              <span className="cc-stat-value">{course.mode}</span>
            </div>
            <div className="cc-stat-item">
              <span className="cc-stat-label">Type</span>
              <span className="cc-stat-value">{course.type}</span>
            </div>
          </div>
          <div className="cc-divider" />
          <div className="cc-footer">
            <div className="cc-footer-left">
              <div className="cc-idx-box">{course.index}</div>
              <div className="cc-footer-text">
                <span className="cc-footer-title">Seats Available</span>
                <span className="cc-footer-sub">Limited Intake</span>
              </div>
            </div>
            <button className="cc-cta" tabIndex={-1}>
              Explore <ArrowIcon />
            </button>
          </div>
        </div>
        <div className="cc-accent" />
      </article>
    </Link>
  );
}

export default function CoursesGrid() {
  return (
    <>
      <style>{`
        .cc-link { display: block; text-decoration: none; }
        .cc-card {
          position: relative; display: flex; flex-direction: column;
          border-radius: 22px; overflow: hidden; background: var(--white);
          border: 1.5px solid var(--border);
          box-shadow: 0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04);
          transition: transform 0.44s cubic-bezier(0.22,1,0.36,1), box-shadow 0.44s cubic-bezier(0.22,1,0.36,1), border-color 0.44s ease;
          cursor: pointer; font-family: var(--font-main); will-change: transform;
        }
        .cc-link:hover .cc-card {
          transform: translateY(-10px) scale(1.012);
          box-shadow: 0 32px 64px -12px rgba(225,10,111,0.22), 0 8px 24px -4px rgba(0,0,0,0.10);
          border-color: rgba(225,10,111,0.22);
        }
        .cc-band { height: 5px; width: 100%; background: linear-gradient(90deg, var(--primary), var(--primary-dark)); flex-shrink: 0; }
        .cc-img-wrap { position: relative; height: 200px; overflow: hidden; flex-shrink: 0; }
        .cc-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.72s cubic-bezier(0.22,1,0.36,1); }
        .cc-link:hover .cc-img { transform: scale(1.08); }
        .cc-scrim {
          position: absolute; inset: 0;
          background: linear-gradient(170deg, rgba(18,18,18,0.0) 0%, rgba(18,18,18,0.55) 60%, rgba(18,18,18,0.92) 100%);
          transition: opacity 0.4s ease;
        }
        .cc-link:hover .cc-scrim { opacity: 0.90; }
        .cc-shine {
          position: absolute; top: -50%; right: -30%;
          width: 200px; height: 200px; border-radius: 50%;
          background: radial-gradient(circle, rgba(225,10,111,0.28) 0%, transparent 70%);
          opacity: 0; transform: scale(0.5); pointer-events: none;
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .cc-link:hover .cc-shine { opacity: 1; transform: scale(1); }
        .cc-ghost {
          position: absolute; bottom: -14px; right: 8px;
          font-size: 82px; font-weight: 800; line-height: 1; letter-spacing: -5px;
          color: rgba(255,255,255,0.065); user-select: none; pointer-events: none;
          font-family: var(--font-main);
        }
        .cc-chip {
          position: absolute; top: 13px; left: 13px;
          font-size: 9px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          padding: 5px 12px; border-radius: 100px;
          background: rgba(255,255,255,0.13); color: var(--white);
          border: 1px solid rgba(255,255,255,0.24);
          backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          font-family: var(--font-main); transition: background 0.35s ease, border-color 0.35s ease;
        }
        .cc-link:hover .cc-chip { background: rgba(225,10,111,0.80); border-color: rgba(225,10,111,0.4); }
        .cc-dur {
          position: absolute; top: 13px; right: 13px;
          font-size: 10px; font-weight: 700; padding: 5px 13px; border-radius: 100px;
          background: var(--white); color: var(--primary);
          font-family: var(--font-main); transition: background 0.35s ease, color 0.35s ease;
        }
        .cc-link:hover .cc-dur { background: var(--primary); color: var(--white); }
        .cc-title-wrap { position: absolute; bottom: 0; left: 0; right: 0; padding: 20px 16px 16px; }
        .cc-cat-label {
          font-size: 10px; font-weight: 600; letter-spacing: 0.06em; text-transform: capitalize;
          color: rgba(255,255,255,0.50); margin-bottom: 4px; font-family: var(--font-main);
        }
        .cc-title {
          font-size: 15px; font-weight: 700; color: var(--white);
          line-height: 1.3; margin: 0; font-family: var(--font-main);
          text-shadow: 0 1px 12px rgba(0,0,0,0.45);
        }
        .cc-body {
          padding: 16px 16px 14px; background: var(--white);
          border-top: 1.5px solid var(--border);
          display: flex; flex-direction: column; gap: 13px;
          transition: border-color 0.35s ease;
        }
        .cc-link:hover .cc-body { border-color: rgba(225,10,111,0.13); }
        .cc-stat-row { display: flex; gap: 0; }
        .cc-stat-item {
          flex: 1; display: flex; flex-direction: column; gap: 3px;
          padding: 0 12px; border-right: 1px solid var(--border);
        }
        .cc-stat-item:first-child { padding-left: 0; }
        .cc-stat-item:last-child  { border-right: none; }
        .cc-stat-label { font-size: 9px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.10em; color: var(--gray); font-family: var(--font-main); }
        .cc-stat-value { font-size: 12px; font-weight: 700; color: var(--dark); font-family: var(--font-main); }
        .cc-divider { height: 1px; background: var(--border); }
        .cc-footer { display: flex; align-items: center; justify-content: space-between; }
        .cc-footer-left { display: flex; align-items: center; gap: 9px; }
        .cc-idx-box {
          width: 32px; height: 32px; border-radius: 9px;
          background: var(--primary-light); border: 1px solid rgba(225,10,111,0.18);
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 800; color: var(--primary);
          font-family: var(--font-main); flex-shrink: 0;
          transition: background 0.35s ease, color 0.35s ease, border-color 0.35s ease;
        }
        .cc-link:hover .cc-idx-box { background: var(--primary); color: var(--white); border-color: var(--primary); }
        .cc-footer-text { display: flex; flex-direction: column; gap: 1px; }
        .cc-footer-title { font-size: 12px; font-weight: 600; color: var(--dark); font-family: var(--font-main); }
        .cc-footer-sub   { font-size: 10px; font-weight: 500; color: var(--gray); font-family: var(--font-main); }
        .cc-cta {
          display: flex; align-items: center; gap: 5px;
          font-size: 11px; font-weight: 700; padding: 9px 16px; border-radius: 100px;
          background: var(--primary-light); color: var(--primary);
          border: 1px solid rgba(225,10,111,0.18); cursor: pointer;
          font-family: var(--font-main); white-space: nowrap; flex-shrink: 0;
          transition: background 0.35s ease, color 0.35s ease, border-color 0.35s ease, gap 0.30s ease;
        }
        .cc-link:hover .cc-cta { background: var(--primary); color: var(--white); border-color: var(--primary); gap: 9px; }
        .cc-link:hover .cc-cta svg { transform: translate(2px, -2px); }
        .cc-cta svg { transition: transform 0.35s cubic-bezier(0.22,1,0.36,1); }
        .cc-accent {
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--primary-dark));
          transform: scaleX(0); transform-origin: left center;
          transition: transform 0.52s cubic-bezier(0.22,1,0.36,1);
          border-radius: 0 0 22px 22px;
        }
        .cc-link:hover .cc-accent { transform: scaleX(1); }
      `}</style>

      {/* ✅ CHANGED: id is now "courses-grid-section" */}
      <section
        id="courses-grid-section"
        style={{
          padding: "80px 0",
          background: `linear-gradient(180deg, var(--light) 0%, var(--primary-light) 100%)`,
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
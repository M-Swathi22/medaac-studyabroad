import React from "react";
import {
  Globe2,
  GraduationCap,
  FileText,
  BadgeCheck,
  Plane,
  Handshake,
} from "lucide-react";

const services = [
  { icon: Globe2,        title: "Country Selection",      desc: "Choose the right destination based on your goals and budget.",  num: "01" },
  { icon: GraduationCap, title: "University Shortlisting", desc: "Get universities that match your academic profile.",            num: "02" },
  { icon: FileText,      title: "Application Support",     desc: "Complete help with SOPs and documentation.",                   num: "03" },
  { icon: BadgeCheck,    title: "Visa Assistance",         desc: "Step-by-step visa guidance without confusion.",                num: "04" },
  { icon: Plane,         title: "Travel & Stay",           desc: "Support for flights and accommodation.",                       num: "05" },
  { icon: Handshake,     title: "Post-Arrival Help",       desc: "Guidance even after reaching your destination.",               num: "06" },
];

function AboutServices() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section
      className="w-full py-24"
      style={{ background: "var(--light)", fontFamily: "var(--font-main)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: "var(--primary)" }}
          >
            What We Offer
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--dark)" }}
          >
            Our <span style={{ color: "var(--primary)" }}>Services</span>
          </h2>
          <div
            className="mx-auto mt-4 h-[3px] w-14 rounded-full"
            style={{ background: "var(--primary)" }}
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                className="group relative p-8 text-center overflow-hidden"
                style={{
                  background: "var(--white)",
                  borderRadius: "20px",
                  border: "1.5px solid var(--border)",
                  transition:
                    "transform 0.4s cubic-bezier(0.34,1.36,0.64,1), border-color 0.35s ease, box-shadow 0.35s ease",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={e => {
                  setHoveredIndex(i);
                  e.currentTarget.style.transform  = "translateY(-8px)";
                  e.currentTarget.style.borderColor = "var(--primary)";
                  e.currentTarget.style.boxShadow  = "0 20px 48px rgba(225,10,111,0.18)";
                }}
                onMouseLeave={e => {
                  setHoveredIndex(null);
                  e.currentTarget.style.transform  = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow  = "0 2px 16px rgba(0,0,0,0.04)";
                }}
              >

                {/* ── WIPE FILL LAYER ── */}
                <div
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0"
                  style={{
                    background: "var(--primary)",
                    borderRadius: "18px",
                    zIndex: 0,
                    transition: "transform 0.52s cubic-bezier(0.76,0,0.24,1)",
                  }}
                />

                {/* ── SHEEN LAYER ── */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    zIndex: 1,
                    transition: "opacity 0.4s ease 0.15s",
                    pointerEvents: "none",
                  }}
                />

                {/* TOP LEFT SVG */}
                <svg className="absolute top-0 left-0 pointer-events-none" width="80" height="80" viewBox="0 0 80 80" style={{ zIndex: 2 }}>
                  <path d="M4,76 Q4,4 76,4" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"
                    strokeDasharray={isHovered ? "none" : "6 5"} />
                  <path d="M4,52 Q4,20 36,8" fill="none" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round"
                    strokeDasharray={isHovered ? "none" : "4 5"} />
                  <circle cx="4" cy="4" r="2.5" fill="var(--primary)" />
                </svg>

                {/* BOTTOM RIGHT SVG */}
                <svg className="absolute bottom-0 right-0 pointer-events-none" width="80" height="80" viewBox="0 0 80 80" style={{ zIndex: 2 }}>
                  <path d="M76,4 Q76,76 4,76" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"
                    strokeDasharray={isHovered ? "none" : "6 5"} />
                  <path d="M76,28 Q76,60 44,72" fill="none" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round"
                    strokeDasharray={isHovered ? "none" : "4 5"} />
                  <circle cx="76" cy="76" r="2.5" fill="var(--primary)" />
                </svg>

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col items-center">

                  <span className="absolute -top-1 right-0 font-bold tracking-widest select-none"
                    style={{
                      fontSize: "11px",
                      color: isHovered ? "rgba(255,255,255,0.45)" : "var(--primary)",
                      opacity: isHovered ? 1 : 0.35,
                    }}>
                    {item.num}
                  </span>

                  <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full mb-6"
                    style={{
                      background: isHovered ? "rgba(255,255,255,0.2)" : "var(--primary-light)",
                      border: isHovered
                        ? "1.5px solid rgba(255,255,255,0.35)"
                        : "1.5px solid rgba(225,10,111,0.15)",
                    }}>
                    <Icon size={24}
                      style={{ color: isHovered ? "#ffffff" : "var(--primary)" }}
                      className="group-hover:scale-110 group-hover:-rotate-6"
                    />
                  </div>

                  <h3 className="font-semibold mb-3 group-hover:!text-white"
                    style={{ fontSize: "16.5px", color: "var(--dark)" }}>
                    {item.title}
                  </h3>

                  <p className="group-hover:!text-white"
                    style={{ fontSize: "13.5px", color: "var(--gray)", lineHeight: "1.85" }}>
                    {item.desc}
                  </p>

                  {/* 🔥 ONLY CHANGE: Arrow removed, divider kept */}
                  <div className="mt-6 flex items-center justify-center">
                    <div
                      className="h-[1.5px] w-8 rounded-full transition-all duration-300 group-hover:w-0 group-hover:opacity-0"
                      style={{ background: "var(--border)" }}
                    />
                  </div>

                </div>

                {/* BOTTOM BAR */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full rounded-bl-[20px]"
                  style={{
                    background: "rgba(255,255,255,0.5)",
                    transition: "width 0.55s cubic-bezier(0.76,0,0.24,1) 0.08s",
                    zIndex: 11,
                  }}
                />

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutServices;
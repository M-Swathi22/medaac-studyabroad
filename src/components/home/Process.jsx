import { useState, useEffect, useRef } from "react";

import img1 from "../../assets/images/process1.avif";
import img2 from "../../assets/images/process2.webp";
import img3 from "../../assets/images/process3.jpg";
import img4 from "../../assets/images/process4.jpg";

const steps = [
  {
    id: 1,
    title: "Education Counseling",
    desc: "Get one-on-one guidance to choose the right country, course, and university.",
    img: img1,
  },
  {
    id: 2,
    title: "University Applications",
    desc: "We handle your entire admission process smoothly and efficiently.",
    img: img2,
  },
  {
    id: 3,
    title: "Loans & Scholarships",
    desc: "Explore financial options and make your education affordable.",
    img: img3,
  },
  {
    id: 4,
    title: "Visa Processing",
    desc: "Complete visa support with a high success rate.",
    img: img4,
  },
];

const STEP_DURATION = 3000; // slightly faster per step

function Process() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // planePx is driven purely by rAF — stored in a ref to avoid re-renders
  const planePxRef = useRef(0);
  const planeElRef = useRef(null);
  const lineElRef = useRef(null);

  const rafRef = useRef(null);
  const startTimeRef = useRef(null);
  const activeRef = useRef(0); // shadow of `active` for rAF closure

  // Keep activeRef in sync
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Measure container height
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // rAF animation loop — runs whenever active or containerHeight changes
  useEffect(() => {
    if (containerHeight === 0) return;

    const stepPercent = 1 / steps.length;

    cancelAnimationFrame(rafRef.current);
    startTimeRef.current = performance.now();

    const tick = (now) => {
      const elapsed = now - startTimeRef.current;
      const t = Math.min(elapsed / STEP_DURATION, 1); // 0 → 1

      const currentStep = activeRef.current;
      const rawPct = (currentStep + t) * stepPercent; // 0 → 1
      const px = rawPct * containerHeight;

      planePxRef.current = px;

      // Directly mutate DOM — no setState, no re-render
      if (planeElRef.current) {
        planeElRef.current.style.transform = `translateY(${px - 12}px)`;
      }
      if (lineElRef.current) {
        lineElRef.current.setAttribute("y2", px);
      }

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Advance to next step
        const next = (currentStep + 1) % steps.length;
        setActive(next);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, containerHeight]);

  const handleClick = (index) => {
    cancelAnimationFrame(rafRef.current);
    setActive(index);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-light)] via-white to-[var(--secondary)/20] animate-[gradientMove_10s_ease-in-out_infinite]" />
      <div className="absolute -top-32 -left-32 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[var(--primary)] opacity-30 rounded-full blur-3xl animate-[float1_12s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-80px] md:bottom-[-100px] right-[-60px] md:right-[-80px] w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-[var(--secondary)] opacity-30 rounded-full blur-3xl animate-[float2_14s_ease-in-out_infinite]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--primary)] mb-2">
            How It Works
          </p>
          <h2 className="text-xl md:text-4xl font-bold text-[var(--dark)]">
            <span className="text-[var(--primary)]">4 Steps</span> to Your Dream Destination
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* LEFT */}
          <div className="relative pl-10 md:pl-12">
            <div ref={containerRef} className="relative">

              {/* STATIC TRACK */}
              <div className="absolute left-[-24px] md:left-[-28px] top-0 bottom-0 w-[2px] bg-gray-200 rounded-full" />

              {/* SVG DOTTED PROGRESS LINE — mutated directly via ref */}
              {containerHeight > 0 && (
                <svg
                  className="absolute overflow-visible pointer-events-none"
                  style={{ left: "-25px", top: 0, width: "4px", height: `${containerHeight}px` }}
                >
                  <line
                    ref={lineElRef}
                    x1="2"
                    y1="0"
                    x2="2"
                    y2="0"
                    stroke="var(--primary, #4f46e5)"
                    strokeWidth="2.5"
                    strokeDasharray="5 7"
                    strokeLinecap="round"
                  />
                </svg>
              )}

              {/* PLANE — mutated directly via ref, no re-render */}
              {containerHeight > 0 && (
                <div
                  ref={planeElRef}
                  className="absolute pointer-events-none z-20"
                  style={{
                    left: "-36px",
                    top: 0,
                    willChange: "transform",
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "var(--primary, #4f46e5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      boxShadow: "0 0 0 3px rgba(79,70,229,0.15)",
                      transform: "rotate(90deg)",
                    }}
                  >
                    ✈️
                  </div>
                </div>
              )}

              {/* STEPS */}
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  onClick={() => handleClick(index)}
                  className="relative mb-6 md:mb-8 last:mb-0 cursor-pointer"
                >
                  {/* DOT */}
                  <div
                    className="absolute z-10 transition-all duration-300"
                    style={{
                      left: "-30px",
                      top: "12px",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      border: `2px solid ${
                        active === index || index < active
                          ? "var(--primary, #4f46e5)"
                          : "#d1d5db"
                      }`,
                      background:
                        active === index || index < active
                          ? "var(--primary, #4f46e5)"
                          : "#fff",
                    }}
                  />

                  {/* CARD */}
                  <div
                    className="rounded-lg p-3 md:p-4 transition-all duration-300"
                    style={{
                      background: "#fff",
                      border:
                        active === index
                          ? "1px solid var(--primary, #4f46e5)"
                          : "1px solid #e5e7eb",
                      boxShadow:
                        active === index
                          ? "0 4px 20px rgba(79,70,229,0.1)"
                          : "none",
                      opacity: active === index ? 1 : 0.8,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background:
                            active === index
                              ? "var(--primary, #4f46e5)"
                              : "#f3f4f6",
                          color: active === index ? "#fff" : "#9ca3af",
                        }}
                      >
                        0{step.id}
                      </span>
                      <h3 className="text-sm md:text-base font-semibold text-[var(--dark)]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center mt-6 md:mt-0">
            <div className="relative w-full max-w-xs md:max-w-md">

              <img
                key={active}
                src={steps[active].img}
                alt={steps[active].title}
                className="rounded-2xl shadow-xl w-full h-[220px] md:h-[380px] object-cover"
              />

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />

              <div className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 w-[92%] md:w-[80%] bg-white rounded-xl p-3 md:p-5 shadow-xl text-center">
                <h3 className="text-sm md:text-base font-semibold text-[var(--dark)] mb-1">
                  {steps[active].title}
                </h3>
                <p className="text-[11px] md:text-xs text-gray-600 mb-2 md:mb-3">
                  {steps[active].desc}
                </p>
                <button className="bg-[var(--secondary)] text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[11px] md:text-xs">
                  Free Consultation
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 40px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, -30px); }
        }
        @keyframes gradientMove {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(15deg); }
        }
      `}</style>
    </section>
  );
}

export default Process;
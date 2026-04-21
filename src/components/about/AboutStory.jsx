import { useEffect, useRef } from "react";

const STORY_PARAGRAPHS = [
  "Medaac was born in Coimbatore out of a simple frustration — study abroad consultancies were confusing, expensive, and filled with hidden fees. We decided to change that completely.",
  "From university selection to visa approval, we guide every student with clarity, honesty, and real expertise. No hidden costs. No false promises.",
  "Today, thousands of students trust us to shape their future — and we deliver results with complete transparency at every step."
];

function AboutStory() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="w-full py-24 lg:py-32"
      style={{
        background: "var(--light)",
        fontFamily: "var(--font-main)"
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT */}
          <div
            ref={leftRef}
            className="flex flex-col gap-7 opacity-0 translate-y-8 transition-all duration-700"
          >
            {/* OUR STORY (UPDATED) */}
            <span
              className="text-sm md:text-base font-semibold uppercase tracking-widest"
              style={{ color: "var(--primary)" }}
            >
              Our Story
            </span>

            {/* HEADING */}
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ color: "var(--dark)" }}
            >
              We started with one belief — <br />
              every student deserves an{" "}
              <span style={{ color: "var(--primary)" }}>
                honest guide
              </span>
            </h2>

            {/* PARAGRAPHS */}
            <div className="flex flex-col gap-4">
              {STORY_PARAGRAPHS.map((p, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed"
                  style={{
                    color: "var(--gray)",
                    lineHeight: "1.8"
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* QUOTE */}
            <blockquote
              className="pl-5 py-4 rounded-r-xl"
              style={{
                borderLeft: "3px solid var(--primary)",
                background: "var(--primary-light)"
              }}
            >
              <p
                className="text-sm italic"
                style={{ color: "var(--dark)" }}
              >
                "Education is the most powerful weapon which you can use to change the world."
              </p>
              <span
                className="block mt-2 text-xs font-semibold uppercase"
                style={{ color: "var(--primary)" }}
              >
                — Nelson Mandela
              </span>
            </blockquote>
          </div>

          {/* RIGHT */}
          <div
            ref={rightRef}
            className="relative opacity-0 translate-y-8 transition-all duration-700 delay-150"
          >
            {/* BACK DECOR */}
            <div
              className="absolute -bottom-5 -right-5 w-2/3 h-2/3 rounded-2xl -z-10"
              style={{ background: "var(--primary-light)" }}
            />

            {/* IMAGE */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
                alt="Medaac team"
                className="w-full h-[420px] object-cover"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(225,10,111,0.08), transparent)"
                }}
              />
            </div>

            {/* BADGE */}
            <div
              className="absolute -bottom-6 -left-6 px-5 py-4 rounded-2xl text-center shadow-lg"
              style={{
                background: "var(--primary)",
                color: "var(--white)"
              }}
            >
              <div className="text-2xl font-bold">15+</div>
              <div className="text-xs opacity-90">
                Years Experience
              </div>
            </div>

            {/* TAG */}
            <div
              className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-xs font-semibold shadow"
              style={{
                background: "var(--primary-light)",
                color: "var(--primary)"
              }}
            >
              Trusted by 6,500+ Students
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 
export default AboutStory;
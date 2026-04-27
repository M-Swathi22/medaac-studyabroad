import { Search } from "lucide-react";
import heroBg from "../../assets/images/courses-hero.webp";

function CoursesHero() {

  const handleScroll = () => {
    // 🔥 wait a tiny bit to ensure DOM is ready
    setTimeout(() => {
      const section = document.getElementById("courses-section");

      if (section) {
        const yOffset = -80; // adjust if navbar height
        const y =
          section.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        console.log("courses-section not found");
      }
    }, 100);
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-[100svh] overflow-hidden text-center pt-[110px] md:pt-[130px]"
      style={{ fontFamily: "var(--font-main)" }}
    >
      {/* ===== BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Courses background"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* ===== OVERLAY ===== */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              120deg,
              rgba(10,10,10,0.92) 0%,
              rgba(10,10,10,0.78) 35%,
              rgba(10,10,10,0.55) 55%,
              rgba(225,10,111,0.15) 75%,
              rgba(248,249,251,0.85) 95%,
              var(--light) 100%
            )
          `,
        }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <h1
          className="text-3xl md:text-5xl font-bold mb-5 leading-tight"
          style={{ color: "var(--white)" }}
        >
          Find the Right Course for Your{" "}
          <span style={{ color: "var(--primary)" }}>
            Medical Career Abroad
          </span>
        </h1>

        {/* SUBTEXT */}
        <p
          className="text-base md:text-lg mb-10"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Search, compare and choose from MBBS, BDS, Nursing and more
          across top global universities.
        </p>

        {/* SEARCH */}
        <div
          className="relative max-w-xl mx-auto mb-8 p-2 rounded-full transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)",
            border: "1px solid var(--border)",
          }}
        >
          <input
            type="text"
            placeholder="Search courses (MBBS, Nursing...)"
            className="w-full px-5 py-3 rounded-full outline-none"
            style={{ background: "transparent" }}
            onFocus={(e) => {
              e.target.parentElement.style.boxShadow =
                "0 8px 30px rgba(225,10,111,0.25)";
              e.target.parentElement.style.borderColor = "var(--primary)";
            }}
            onBlur={(e) => {
              e.target.parentElement.style.boxShadow = "none";
              e.target.parentElement.style.borderColor = "var(--border)";
            }}
          />

          <Search
            size={18}
            className="absolute right-5 top-1/2 -translate-y-1/2"
            style={{ color: "var(--primary)" }}
          />
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["MBBS", "BDS", "Nursing", "BHMS", "BAMS"].map((item, i) => (
            <button
              key={i}
              className="px-4 py-2 rounded-full text-sm transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.9)",
                color: "var(--primary-dark)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--primary)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.boxShadow =
                  "0 6px 18px rgba(225,10,111,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.9)";
                e.currentTarget.style.color = "var(--primary-dark)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mb-10">
          <button
            onClick={handleScroll}
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, var(--primary), var(--primary-dark))",
              color: "#fff",
              boxShadow: "0 8px 24px rgba(225,10,111,0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(225,10,111,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(225,10,111,0.35)";
            }}
          >
            Explore Courses →
          </button>
        </div>

        {/* STATS */}
        <div className="flex justify-center gap-10 flex-wrap text-sm">
          {[
            { value: "50+", label: "Courses" },
            { value: "15+", label: "Countries" },
            { value: "5000+", label: "Students Placed" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p
                className="text-2xl font-extrabold"
                style={{ color: "var(--white)" }}
              >
                {item.value}
              </p>
              <p style={{ color: "rgba(255,255,255,0.75)" }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CoursesHero;
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import heroBg from "../../assets/images/courses-hero.webp";
import { COURSE_DATA } from "../../data/courseData";

const ALL_COURSES = Object.entries(COURSE_DATA).flatMap(([category, courses]) =>
  courses.map((c) => ({ ...c, category }))
);

const CATEGORY_LABELS = {
  medical: "Medical",
  nursing: "Nursing",
  paramedical: "Paramedical",
  engineering: "Engineering",
  allied: "Allied Health",
  bsc: "B.Sc",
  management: "Management",
};

function CoursesHero() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (!value.trim()) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }
    const filtered = ALL_COURSES.filter((c) =>
      c.title.toLowerCase().includes(value.toLowerCase()) ||
      c.desc?.toLowerCase().includes(value.toLowerCase()) ||
      CATEGORY_LABELS[c.category]?.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered.slice(0, 6));
    setShowDropdown(true);
  };

  const handleClear = () => {
    setQuery("");
    setSuggestions([]);
    setShowDropdown(false);
  };

  const handleSuggestionClick = (course) => {
    navigate(`/courses/${course.category}/${course.id}`);
    setShowDropdown(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const match = ALL_COURSES.find((c) =>
        c.title.toLowerCase() === query.trim().toLowerCase()
      );
      if (match) {
        navigate(`/courses/${match.category}/${match.id}`);
        setShowDropdown(false);
      }
    }
    if (e.key === "Escape") setShowDropdown(false);
  };

  const handleTagClick = (tag) => {
    setQuery(tag);
    const filtered = ALL_COURSES.filter((c) =>
      c.title.toLowerCase().includes(tag.toLowerCase()) ||
      CATEGORY_LABELS[c.category]?.toLowerCase().includes(tag.toLowerCase())
    );
    setSuggestions(filtered.slice(0, 6));
    setShowDropdown(true);
  };

  /* ✅ FIXED: targets "courses-grid-section" — not "courses-section" (that's FeaturedCourses) */
  const handleScroll = () => {
    const section = document.getElementById("courses-grid-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-[100svh] overflow-hidden text-center pt-[110px] md:pt-[130px]"
      style={{ fontFamily: "var(--font-main)" }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Courses background"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* OVERLAY */}
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

      {/* CONTENT */}
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
        <div ref={wrapperRef} className="relative max-w-xl mx-auto mb-8">
          <div
            className="relative p-2 rounded-full transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${showDropdown || query ? "var(--primary)" : "var(--border)"}`,
              boxShadow:
                showDropdown || query
                  ? "0 8px 30px rgba(225,10,111,0.25)"
                  : "none",
            }}
          >
            <input
              type="text"
              value={query}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onFocus={() => { if (query.trim()) setShowDropdown(true); }}
              placeholder="Search courses (MBBS, Nursing, CSE...)"
              className="w-full px-5 py-3 rounded-full outline-none"
              style={{
                background: "transparent",
                paddingRight: query ? "4.5rem" : "2.5rem",
              }}
            />
            {query && (
              <button
                onClick={handleClear}
                className="absolute right-12 top-1/2 -translate-y-1/2"
                style={{ color: "#aaa", lineHeight: 1 }}
              >
                <X size={15} />
              </button>
            )}
            <Search
              size={18}
              className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
              style={{ color: "var(--primary)" }}
              onClick={() => {
                const match = ALL_COURSES.find((c) =>
                  c.title.toLowerCase() === query.trim().toLowerCase()
                );
                if (match) {
                  navigate(`/courses/${match.category}/${match.id}`);
                  setShowDropdown(false);
                }
              }}
            />
          </div>

          {/* DROPDOWN */}
          {showDropdown && (
            <div
              className="absolute left-0 right-0 z-50 mt-2 rounded-2xl overflow-hidden text-left"
              style={{
                background: "rgba(255,255,255,0.98)",
                border: "1px solid var(--border)",
                boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
                maxHeight: "320px",
                overflowY: "auto",
              }}
            >
              {suggestions.length > 0 ? (
                <>
                  <div
                    className="px-4 py-2 text-xs font-semibold sticky top-0"
                    style={{
                      color: "#888",
                      borderBottom: "1px solid var(--border)",
                      background: "rgba(255,255,255,0.98)",
                    }}
                  >
                    {suggestions.length} course{suggestions.length > 1 ? "s" : ""} found
                  </div>
                  {suggestions.map((course) => (
                    <button
                      key={course.id}
                      onClick={() => handleSuggestionClick(course)}
                      className="w-full flex items-center justify-between px-4 py-3 transition-all duration-150"
                      style={{ borderBottom: "1px solid var(--border)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(225,10,111,0.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <div className="text-left">
                        <p className="text-sm font-semibold" style={{ color: "#111" }}>
                          {course.title}
                        </p>
                        <p className="text-xs" style={{ color: "#888" }}>
                          {CATEGORY_LABELS[course.category] ?? course.category}{" "}
                          · {course.duration}
                        </p>
                      </div>
                      <span
                        className="text-xs font-medium ml-4 flex-shrink-0"
                        style={{ color: "var(--primary)" }}
                      >
                        View →
                      </span>
                    </button>
                  ))}
                </>
              ) : (
                <div className="px-4 py-8 text-center">
                  <p className="text-sm font-semibold mb-1" style={{ color: "#111" }}>
                    No course found for "{query}"
                  </p>
                  <p className="text-xs" style={{ color: "#888" }}>
                    Try MBBS, BDS, Nursing, CSE or browse below
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["MBBS", "BDS", "Nursing", "BHMS", "BAMS"].map((item, i) => (
            <button
              key={i}
              onClick={() => handleTagClick(item)}
              className="px-4 py-2 rounded-full text-sm transition-all duration-200"
              style={{
                background: query === item ? "var(--primary)" : "rgba(255,255,255,0.9)",
                color: query === item ? "#fff" : "var(--primary-dark)",
                border: "1px solid var(--border)",
                boxShadow: query === item ? "0 6px 18px rgba(225,10,111,0.3)" : "none",
              }}
              onMouseEnter={(e) => {
                if (query !== item) {
                  e.currentTarget.style.background = "var(--primary)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.boxShadow = "0 6px 18px rgba(225,10,111,0.3)";
                }
              }}
              onMouseLeave={(e) => {
                if (query !== item) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.9)";
                  e.currentTarget.style.color = "var(--primary-dark)";
                  e.currentTarget.style.boxShadow = "none";
                }
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
              background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
              color: "#fff",
              boxShadow: "0 8px 24px rgba(225,10,111,0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(225,10,111,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(225,10,111,0.35)";
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
              <p className="text-2xl font-extrabold" style={{ color: "var(--white)" }}>
                {item.value}
              </p>
              <p style={{ color: "rgba(255,255,255,0.75)" }}>{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CoursesHero;
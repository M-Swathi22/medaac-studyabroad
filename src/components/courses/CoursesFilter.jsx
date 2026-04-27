import { useState } from "react";

const filters = ["All", "MBBS", "BDS", "Nursing", "BHMS", "BAMS"];

function CoursesFilter({ selected, setSelected }) {
  return (
    <section
      className="py-6"
      style={{
        background: "var(--white)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3 justify-center">

        {filters.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelected(item)}
            className="px-5 py-2 rounded-full text-sm transition"
            style={{
              background:
                selected === item
                  ? "var(--primary)"
                  : "var(--primary-light)",
              color:
                selected === item
                  ? "var(--white)"
                  : "var(--primary-dark)",
            }}
          >
            {item}
          </button>
        ))}

      </div>
    </section>
  );
}

export default CoursesFilter;
// src/components/studyAbroad/UniversityList.jsx

import { GraduationCap } from "lucide-react";

export default function UniversityList({ country }) {
  return (
    <section
      className="py-24"
      style={{
        background: "#FFF7FA",
        fontFamily: "var(--font-main)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p
            className="uppercase tracking-[0.2em] text-sm font-bold mb-5"
            style={{ color: "var(--primary)" }}
          >
            Top Universities
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
            Prestigious Universities Of{" "}
            <span style={{ color: "var(--primary)" }}>
              {country.name}
            </span>
          </h2>
        </div>

        {/* Universities */}
        <div className="grid md:grid-cols-2 gap-6">
          {country.universityList?.map((university, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-pink-100 p-6 flex items-start gap-5 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center flex-shrink-0">
                <GraduationCap
                  size={28}
                  color="#E10A6F"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-black leading-7">
                  {university}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
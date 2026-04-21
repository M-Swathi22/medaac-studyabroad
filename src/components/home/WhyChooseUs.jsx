import {
  Award,
  Users,
  BadgeCheck,
  Globe,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const cards = [
  {
    icon: Award,
    title: "15+ Years Experience",
    desc: "Decades of expertise guiding students toward successful international education paths.",
    side: "left",
  },
  {
    icon: Users,
    title: "6,500+ Students Placed",
    desc: "Thousands of students successfully placed in top universities worldwide.",
    side: "right",
  },
  {
    icon: BadgeCheck,
    title: "98% Visa Success Rate",
    desc: "Strong documentation and expert guidance ensure high visa approval chances.",
    side: "left",
  },
  {
    icon: Globe,
    title: "Global University Network",
    desc: "Partnerships with leading universities across multiple countries.",
    side: "right",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    desc: "Clear, honest guidance with no hidden charges or false promises.",
    side: "left",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    desc: "Consistent success in admissions, scholarships, and career outcomes.",
    side: "right",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">

      {/* ✅ LIGHT GREY BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          background: "var(--light)",
        }}
      />

      {/* ✨ SOFT BRAND GLOW */}
      <div
        className="absolute -left-40 top-20 w-[320px] h-[320px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(225,10,111,0.08) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute -right-40 bottom-20 w-[280px] h-[280px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(225,10,111,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--dark)]">
            Why Choose <span className="text-[var(--primary)]">Us</span>
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Real results, real trust, and a proven track record
          </p>
        </div>

        <div className="relative">

          {/* CONNECTOR */}
          <svg
            className="hidden md:block absolute inset-0 w-full h-full z-0"
            viewBox="0 0 1000 700"
          >
            <path
              d="M 300 100 C 500 150, 500 150, 700 200 
                 S 500 300, 300 350 
                 S 500 450, 700 500 
                 S 500 600, 300 650"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              opacity="0.12"
            />
          </svg>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-20 gap-x-6 md:gap-x-20 relative z-10">

            {cards.map((card, index) => {
              const Icon = card.icon;
              const isLeft = card.side === "left";
              const rotate = isLeft ? "-3deg" : "3deg";

              return (
                <div
                  key={index}
                  className={`flex justify-center 
                  ${isLeft ? "md:justify-end md:pr-10" : "md:justify-start md:pl-10"}`}
                >
                  <div
                    className="relative w-[280px] h-[220px] rounded-[22px] p-5 transition-all duration-300"
                    style={{
                      transform:
                        typeof window !== "undefined" && window.innerWidth < 768
                          ? "rotate(0deg)"
                          : `rotate(${rotate})`,

                      /* 🔥 SOFT PINK GLASS CARD (NOT LOUD) */
                      background: `
                        linear-gradient(
                          145deg,
                          color-mix(in srgb, var(--primary-light) 70%, #ffffff),
                          color-mix(in srgb, var(--primary-light) 90%, #ffffff)
                        )
                      `,

                      border:
                        "1px solid color-mix(in srgb, var(--primary) 25%, transparent)",

                      boxShadow:
                        "0 12px 30px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
                    }}
                    onMouseEnter={(e) => {
                      if (window.innerWidth >= 768) {
                        e.currentTarget.style.transform =
                          "rotate(0deg) scale(1.05)";
                        e.currentTarget.style.boxShadow =
                          "0 20px 50px rgba(0,0,0,0.15)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (window.innerWidth >= 768) {
                        e.currentTarget.style.transform = `rotate(${rotate})`;
                        e.currentTarget.style.boxShadow =
                          "0 12px 30px rgba(0,0,0,0.08)";
                      }
                    }}
                  >

                    {/* PIN */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <div
                        className="w-5 h-5 rounded-full shadow-md"
                        style={{
                          background:
                            "radial-gradient(circle at 30% 30%, #fff 10%, var(--primary) 40%, var(--primary-dark) 100%)",
                        }}
                      />
                      <div className="w-[2px] h-6 bg-gray-300" />
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col justify-center h-full">
                      <div className="mb-3">
                        <Icon size={20} style={{ color: "var(--primary)" }} />
                      </div>

                      <h3 className="font-semibold text-[var(--dark)] mb-2 text-base">
                        {card.title}
                      </h3>

                      <p className="text-sm text-gray-700 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
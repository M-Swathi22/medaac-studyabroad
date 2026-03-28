import {
  GraduationCap,
  Globe,
  HeartHandshake,
  BadgeCheck,
  Clock,
  Wallet,
} from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Expert Counseling",
    desc: "One-on-one guidance to choose the right course, university, and country.",
    side: "left",
  },
  {
    icon: Globe,
    title: "Global University Network",
    desc: "Access to top universities across countries with full support.",
    side: "right",
  },
  {
    icon: Wallet,
    title: "Affordable & Transparent",
    desc: "Clear guidance on tuition, scholarships, and education loans.",
    side: "left",
  },
  {
    icon: BadgeCheck,
    title: "High Visa Success",
    desc: "Strong documentation support for maximum approval chances.",
    side: "right",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Support",
    desc: "From admission to travel, we handle everything.",
    side: "left",
  },
  {
    icon: Clock,
    title: "Fast Process",
    desc: "Quick and reliable application & visa processing.",
    side: "right",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-24 bg-[var(--primary-light)] overflow-hidden">

      {/* BACKGROUND BLOBS */}
      <div className="absolute -left-32 top-20 w-72 h-72 bg-[var(--primary)] opacity-10 blur-3xl rounded-full" />
      <div className="absolute -right-32 bottom-20 w-72 h-72 bg-[var(--secondary)] opacity-10 blur-3xl rounded-full" />

      <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-8">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--dark)]">
            Why Choose <span className="text-[var(--primary)]">Us</span>
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Here's why students trust us for their journey
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
              opacity="0.2"
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

                  {/* CARD */}
                  <div
                    className="relative w-[280px] h-[220px] bg-white border border-gray-200 rounded-[22px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-4 transition-all duration-300"
                    style={{
                      transform:
                        window.innerWidth < 768
                          ? "rotate(0deg)"
                          : `rotate(${rotate})`,
                    }}
                    onMouseEnter={(e) => {
                      if (window.innerWidth >= 768) {
                        e.currentTarget.style.transform =
                          "rotate(0deg) scale(1.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (window.innerWidth >= 768) {
                        e.currentTarget.style.transform = `rotate(${rotate})`;
                      }
                    }}
                  >

                    {/* PIN */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
                      <div className="relative">
                        <div
                          className="w-5 h-5 rounded-full shadow-lg"
                          style={{
                            background:
                              "radial-gradient(circle at 30% 30%, #ffffff 10%, var(--primary) 40%, #1d4ed8 100%)",
                          }}
                        />
                        <div className="absolute top-[3px] left-[4px] w-2 h-2 bg-white/70 rounded-full blur-[1px]" />
                      </div>
                      <div
                        className="w-[2px] h-6"
                        style={{
                          background:
                            "linear-gradient(to bottom, #9ca3af, #6b7280)",
                        }}
                      />
                      <div className="w-2 h-2 bg-black/10 blur-sm rounded-full mt-[-2px]" />
                    </div>

                    {/* 🔥 INNER BOX — SECONDARY BASED */}
                    <div className="bg-gradient-to-br from-white to-[var(--secondary)]/30 rounded-[16px] h-full p-5 flex flex-col justify-center">

                      <div className="mb-3">
                        <Icon size={20} style={{ color: "var(--primary)" }} />
                      </div>

                      <h3 className="font-semibold text-[var(--dark)] mb-2 text-base">
                        {card.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
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
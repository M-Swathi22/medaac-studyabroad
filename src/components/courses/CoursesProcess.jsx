import { GraduationCap, FileCheck, Send, ShieldCheck, Plane } from "lucide-react";

const steps = [
  {
    icon: GraduationCap,
    title: "Choose Your Course",
    desc: "Select the right program based on your career goals and budget.",
  },
  {
    icon: FileCheck,
    title: "Check Eligibility",
    desc: "We verify your academic profile, NEET/IELTS requirements and guide you.",
  },
  {
    icon: Send,
    title: "Apply to Universities",
    desc: "We handle applications, documentation and admission process.",
  },
  {
    icon: ShieldCheck,
    title: "Visa & Documentation",
    desc: "Complete visa filing with expert support and high success rate.",
  },
  {
    icon: Plane,
    title: "Fly & Start Journey",
    desc: "Travel, settle and begin your studies abroad with our support.",
  },
];

function CoursesProcess() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 bg-[var(--light)]">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
          Your Journey from{" "}
          <span className="text-[var(--primary)]">
            Course Selection to Abroad
          </span>
        </h2>

        <p className="text-gray-500 mb-12 md:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
          A simple step-by-step process to turn your dream course into reality.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="relative group">

                {/* Connector line (desktop only) */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-[2px] bg-gradient-to-r from-gray-200 via-[var(--primary-light)] to-gray-200"></div>
                )}

                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                  {/* subtle glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[var(--primary-light)] blur-xl"></div>

                  <div className="relative z-10">

                    {/* Icon */}
                    <div
                      className="w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: "var(--primary-light)",
                        color: "var(--primary)",
                      }}
                    >
                      <Icon size={24} />
                    </div>

                    {/* Step number */}
                    <p className="text-xs font-semibold text-gray-400 mb-2 tracking-wide">
                      STEP {index + 1}
                    </p>

                    {/* Title */}
                    <h3 className="font-semibold text-base sm:text-lg mb-2">
                      {step.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.desc}
                    </p>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default CoursesProcess;
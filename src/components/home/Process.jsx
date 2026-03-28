import { useState } from "react";

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

function Process() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 overflow-hidden">

      {/* 🔥 ANIMATED GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br 
        from-[var(--primary-light)] via-white to-[var(--secondary)/20]
        animate-[gradientMove_10s_ease-in-out_infinite]" />

      {/* 🔥 FLOATING GLOW LEFT */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] 
        bg-[var(--primary)] opacity-30 rounded-full blur-3xl 
        animate-[float1_12s_ease-in-out_infinite]" />

      {/* 🔥 FLOATING GLOW RIGHT */}
      <div className="absolute bottom-[-100px] right-[-80px] w-[350px] h-[350px] 
        bg-[var(--secondary)] opacity-30 rounded-full blur-3xl 
        animate-[float2_14s_ease-in-out_infinite]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] mb-2">
            How It Works
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-[var(--dark)]">
            <span className="text-[var(--primary)]">4 Steps</span> to Your Dream Destination
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="relative">

            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-200"></div>

            {steps.map((step, index) => (
              <div
                key={step.id}
                onClick={() => setActive(index)}
                className="relative pl-12 mb-8 cursor-pointer group"
              >

                <div className={`
                  absolute left-0 top-1 w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all
                  ${active === index
                    ? "bg-[var(--primary)] text-white scale-110 shadow-md"
                    : "bg-white border border-gray-300 text-gray-400"}
                `}>
                  {step.id}
                </div>

                <div className={`
                  rounded-lg p-4 transition-all duration-300
                  ${active === index
                    ? "bg-white shadow-lg border border-[var(--primary)]"
                    : "bg-white/70 border border-gray-200 group-hover:border-[var(--primary)]"}
                `}>

                  <h3 className="text-base font-semibold text-[var(--dark)] mb-1">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center mt-10 md:mt-0">

            <div className="relative w-full max-w-sm md:max-w-md">

              <img
                src={steps[active].img}
                alt={steps[active].title}
                className="rounded-2xl shadow-xl w-full h-[280px] md:h-[380px] object-cover transition-all duration-500"
              />

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent"></div>

              <div className="
                absolute 
                -bottom-10 left-1/2 -translate-x-1/2
                w-[90%] md:w-[80%]
                bg-white
                rounded-xl
                p-4 md:p-5
                shadow-xl
                text-center
              ">

                <h3 className="text-sm md:text-base font-semibold text-[var(--dark)] mb-1">
                  {steps[active].title}
                </h3>

                <p className="text-xs text-gray-600 mb-3">
                  {steps[active].desc}
                </p>

                <button className="bg-[var(--secondary)] text-white px-4 py-1.5 rounded-full text-xs hover:opacity-90 transition">
                  Free Consultation
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* 🔥 KEYFRAME ANIMATIONS */}
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
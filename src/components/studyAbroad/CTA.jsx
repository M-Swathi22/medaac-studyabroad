// src/components/studyabroad/StudyAbroadCTA.jsx

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

 function StudyAbroadCTA() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFF9FC 0%, #FFFFFF 100%)",
        fontFamily: "var(--font-main)",
      }}
    >
      {/* Soft Background Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(225,10,111,0.09) 0%, transparent 72%)",
          filter: "blur(80px)",
        }}
      />

      {/* Grid Dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(225,10,111,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >

          {/* CTA BOX */}
          <div
            className="relative overflow-hidden rounded-[34px] px-8 md:px-16 py-16 md:py-20 text-center"
            style={{
              background:
                "linear-gradient(135deg, #FFEAF3 0%, #FFF5F9 100%)",
              border: "1px solid rgba(225,10,111,0.12)",
              boxShadow:
                "0 18px 50px rgba(225,10,111,0.10)",
            }}
          >

            {/* Top Right Glow */}
            <div
              className="absolute -top-28 -right-24 w-80 h-80 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(225,10,111,0.12) 0%, transparent 72%)",
              }}
            />

            {/* Bottom Left Glow */}
            <div
              className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(225,10,111,0.08) 0%, transparent 72%)",
              }}
            />

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-7"
              style={{
                background: "rgba(225,10,111,0.08)",
                color: "var(--primary)",
                border: "1px solid rgba(225,10,111,0.12)",
              }}
            >
              Start Your Global Career
            </div>

            {/* Heading */}
            <h2
              className="text-[2.3rem] md:text-[4rem] font-extrabold leading-[1.08]"
              style={{
                color: "var(--dark)",
                letterSpacing: "-0.05em",
              }}
            >
              Your Dream University
              <br />
              Starts Here
            </h2>

            {/* Subtext */}
            <p
              className="mt-6 max-w-2xl mx-auto text-[1rem] md:text-[1.05rem] leading-[1.9]"
              style={{
                color: "var(--gray)",
              }}
            >
              From admissions and scholarships to visas and travel guidance,
              our experts help you through every step of your study abroad journey.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

              {/* Primary Button */}
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary), var(--primary-dark))",
                  color: "#ffffff",
                  boxShadow: "0 12px 28px rgba(225,10,111,0.22)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 34px rgba(225,10,111,0.32)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 28px rgba(225,10,111,0.22)";
                }}
              >
                Apply Now

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary Button */}
              <a
                href="tel:+919999999999"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: "#ffffff",
                  color: "var(--primary)",
                  border: "1px solid rgba(225,10,111,0.14)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 28px rgba(225,10,111,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.04)";
                }}
              >
                <PhoneCall size={16} />
                Talk to Expert
              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
export default StudyAbroadCTA;
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

function MissionVision() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ fontFamily: "var(--font-main)" }}
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              var(--white) 0%,
              var(--primary-light) 45%,
              var(--white) 100%
            )
          `,
        }}
      />

      {/* SOFT ORBS */}
      <div
        className="absolute -top-24 -left-24 w-[320px] h-[320px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--primary) 18%, transparent) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-24 -right-24 w-[280px] h-[280px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--primary) 14%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--dark)" }}
          >
            What Drives Us
          </h2>
          <p
            className="mt-3 text-sm md:text-base"
            style={{ color: "var(--gray)" }}
          >
            Built on clarity, driven by results, focused on students
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl p-8 transition-all duration-300"
            style={{
              background: "var(--white)",
              border: "1px solid var(--border)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            }}
          >
            {/* TOP ACCENT LINE */}
            <div
              className="absolute top-0 left-0 w-0 group-hover:w-full h-[3px] transition-all duration-500"
              style={{ background: "var(--primary)" }}
            />

            {/* ICON */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
              style={{
                background:
                  "color-mix(in srgb, var(--primary) 15%, transparent)",
              }}
            >
              <Target size={20} style={{ color: "var(--primary)" }} />
            </div>

            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--dark)" }}
            >
              Our Mission
            </h3>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--gray)", lineHeight: "1.85" }}
            >
              To eliminate confusion, hidden fees, and biased guidance in the
              study abroad process by delivering clear, transparent, and
              student-first decisions at every step.
            </p>

            {/* SUB PROOF */}
            <p
              className="mt-4 text-xs font-medium"
              style={{ color: "var(--primary)" }}
            >
              No shortcuts. No pressure. No wrong decisions.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl p-8 transition-all duration-300"
            style={{
              background: "var(--white)",
              border: "1px solid var(--border)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            }}
          >
            {/* TOP ACCENT LINE */}
            <div
              className="absolute top-0 left-0 w-0 group-hover:w-full h-[3px] transition-all duration-500"
              style={{ background: "var(--primary)" }}
            />

            {/* ICON */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
              style={{
                background:
                  "color-mix(in srgb, var(--primary) 15%, transparent)",
              }}
            >
              <Eye size={20} style={{ color: "var(--primary)" }} />
            </div>

            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--dark)" }}
            >
              Our Vision
            </h3>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--gray)", lineHeight: "1.85" }}
            >
              To become the most trusted and transparent global education
              partner — where students rely on us not for options, but for the
              right decisions that shape their future.
            </p>

            {/* SUB PROOF */}
            <p
              className="mt-4 text-xs font-medium"
              style={{ color: "var(--primary)" }}
            >
              Built on trust. Measured by outcomes.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default MissionVision;
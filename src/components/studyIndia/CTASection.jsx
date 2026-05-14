import { Link } from "react-router-dom";
import { motion } from "framer-motion";

 function CTASection() {
  return (
    <section
      className="py-20"
      style={{
        background: "var(--primary-light)", // light pink
        fontFamily: "var(--font-main)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold leading-tight"
          style={{
            fontSize: "clamp(28px, 4vw, 38px)",
            color: "var(--dark)",
          }}
        >
          Start Your{" "}
          <span style={{ color: "var(--primary)" }}>
            Medical Career in India
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-4"
          style={{
            fontSize: "15px",
            color: "var(--gray)",
            lineHeight: 1.7,
          }}
        >
          Get expert guidance, shortlist the right colleges, and complete your
          admission process smoothly for MBBS, BDS, Nursing & allied courses.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Primary */}
          <Link
            to="/contact"
            className="px-7 py-3 rounded-full font-semibold text-sm"
            style={{
              background: "var(--primary)",
              color: "#fff",
              boxShadow: "0 6px 18px rgba(225,10,111,0.35)",
              textDecoration: "none",
            }}
          >
            Apply for Admission
          </Link>

          {/* Secondary */}
          <Link
            to="/contact"
            className="px-7 py-3 rounded-full font-medium text-sm"
            style={{
              color: "var(--primary)",
              border: "1px solid var(--primary)",
              background: "transparent",
              textDecoration: "none",
            }}
          >
            Talk to Expert
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-sm"
          style={{ color: "var(--gray)" }}
        >
          Free counselling • Verified colleges • End-to-end support
        </motion.p>

      </div>
    </section>
  );
}
export default CTASection;
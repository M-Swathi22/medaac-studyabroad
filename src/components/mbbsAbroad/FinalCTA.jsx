import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section
      style={{
        padding: "80px 20px 100px",
        background: "var(--primary-light)",
        fontFamily: "var(--font-main)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          position: "relative",
          maxWidth: "1180px",
          margin: "0 auto",
          borderRadius: "32px",
          overflow: "hidden",
          padding: "65px 40px",
          background: "var(--white)",
          border: "1px solid rgba(225,10,111,0.08)",
          boxShadow: "0 20px 60px rgba(225,10,111,0.08)",
        }}
      >
        {/* Soft Glow */}
        <div
          style={{
            position: "absolute",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "var(--primary)",
            filter: "blur(120px)",
            opacity: 0.08,
            top: "-120px",
            right: "-80px",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          {/* Label */}
          <span
            style={{
              color: "var(--primary)",
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "1.8px",
              fontWeight: "600",
            }}
          >
            Start Your MBBS Journey
          </span>

          {/* Heading */}
          <h2
            style={{
              color: "var(--dark)",
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: "1.15",
              fontWeight: "700",
              marginTop: "18px",
            }}
          >
            Ready To Study
            <span style={{ color: "var(--primary)" }}>
              {" "}
              MBBS Abroad?
            </span>
          </h2>

          {/* Description */}
          <p
            style={{
              color: "var(--gray)",
              fontSize: "16px",
              lineHeight: "1.9",
              marginTop: "20px",
            }}
          >
            Get complete guidance for admissions, university selection,
            documentation, and visa assistance for Georgia, Tajikistan, and
            Uzbekistan.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              marginTop: "38px",
              flexWrap: "wrap",
            }}
          >
            {/* Primary Button */}
            <Link
              to="/contact"
              style={{
                background: "var(--primary)",
                color: "var(--white)",
                textDecoration: "none",
                padding: "16px 30px",
                borderRadius: "16px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transition: "0.3s ease",
                boxShadow: "0 10px 25px rgba(225,10,111,0.18)",
              }}
            >
              Free Counseling
              <ArrowRight size={18} />
            </Link>

            {/* Secondary Button */}
            <Link
              to="/study-abroad"
              style={{
                border: "1px solid rgba(225,10,111,0.15)",
                color: "var(--dark)",
                textDecoration: "none",
                padding: "16px 30px",
                borderRadius: "16px",
                fontWeight: "600",
                background: "rgba(225,10,111,0.03)",
              }}
            >
              Explore Countries
            </Link>
          </div>

          {/* Trust Points */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "22px",
              marginTop: "38px",
            }}
          >
            {[
              "NMC Approved Universities",
              "Visa Assistance",
              "Expert Counseling",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div style={{ color: "var(--primary)" }}>
                  <CheckCircle2 size={16} />
                </div>

                <span
                  style={{
                    color: "var(--gray)",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
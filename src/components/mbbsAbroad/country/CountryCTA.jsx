import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function CountryCTA({ country }) {
  return (
    <section
      style={{
        padding: "90px 20px 110px",
        background: "var(--primary-light)",
        fontFamily: "var(--font-main)",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          position: "relative",
          maxWidth: "1250px",
          margin: "0 auto",
          borderRadius: "36px",
          overflow: "hidden",
          padding: "70px 45px",
          background: "var(--white)",
          border: "1px solid rgba(225,10,111,0.08)",
          boxShadow: "0 25px 70px rgba(225,10,111,0.08)",
        }}
      >
        {/* Glow */}
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
            maxWidth: "820px",
            margin: "0 auto",
          }}
        >
          {/* Label */}
          <span
            style={{
              color: "var(--primary)",
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Admission Open
          </span>

          {/* Heading */}
          <h2
            style={{
              color: "var(--dark)",
              fontSize: "clamp(38px, 5vw, 64px)",
              lineHeight: "1.12",
              fontWeight: "700",
              marginTop: "20px",
            }}
          >
            Start Your MBBS Journey
            <span style={{ color: "var(--primary)" }}>
              {" "}
              in {country}
            </span>
          </h2>

          {/* Description */}
          <p
            style={{
              color: "var(--gray)",
              fontSize: "17px",
              lineHeight: "2",
              marginTop: "24px",
            }}
          >
            Get expert counseling for university selection, admissions,
            documentation, visa process, and complete support for studying
            MBBS abroad.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "18px",
              marginTop: "42px",
            }}
          >
            {/* Primary */}
            <Link
              to="/contact"
              style={{
                background: "var(--primary)",
                color: "var(--white)",
                textDecoration: "none",
                padding: "17px 34px",
                borderRadius: "18px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 30px rgba(225,10,111,0.18)",
              }}
            >
              Free Counseling
              <ArrowRight size={18} />
            </Link>

            {/* Secondary */}
            <Link
              to="/mbbs-abroad"
              style={{
                border: "1px solid rgba(225,10,111,0.12)",
                color: "var(--dark)",
                textDecoration: "none",
                padding: "17px 34px",
                borderRadius: "18px",
                fontWeight: "600",
                background: "rgba(225,10,111,0.03)",
              }}
            >
              Explore Other Countries
            </Link>
          </div>

          {/* Trust Points */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "24px",
              marginTop: "40px",
            }}
          >
            {[
              "NMC Approved Universities",
              "Visa Assistance",
              "Complete Admission Support",
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
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CountryHero({
  country,
  title,
  description,
  image,
  stats,
}) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "var(--font-main)",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
        }}
      >
        <img
          src={image}
          alt={country}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.88), rgba(0,0,0,0.55), rgba(0,0,0,0.7))",
        }}
      />

      {/* Soft Glow */}
      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "var(--primary)",
          opacity: 0.18,
          filter: "blur(140px)",
          top: "-120px",
          left: "-100px",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1300px",
          width: "100%",
          margin: "0 auto",
          padding: "140px 20px 100px",
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 20px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "var(--primary)",
            }}
          />

          <span
            style={{
              color: "var(--white)",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            NMC & WHO Approved Universities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            color: "var(--white)",
            fontSize: "clamp(48px, 7vw, 92px)",
            lineHeight: "1.05",
            fontWeight: "700",
            maxWidth: "820px",
          }}
        >
          Study MBBS in
          <span style={{ color: "var(--primary)" }}>
            {" "}
            {country}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "18px",
            lineHeight: "2",
            maxWidth: "720px",
            marginTop: "28px",
          }}
        >
          {description}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "18px",
            marginTop: "45px",
          }}
        >
          {stats.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "16px 24px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                minWidth: "180px",
              }}
            >
              <h3
                style={{
                  color: "var(--white)",
                  fontSize: "28px",
                  fontWeight: "700",
                  marginBottom: "6px",
                }}
              >
                {item.value}
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "14px",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "50px",
            flexWrap: "wrap",
          }}
        >
          {/* Primary */}
          <Link
            to="/contact"
            style={{
              background: "var(--primary)",
              color: "var(--white)",
              textDecoration: "none",
              padding: "18px 34px",
              borderRadius: "18px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 15px 35px rgba(225,10,111,0.25)",
            }}
          >
            Free Counseling
            <ArrowRight size={20} />
          </Link>

          {/* Secondary */}
          <Link
            to="/mbbs-abroad"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--white)",
              textDecoration: "none",
              padding: "18px 34px",
              borderRadius: "18px",
              fontWeight: "600",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(10px)",
            }}
          >
            Explore Other Countries
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
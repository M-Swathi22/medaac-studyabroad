import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Globe2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

 function CountryHero({ country, image, description, stats }) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "110px",
        fontFamily: "var(--font-main)",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src={image}
          alt={country}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "scale(1.05)",
          }}
        />
      </div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(
              120deg,
              rgba(10,10,10,0.92) 0%,
              rgba(10,10,10,0.78) 35%,
              rgba(10,10,10,0.55) 55%,
              rgba(225,10,111,0.15) 75%,
              rgba(248,249,251,0.85) 95%,
              var(--light) 100%
            )
          `,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "860px",
          margin: "0 auto",
          padding: "60px 24px 100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "9px 20px",
            borderRadius: "999px",
            background: "rgba(225,10,111,0.12)",
            border: "1px solid rgba(225,10,111,0.3)",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "var(--primary)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              color: "var(--white)",
              fontSize: "13px",
              fontWeight: "500",
              letterSpacing: "0.03em",
            }}
          >
            NMC &amp; WHO Approved Universities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          style={{
            color: "var(--white)",
            fontSize: "clamp(42px, 7vw, 82px)",
            fontWeight: "700",
            lineHeight: "1.08",
            letterSpacing: "-0.025em",
            margin: 0,
          }}
        >
          Study MBBS in{" "}
          <span style={{ color: "var(--primary)" }}>{country}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "clamp(15px, 1.6vw, 17px)",
            lineHeight: "1.85",
            maxWidth: "620px",
            marginTop: "24px",
          }}
        >
          {description}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            marginTop: "44px",
            width: "100%",
          }}
        >
          {stats.map((item, i) => (
            <div
              key={i}
              style={{
                padding: "18px 26px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                minWidth: "130px",
              }}
            >
              <h3
                style={{
                  color: "var(--white)",
                  fontSize: "clamp(22px, 2.8vw, 28px)",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                  margin: "0 0 5px",
                }}
              >
                {item.value}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "13px",
                  margin: 0,
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "14px",
            marginTop: "38px",
          }}
        >
          <Link
            to="/contact"
            style={{
              background: "var(--primary)",
              color: "var(--white)",
              textDecoration: "none",
              padding: "16px 34px",
              borderRadius: "14px",
              fontWeight: "600",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 12px 32px rgba(225,10,111,0.32)",
            }}
          >
            Free Counseling
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/mbbs-abroad"
            style={{
              border: "1px solid rgba(255,255,255,0.16)",
              color: "var(--white)",
              textDecoration: "none",
              padding: "16px 34px",
              borderRadius: "14px",
              fontWeight: "600",
              fontSize: "15px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
            }}
          >
            Explore Other Countries
          </Link>
        </motion.div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.44 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "28px",
            marginTop: "52px",
          }}
        >
          {[
            { icon: GraduationCap, text: "Globally Recognized Universities" },
            { icon: Globe2, text: "English Medium Programs" },
            { icon: ShieldCheck, text: "Complete Visa Assistance" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Icon size={20} style={{ color: "var(--primary)" }} />
                <span
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  {item.text}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
export default CountryHero;
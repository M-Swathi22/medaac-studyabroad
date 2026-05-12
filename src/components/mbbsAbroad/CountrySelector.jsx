import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Users, MapPin } from "lucide-react";

import georgiaImg     from "../../assets/images/countries/georgia.webp";
import tajikistanImg  from "../../assets/images/countries/tajikistan.webp";
import uzbekistanImg  from "../../assets/images/countries/uzbekistan.jpg";
import georgiaFlag    from "../../assets/images/flags/georgia.png";
import tajikistanFlag from "../../assets/images/flags/tajikistan.png";
import uzbekistanFlag from "../../assets/images/flags/uzbekistan.webp";

const countries = [
  {
    id: "georgia",
    name: "Georgia",
    tuition: "From $4,000/yr",
    universities: 12,
    students: "2,500+",
    courses: ["MBBS", "BDS", "Pharmacy"],
    image: georgiaImg,
    flag: georgiaFlag,
  },
  {
    id: "tajikistan",
    name: "Tajikistan",
    tuition: "From $2,800/yr",
    universities: 8,
    students: "1,200+",
    courses: ["MBBS", "General Medicine"],
    image: tajikistanImg,
    flag: tajikistanFlag,
  },
  {
    id: "uzbekistan",
    name: "Uzbekistan",
    tuition: "From $3,500/yr",
    universities: 10,
    students: "1,800+",
    courses: ["MBBS", "BDS", "Nursing"],
    image: uzbekistanImg,
    flag: uzbekistanFlag,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function CountryCard({ country }) {
  return (
    <Link
      to={`/mbbs-abroad/${country.id}`}
      style={{ display: "flex", flexDirection: "column", height: "100%", textDecoration: "none" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          borderRadius: "24px",
          background: "var(--white)",
          border: "1px solid rgba(0,0,0,0.07)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          overflow: "hidden",
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
          fontFamily: "var(--font-main)",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 20px 48px rgba(225,10,111,0.13)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
        }}
      >

        {/* ── Image ── */}
        <div style={{ position: "relative", height: "220px", flexShrink: 0, overflow: "hidden" }}>
          <img
            src={country.image}
            alt={country.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.7s ease",
            }}
          />

          {/* Gradient over image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0.80) 100%)",
            }}
          />

          {/* Flag */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1.5px solid rgba(255,255,255,0.22)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.22)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Bottom row: name + tuition */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              right: "16px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            <div>
              <h3
                style={{
                  color: "#fff",
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  lineHeight: 1,
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                {country.name}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  marginTop: "6px",
                }}
              >
                <MapPin size={11} color="rgba(255,255,255,0.65)" />
                <span
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "0.75rem",
                    fontWeight: 400,
                  }}
                >
                  Study Destination
                </span>
              </div>
            </div>

            <span
              style={{
                padding: "5px 12px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.13)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.16)",
                color: "#fff",
                fontSize: "0.7rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
                flexShrink: 0,
                letterSpacing: "0.01em",
              }}
            >
              {country.tuition}
            </span>
          </div>
        </div>

        {/* ── Body ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            padding: "20px",
            gap: "16px",
          }}
        >
          {/* Description */}
          <p
            style={{
              color: "var(--gray)",
              fontSize: "0.875rem",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Explore top universities, globally recognised degrees, affordable tuition
            fees, and better international career opportunities in {country.name}.
          </p>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {/* Universities */}
            <div
              style={{
                borderRadius: "14px",
                padding: "12px 14px",
                background: "#FFF4F8",
                border: "1px solid rgba(225,10,111,0.09)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <GraduationCap size={16} color="#fff" />
              </div>
              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    color: "var(--dark)",
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {country.universities}+
                </p>
                <p
                  style={{
                    color: "var(--primary)",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    margin: "4px 0 0",
                    whiteSpace: "nowrap",
                  }}
                >
                  Universities
                </p>
              </div>
            </div>

            {/* Students */}
            <div
              style={{
                borderRadius: "14px",
                padding: "12px 14px",
                background: "var(--light)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "var(--dark)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Users size={16} color="#fff" />
              </div>
              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    color: "var(--dark)",
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {country.students}
                </p>
                <p
                  style={{
                    color: "var(--gray)",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    margin: "4px 0 0",
                    whiteSpace: "nowrap",
                  }}
                >
                  Students
                </p>
              </div>
            </div>
          </div>

          {/* Course tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
            {country.courses.map((course, i) => (
              <span
                key={i}
                style={{
                  padding: "5px 13px",
                  borderRadius: "999px",
                  background: "#FFF4F8",
                  color: "var(--primary)",
                  border: "1px solid rgba(225,10,111,0.12)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                }}
              >
                {course}
              </span>
            ))}
          </div>

          {/* Spacer pushes button to bottom */}
          <div style={{ flexGrow: 1 }} />

          {/* CTA */}
          <div
            style={{
              width: "100%",
              padding: "13px",
              borderRadius: "12px",
              background: "var(--primary)",
              color: "var(--white)",
              fontFamily: "var(--font-main)",
              fontWeight: 600,
              fontSize: "0.88rem",
              textAlign: "center",
              boxShadow: "0 8px 22px rgba(225,10,111,0.2)",
              transition: "background 0.2s ease",
              cursor: "pointer",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--primary-dark)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--primary)"; }}
          >
            Explore {country.name}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CountrySelector() {
  return (
    <section
      id="countries"
      style={{
        padding: "100px 24px",
        backgroundColor: "var(--light)",
        fontFamily: "var(--font-main)",
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ textAlign: "center", marginBottom: "56px" }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "5px 16px",
            borderRadius: "999px",
            border: "1px solid rgba(225,10,111,0.3)",
            background: "rgba(225,10,111,0.07)",
            color: "var(--primary)",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            marginBottom: "18px",
          }}
        >
          Top Destinations
        </span>

        <h2
          style={{
            color: "var(--dark)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            margin: "0 0 14px",
          }}
        >
          Choose Your{" "}
          <span style={{ color: "var(--primary)" }}>Country</span>
        </h2>

        <p
          style={{
            color: "var(--gray)",
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          Select where you want to pursue your MBBS degree abroad
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          maxWidth: "1020px",
          margin: "0 auto",
          alignItems: "stretch",
        }}
      >
        {countries.map((country) => (
          <motion.div
            key={country.id}
            variants={cardVariants}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <CountryCard country={country} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
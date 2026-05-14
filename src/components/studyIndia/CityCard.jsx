// CityCard.jsx
import { Link } from "react-router-dom";
import { useState } from "react";

 function CityCard({ city, stateId }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={`/study-india/${stateId}/${city.id}`} style={{ textDecoration: "none", display: "block" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          border: `1px solid ${hovered ? "rgba(225,10,111,0.45)" : "rgba(255,255,255,0.06)"}`,
          transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 24px 60px rgba(225,10,111,0.14), 0 8px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)"
            : "0 4px 16px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.03)",
          fontFamily: "var(--font-main)",
          background: "linear-gradient(160deg, #1A0812 0%, #130610 100%)",
          position: "relative",
        }}
      >
        {/* Image container */}
        <div style={{ height: "160px", overflow: "hidden", position: "relative" }}>
          <img
            src={city.image}
            alt={city.name}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              transform: hovered ? "scale(1.08)" : "scale(1)",
              transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
          {/* Gradient overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(19,6,16,0.92) 0%, rgba(19,6,16,0.3) 50%, transparent 100%)",
          }} />
          {/* Pink tint on hover */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(225,10,111,0.12) 0%, transparent 60%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.35s ease",
          }} />

          {/* College count pill — positioned on image */}
          <div style={{
            position: "absolute",
            top: "12px", right: "12px",
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "30px",
            padding: "4px 10px",
            display: "flex", alignItems: "center", gap: "5px",
          }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="rgba(225,10,111,0.9)" strokeWidth="2.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "9.5px",
              fontWeight: "700",
              letterSpacing: "0.3px",
            }}>
              {city.collegeCount || "12+"} Colleges
            </span>
          </div>

          {/* City name overlaid on bottom of image */}
          <div style={{
            position: "absolute",
            bottom: "12px", left: "16px",
          }}>
            <h3 style={{
              color: "#fff",
              fontSize: "17px",
              fontWeight: "800",
              margin: 0,
              letterSpacing: "-0.3px",
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
              transition: "color 0.2s",
            }}>
              {city.name}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "14px 16px 18px" }}>
          <p style={{
            color: "rgba(255,255,255,0.32)",
            fontSize: "11.5px",
            margin: "0 0 16px",
            lineHeight: "1.6",
            fontWeight: "500",
          }}>
            {city.highlight}
          </p>

          {/* Specialties tags */}
          {city.specialties && (
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginBottom: "15px" }}>
              {city.specialties.slice(0, 3).map(s => (
                <span key={s} style={{
                  background: "rgba(225,10,111,0.07)",
                  border: "1px solid rgba(225,10,111,0.16)",
                  color: "rgba(255,160,205,0.7)",
                  fontSize: "9.5px",
                  fontWeight: "600",
                  padding: "3px 8px",
                  borderRadius: "20px",
                  letterSpacing: "0.2px",
                }}>{s}</span>
              ))}
            </div>
          )}

          {/* CTA row */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            paddingTop: "12px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}>
            <span style={{
              color: hovered ? "#E10A6F" : "rgba(225,10,111,0.55)",
              fontSize: "11.5px", fontWeight: "700",
              letterSpacing: "0.3px",
              transition: "color 0.25s",
            }}>
              Explore Colleges
            </span>
            <div style={{
              width: "32px", height: "32px",
              background: hovered
                ? "linear-gradient(135deg, #E10A6F, #C4095E)"
                : "rgba(225,10,111,0.08)",
              border: `1px solid ${hovered ? "transparent" : "rgba(225,10,111,0.2)"}`,
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
              boxShadow: hovered ? "0 4px 16px rgba(225,10,111,0.4)" : "none",
              transform: hovered ? "scale(1.1)" : "scale(1)",
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke={hovered ? "#fff" : "rgba(225,10,111,0.8)"} strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default CityCard;
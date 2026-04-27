import { motion } from "framer-motion";
import {
  Search, ArrowRight, Star,
  Globe2, GraduationCap, BadgeCheck, Users,
} from "lucide-react";
import heroImg from "../../assets/images/hero.avif";

const stats = [
  { icon: Globe2,        value: "15+",  label: "Countries"       },
  { icon: GraduationCap, value: "500+", label: "Universities"    },
  { icon: BadgeCheck,    value: "95%",  label: "Success Rate"    },
  { icon: Users,         value: "2K+",  label: "Students Placed" },
];

const steps = [
  { num: "1", text: "Choose your country & course",  chip: "Free"       },
  { num: "2", text: "Get your university shortlist",  chip: "Expert"     },
  { num: "3", text: "Visa & admission support",       chip: "End-to-end" },
];

const tags    = ["MBBS Russia", "BDS Georgia", "MBBS Ukraine", "MBBS Canada"];
const avatars = [
  "https://i.pravatar.cc/50?img=11",
  "https://i.pravatar.cc/50?img=12",
  "https://i.pravatar.cc/50?img=13",
];

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

function Orb({ style }) {
  return <div className="absolute rounded-full pointer-events-none" style={style} />;
}

function Hero() {
  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "100svh", backgroundColor: "var(--dark)" }}
    >
      {/* Layer 1: Diagonal warm mesh base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
           "linear-gradient(145deg, var(--dark-light) 0%, var(--dark) 35%, var(--dark-light) 65%, var(--dark) 100%)",
        }}
      />

      {/* Layer 2: Large primary bloom — top-left */}
      <Orb
        style={{
          top: "-160px", left: "-120px", width: "680px", height: "680px",
          background: "radial-gradient(circle at 40% 40%, color-mix(in srgb, var(--primary) 22%, transparent) 0%, color-mix(in srgb, var(--primary) 8%, transparent) 40%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />

      {/* Layer 3: Deep accent glow — bottom-right */}
      <Orb
        style={{
          bottom: "-100px", right: "-80px", width: "520px", height: "520px",
          background: "radial-gradient(circle at 60% 60%, color-mix(in srgb, var(--primary) 14%, transparent) 0%, color-mix(in srgb, var(--primary) 5%, transparent) 45%, transparent 70%)",
          filter: "blur(1px)",
        }}
      />

      {/* Layer 4: Soft centre warm bloom */}
      <Orb
        style={{
          top: "20%", left: "38%", width: "600px", height: "400px",
          background: "radial-gradient(ellipse at center, color-mix(in srgb, var(--primary) 6%, transparent) 0%, transparent 65%)",
        }}
      />

      {/* Layer 5: Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 45%, color-mix(in srgb, var(--dark) 70%, transparent) 100%)",
        }}
      />

      {/* ════ MAIN GRID ════ */}
      <div
        className="relative z-10 flex-1 w-full
                   grid grid-cols-1 md:grid-cols-2
                   pt-28 sm:pt-32 pb-8 sm:pb-10
                   gap-10 md:gap-6 lg:gap-8
                   items-start md:items-stretch
                   px-5 sm:px-10 lg:px-16 xl:px-24"
      >
        {/* ════ LEFT ════ */}
        <div className="flex flex-col justify-center gap-6">
          <motion.h1
            {...fadeUp(0.08)}
            className="font-extrabold leading-[1.10]"
            style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.5rem)", color: "var(--white)", fontFamily: "var(--font-main)" }}
          >
            Your Dream{" "}
            <span className="relative inline-block" style={{ color: "var(--primary)" }}>
              Medical Career
              <svg viewBox="0 0 300 12" className="absolute -bottom-1 left-0 w-full" preserveAspectRatio="none" aria-hidden>
                <path d="M0 9 Q75 2 150 7 Q225 12 300 6" stroke="var(--primary)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeOpacity="0.45" />
                <path d="M10 9 Q85 3 155 8 Q220 12 290 6" stroke="var(--primary)" strokeWidth="1" fill="none" strokeLinecap="round" strokeOpacity="0.20" />
              </svg>
            </span>
            <br />Starts Abroad
          </motion.h1>

          <motion.p
            {...fadeUp(0.15)}
            className="leading-[1.85]"
            style={{ fontSize: "clamp(14px, 1.4vw, 16px)", color: "color-mix(in srgb, var(--white) 50%, transparent)", maxWidth: 460, fontFamily: "var(--font-main)" }}
          >
            Expert guidance from country selection to visa processing — secure your
            seat in a top global university, completely stress-free.
          </motion.p>

          <motion.div {...fadeUp(0.21)}>
            <div
              className="flex items-center overflow-hidden"
              style={{
                background: "color-mix(in srgb, var(--white) 6%, transparent)",
                border: "1px solid color-mix(in srgb, var(--white) 10%, transparent)",
                borderRadius: "999px", maxWidth: 490,
                boxShadow: "0 0 0 1px color-mix(in srgb, var(--primary) 0%, transparent), inset 0 1px 0 color-mix(in srgb, var(--white) 4%, transparent)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Search size={15} className="ml-4 shrink-0" style={{ color: "color-mix(in srgb, var(--white) 28%, transparent)" }} />
              <input
                type="text"
                placeholder="Search country or course..."
                className="flex-1 px-3 py-3.5 outline-none bg-transparent"
                style={{ color: "var(--white)", fontFamily: "var(--font-main)", fontSize: 13.5 }}
              />
              <button
                className="m-[5px] flex items-center gap-2 px-5 py-2.5 text-[13px] font-bold shrink-0 active:scale-95 transition-transform hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
                  color: "var(--white)", borderRadius: "999px", fontFamily: "var(--font-main)",
                  boxShadow: "0 2px 12px color-mix(in srgb, var(--primary) 40%, transparent)",
                }}
              >
                Search <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.27)} className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-medium" style={{ color: "color-mix(in srgb, var(--white) 28%, transparent)" }}>Popular:</span>
            {tags.map((t) => (
              <button
                key={t}
                className="text-[11.5px] px-4 py-1.5 transition-all hover:border-opacity-60 hover:opacity-100"
                style={{
                  background: "color-mix(in srgb, var(--primary) 8%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--primary) 22%, transparent)",
                  color: "color-mix(in srgb, var(--white) 55%, transparent)",
                  borderRadius: "999px", fontFamily: "var(--font-main)",
                }}
              >
                {t}
              </button>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.33)} className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-1">
            <button
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-bold active:scale-95 transition-all hover:opacity-92"
              style={{
                background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
                color: "var(--white)", borderRadius: "999px", fontFamily: "var(--font-main)",
                boxShadow: "0 4px 20px color-mix(in srgb, var(--primary) 38%, transparent), 0 1px 0 color-mix(in srgb, var(--white) 12%, transparent) inset",
              }}
            >
              Get Free Counselling <ArrowRight size={15} />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex">
                {avatars.map((src, i) => (
                  <img
                    key={i} src={src} alt=""
                    className="w-9 h-9 rounded-full object-cover"
                    style={{
                      border: "2px solid var(--dark)", marginLeft: i === 0 ? 0 : -10,
                      boxShadow: i === avatars.length - 1 ? "0 0 0 2px color-mix(in srgb, var(--primary) 30%, transparent)" : "none",
                    }}
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-[2px] mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="var(--primary)" stroke="none" />)}
                </div>
                <p className="text-[11.5px]" style={{ color: "color-mix(in srgb, var(--white) 38%, transparent)", fontFamily: "var(--font-main)" }}>
                  <strong style={{ color: "var(--white)", fontWeight: 600 }}>2,000+</strong> students placed
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ════ RIGHT ════ */}
        <motion.div
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="flex flex-col justify-end gap-4 pt-0 md:pt-14 lg:pt-20"
        >
          <div
            className="relative rounded-2xl overflow-hidden w-full"
            style={{
              border: "1px solid color-mix(in srgb, var(--white) 8%, transparent)",
              boxShadow: "0 24px 64px color-mix(in srgb, var(--dark) 60%, transparent), 0 0 0 1px color-mix(in srgb, var(--primary) 10%, transparent)",
            }}
          >
            <img src={heroImg} alt="Medical students abroad" className="w-full object-cover object-top" style={{ height: "clamp(240px, 34vh, 340px)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, color-mix(in srgb, var(--dark) 80%, transparent) 0%, color-mix(in srgb, var(--dark) 20%, transparent) 40%, transparent 60%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, color-mix(in srgb, var(--primary) 8%, transparent) 0%, transparent 50%)" }} />

            <div
              className="absolute top-3 right-3 flex items-center gap-2.5 px-3 py-2"
              style={{
                background: "color-mix(in srgb, var(--dark) 85%, transparent)", backdropFilter: "blur(12px)",
                border: "1px solid color-mix(in srgb, var(--white) 10%, transparent)", borderRadius: "999px",
                boxShadow: "0 4px 16px color-mix(in srgb, var(--dark) 40%, transparent)",
              }}
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "color-mix(in srgb, var(--primary) 18%, transparent)" }}>
                <GraduationCap size={14} style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <p className="text-[13px] font-extrabold leading-none" style={{ color: "var(--white)", fontFamily: "var(--font-main)" }}>400+</p>
                <p className="text-[9.5px] mt-[3px]" style={{ color: "color-mix(in srgb, var(--white) 42%, transparent)", fontFamily: "var(--font-main)" }}>Admissions this year</p>
              </div>
            </div>

            <div className="absolute bottom-3 left-4">
              <p className="text-[11px] font-semibold" style={{ color: "color-mix(in srgb, var(--white) 55%, transparent)", fontFamily: "var(--font-main)", letterSpacing: "0.05em" }}>MBBS · BDS · MD Programs</p>
              <p className="text-[13px] font-bold" style={{ color: "var(--white)", fontFamily: "var(--font-main)" }}>15+ Countries Available</p>
            </div>
          </div>

          <div
            className="w-full rounded-2xl px-5 py-5"
            style={{
              background: "color-mix(in srgb, var(--white) 4%, transparent)",
              border: "1px solid color-mix(in srgb, var(--white) 8%, transparent)",
              backdropFilter: "blur(8px)",
              boxShadow: "inset 0 1px 0 color-mix(in srgb, var(--white) 5%, transparent)",
            }}
          >
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase mb-3" style={{ color: "color-mix(in srgb, var(--white) 28%, transparent)", fontFamily: "var(--font-main)" }}>How It Works</p>
            <div>
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-3 py-3" style={{ borderTop: i !== 0 ? "1px solid color-mix(in srgb, var(--white) 6%, transparent)" : "none" }}>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-extrabold shrink-0"
                    style={{
                      background: "color-mix(in srgb, var(--primary) 15%, transparent)", color: "var(--primary)",
                      border: "1px solid color-mix(in srgb, var(--primary) 25%, transparent)",
                      boxShadow: "0 0 12px color-mix(in srgb, var(--primary) 12%, transparent)",
                    }}
                  >
                    {s.num}
                  </div>
                  <p className="text-[13px] font-medium flex-1" style={{ color: "color-mix(in srgb, var(--white) 72%, transparent)", fontFamily: "var(--font-main)" }}>{s.text}</p>
                  <span className="text-[10px] font-semibold px-3 py-1 shrink-0" style={{ background: "var(--primary-light)", color: "var(--primary-dark)", borderRadius: "999px", fontFamily: "var(--font-main)" }}>{s.chip}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ════ STATS BAR ════ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.5 }}
        className="relative z-10 grid grid-cols-2 md:grid-cols-4"
        style={{
          borderTop: "1px solid color-mix(in srgb, var(--white) 7%, transparent)",
          background: "color-mix(in srgb, var(--dark-light) 70%, transparent)",
          backdropFilter: "blur(12px)",
        }}
      >
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 px-5 sm:px-8 lg:px-10 xl:px-14 py-5 transition-colors duration-200"
              style={{
                background: i % 2 === 0 ? "color-mix(in srgb, var(--white) 2%, transparent)" : "color-mix(in srgb, var(--primary) 2%, transparent)",
                borderLeft: i % 2 !== 0 ? "1px solid color-mix(in srgb, var(--white) 6%, transparent)" : "none",
                borderTop: i >= 2 ? "1px solid color-mix(in srgb, var(--white) 6%, transparent)" : "none",
              }}
            >
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "color-mix(in srgb, var(--primary) 13%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
                  boxShadow: "0 0 14px color-mix(in srgb, var(--primary) 10%, transparent)",
                }}
              >
                <Icon size={17} style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <p className="text-lg sm:text-xl font-extrabold leading-none" style={{ color: "var(--white)", fontFamily: "var(--font-main)" }}>{s.value}</p>
                <p className="text-[10px] sm:text-[11px] mt-1" style={{ color: "color-mix(in srgb, var(--white) 32%, transparent)", fontFamily: "var(--font-main)" }}>{s.label}</p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Hero;

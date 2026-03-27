import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

import uzbekistan from "../../assets/images/uzbekistan.jpg";
import georgia from "../../assets/images/georgia.webp";
import russia from "../../assets/images/russia.webp";
import egypt from "../../assets/images/egypt.jpg";
import tajikistan from "../../assets/images/tajikistan.webp";
import canada from "../../assets/images/canada.jpg";

const countries = [
  { name: "Uzbekistan", img: uzbekistan, universities: 2 },
  { name: "Georgia",    img: georgia,    universities: 5 },
  { name: "Russia",     img: russia,     universities: 6 },
  { name: "Egypt",      img: egypt,      universities: 12 },
  { name: "Tajikistan", img: tajikistan, universities: 3 },
  { name: "Canada",     img: canada,     universities: 9 },
];

// Split for two columns
const col1 = countries;
const col2 = [...countries].reverse();

function CountryCard({ country }) {
  return (
    <div className="relative w-52 h-52 rounded-2xl overflow-hidden shadow-md flex-shrink-0 group cursor-pointer">
      <img
        src={country.img}
        alt={country.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* GRADIENT OVERLAY — ensures text always readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-white text-sm font-semibold leading-tight">{country.name}</p>
        <p className="text-white/70 text-xs mt-0.5 flex items-center gap-1">
          <MapPin size={10} /> {country.universities} Universities
        </p>
      </div>
    </div>
  );
}

function ScrollColumn({ items, direction = "up" }) {
  const doubled = [...items, ...items];
  const animation =
    direction === "up"
      ? { y: ["0%", "-50%"] }
      : { y: ["-50%", "0%"] };

  return (
    <div className="relative h-[440px] overflow-hidden">
      <motion.div
        animate={animation}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        className="flex flex-col gap-5"
      >
        {doubled.map((c, i) => (
          <CountryCard key={i} country={c} />
        ))}
      </motion.div>

      {/* FADE TOP */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[var(--primary)] to-transparent z-10 pointer-events-none" />
      {/* FADE BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[var(--primary)] to-transparent z-10 pointer-events-none" />
    </div>
  );
}

function Countries() {
  return (
    <section className="bg-[var(--primary)] py-20 md:py-28 relative overflow-hidden">

      {/* SUBTLE PATTERN */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* DESKTOP LAYOUT: 3-col */}
        <div className="hidden md:grid md:grid-cols-3 gap-10 lg:gap-16 items-center">

          {/* LEFT COLUMN — scrolls up */}
          <div className="flex justify-center">
            <ScrollColumn items={col1} direction="up" />
          </div>

          {/* CENTER CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="inline-block text-xs font-bold tracking-widest text-white/50 uppercase mb-4">
              Study Abroad
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug mb-5">
              Choose Your<br />
              <span className="text-[var(--secondary)]">Study Destination</span>
            </h2>

            <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-8 max-w-xs mx-auto">
              Affordable fees, globally recognized degrees, and expert support at every step of your journey.
            </p>

            {/* STATS ROW */}
            <div className="flex justify-center gap-6 mb-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">15+</p>
                <p className="text-xs text-white/60 mt-0.5">Countries</p>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[var(--secondary)]">100+</p>
                <p className="text-xs text-white/60 mt-0.5">Universities</p>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">Free</p>
                <p className="text-xs text-white/60 mt-0.5">Counselling</p>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[var(--secondary)] text-white px-7 py-3 rounded-xl text-sm font-semibold hover:opacity-90 hover:shadow-lg transition-all duration-200"
            >
              View All Countries <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* RIGHT COLUMN — scrolls down */}
          <div className="flex justify-center">
            <ScrollColumn items={col2} direction="down" />
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="md:hidden space-y-8">
          {/* CONTENT */}
          <div className="text-center space-y-4">
            <span className="inline-block text-xs font-bold tracking-widest text-white/50 uppercase">
              Study Abroad
            </span>
            <h2 className="text-2xl font-bold text-white leading-snug">
              Choose Your <span className="text-[var(--secondary)]">Study Destination</span>
            </h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mx-auto">
              Explore top countries with affordable fees and globally recognized universities.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[var(--secondary)] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition"
            >
              View Countries <ArrowRight size={15} />
            </a>
          </div>

          {/* HORIZONTAL SCROLL */}
          <div
            className="flex gap-4 overflow-x-auto pb-3"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {countries.map((c, i) => (
              <CountryCard key={i} country={c} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Countries;
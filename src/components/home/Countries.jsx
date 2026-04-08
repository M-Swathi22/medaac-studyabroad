import { useEffect, useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";

import uzbekistan from "../../assets/images/uzbekistan.jpg";
import georgia from "../../assets/images/georgia.webp";
import russia from "../../assets/images/russia.webp";
import egypt from "../../assets/images/egypt.jpg";
import tajikistan from "../../assets/images/tajikistan.webp";
import canada from "../../assets/images/canada.jpg";

const countries = [
  { name: "Uzbekistan", img: uzbekistan, universities: 2 },
  { name: "Georgia", img: georgia, universities: 5 },
  { name: "Russia", img: russia, universities: 6 },
  { name: "Egypt", img: egypt, universities: 12 },
  { name: "Tajikistan", img: tajikistan, universities: 3 },
  { name: "Canada", img: canada, universities: 9 },
];

const col1 = countries;
const col2 = [...countries].reverse();

/* CARD */
function CountryCard({ country }) {
  return (
    <div className="relative w-44 lg:w-56 h-56 rounded-2xl overflow-hidden shadow-md flex-shrink-0 group cursor-pointer">
      <img
        src={country.img}
        alt={country.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-white text-sm font-semibold">{country.name}</p>
        <p className="text-white/70 text-xs mt-1 flex items-center gap-1">
          <MapPin size={10} /> {country.universities} Universities
        </p>
      </div>
    </div>
  );
}

/* SCROLL COLUMN — CSS animation, no framer-motion */
function ScrollColumn({ items, direction }) {
  const trackRef = useRef(null);

  // Inject a keyframe rule for this column once the element is measured
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Wait one frame so images have painted and heights are correct
    const raf = requestAnimationFrame(() => {
      // The track renders [items, items] (doubled). Half-height = one set.
      const halfH = el.scrollHeight / 2;

      const id = `scroll-${direction}-${Math.random().toString(36).slice(2, 7)}`;
      const from = direction === "up" ? "0px" : `-${halfH}px`;
      const to   = direction === "up" ? `-${halfH}px` : "0px";

      // Insert the keyframe rule once
      const sheet = document.createElement("style");
      sheet.textContent = `
        @keyframes ${id} {
          from { transform: translateY(${from}); }
          to   { transform: translateY(${to}); }
        }
      `;
      document.head.appendChild(sheet);

      // Apply to the track element
      el.style.animation = `${id} 18s linear infinite`;

      return () => {
        document.head.removeChild(sheet);
      };
    });

    return () => cancelAnimationFrame(raf);
  }, [direction]);

  const doubled = [...items, ...items];

  return (
    <div className="relative h-full w-44 lg:w-56 overflow-hidden">
      {/* will-change + translate3d keeps animation on GPU */}
      <div
        ref={trackRef}
        className="flex flex-col gap-5"
        style={{ willChange: "transform" }}
      >
        {doubled.map((c, i) => (
          <CountryCard key={i} country={c} />
        ))}
      </div>

      {/* fade top */}
      <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-[var(--primary)] via-[var(--primary)]/90 to-transparent z-10 pointer-events-none" />
      {/* fade bottom */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/90 to-transparent z-10 pointer-events-none" />
    </div>
  );
}

/* MAIN */
function Countries() {
  return (
    <section className="relative bg-[var(--primary)] py-20 md:py-24 min-h-[650px] md:min-h-[80vh] overflow-hidden">

      {/* BG pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* LEFT SCROLL */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-full relative">
          <div className="absolute left-0 h-full">
            <ScrollColumn items={col1} direction="up" />
          </div>
        </div>
      </div>

      {/* RIGHT SCROLL */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-full relative">
          <div className="absolute right-0 h-full">
            <ScrollColumn items={col2} direction="down" />
          </div>
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 relative z-20">
        <div className="max-w-xl mx-auto text-center text-white">

          <span className="inline-block text-xs font-bold tracking-widest text-white/50 uppercase mb-4">
            Study Abroad
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold leading-snug mb-5">
            Choose Your <br />
            <span className="text-[var(--secondary)]">
              Study Destination
            </span>
          </h2>

          <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-8">
            Affordable fees, globally recognized degrees, and expert support at every step of your journey.
          </p>

          {/* stats */}
          <div className="flex justify-center gap-6 mb-8">
            <div>
              <p className="text-2xl font-bold">15+</p>
              <p className="text-xs text-white/60">Countries</p>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <p className="text-2xl font-bold text-[var(--secondary)]">100+</p>
              <p className="text-xs text-white/60">Universities</p>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <p className="text-2xl font-bold">Free</p>
              <p className="text-xs text-white/60">Counselling</p>
            </div>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[var(--secondary)] px-7 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition"
          >
            View All Countries <ArrowRight size={16} />
          </a>

        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden mt-12 px-4">
        <div className="flex gap-4 overflow-x-auto">
          {countries.map((c, i) => (
            <CountryCard key={i} country={c} />
          ))}
        </div>
      </div>

    </section>
  );
}

export default Countries;
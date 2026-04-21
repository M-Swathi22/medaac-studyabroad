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

/* SCROLL COLUMN */
function ScrollColumn({ items, direction }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const raf = requestAnimationFrame(() => {
      const halfH = el.scrollHeight / 2;

      const id = `scroll-${direction}-${Math.random().toString(36).slice(2, 7)}`;
      const from = direction === "up" ? "0px" : `-${halfH}px`;
      const to   = direction === "up" ? `-${halfH}px` : "0px";

      const sheet = document.createElement("style");
      sheet.textContent = `
        @keyframes ${id} {
          from { transform: translateY(${from}); }
          to   { transform: translateY(${to}); }
        }
      `;
      document.head.appendChild(sheet);

      el.style.animation = `${id} 20s linear infinite`;

      return () => document.head.removeChild(sheet);
    });

    return () => cancelAnimationFrame(raf);
  }, [direction]);

  const doubled = [...items, ...items];

  return (
    <div className="relative h-full w-44 lg:w-56 overflow-hidden">
      <div ref={trackRef} className="flex flex-col gap-5" style={{ willChange: "transform" }}>
        {doubled.map((c, i) => (
          <CountryCard key={i} country={c} />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-[var(--primary-light)] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[var(--primary-light)] to-transparent z-10 pointer-events-none" />
    </div>
  );
}

/* MAIN */
function Countries() {
  return (
    <section
      className="relative py-20 md:py-24 min-h-[650px] md:min-h-[80vh] overflow-hidden"
      style={{
        /* ✅ CLEAN NEUTRAL PREMIUM BACKGROUND */
        background: "color-mix(in srgb, var(--primary-light) 85%, #f3f4f6)",
      }}
    >

      {/* subtle glow (reduced intensity) */}
      <div
        className="absolute -top-32 left-[-120px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(224,17,127,0.08) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-[-120px] right-[-100px] w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(224,17,127,0.06) 0%, transparent 70%)",
        }}
      />

      {/* subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* LEFT */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-full relative">
          <div className="absolute left-0 h-full">
            <ScrollColumn items={col1} direction="up" />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-full relative">
          <div className="absolute right-0 h-full">
            <ScrollColumn items={col2} direction="down" />
          </div>
        </div>
      </div>

      {/* CENTER */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 relative z-20">
        <div className="max-w-xl mx-auto text-center text-[var(--dark)]">

          <span className="inline-block text-xs font-bold tracking-widest text-[var(--gray)] uppercase mb-4">
            Study Abroad
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold leading-snug mb-5">
            Choose Your <br />
            <span style={{ color: "var(--primary)" }}>
              Study Destination
            </span>
          </h2>

          <p className="text-[var(--gray)] text-sm lg:text-base leading-relaxed mb-8">
            Affordable fees, globally recognized degrees, and expert support at every step of your journey.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <div>
              <p className="text-2xl font-bold text-[var(--dark)]">15+</p>
              <p className="text-xs text-[var(--gray)]">Countries</p>
            </div>
            <div className="w-px bg-gray-300" />
            <div>
              <p className="text-2xl font-bold text-[var(--primary)]">100+</p>
              <p className="text-xs text-[var(--gray)]">Universities</p>
            </div>
            <div className="w-px bg-gray-300" />
            <div>
              <p className="text-2xl font-bold text-[var(--dark)]">Free</p>
              <p className="text-xs text-[var(--gray)]">Counselling</p>
            </div>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold
                       bg-[var(--primary)] text-white hover:opacity-90 transition"
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
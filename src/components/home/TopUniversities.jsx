import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../../assets/images/university1.webp";
import img2 from "../../assets/images/university2.jpg";
import img3 from "../../assets/images/university3.png";
import img4 from "../../assets/images/university4.jpg";
import img5 from "../../assets/images/university5.jpg";
import img6 from "../../assets/images/university6.jpg";
import img7 from "../../assets/images/university7.webp";
import img8 from "../../assets/images/university8.jpeg";

const universities = [
  { name: "Medical University of Varna", country: "Bulgaria", flag: "https://flagcdn.com/w40/bg.png", rank: "4057", duration: "6 years", fee: "₹5 Lakhs/year", food: "₹15000/month", accommodation: "₹20000/month", students: "400", img: img1 },
  { name: "Tashkent Medical Academy", country: "Uzbekistan", flag: "https://flagcdn.com/w40/uz.png", rank: "351", duration: "6 years", fee: "₹3.2 Lakhs/year", food: "₹10000/month", accommodation: "₹5000/month", students: "300", img: img2 },
  { name: "University of Georgia", country: "Georgia", flag: "https://flagcdn.com/w40/ge.png", rank: "5698", duration: "6 years", fee: "₹4.5 Lakhs/year", food: "₹12000/month", accommodation: "₹14000/month", students: "1000", img: img3 },
  { name: "Kazan State Medical University", country: "Russia", flag: "https://flagcdn.com/w40/ru.png", rank: "420", duration: "6 years", fee: "₹3.8 Lakhs/year", food: "₹11000/month", accommodation: "₹15000/month", students: "600", img: img4 },
  { name: "Al-Farabi University", country: "Kazakhstan", flag: "https://flagcdn.com/w40/kz.png", rank: "500", duration: "5 years", fee: "₹3 Lakhs/year", food: "₹12000/month", accommodation: "₹14000/month", students: "900", img: img5 },
  { name: "AMA School of Medicine", country: "Philippines", flag: "https://flagcdn.com/w40/ph.png", rank: "600", duration: "5.5 years", fee: "₹2.5 Lakhs/year", food: "₹9000/month", accommodation: "₹12000/month", students: "700", img: img6 },
  { name: "Texila American University", country: "Guyana", flag: "https://flagcdn.com/w40/gy.png", rank: "700", duration: "5 years", fee: "₹4 Lakhs/year", food: "₹13000/month", accommodation: "₹15000/month", students: "500", img: img7 },
  { name: "Tbilisi State Medical University", country: "Georgia", flag: "https://flagcdn.com/w40/ge.png", rank: "420", duration: "6 years", fee: "₹4 Lakhs/year", food: "₹10000/month", accommodation: "₹15000/month", students: "300", img: img8 },
];

function TopUniversities() {
  const scrollRef = useRef();
  const autoScrollRef = useRef();

  const scroll = (dir) => {
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width / 1.2 : width / 1.2,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;

    const start = () => {
      autoScrollRef.current = setInterval(() => {
        if (!el) return;

        if (el.scrollLeft + el.offsetWidth >= el.scrollWidth - 5) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: 320, behavior: "smooth" });
        }
      }, 2500);
    };

    const stop = () => clearInterval(autoScrollRef.current);

    start();
    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", start);

    return () => {
      stop();
      el.removeEventListener("mouseenter", stop);
      el.removeEventListener("mouseleave", start);
    };
  }, []);

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">

      {/* 🔥 SAME AS PROCESS BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              #ffffff 0%,
              var(--primary-light) 35%,
              #ffffff 100%
            )
          `,
        }}
      />

      {/* subtle mesh overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              140deg,
              color-mix(in srgb, var(--primary) 3%, transparent) 0%,
              transparent 40%,
              color-mix(in srgb, var(--secondary) 4%, transparent) 100%
            )
          `,
        }}
      />

      {/* soft glow */}
      <div
        className="absolute -top-20 -left-20 w-[260px] h-[260px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--primary) 10%, transparent) 0%, transparent 70%)",
          opacity: 0.25,
        }}
      />

      <div
        className="absolute bottom-[-80px] right-[-60px] w-[240px] h-[240px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--secondary) 12%, transparent) 0%, transparent 70%)",
          opacity: 0.25,
        }}
      />

      {/* dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in srgb, var(--primary) 10%, transparent) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.04,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-20">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--dark)]">
            Explore Top Medical Universities Abroad
          </h2>

          <button className="px-5 py-2 text-sm font-semibold text-white bg-[var(--primary)] rounded-full hover:opacity-90 transition">
            View All
          </button>
        </div>

        {/* ARROWS */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white border border-gray-200 p-3 rounded-full shadow-md hover:bg-[var(--primary-light)] transition"
        >
          <ChevronLeft size={20} className="text-[var(--primary)]" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-30 bg-white border border-gray-200 p-3 rounded-full shadow-md hover:bg-[var(--primary-light)] transition"
        >
          <ChevronRight size={20} className="text-[var(--primary)]" />
        </button>

        {/* CARDS */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
        >
          {universities.map((uni, i) => (
            <div
              key={i}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition"
            >
              <img
                src={uni.img}
                alt={uni.name}
                className="w-full h-44 sm:h-48 object-cover rounded-t-xl"
              />

              <div className="p-4 sm:p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-semibold text-[var(--dark)]">
                    {uni.name}
                  </h3>
                  <img src={uni.flag} className="w-6 h-4 object-cover" />
                </div>

                <div className="grid grid-cols-2 text-xs text-gray-600 border-t border-gray-200">
                  <div className="p-2 border-r border-b">
                    <p className="text-gray-400">WorldRank</p>
                    <p className="font-semibold text-[var(--dark)]">{uni.rank}</p>
                  </div>

                  <div className="p-2 border-b">
                    <p className="text-gray-400">Course Duration</p>
                    <p className="font-semibold text-[var(--dark)]">{uni.duration}</p>
                  </div>

                  <div className="p-2 border-r border-b">
                    <p className="text-gray-400">Course Fee</p>
                    <p className="font-semibold text-[var(--dark)]">{uni.fee}</p>
                  </div>

                  <div className="p-2 border-b">
                    <p className="text-gray-400">Food</p>
                    <p className="font-semibold text-[var(--dark)]">{uni.food}</p>
                  </div>

                  <div className="p-2 border-r">
                    <p className="text-gray-400">Students</p>
                    <p className="font-semibold text-[var(--dark)]">{uni.students}</p>
                  </div>

                  <div className="p-2">
                    <p className="text-gray-400">Accommodation</p>
                    <p className="font-semibold text-[var(--dark)]">{uni.accommodation}</p>
                  </div>
                </div>

                <button className="mt-5 w-full py-2 rounded-full text-xs font-semibold bg-[var(--secondary)] text-white hover:opacity-90 transition">
                  Get More Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

export default TopUniversities;
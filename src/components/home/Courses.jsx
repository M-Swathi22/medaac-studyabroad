import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../../assets/images/course-mbbs.avif";
import img2 from "../../assets/images/course-bds.jpg";
import img3 from "../../assets/images/course-nursing.jpg";
import img4 from "../../assets/images/course-bhms.jpg";
import img5 from "../../assets/images/course-bams.jpg";

const courses = [
  {
    title: "MBBS",
    desc: "Pursue MBBS in top international universities with affordable fees and global exposure.",
    image: img1,
    duration: "5.5 Years",
    countries: "12 Countries",
  },
  {
    title: "BDS",
    desc: "Build a career in dental sciences with modern clinical training and global recognition.",
    image: img2,
    duration: "5 Years",
    countries: "8 Countries",
  },
  {
    title: "B.Sc Nursing",
    desc: "Internationally accepted nursing programs with strong career opportunities.",
    image: img3,
    duration: "4 Years",
    countries: "6 Countries",
  },
  {
    title: "BHMS",
    desc: "Professional degree in homeopathy focused on holistic and alternative medicine.",
    image: img4,
    duration: "5.5 Years",
    countries: "5 Countries",
  },
  {
    title: "BAMS",
    desc: "Study Ayurveda with structured programs combining traditional knowledge and modern science.",
    image: img5,
    duration: "5.5 Years",
    countries: "4 Countries",
  },
];

function Courses() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
  className="relative py-24 overflow-hidden"
  style={{
    fontFamily: "var(--font-main)",
    background: "var(--light)", // ✅ FIXED
  }}
>
  {/* subtle blobs (reduced intensity, theme based) */}
  <div
    className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] rounded-full pointer-events-none"
    style={{
      background:
        "radial-gradient(circle, color-mix(in srgb, var(--primary) 10%, transparent) 0%, transparent 70%)",
      filter: "blur(40px)",
    }}
  />

  <div
    className="absolute bottom-[-100px] right-[-80px] w-[300px] h-[300px] rounded-full pointer-events-none"
    style={{
      background:
        "radial-gradient(circle, color-mix(in srgb, var(--primary) 8%, transparent) 0%, transparent 70%)",
      filter: "blur(40px)",
    }}
  />

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* HEADER */}
    <div className="flex justify-between items-center mb-14">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--dark)" }}>
          Discover Trending Courses
        </h2>

        {/* FIXED secondary → primary */}
        <div
          className="mt-2 h-1 w-20 rounded-full"
          style={{ background: "var(--primary)" }}
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition
            ${activeIndex === 0
              ? "opacity-40"
              : ""}`}
          style={{
            borderColor: "var(--border)",
            color: "var(--primary)",
          }}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition
            ${activeIndex === courses.length - 1
              ? "opacity-40"
              : ""}`}
          style={{
            borderColor: "var(--border)",
            color: "var(--primary)",
          }}
        >
          <ChevronRight size={20} />
        </button>

        <Link to="/courses">
  <button
    className="px-5 py-2 rounded-full text-sm font-medium transition"
    style={{
      background: "var(--primary)",
      color: "var(--white)",
      border: "1px solid var(--primary)",
    }}
  >
    View All
  </button>
</Link>
      </div>
    </div>

    {/* SLIDER */}
    <div className="overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        spaceBetween={20}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>

            {/* MOBILE */}
            <div
              className="block md:hidden rounded-[32px] overflow-hidden"
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="w-full h-52 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </div>

              <div className="px-6 py-5">
                <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--primary)" }}>
                  {course.title}
                </h3>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--gray)" }}>
                  {course.desc}
                </p>

                <div className="flex gap-3 mb-5 text-xs">
                  <span
                    className="px-3 py-1.5 rounded-full"
                    style={{ background: "var(--primary-light)", color: "var(--primary-dark)" }}
                  >
                    ⏱ {course.duration}
                  </span>

                  <span
                    className="px-3 py-1.5 rounded-full"
                    style={{ background: "var(--primary-light)", color: "var(--primary-dark)" }}
                  >
                    🌍 {course.countries}
                  </span>
                </div>

                <Link to={course.title === "B.Sc Nursing" ? "/courses/nursing/bsc-nursing" : `/courses/medical/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
>
  <button
    className="px-5 py-2 rounded-full text-sm transition"
    style={{
      background: "var(--primary)",
      color: "var(--white)",
    }}
  >
    Learn More
  </button>
</Link>
              </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:block py-6 pl-6">
              <div className="relative flex items-center">

                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                  <div
                    className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-[32px] overflow-hidden"
                    style={{
                      border: "4px solid var(--white)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    }}
                  >
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                <div
                  className="rounded-[32px] w-full h-[320px] md:h-[360px] flex items-center pl-[180px] md:pl-[220px] pr-8 md:pr-12 ml-[110px] md:ml-[130px]"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="max-w-md">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: "var(--primary)" }}>
                      {course.title}
                    </h3>

                    <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: "var(--gray)" }}>
                      {course.desc}
                    </p>

                    <div className="flex gap-3 mb-5 text-xs">
                      <span
                        className="px-3 py-1.5 rounded-full"
                        style={{ background: "var(--primary-light)", color: "var(--primary-dark)" }}
                      >
                        ⏱ {course.duration}
                      </span>

                      <span
                        className="px-3 py-1.5 rounded-full"
                        style={{ background: "var(--primary-light)", color: "var(--primary-dark)" }}
                      >
                        🌍 {course.countries}
                      </span>
                    </div>

                   <Link to={course.title === "B.Sc Nursing" ? "/courses/nursing/bsc-nursing" : `/courses/medical/${course.title.toLowerCase().replace(/\s+/g, "-")}`
  }
>
  <button
    className="px-5 py-2 rounded-full text-sm transition"
    style={{
      background: "var(--primary)",
      color: "var(--white)",
    }}
  >
    Learn More
  </button>
</Link>
                  </div>
                </div>

              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>
  );
}

export default Courses;
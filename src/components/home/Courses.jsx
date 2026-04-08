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
    <section className="py-24 bg-[var(--primary-light)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark)]">
              Discover Trending Courses
            </h2>
            <div className="mt-2 h-1 w-20 bg-[var(--secondary)] rounded-full"></div>
          </div>

          {/* ARROWS + VIEW ALL */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition
                ${activeIndex === 0
                  ? "border-gray-300 text-gray-300"
                  : "border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"}`}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition
                ${activeIndex === courses.length - 1
                  ? "border-gray-300 text-gray-300"
                  : "border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"}`}
            >
              <ChevronRight size={20} />
            </button>

           <button className="px-5 py-2 rounded-full text-sm font-medium bg-[var(--secondary)] text-white border border-[var(--secondary)]hover:bg-transparent hover:text-[var(--secondary)] transition">
                View All
           </button>
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

           speed={1200} // 🔥 smoother continuous feel

           autoplay={{
           delay: 0,              // 🔥 faster autoplay
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
                <div className="block md:hidden bg-white rounded-[32px] shadow-md overflow-hidden">
                  <div className="w-full h-52 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-6 py-5">
                    <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {course.desc}
                    </p>
                    <div className="flex gap-3 mb-5 text-xs">
                      <span className="bg-gray-100 px-3 py-1.5 rounded-full text-gray-600">
                        ⏱ {course.duration}
                      </span>
                      <span className="bg-gray-100 px-3 py-1.5 rounded-full text-gray-600">
                        🌍 {course.countries}
                      </span>
                    </div>
                    <button className="bg-[var(--secondary)] text-white px-5 py-2 rounded-full text-sm hover:opacity-90 hover:scale-105 transition">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* DESKTOP */}
                <div className="hidden md:block py-6 pl-6">
                  <div className="relative flex items-center">

                    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-[32px] overflow-hidden shadow-xl border-4 border-white">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="bg-white rounded-[32px] w-full h-[320px] md:h-[360px] shadow-md flex items-center pl-[180px] md:pl-[220px] pr-8 md:pr-12 ml-[110px] md:ml-[130px]">
                      <div className="max-w-md">
                        <h3 className="text-xl md:text-2xl font-semibold text-[var(--primary)] mb-3">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                          {course.desc}
                        </p>
                        <div className="flex gap-3 mb-5 text-xs">
                          <span className="bg-gray-100 px-3 py-1.5 rounded-full text-gray-600">
                            ⏱ {course.duration}
                          </span>
                          <span className="bg-gray-100 px-3 py-1.5 rounded-full text-gray-600">
                            🌍 {course.countries}
                          </span>
                        </div>
                        <button className="bg-[var(--secondary)] text-white px-5 py-2 rounded-full text-sm hover:opacity-90 hover:scale-105 transition">
                          Learn More
                        </button>
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
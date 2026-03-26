import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
  },
  {
    title: "BDS",
    desc: "Build a career in dental sciences with modern clinical training and global recognition.",
    image: img2,
  },
  {
    title: "B.Sc Nursing",
    desc: "Internationally accepted nursing programs with strong career opportunities.",
    image: img3,
  },
  {
    title: "BHMS",
    desc: "Professional degree in homeopathy focused on holistic and alternative medicine.",
    image: img4,
  },
  {
    title: "BAMS",
    desc: "Study Ayurveda with structured programs combining traditional knowledge and modern science.",
    image: img5,
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

          {/* ARROWS */}
          <div className="flex gap-3">

            {/* LEFT */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className={`
                w-10 h-10 rounded-full border flex items-center justify-center transition
                ${activeIndex === 0
                  ? "border-gray-300 text-gray-300"
                  : "border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"}
              `}
            >
              <ChevronLeft size={20} />
            </button>

            {/* RIGHT */}
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className={`
                w-10 h-10 rounded-full border flex items-center justify-center transition
                ${activeIndex === courses.length - 1
                  ? "border-gray-300 text-gray-300"
                  : "border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"}
              `}
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

        {/* SLIDER */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1.3}
          spaceBetween={16}
          className="!overflow-visible"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>

              <div className="relative flex items-center py-6">

                {/* CONTENT */}
                <div className="
                  bg-white 
                  rounded-[32px] 
                  ml-16 md:ml-30
                  w-full 
                  md:w-[700px] 
                  h-[360px] 
                  shadow-md 
                  flex items-center 
                  pl-28 md:pl-60
                  pr-8 md:pr-12
                ">
                  <div className="max-w-md">

                  <h3 className="text-xl md:text-2xl font-semibold text-[var(--primary)] mb-3">
                    {course.title}
                    </h3>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                      {course.desc}
                    </p>

                    <button className="bg-[var(--secondary)] text-white px-5 py-2 rounded-full text-sm hover:opacity-90 hover:scale-105 active:scale-95 transition">
                             Learn More
                    </button>

                  </div>
                </div>

                {/* IMAGE */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                  <div className="
                    w-[190px] h-[200px] 
                    sm:w-[240px] sm:h-[240px] 
                    md:w-[280px] md:h-[280px] 
                    rounded-[32px] 
                    overflow-hidden 
                    shadow-xl 
                    border-4 border-white
                  ">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Courses;
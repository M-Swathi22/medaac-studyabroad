import { ArrowUpRight } from "lucide-react";

import mbbsImg from "../../assets/images/course-mbbs.avif";
import nursingImg from "../../assets/images/course-nursing.jpg";
import paramedicalImg from "../../assets/images/course-paramedical.webp";
import engineeringImg from "../../assets/images/course-engineering.webp";
import alliedImg from "../../assets/images/course-allied.jpg";
import bscImg from "../../assets/images/course-bsc.jpg";
import manageImg from "../../assets/images/course-management.jpg";
import politehImg from "../../assets/images/course-polytechnic.jpg";
import artsImg from "../../assets/images/course-arts.jpg";

const courses = [
  {
    id: "mbbs",
    tag: "Most Popular",
    category: "Medical",
    title: "MBBS — Bachelor of Medicine & Surgery",
    duration: "5.5 Years",
    image: mbbsImg,
  },
  {
    id: "nursing",
    tag: "Trending",
    category: "Nursing",
    title: "B.Sc Nursing",
    duration: "4 Years",
    image: nursingImg,
  },
  {
    id: "paramedical",
    tag: "Fast Growing",
    category: "Paramedical",
    title: "Paramedical Courses",
    duration: "3 – 4 Years",
    image: paramedicalImg,
  },
  {
    id: "engineering",
    tag: "Top Choice",
    category: "Engineering",
    title: "Engineering Courses",
    duration: "4 Years",
    image: engineeringImg, // replace later if needed
  },
  {
    id: "allied",
    tag: "Career Focus",
    category: "Allied Health",
    title: "Allied Courses",
    duration: "3 – 4 Years",
    image: alliedImg, // replace later if needed
  },
  {
    id: "bsc",
    tag: "Science",
    category: "B.Sc",
    title: "B.Sc Courses",
    duration: "3 Years",
    image: bscImg, // replace later if needed
  },
  {
    id: "management",
    tag: "Business",
    category: "Management",
    title: "Management Courses",
    duration: "3 – 4 Years",
    image: manageImg, // replace later
  },
  {
    id: "polytechnic",
    tag: "Diploma",
    category: "Polytechnic",
    title: "Polytechnic Courses",
    duration: "2 – 3 Years",
    image: politehImg, // replace later
  },
  {
    id: "arts",
    tag: "General",
    category: "Arts & Science",
    title: "Arts & Science Courses",
    duration: "3 Years",
    image: artsImg, // replace later
  },
];

function CourseCard({ course }) {
  return (
    <div
      className="group relative overflow-hidden transition-all duration-500"
      style={{
        borderRadius: "20px",
        border: "1px solid var(--border)",
        background: "linear-gradient(180deg, #ffffff 0%, #fbfbfd 100%)",
        boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.7), transparent 50%)",
        }}
      />

      <div className="relative h-[180px] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.85))",
          }}
        />

        <span
          className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full font-medium"
          style={{
            background: "var(--primary)",
            color: "white",
          }}
        >
          {course.tag}
        </span>

        <div className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
          <ArrowUpRight size={16} className="text-white" />
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs text-white/70 uppercase tracking-wide">
            {course.category}
          </p>
          <h3 className="text-white font-semibold text-sm">
            {course.title}
          </h3>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        <span
          className="text-xs px-3 py-1 rounded-full"
          style={{
            background: "var(--primary-light)",
            color: "var(--primary-dark)",
          }}
        >
          {course.duration}
        </span>

        <button
          className="text-sm font-medium"
          style={{ color: "var(--primary)" }}
        >
          Explore →
        </button>
      </div>
    </div>
  );
}

function CoursesGrid() {
  return (
    <section
      id="courses-section"
      className="py-20 relative overflow-hidden"
      style={{ fontFamily: "var(--font-main)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              #ffffff 0%,
              var(--primary-light) 40%,
              #ffffff 100%
            )
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="mb-12 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: "var(--dark)" }}
          >
            Explore All Courses
          </h2>
          <p style={{ color: "var(--gray)" }}>
            Choose from a wide range of programs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesGrid;
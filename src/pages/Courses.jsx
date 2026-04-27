import AnimatedSection from "../components/AnimatedSection";
import CoursesHero from "../components/courses/CoursesHero";
import FeaturedCourses from "../components/courses/FeaturedCourses";
import CoursesProcess from "../components/courses/CoursesProcess";
import CoursesGrid from "../components/courses/CoursesGrid";
import Contact from "../components/home/Contact";


function Courses() {
  return (
    <>
      <CoursesHero />
      <AnimatedSection>
        <FeaturedCourses />
      </AnimatedSection>

      <AnimatedSection>
        <CoursesGrid />
      </AnimatedSection>

       <AnimatedSection>
        <CoursesProcess />
      </AnimatedSection>


      <AnimatedSection>
        <Contact/>
      </AnimatedSection>
    </>
  );
}

export default Courses;
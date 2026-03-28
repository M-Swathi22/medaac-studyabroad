import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Courses from "./components/home/Courses";
import Countries from "./components/home/Countries";
import AnimatedSection from "./components/AnimatedSection";
import Process from "./components/home/Process";
import WhyChooseUs from "./components/home/WhyChooseUs";



function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <AnimatedSection>
        <Courses />
      </AnimatedSection>

      <AnimatedSection>
        <Countries />
      </AnimatedSection>

      <AnimatedSection>
        <Process />
      </AnimatedSection>

      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>
    </>
  );
}

export default App;
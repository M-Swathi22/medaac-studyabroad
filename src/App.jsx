import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Courses from "./components/home/Courses";
import Countries from "./components/home/Countries";
import AnimatedSection from "./components/AnimatedSection";
import Process from "./components/home/Process";
import WhyChooseUs from "./components/home/WhyChooseUs";
import TopUniversities from "./components/home/TopUniversities";
import Testimonials from "./components/home/Testimonials";
import FAQ from "./components/home/FAQ";
import Contact from "./components/home/Contact";
import Footer from "./components/layout/Footer";




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

      <AnimatedSection>
        <TopUniversities />
      </AnimatedSection>

      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection>
        <FAQ />
      </AnimatedSection>
      
      <AnimatedSection>
        <Contact />
      </AnimatedSection>


      <Footer />


    </>
  );
}

export default App;
import AnimatedSection from "../components/AnimatedSection";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import MissionVision from "../components/about/MissionVision";
import AboutStats from "../components/about/AboutStats";
import AboutServices from "../components/about/AboutServices";
import Contact from "../components/home/Contact";

function About() {
  return (
    <>
      <AboutHero />
      <AnimatedSection>
        <AboutStory />
      </AnimatedSection>

      <AnimatedSection>
        <MissionVision />
      </AnimatedSection>
      
      <AnimatedSection>
        <AboutStats />
      </AnimatedSection>
     
      <AnimatedSection>
        <AboutServices />
      </AnimatedSection>
     
      <AnimatedSection>
        <Contact/>
      </AnimatedSection>
    </>
  );
}

export default About;
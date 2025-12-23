import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import CaseStudy from "../sections/CaseStudy";
import EngineeringHighlights from "../sections/EngineeringHighlights";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Experience />

      <CaseStudy />
      {/* <EngineeringHighlights /> */}
      <Education />
      <Contact />
    </>
  );
};

export default Home;

import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects";
import MiniProjects from "../sections/MiniProjects";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <MiniProjects />
      {/* <CaseStudy /> */}
      {/* <EngineeringHighlights /> */}
      <Education />
      <Contact />
    </>
  );
};

export default Home;

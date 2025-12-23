import { fadeUp } from "../animation";
import Container from "../components/Container";
import SkillCard from "../components/SkillCard";
import SectionTitle from "../sections/SectionTitle";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Container>
        <SectionTitle title="Skills" />

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px",
          }}
        >
          <SkillCard
            title="Frontend"
            icon="/icons/react.svg"
            accent="#38bdf8"
            skills={["React", "React Native", "JavaScript", "HTML", "CSS"]}
          />

          <SkillCard
            title="State & APIs"
            icon="/icons/redux.svg"
            accent="#a78bfa"
            skills={["Redux", "RTK Query", "REST APIs"]}
          />

          <SkillCard
            title="UI & Tools"
            icon="/icons/js.svg"
            accent="#22c55e"
            skills={["Material UI", "Git", "Postman", "Figma"]}
          />
        </div>
      </Container>
    </motion.section>
  );
};

export default Skills;

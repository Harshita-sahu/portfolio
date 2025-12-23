import Container from "../components/Container";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { fadeUp } from "../animation";
import EducationItem from "../components/EducationItem";

const Education = () => {
  return (
    <motion.section
      id="education"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ padding: "100px 0" }}
    >
      <Container>
        <SectionTitle title="Education" />

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <EducationItem
            degree="Master of Computer Applications (MCA)"
            institute="SCSIT, DAVV Indore"
            duration="2021 – 2023"
            cgpa="7.5"
            accent="#38bdf8"
          />

          <EducationItem
            degree="Bachelor of Computer Applications (BCA)"
            institute="SCSIT, DAVV Indore"
            duration="2018 – 2021"
            cgpa="7.5"
            accent="#a78bfa"
          />
        </div>
      </Container>
    </motion.section>
  );
};

export default Education;

import { fadeUp } from "../animation";
import Container from "../components/Container";
import ExperienceItem from "../components/ExperienceItem";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ padding: "100px 0" }}
    >
      <Container>
        <SectionTitle title="Experience" />

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "36px",
          }}
        >
          <ExperienceItem
            role="React / React Native Developer"
            company="Gammastack"
            duration="June 2023 – Present"
            accent="#38bdf8"
            points={[
              "Developed and maintained production-grade React and React Native applications used by real users in live environments.",
              "Owned the Android release process, deploying builds to internal testing, validating releases, and publishing stable versions to production on the Google Play Store.",
              "Implemented and enhanced casino features such as daily bonus flows, spin-the-wheel logic, and gameplay-related UI, supporting multi-language platforms with secure payment integrations and production-grade performance",
              "Built an automated FF deposit flow by parsing incoming SMS, reducing manual verification by ~70–80% and improving transaction accuracy.",
              "Collaborated closely with backend and QA teams to debug issues, handle edge cases, and ensure smooth production releases."

            ]}
          />
        </div>
      </Container>
    </motion.section>
  );
};

export default Experience;

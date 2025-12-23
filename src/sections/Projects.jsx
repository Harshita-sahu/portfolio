import { fadeUp } from "../animation";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import ffDepositImg from "../../public/ff-deposit.webp";
import casinoImage from "../../public/casino-app.png";
import handheld from "../../public/handheld-app.jpg";

const Projects = () => {
  return (

    <motion.section
      id="projects"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Container>
        <SectionTitle title="Projects" />
        {/* <h2 style={{ fontSize: "36px", textAlign: "center", marginBottom: "40px" }}>
          Projects
        </h2> */}

        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          <ProjectCard
            title="FF Deposit Automation"
            description="Built an automated cash-in flow that parses incoming SMS to detect deposits and updates user balance in real time. Reduced manual intervention and improved transaction accuracy."
            tech={["React Native", "JavaScript", "Redux", "RTK Query"]}
            image={ffDepositImg}
          />
          <ProjectCard
            title="Casino Websites & Mobile Apps"
            description="Worked on multi-language casino platforms with smooth gameplay UI, secure payment integrations, and responsive design across web and mobile devices."
            tech={["React", "React Native", "JavaScript", "Material UI"]}
            image={casinoImage}
          />
          <ProjectCard
            title="Handheld Operations Application"
            description="Developed a handheld sportsbook application to promote the 8Dex platform, enabling users to place bets, generate printable bet slips for payout verification, and manage user accounts including light and dark theme, with a focus on performance, reliability, and seamless API integration."
            tech={["React Native", "REST APIs", "Redux", "Git"]}
            image={handheld}
          />
        </div>
      </Container>
    </motion.section>
  );
};

export default Projects;

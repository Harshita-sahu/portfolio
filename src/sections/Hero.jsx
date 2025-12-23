import { motion } from "framer-motion";
import Container from "../components/Container";
import { fadeUp } from "../animation";

const Hero = () => {
  return (
    <motion.section
      id="home"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      style={{ padding: "140px 0 100px" }}
    >
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            alignItems: "center",
            gap: "60px",
          }}
        >
          {/* LEFT */}
          <div>
            <h1 style={{ fontSize: "56px", lineHeight: "1.1", marginBottom: "16px" }}>
              Hi, I’m{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #38bdf8, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Harshita
              </span>
            </h1>

            <h2
              style={{
                fontSize: "24px",
                color: "var(--muted)",
                marginBottom: "24px",
              }}
            >
              React & React Native Developer
            </h2>

            <p
              style={{
                maxWidth: "520px",
                fontSize: "18px",
                lineHeight: "1.8",
                marginBottom: "32px",
              }}
            >
              I build scalable, production-ready web and mobile applications
              with clean UI, smooth performance, and real-world business impact.
            </p>

            <a
              href="#projects"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                borderRadius: "999px",
                background: "linear-gradient(90deg, #38bdf8, #a78bfa)",
                color: "#020617",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              View My Work
            </a>
          </div>

          {/* RIGHT */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/hero-illustration.png"
              alt="Developer illustration"
              style={{
                width: "100%",
                maxWidth: "420px",
              }}
            />
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Hero;

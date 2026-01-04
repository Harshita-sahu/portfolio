import MiniProjectCard from "../components/MiniProjectCard";
import Container from "../components/Container";
import SectionTitle from "./SectionTitle";

const MiniProjects = () => {
  return (
    <section id="projects" style={{ padding: "100px 0" }}>
      <Container>
        <SectionTitle title="Live Mini Projects" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <MiniProjectCard
            title="Pomodoro Timer"
            description="A clean Pomodoro timer with work/break cycles, sound alerts, and smooth UI interactions."
            image="/pomodoro-preview.jpg"
            url="https://pomodoro-eta-puce.vercel.app/"
          />

          <MiniProjectCard
            title="Debounce & Throttle Playground"
            description="Interactive playground to visualize debounce and throttle behavior in real-time."
            image="/debounce-preview.png"
            url="https://debounce-throttle-umber.vercel.app/"
          />
        </div>
      </Container>
    </section>
  );
};

export default MiniProjects;

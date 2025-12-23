import Container from "../components/Container";
import SectionTitle from "./SectionTitle";
import { highlights } from "../data/highlights";

const EngineeringHighlights = () => {
  return (
    <section style={{ padding: "80px 0" }}>
      <Container>
        <SectionTitle title="Engineering Highlights" />

        <ul style={{ maxWidth: "800px", lineHeight: "1.8" }}>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default EngineeringHighlights;

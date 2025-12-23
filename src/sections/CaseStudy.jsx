import Container from "../components/Container";
import SectionTitle from "./SectionTitle";
import { caseStudies } from "../data/caseStudies";

const CaseStudy = () => {
  const study = caseStudies[0];

  return (
    <section style={{ padding: "100px 0" }}>
      <Container>
        <SectionTitle title="Featured Project — FF Deposit Automation" />

        <div
          style={{
            maxWidth: "900px",
            margin: "40px auto 0",
            lineHeight: "1.9",
          }}
        >
          <h3>Problem</h3>
          <p>
            Manual deposit verification caused delays, errors, and high operational
            overhead, impacting both users and internal teams.
          </p>

          <h3 style={{ marginTop: "32px" }}>Solution</h3>
          <p>
            Designed and implemented an automated cash-in system that parses incoming
            SMS messages and updates user balances in real time.
          </p>

          <h3 style={{ marginTop: "32px" }}>My Role</h3>
          <ul>
            <li>Implemented SMS parsing logic</li>
            <li>Integrated APIs using RTK Query</li>
            <li>Handled edge cases like duplicate and failed transactions</li>
          </ul>

          <div
            style={{
              marginTop: "40px",
              paddingLeft: "20px",
              borderLeft: "3px solid #38bdf8",
            }}
          >
            <h3>Impact</h3>
            <ul>
              <li>
                <strong>Reduced manual verification by ~70–80%</strong>
              </li>
              <li>Improved transaction accuracy</li>
              <li>Enabled faster balance updates for users</li>
            </ul>
          </div>

          <h3 style={{ marginTop: "32px" }}>Tech Stack</h3>
          <p>React Native, JavaScript, Redux Toolkit, RTK Query</p>

          <h3 style={{ marginTop: "32px" }}>Challenges & Learnings</h3>
          <ul>
            <li>Handling inconsistent SMS formats</li>
            <li>Preventing duplicate balance updates</li>
            <li>Designing idempotent API calls</li>
          </ul>
        </div>
      </Container>
    </section>

  )
};

export default CaseStudy;

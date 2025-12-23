const Contact = () => {
    return (
        <section
            style={{
                padding: "80px 24px",
                textAlign: "center",
                backgroundColor: "var(--bg-secondary)",
            }}
            id="contact"
        >
            {/* <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
                Let’s Connect
            </h2> */}

            <p style={{ maxWidth: "600px", margin: "0 auto 32px", color: "var(--heading)" }}>
                I’m open to frontend, React, and React Native opportunities.
                Feel free to reach out for collaboration or hiring.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                <a
                    href="mailto:your.harshitasahu0720@gmail.com"
                    style={buttonStyle}
                >
                    Email
                </a>

                <a
                    href="https://www.linkedin.com/in/harshita-sahu"
                    target="_blank"
                    rel="noreferrer"
                    style={buttonStyle}
                >
                    LinkedIn
                </a>

                <a
                    href="https://github.com/Harshita-sahu"
                    target="_blank"
                    rel="noreferrer"
                    style={buttonStyle}
                >
                    GitHub
                </a>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    style={{
                        ...buttonStyle,
                        backgroundColor: "#38bdf8",
                        color: "var(--heading)"
                    }}
                >
                    Resume
                </a>
            </div>
        </section>
    );
};

const buttonStyle = {
    padding: "12px 20px",
    borderRadius: "999px",
    border: "1px solid #1e293b",
    textDecoration: "none",
    color:"var(--heading)",
    fontSize: "16px",
};

export default Contact;

const SectionTitle = ({ title }) => {
  return (
    <div style={{ marginBottom: "48px" }}>
      <h2 style={{ fontSize: "36px", fontWeight: "600" }}>{title}</h2>
      <div
        style={{
          width: "60px",
          height: "4px",
          backgroundColor: "#38bdf8",
          marginTop: "8px",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};

export default SectionTitle;

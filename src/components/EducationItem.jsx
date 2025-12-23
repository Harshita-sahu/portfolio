import { motion } from "framer-motion";

const EducationItem = ({ degree, institute, duration, cgpa, accent }) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: `0 16px 32px ${accent}33`,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        position: "relative",
        padding: "24px 28px",
        background: "var(--bg-secondary)",
        borderRadius: "14px",
        border: "1px solid var(--border)",
        transition: "background 0.3s ease, border 0.3s ease",
      }}
    >
      {/* Accent bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "4px",
          background: accent,
          borderRadius: "14px 0 0 14px",
        }}
      />

      <h3
        style={{
          fontSize: "18px",
          marginBottom: "6px",
          color: "var(--heading)",
        }}
      >
        {degree}
      </h3>

      <p
        style={{
          color: "var(--muted)",
          fontSize: "14px",
        }}
      >
        {institute} • {duration}
      </p>

      <p
        style={{
          color: "var(--text)",
          fontSize: "14px",
          marginTop: "6px",
        }}
      >
        CGPA: <strong>{cgpa}</strong>
      </p>
    </motion.div>
  );
};

export default EducationItem;

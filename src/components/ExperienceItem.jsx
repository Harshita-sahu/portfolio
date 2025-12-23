import { motion } from "framer-motion";

const ExperienceItem = ({ role, company, duration, points, accent }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        boxShadow: `0 20px 50px ${accent}33`,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        position: "relative",
        padding: "32px",
        background: "var(--bg-secondary)",
        borderRadius: "16px",
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
          background: `linear-gradient(180deg, ${accent}, transparent)`,
          borderRadius: "16px 0 0 16px",
        }}
      />

      {/* Header */}
      <h3
        style={{
          fontSize: "22px",
          marginBottom: "6px",
          color: "var(--heading)",
        }}
      >
        {role}
      </h3>

      <p
        style={{
          color: "var(--muted)",
          marginBottom: "20px",
          fontSize: "14px",
        }}
      >
        <strong style={{ color: "var(--text)" }}>{company}</strong> • {duration}
      </p>

      {/* Points */}
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          paddingLeft: 0,
          listStyle: "none",
        }}
      >
        {points.map((point, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              color: "var(--text)",
              lineHeight: "1.7",
            }}
          >
            <span
              style={{
                marginTop: "7px",
                width: "6px",
                height: "6px",
                borderRadius: "999px",
                backgroundColor: accent,
                flexShrink: 0,
              }}
            />
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceItem;

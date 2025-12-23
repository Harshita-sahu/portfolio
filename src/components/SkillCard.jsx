import { motion } from "framer-motion";

const SkillCard = ({ title, skills, icon, accent }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: `0 20px 40px ${accent}33`,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        background: "var(--bg-secondary)",
        padding: "28px",
        borderRadius: "16px",
        border: "1px solid var(--border)",
        transition: "background 0.3s ease, border 0.3s ease",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "16px",
        }}
      >
        <img src={icon} alt="" width={28} />
        <h3
          style={{
            fontSize: "20px",
            margin: 0,
            color: "var(--heading)", // 👈 theme-safe
          }}
        >
          {title}
        </h3>
      </div>

      {/* Skills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {skills.map((skill) => (
          <span
            key={skill}
            style={{
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: "13px",
              backgroundColor: `${accent}22`,
              color: accent,
              border: `1px solid ${accent}55`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;

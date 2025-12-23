import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tech, image }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        backgroundColor: "var(--bg-secondary)",
        padding: "24px",
        borderRadius: "16px",
        border: "1px solid var(--border)",
        transition: "background 0.3s ease, border 0.3s ease",
      }}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "16px",
          aspectRatio: "16 / 9",
          objectFit: "cover",
        }}
      />

      {/* Title */}
      <h3
        style={{
          fontSize: "22px",
          marginBottom: "8px",
          color: "var(--heading)",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          color: "var(--muted)",
          lineHeight: "1.6",
          marginBottom: "16px",
        }}
      >
        {description}
      </p>

      {/* Tech Stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {tech.map((item) => (
          <span
            key={item}
            style={{
              fontSize: "13px",
              padding: "6px 12px",
              borderRadius: "999px",
              backgroundColor: "var(--bg)",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

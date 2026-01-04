import { motion } from "framer-motion";

const MiniProjectCard = ({ title, description, image, url }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      whileHover={{
        y: -8,
        boxShadow: "0 25px 50px rgba(56,189,248,0.25)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          overflow: "hidden",
          height: "100%",
        }}
      >
        {/* Image Wrapper */}
        <div style={{ position: "relative" }}>
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              filter: "brightness(0.85)",
            }}
          />

          {/* Dark overlay for consistency */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.5))",
            }}
          />

          {/* View Live */}
          <div
            style={{
              position: "absolute",
              bottom: 12,
              right: 12,
              background: "rgba(0,0,0,0.65)",
              padding: "6px 10px",
              borderRadius: "999px",
              fontSize: "12px",
              color: "#ffffff",
              fontWeight: 500,
            }}
          >
            View Live →
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "16px" }}>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 600,
              marginBottom: "8px",
              color: "var(--text)",
            }}
          >
            {title}
          </h3>

          <p
            style={{
              fontSize: "14px",
              color: "var(--muted)",
              lineHeight: "1.6",
              maxWidth: "90%",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.a>
  );
};

export default MiniProjectCard;

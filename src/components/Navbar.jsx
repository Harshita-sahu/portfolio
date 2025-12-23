const Navbar = ({ theme, setTheme }) => {
  const links = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "linear-gradient(90deg, var(--bg-secondary), var(--bg))",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        zIndex: 1000,
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Brand */}
        <h1
          onClick={() => scrollToSection("home")}
          style={{
            fontSize: "20px",
            fontWeight: 700,
            background: "linear-gradient(90deg, var(--accent), #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.6px",
            cursor: "pointer",
          }}
        >
          Harshita
        </h1>

        {/* Links */}
        <div style={{ display: "flex", gap: "28px" }}>
          {links.map((link) => (
            <div
              key={link.id}
              className="nav-link"
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </div>
          ))}
        </div>

        {/* Theme Toggle */}
        <div
          style={{
            padding: "3px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, var(--accent), #a78bfa)",
          }}
        >
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            style={{
              background: "var(--bg-secondary)",
              border: "none",
              borderRadius: "999px",
              padding: "6px 12px",
              color: "var(--text)",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

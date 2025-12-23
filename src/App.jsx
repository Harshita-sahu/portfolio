import AIChat from "./components/AIChat";
import Navbar from "./components/Navbar";

import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Home />
      <AIChat />
    </>
  );
}

export default App;

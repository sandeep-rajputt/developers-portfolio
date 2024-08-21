import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleIsMobile() {
    if (window.innerWidth < 834) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  function handleNavbar() {
    setIsNavOpen(!isNavOpen);
  }

  window.addEventListener("resize", handleIsMobile);
  return (
    <ThemeContext.Provider
      value={{ isMobile, isNavOpen, handleNavbar, handleIsMobile }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

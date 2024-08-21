import React, { Children } from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import MobileNavbarLinks from "./components/MobileNavbarLinks";

const Transition = ({ children, className, navbar = true }) => {
  const { isNavOpen, isMobile } = useContext(ThemeContext);

  const motionProps = !isMobile
    ? {
        initial: { opacity: 0, transition: { delay: 0.4 } },
        animate: { opacity: 1, transition: { delay: 0.4 } },
        exit: { opacity: 0 },
        transition: { duration: 0.1 },
      }
    : {};

  return (
    <motion.div {...motionProps} className={`h-full ${className}`}>
      {isNavOpen ? navbar ? <MobileNavbarLinks /> : children : children}
    </motion.div>
  );
};

export default Transition;

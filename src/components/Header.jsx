import React, { useState } from "react";
import Hr from "./mini-components/Hr";
import HeaderItem from "./mini-components/HeaderItem";
import Vr from "./mini-components/Vr";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import MobileNavbar from "./MobileNavbar";

const data = [
  { text: "_hello", link: "/" },
  { text: "_about-me", link: "/about-me" },
  { text: "_projects", link: "/projects" },
  { text: "", link: "" },
  { text: "_contact-me", link: "/contact-me" },
];

const Header = () => {
  const { isMobile } = useContext(ThemeContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="h-11"
    >
      {isMobile ? <MobileNavbar /> : <NavBar data={data} />}
      <Hr />
    </motion.div>
  );
};

export default Header;

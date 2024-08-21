import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const MobileNavBarItem = ({ link, text, className }) => {
  const { handleNavbar } = useContext(ThemeContext);
  return (
    <li
      className={`w-auto text-word-secondary hover:backdrop-blur-md hover:bg-white/5   hover:text-word z-[9999999]`}
    >
      <NavLink
        to={link}
        onClick={handleNavbar}
        className={`!border-b-0 w-full py-3 inline-block h-full px-6 text-sm ${className} hover:text-word`}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default MobileNavBarItem;

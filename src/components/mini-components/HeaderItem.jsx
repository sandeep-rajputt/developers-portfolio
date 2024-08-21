import React from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const HeaderItem = ({ text, className, link }) => {
  return (
    <li className={`w-auto text-word-secondary  hover:text-word z-[9999999]`}>
      <NavLink
        to={link}
        className={`w-full flex h-full items-center px-6 text-sm ${className} hover:text-word`}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default HeaderItem;

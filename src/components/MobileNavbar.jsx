import React from "react";
import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const MobileNavbar = () => {
  const { handleNavbar } = useContext(ThemeContext);

  return (
    <div className="h-full flex ">
      <NavLink
        to={"/"}
        className={`w-full flex h-full items-center px-6 text-sm !border-none  !text-word-secondary`}
      >
        sandeeprajput.in
      </NavLink>
      <button
        onClick={() => {
          handleNavbar();
        }}
        className="h-full flex-center px-5 z-[9999999]"
      >
        <LuMenu size={"24px"} className="text-word-secondary" />
      </button>
    </div>
  );
};

export default MobileNavbar;

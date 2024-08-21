import React from "react";
import { NavLink } from "react-router-dom";
import HeaderItem from "./mini-components/HeaderItem";
import Vr from "./mini-components/Vr";

const NavBar = ({ data }) => {
  return (
    <nav className="h-full">
      <ul className="h-full grid lg:grid-cols-[250px_auto_auto_auto_auto_auto_auto_auto_1fr_auto_auto] grid-cols-[180px_auto_auto_auto_auto_auto_auto_auto_1fr_auto_auto]">
        <li className={`w-auto text-word-secondary`}>
          <NavLink
            to={"/"}
            className={`w-full flex h-full items-center px-6 text-sm !border-none  !text-word-secondary`}
          >
            sandeeprajput.in
          </NavLink>
        </li>
        {data.map((item, index) => {
          if (item.text) {
            return (
              <React.Fragment key={index}>
                <Vr />
                <HeaderItem text={item.text} link={item.link} />
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={index}>
                <Vr />
                <div></div>
              </React.Fragment>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default NavBar;

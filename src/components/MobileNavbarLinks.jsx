import React from "react";
import MobileNavBarItem from "./mini-components/MobileNavBarItem";

const data = [
  { text: "_hello", link: "/" },
  { text: "_about-me", link: "/about-me" },
  { text: "_projects", link: "/projects" },
  { text: "_contact-me", link: "/contact-me" },
];

const MobileNavbarLinks = () => {
  return (
    <nav className="h-full pt-2">
      <ul className="h-full flex flex-col ">
        {data.map((item, index) => {
          return <MobileNavBarItem key={index} {...item} />;
        })}
      </ul>
    </nav>
  );
};

export default MobileNavbarLinks;

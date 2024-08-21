import React from "react";

const FooterItem = ({ logo, link, text }) => {
  return (
    <a
      href={link}
      className={`h-full w-auto flex items-center px-3.5 hover:bg-hover text-word-third hover:text-word-secondary ${
        text && "gap-2"
      }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text && <span className="text-[13px] text-word-third">{text}</span>}
      {logo}
    </a>
  );
};

export default FooterItem;

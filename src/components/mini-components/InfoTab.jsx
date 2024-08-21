import React, { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { IoOpenOutline } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import Textellipsis from "./Textellipsis";
import Hr from "./Hr";

const InfoTab = ({
  parent,
  child,
  defaultOpen,
  changeSelectedTab,
  selectedTab,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  const icon = {
    file: <CiFileOn />,
    mail: <IoMdMail />,
    insta: <BsInstagram />,
    share: <IoOpenOutline />,
  };

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="text-white gap-1 flex items-center px-2 py-2 text-sm w-full overflow-hidden"
      >
        {open ? <FaCaretDown /> : <FaCaretRight />}

        <Textellipsis>{parent}</Textellipsis>
      </button>
      <Hr />
      <div className={open ? "py-1" : undefined}>
        {open &&
          child.map((item, index) => (
            <button
              onClick={() => {
                if (item.link) {
                  window.open(item.link, "_blank");
                } else {
                  changeSelectedTab(item.text);
                }
              }}
              key={index}
              className={`flex items-center gap-1.5 px-2 py-1 ml-1 text-sm w-full hover:text-word/50 ${
                selectedTab === item.text ? "!text-word" : "text-word-secondary"
              }`}
            >
              <div>{icon[item.icon]}</div>
              <p className="w-full overflow-hidden flex items-center justify-start">
                <Textellipsis>{item.text}</Textellipsis>
              </p>
            </button>
          ))}
      </div>
    </div>
  );
};

export default InfoTab;

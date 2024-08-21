import React from "react";
import Textellipsis from "./Textellipsis";
import { RxCross1 } from "react-icons/rx";
import Tooltip from "@mui/material/Tooltip";
import Vr from "./Vr";

const OpenTab = ({ text }) => {
  return (
    <div>
      <div className="text-word-secondary gap-2 grid grid-cols-[1fr_auto] items-center pl-4 px-2 py-2.5 text-xs w-full max-w-full overflow-hidden">
        <Textellipsis>{text}</Textellipsis>
        <RxCross1 />
      </div>
    </div>
  );
};

export default OpenTab;

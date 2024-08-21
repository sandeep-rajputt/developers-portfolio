import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

const Textellipsis = ({ children, className }) => {
  return (
    <Tooltip
      title={children}
      placement="right"
      arrow
      disableInteractive
      TransitionComponent={Zoom}
    >
      <span
        className={`whitespace-nowrap overflow-hidden text-ellipsis text-start inline-block ${className}`}
      >
        {children}
      </span>
    </Tooltip>
  );
};

export default Textellipsis;

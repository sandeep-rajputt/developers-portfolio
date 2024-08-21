import React from "react";
import Hr from "./Hr";

const Location = ({ children }) => {
  return (
    <>
      <div className="w-full text-sm flex items-center text-word-secondary px-6 hover:bg-dark-third py-3">
        {children}
      </div>
      <Hr />
    </>
  );
};

export default Location;

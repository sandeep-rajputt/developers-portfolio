import React from "react";

const ProjectItem = ({ item }) => {
  return (
    <div className="w-full max-w-64 bg-dark-third/40 rounded-md overflow-hidden">
      <div
        className="w-full h-28 bg-top bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${item.img})` }}
      ></div>
      <div className="p-4">
        <p className="text-base">{item.text}</p>
        <p className="text-xs text-word-secondary mt-1">{item.discription}</p>
        <a
          className="bg-dark-third inline-block px-5 py-1 rounded mt-3 hover:bg-dark-fourth"
          target="_blank"
          rel="noopener noreferrer"
          href={item.link}
        >
          View
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;

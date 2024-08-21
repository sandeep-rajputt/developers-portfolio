import React from "react";

const skillsData = [
  { img: "/skills/html.png", name: "Html" },
  { img: "/skills/css.png", name: "Css" },
  { img: "/skills/tailwindcss.png", name: "Tailwind Css" },
  { img: "/skills/js.png", name: "JavaScript" },
  { img: "/skills/typescript.png", name: "TypeScript" },
  { img: "/skills/react.png", name: "React Js" },
  { img: "/skills/redux.png", name: "Redux" },
  { img: "/skills/api.png", name: "APIs" },
  { img: "/skills/nodejs.png", name: "Node Js" },
  { img: "/skills/expressjs.png", name: "Express Js" },
  { img: "/skills/mongodb.svg", name: "Mongodb" },
  { img: "/skills/github.png", name: "Github" },
  { img: "/skills/seo.png", name: "SEO" },
];

const Skills = () => {
  return (
    <div className="flex justify-evenly flex-wrap gap-3 p-5 mb-10">
      {skillsData.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-[#010f1b] rounded gap-2 w-28 h-24 overflow-hidden flex flex-col items-center justify-center"
          >
            <div className="w-8 h-8 flex-center">
              <img
                className="max-w-full max-h-full"
                src={item.img}
                alt={item.name}
              />
            </div>
            <p className="text-word/70 text-sm">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;

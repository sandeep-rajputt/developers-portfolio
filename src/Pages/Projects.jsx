import React from "react";
import Transition from "../Transition";
import Vr from "../components/mini-components/Vr";
import InfoTab from "../components/mini-components/InfoTab";
import ProjectItem from "../components/ProjectItem";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Location from "../components/mini-components/Location";

const projectsData = [
  {
    text: "Gemini Clone",
    icon: "share",
    img: "/projects/gemini-clone.jpeg",
    link: "https://gemini-ai-clonee.netlify.app",
    discription:
      "Developed a frontend-only clone of Gemini AI using the Gemini API.",
  },
  {
    text: "Developer's Portfolio",
    icon: "share",
    img: "/projects/developer-portfolio.jpeg",
    link: "https://sandeeprajput.in",
    discription:
      "Created a personal portfolio website showcasing my projects and skills.",
  },
];

const Projects = () => {
  const { isMobile } = useContext(ThemeContext);
  return (
    <Transition>
      {isMobile && <Location>.../contact-me</Location>}
      <div className="grid text-white text-sm h-full md:grid-cols-[auto_auto_1fr]">
        <div className="lg:w-[250px] md:w-[180px] w-full overflow-y-scroll scrollbar hidden md:block">
          <InfoTab
            parent={"Projects"}
            child={projectsData}
            defaultOpen={true}
          />
        </div>
        <Vr />
        <div className="overflow-y-scroll scrollbar pb-10">
          <div className="h-full flex-center gap-4 flex-wrap p-5 ">
            {projectsData.map((item, index) => {
              return <ProjectItem item={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Projects;

import React, { useState } from "react";
import Transition from "../Transition";
import Vr from "../components/mini-components/Vr";
import InfoTab from "../components/mini-components/InfoTab";
import Hr from "../components/mini-components/Hr";
import OpenTab from "../components/mini-components/OpenTab";
import InfoDescription from "../components/InfoDescription";
import Skills from "../components/Skills";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Location from "../components/mini-components/Location";

const aboutMeData = [
  {
    text: "bio",
    icon: "file",
    data: "I am a BCA student at Vaish College in Bhiwani, with a strong interest in web development. I come from Kharak Kalan, Haryana, and have built a good foundation in both frontend and backend technologies. \n\nI enjoy learning new things and applying my skills to real projects. My passion lies in solving problems and continuously improving myself in the field of software development. I am dedicated to growing my knowledge and am working towards a career in this dynamic industry.",
  },
  {
    text: "skills",
    icon: "file",
    data: "I have developed a solid set of technical skills. I am proficient in HTML, CSS, and Tailwind CSS for creating web designs. My expertise includes JavaScript (JS) and TypeScript (TS), along with frameworks like React and Redux. \n\nI use Node.js and Express.js for backend development and work with MongoDB for database management. I am familiar with GitHub for version control, and I have a basic understanding of SEO. My soft skills include effective communication, problem-solving, and teamwork, which help me collaborate well on projects.",
  },
  {
    text: "education",
    icon: "file",
    data: "I am currently pursuing a Bachelor of Computer Applications (BCA) at Vaish College in Bhiwani, which I started in 2023. I completed my 12th grade at Deep Science Academy in 2022.",
  },
];

const contactsData = [
  {
    text: "contact@sandeeprajput.in",
    icon: "mail",
    link: "mailto:contact@sandeeprajput.in",
  },
  {
    text: "sandeep.rajput74",
    icon: "insta",
    link: "https://instagram.com/sandeep.rajput74",
  },
];

const AboutMe = () => {
  const [selectedTab, setSelectedTab] = useState("bio");
  const { isMobile } = useContext(ThemeContext);

  function changeSelectedTab(tab) {
    setSelectedTab(tab);
  }

  return (
    <Transition>
      {isMobile && <Location>.../about-me</Location>}
      <div className="grid md:grid-cols-[auto_auto_1fr_auto_1fr] h-full">
        <div className="grid lg:grid-cols-[auto_auto_1fr] lg:w-[250px] md:w-[180px] w-full overflow-hidden">
          <div className="lg:flex hidden px-3 pt-3 justify-center">
            <div>
              <img
                src="/about-me.svg"
                className="min-w-7 cursor-pointer hover:text-red-300"
                alt="terminal"
              />
            </div>
          </div>
          <Vr className={"hidden lg:block"} />
          <div className="w-full overflow-y-scroll overflow-x-hidden scrollbar">
            <InfoTab
              parent={"info"}
              child={aboutMeData}
              defaultOpen={!isMobile}
              changeSelectedTab={changeSelectedTab}
              selectedTab={selectedTab}
            />
            <Hr />
            <InfoTab
              parent={"contacts"}
              child={contactsData}
              defaultOpen={!isMobile}
              changeSelectedTab={changeSelectedTab}
              selectedTab={selectedTab}
            />
          </div>
        </div>
        <Vr />
        <div className="md:overflow-hidden">
          <div className="md:flex hidden">
            <OpenTab text={selectedTab} />
            <Vr className={"!h-auto"} />
          </div>
          <Hr className={"md:block hidden"} />
          <div className="h-full scrollbar overflow-y-scroll ">
            <InfoDescription
              data={
                aboutMeData.filter((item) => item.text === selectedTab)[0].data
              }
            />
          </div>
        </div>
        <Vr className={"md:block hidden"} />
        <div className="md:overflow-hidden">
          <Hr className={"block md:hidden"} />
          <div className="flex">
            <OpenTab text={"skills"} />
            <Vr className={"!h-auto"} />
          </div>
          <Hr />
          <div className="h-full scrollbar md:overflow-y-scroll pb-5">
            <Skills />
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default AboutMe;

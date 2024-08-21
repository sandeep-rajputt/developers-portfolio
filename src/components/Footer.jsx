import React from "react";
import Hr from "./mini-components/Hr";
import Vr from "./mini-components/Vr";
import FooterItem from "./mini-components/FooterItem";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Footer = () => {
  const { isMobile } = useContext(ThemeContext);
  const githubText = !isMobile && "@sandeep-rajputt";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="h-10 text-[13px]"
    >
      <Hr />
      <div className="h-full">
        <ul className="h-full grid grid-cols-[auto_auto_auto_auto_auto_auto_1fr_auto_auto]">
          <li className="flex items-center text-word-secondary px-4">
            find me in:
          </li>
          <Vr />
          <FooterItem
            logo={<GrInstagram size={"18px"} />}
            link={"https://www.instagram.com/sandeep.rajput74"}
          />
          <Vr />
          <FooterItem
            logo={<FaLinkedin size={"18px"} />}
            link={"https://www.linkedin.com/in/sandeep-rajputt"}
          />
          <Vr />
          <div></div>
          <Vr />
          <FooterItem
            logo={<FaGithub size={"18px"} />}
            link={"https://github.com/sandeep-rajputt"}
            text={githubText}
          />
        </ul>
      </div>
    </motion.div>
  );
};

export default Footer;

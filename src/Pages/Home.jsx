import React from "react";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Transition from "../Transition";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import MobileNavbarLinks from "../components/MobileNavbarLinks";
import { MdFileDownload } from "react-icons/md";

const Home = () => {
  const text = useTypewriter({});
  const name = "Sandeep Rajput";
  const { isNavOpen } = useContext(ThemeContext);

  return (
    <Transition>
      {isNavOpen ? (
        <MobileNavbarLinks />
      ) : (
        <div className="h-full grid lg:grid-cols-[1fr_1fr] 2xl:ml-[250px] gap-4 ml-5 lg:ml-20 items-center relative">
          <div className="flex flex-col gap-20 mb-10 z-20 md:min-w-[405px] 2xl:justify-self-start justify-self-center w-fit ">
            <div className="text-blue flex flex-col gap-3">
              <p className="text-word md:text-md text-sm">Hi all, I am</p>
              <motion.h1
                initial="initial"
                whileHover="hovered"
                className="text-word md:text-6xl text-3xl overflow-hidden relative h-[110%] select-none w-fit"
              >
                <div>
                  {name.split("").map((letter, index) => (
                    <motion.span
                      variants={{
                        initial: { y: 0 },
                        hovered: { y: "110%" },
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                        delay: 0.015 * index,
                      }}
                      key={index}
                      className="inline-block mb-1"
                    >
                      {letter === " " ? (
                        <span className="w-5 inline-block"></span>
                      ) : (
                        letter
                      )}
                    </motion.span>
                  ))}
                </div>
                <div className="absolute top-0">
                  {name.split("").map((letter, index) => (
                    <motion.span
                      variants={{
                        initial: { y: "-110%" },
                        hovered: { y: 0 },
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                        delay: 0.015 * index,
                      }}
                      key={index}
                      className="inline-block"
                    >
                      {letter === " " ? (
                        <span className="w-5 inline-block"></span>
                      ) : (
                        letter
                      )}
                    </motion.span>
                  ))}
                </div>
              </motion.h1>

              <div className="flex md:gap-4 gap-1 md:text-3xl text-lg">
                <span>&gt;</span>
                <span>
                  <Typewriter
                    words={[
                      "Front-end Developer",
                      "Backend Developer",
                      "Database Manager",
                    ]}
                    loop={true}
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={2500}
                  />
                  <Cursor />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-word-secondary text-sm">
                {"// you can find source code on github"}
              </p>
              <p className="md:text-sm text-xs break-words">
                <span className="text-blue">const</span>{" "}
                <span className="text-green">githubLink</span>{" "}
                <span className="text-white">=</span>{" "}
                <a
                  href="https://github.com/sandeep-rajputt/developers-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange pb-[1px] border-b border-orange no-underline"
                >
                  &quot;/developers-portfolio&quot;
                </a>
              </p>
              <button
                className="px-5 w-fit mt-3 flex gap-2 items-center rounded-md backdrop-blur-md bg-white/5 text-white text-sm py-2 hover:bg-dark-fourth/50 hover:transform hover:scale-105 transition-all"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume.pdf";
                  link.download = "resume.pdf";
                  link.click();
                }}
              >
                <span>Resume</span>
                <MdFileDownload />
              </button>
            </div>
          </div>
          <div className="z-[999999] hidden lg:flex  justify-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="bg-custom-gradient rounded-lg w-[380px] h-[330px] p-[22px] relative"
            >
              <div className="w-full h-full bg-[#062231] rounded-md flex flex-col items-center justify-center">
                <img
                  draggable={false}
                  className="w-28 rounded-full mb-4"
                  src="/me.jpg"
                  alt="Sandeep Rajput"
                />
                <div className="text-white flex flex-col items-center opacity-80">
                  <p className="text-lg">
                    &lt;<span className="text-green">h1</span>&gt;Sandeep
                    Rajput&lt;/
                    <span className="text-green">h1</span>&gt;
                  </p>
                  <p className="text-sm">
                    &lt;<span className="text-green">p</span>&gt;Front-end
                    developer&lt;/<span className="text-green">p</span>&gt;
                  </p>
                  <div></div>
                </div>
              </div>
              <img
                draggable={false}
                className="absolute top-1 left-1"
                src="/bolt/bolt-up-left.svg"
                alt="bolt"
              />
              <img
                draggable={false}
                className="absolute top-1 right-1"
                src="/bolt/bolt-up-right.svg"
                alt="bolt"
              />
              <img
                draggable={false}
                className="absolute bottom-1 left-1"
                src="/bolt/bolt-down-left.svg"
                alt="bolt"
              />
              <img
                draggable={false}
                className="absolute bottom-1 right-1"
                src="/bolt/bolt-down-right.svg"
                alt="bolt"
              />
            </motion.div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Home;

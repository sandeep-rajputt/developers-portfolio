import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AboutMe from "./Pages/AboutMe.jsx";
import Projects from "./Pages/Projects.jsx";
import ContactMe from "./Pages/ContactMe.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "./Transition.jsx";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext.js";
const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { handleIsMobile } = useContext(ThemeContext);

  useEffect(() => {
    handleIsMobile();
  }, []);

  return (
    <div className="flex items-center justify-center bg-dark-secondary min-h-screen  md:h-screen p-6 font-firacode overflow-hidden">
      <>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%", transition: { duration: 0.5, delay: 0.5 } }}
          onAnimationComplete={() => {
            setLoading(false);
          }}
          className="h-full min-h-[calc(100vh-48px)] bg-dark rounded-md border border-border grid grid-rows-[auto_1fr_auto]"
        >
          <AnimatePresence>
            <>
              {!loading && (
                <>
                  <Header />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                    }}
                    className={"overflow-hidden z-10"}
                  >
                    <AnimatePresence mode="await">
                      <Routes location={location} key={location.pathname}>
                        <Route index element={<Home />} />
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact-me" element={<ContactMe />} />
                      </Routes>
                    </AnimatePresence>
                  </motion.div>
                  <Footer />
                </>
              )}
            </>
          </AnimatePresence>
        </motion.div>
        {location.pathname === "/" && !loading && (
          <>
            <Transition navbar={false}>
              <motion.div className="opacity-50 blur-[70px] rounded-full bg-custom-radial-gradient-1 h-[400px] w-[400px]  absolute bg-transparent top-[30%] translate-y-[-50%] md:left-[40%] right-0 z-0"></motion.div>
              <motion.div className="opacity-50 blur-[70px] rounded-full bg-custom-radial-gradient-2 h-[400px] w-[400px] absolute bg-transparent top-[60%] translate-y-[-50%] right-[10%] z-0"></motion.div>
            </Transition>
          </>
        )}
      </>
    </div>
  );
};

export default App;

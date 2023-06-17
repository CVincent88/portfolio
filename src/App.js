import styled from "styled-components";
import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { LanguageProvider, DisplayProvider } from "./utils/context";

import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import DotRing from "./components/DotRing/DotRing";
import DarkScreen from "./components/DarkScreen";
import Contact from "./components/Contact";

const AppWrapper = styled.div`
   width: 100vw;
   height: 100vh;
   position: relative;
   background-color: black;
   overflow: hidden;
`;

function App() {
   const [isMouseOverLink, setIsMouseOverLink] = useState(false);
   const [isMouseOverLetter, setIsMouseOverLetter] = useState(false);
   const [isMouseOverStar, setIsMouseOverStar] = useState(false);
   const [isMouseOverInput, setIsMouseOverInput] = useState(false);
   const [isContactFormOpen, setIsContactFormOpen] = useState(false);

   return (
      <AppWrapper className="App" id="App">
         <Router>
            <LanguageProvider>
               <DisplayProvider>
                  {/* <BackgroundImage
                     url={littlePrince}
                     backgroundopacity={0.4}
                  ></BackgroundImage> */}
                  <DotRing
                     isMouseOverLink={isMouseOverLink}
                     isMouseOverLetter={isMouseOverLetter}
                     isMouseOverStar={isMouseOverStar}
                     isMouseOverInput={isMouseOverInput}
                  />
                  <Header
                     isMouseOverLink={isMouseOverLink}
                     setIsMouseOverLink={setIsMouseOverLink}
                     setIsContactFormOpen={setIsContactFormOpen}
                  />
                  <DarkScreen setIsMouseOverStar={setIsMouseOverStar} />
                  <Contact
                     isContactFormOpen={isContactFormOpen}
                     setIsContactFormOpen={setIsContactFormOpen}
                     setIsMouseOverStar={setIsMouseOverStar}
                     setIsMouseOverInput={setIsMouseOverInput}
                  />
                  <AnimatePresence mode="wait">
                     <Routes>
                        <Route
                           path="/"
                           element={
                              <Hero
                                 setIsMouseOverLetter={setIsMouseOverLetter}
                                 setIsMouseOverStar={setIsMouseOverStar}
                              />
                           }
                        />
                        <Route path="/about" element={<About />} />
                        <Route
                           path="/projects"
                           element={
                              <Projects
                                 setIsMouseOverLink={setIsMouseOverLink}
                              />
                           }
                        />
                     </Routes>
                  </AnimatePresence>
               </DisplayProvider>
            </LanguageProvider>
         </Router>
      </AppWrapper>
   );
}

export default App;

import styled from "styled-components";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LanguageProvider } from "./utils/context";
import { DisplayProvider } from "./utils/context";

import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import DotRing from "./components/DotRing/DotRing";

const AppWrapper = styled.div`
   width: 100vw;
   height: 100vh;
   position: relative;
   background-color: #393d3f;
`;

function App() {
   const [isMouseOverLink, setIsMouseOverLink] = useState(false);
   const [isMouseOverLetter, setIsMouseOverLetter] = useState(false);

   return (
      <AppWrapper className="App" id="App">
         <Router>
            <LanguageProvider>
               <DisplayProvider>
                  <DotRing
                     isMouseOverLink={isMouseOverLink}
                     isMouseOverLetter={isMouseOverLetter}
                  />
                  <Header
                     isMouseOverLink={isMouseOverLink}
                     setIsMouseOverLink={setIsMouseOverLink}
                  />
                  <Routes>
                     <Route
                        path="/"
                        element={
                           <Hero
                              isMouseOverLetter={isMouseOverLetter}
                              setIsMouseOverLetter={setIsMouseOverLetter}
                           />
                        }
                     />
                     <Route path="/about" element={<About />} />
                  </Routes>
               </DisplayProvider>
            </LanguageProvider>
         </Router>
      </AppWrapper>
   );
}

export default App;

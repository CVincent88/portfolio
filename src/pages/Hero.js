import styled, {keyframes} from "styled-components";
import littlePrince from "../assets/images/the_little_prince_background.jpg";
import { useState, useContext, useEffect } from "react";
import { colors } from "../utils/colors";
import { LanguageContext, DisplayContext } from "../utils/context";
import BackgroundImage from "../components/BackgroundImage";

import { motion } from "framer-motion";

const wiggle = keyframes`
   0%{
      transform: translateY(0) rotate(0deg);
   }
   20%{
      transform: translateY(-3px) rotate(0deg);
   }
   45%{
      transform: translateY(-3px) rotate(20deg);
   }
   50%{
      transform: translateY(-3px) rotate(-20deg);
   }
   55%{
      transform: translateY(-3px) rotate(20deg);
   }
   60%{
      transform: translateY(-3px) rotate(-20deg);
   }
   65%{
      transform: translateY(-3px) rotate(20deg);
   }
   70%{
      transform: translateY(-3px) rotate(0deg);
   }
   100%{
      transform: translateY(0) rotate(0);
   }
`;

const Wrapper = styled.div`
   width: 100vw;
   height: 100vh;
   padding: 0 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
`;

const CaptionWrapper = styled.div`
   display: flex;
`;

const Caption = styled.div`
   position: relative;
   z-index: 2;
   color: white;
   font-family: "League Spartan", sans-serif;
   font-size: 40px;
   transition: transform 0.3s ease-out, color 0.2s ease-out;
   &:hover {
      transform: translateY(-5px);
   }
   &.wiggle{
      animation: ${wiggle} 2.5s cubic-bezier(.35,-0.23,.46,1.26) infinite;
   }
`;

export default function Hero({ setIsMouseOverLetter }) {
   // Hero components state
   const [lettersHovered, setlettersHovered] = useState([]);
   const [lettersHoveredLength, setHoveredLettersLength] = useState(0);

   const { language } = useContext(LanguageContext);
   const {
      backgroundOpacity,
      setBackgroundOpacity,
      isBackgroundOpacityComplete,
      setIsBackgroundOpacityComplete,
   } = useContext(DisplayContext);

   // Main hero caption
   const heroCaption =
      language === "fr"
         ? "Hey ! Moi c'est Côme, développeur web front-end."
         : "Hey ! I'm Côme, front-end web developper.";

   // Splits the caption into single characters whith spaces
   const captionArray = heroCaption.split("");
   var captionArrayWithSpace = [];
   for (var i = 0; i < captionArray.length; i++) {
      captionArrayWithSpace.push(captionArray[i]);
      if (i !== captionArray.length - 1) {
         captionArrayWithSpace.push(" ");
      }
   }

   useEffect(() => {
      applyWiggle();
   }, []);

   function changeBackgroundOpacity(lettersColored, totalCharacters) {
      const numberOfSpaces = heroCaption.split(" ").length - 1;
      const totalLetters = totalCharacters - numberOfSpaces;
      const newOpacity = lettersColored / totalLetters / 2.5;
      const MAX_VALUE = 0.4;

      // If a value already exists for background opacity, return. Else, apply new higher value
      if (newOpacity <= backgroundOpacity) {
         return;
      } else {
         if (newOpacity < MAX_VALUE) {
            setBackgroundOpacity(newOpacity);
         } else {
            setIsBackgroundOpacityComplete(true);
         }
      }
      return;
   }

   // Changes randomly the color of a caracter
   function selectColor(e) {
      var color = colors[Math.floor(Math.random() * colors.length)];
      e.target.style["color"] = color;

      // Adds the colored letter to an array to keep track
      if (!lettersHovered.includes(e.target.getAttribute("data-key"))) {
         setlettersHovered([
            ...lettersHovered,
            e.target.getAttribute("data-key"),
         ]);
         setHoveredLettersLength(lettersHoveredLength + 1);
      }

      // If background is not already complete
      if (
         lettersHoveredLength <= heroCaption.length &&
         !isBackgroundOpacityComplete
      ) {
         changeBackgroundOpacity(lettersHoveredLength, captionArray.length);
      }
   }

   function applyWiggle() {
      let letter = document.querySelector('[data-index="0"]');
      letter.classList.add("wiggle");
   }
   function removeWiggle() {
      let letter = document.querySelector('[data-index="0"]');
      letter.classList.remove("wiggle");
   }

   function handleOnMouseEntersLetter(e) {
      selectColor(e);
      setIsMouseOverLetter(true);
      removeWiggle()
   }
   function handleOnMouseLeavesLetter(e) {
      setIsMouseOverLetter(false);
   }

   function handleOnMouseEnterWhitespace(e) {
      setIsMouseOverLetter(true);
   }

   function handleOnMouseLeavesWhitespace(e) {
      setIsMouseOverLetter(false);
   }

   return (
      <motion.div
         initial={{ x: 150, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         exit={{ x: -150, opacity: 0 }}
         transition={{ opacity: { duration: 0.5 }, duration: 0.3 }}
      >
         <Wrapper>
            <BackgroundImage
               backgroundopacity={backgroundOpacity}
               url={littlePrince}
            />
            <motion.div
               initial={{ y: -150, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: 150, opacity: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
            >
               <CaptionWrapper>
                  {captionArray.map((letter, index) => {
                     if (letter === " ")
                        return (
                           <Caption
                              key={index}
                              data-key={`${index}-whitespace`}
                              onMouseEnter={(e) =>
                                 handleOnMouseEnterWhitespace(e)
                              }
                              onMouseLeave={(e) =>
                                 handleOnMouseLeavesWhitespace(e)
                              }
                           >
                              &nbsp;
                           </Caption>
                        );
                     else
                        return (
                           <Caption
                              onMouseEnter={(e) => handleOnMouseEntersLetter(e)}
                              onMouseLeave={(e) => handleOnMouseLeavesLetter(e)}
                              key={index}
                              data-index={index}
                              data-key={`${index}-${letter}`}
                           >
                              {letter}
                           </Caption>
                        );
                  })}
               </CaptionWrapper>
            </motion.div>
         </Wrapper>
      </motion.div>
   );
}

import styled from "styled-components";
import littlePrince from "../assets/images/the_little_prince_background.jpg";
import { useState, useContext } from "react";
import { colors } from "../utils/colors";
import { LanguageContext, DisplayContext } from "../utils/context";
import DarkScreen from "../components/DarkScreen";

const Wrapper = styled.div`
   background-color: #0b0033;
   width: 100vw;
   height: 100vh;
   padding: 40px 20px 0 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
`;

const CaptionWrapper = styled.div`
   display: flex;
`;

const Caption = styled.div`
   postiion: relative;
   z-index: 2;
   color: white;
   font-family: "League Spartan", sans-serif;
   font-size: 40px;
   transition: transform 0.3s ease-out, color 0.1s ease-out;
   &:hover {
      transform: translateY(-5px);
   }
`;

const Background = styled.div`
   width: 100%;
   height: 100%;
   background-image: url(${littlePrince});
   background-size: cover;
   position: absolute;
   top: 0;
   left: 0;
   z-index: 1;
   opacity: ${(props) => props.backgroundopacity};
`;

export default function Hero({ setIsMouseOverLetter }) {
   // Hero components state
   const [lettersHovered, setlettersHovered] = useState([]);
   const [lettersHoveredLength, setHoveredLettersLength] = useState(0);

   const { language } = useContext(LanguageContext);
   const {
      isDarkScreenDisplayed,
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

   function changeBackgroundOpacity(lettersColored, totalCharacters) {
      const numberOfSpaces = heroCaption.split(" ").length - 1;
      const totalLetters = totalCharacters - numberOfSpaces;
      const result = lettersColored / totalLetters / 2.5;
      const MAX_VALUE = 0.4;

      // If a value already exists for background opacity, return. Else, apply new higher value
      if (result <= backgroundOpacity) {
         return;
      } else {
         if (result < MAX_VALUE) {
            setBackgroundOpacity(result);
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

   function handleOnMouseEntersLetter(e) {
      selectColor(e);
      setIsMouseOverLetter(true);
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
      <Wrapper>
         {isDarkScreenDisplayed && <DarkScreen />}
         <Background backgroundopacity={backgroundOpacity} />
         <CaptionWrapper>
            {captionArray.map((letter, index) => {
               if (letter === " ")
                  return (
                     <Caption
                        key={index}
                        data-key={`${index}-whitespace`}
                        onMouseEnter={(e) => handleOnMouseEnterWhitespace(e)}
                        onMouseLeave={(e) => handleOnMouseLeavesWhitespace(e)}
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
                        data-key={`${index}-${letter}`}
                     >
                        {letter}
                     </Caption>
                  );
            })}
         </CaptionWrapper>
      </Wrapper>
   );
}

import styled, { keyframes } from "styled-components";
import { useContext } from "react";
import { LanguageContext, DisplayContext } from "../utils/context";

const pulse = keyframes`
   0%{
      opacity: .5;
      transform: scale(1);
   }
   50%{
      opacity: 1;
      transform: scale(1.2)
   }
   100%{
      opacity: .5;
      transform: scale(1)
   }
`;

const Wrapper = styled.div`
   position: absolute;
   width: 100vw;
   height: 100vh;
   top: 0;
   left: 0;
   background-color: black;
   z-index: 910;
   transition: background-color 2s ease-in, opacity 2s ease-in;
   overflow: hidden;
   &.whiteScreen {
      background-color: white;
   }
   &.fadeOut {
      opacity: 0;
   }
`;

const Caption = styled.span`
   color: white;
   font-family: "Lobster two", sans-serif;
   position: absolute;
   bottom: 10px;
   left: 10px;
   font-size: 20px;
`;

const StarWrapper = styled.div`
   width: 20px;
   height: 20px;
   position: absolute;
   top: 10%;
   right: 10%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Star = styled.div`
   width: 2px;
   height: 2px;
   background-color: white;
   box-shadow: 0 0 5px 7px white;
   border-radius: 50%;
   animation: ${pulse} 1s infinite;
   transition: transform 2s ease-in;
   transform-origin: center;
   &.bigStar {
      transform: scale(300);
   }
`;

export default function DarkScreen({ setIsMouseOverStar }) {
   const { language } = useContext(LanguageContext);
   const { isDarkScreenDisplayed, setIsDarkScreenDisplayed } =
      useContext(DisplayContext);

   const explorationCaption =
      language === "fr" ? (
         <Caption>
            Dans l'obscurité, la curiosité mène à de bien belles découvertes.
         </Caption>
      ) : (
         <Caption>
            In darkness, curiosity leads to the greatest surprises.
         </Caption>
      );

   function handleOnHoverStar(e) {
      const star = e.target.children[0] || e.target;
      star.classList.add("bigStar");
      const darkScreen = e.target.closest("#darkScreen");
      darkScreen.classList.add("whiteScreen");
      setTimeout(() => {
         darkScreen.classList.add("fadeOut");
         setTimeout(() => {
            setIsDarkScreenDisplayed(false);
         }, 2000);
      }, 2000);
   }

   return (
      <>
         {isDarkScreenDisplayed && (
            <Wrapper id="darkScreen">
               {explorationCaption}
               <StarWrapper
                  onClick={(e) => handleOnHoverStar(e)}
                  onMouseEnter={() => setIsMouseOverStar(true)}
                  onMouseLeave={() => setIsMouseOverStar(false)}
               >
                  <Star></Star>
               </StarWrapper>
            </Wrapper>
         )}
      </>
   );
}

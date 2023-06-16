import styled from "styled-components";
import { useContext } from "react";
import { LanguageContext } from "../utils/context";

const Wrapper = styled.div``;

const Text = styled.span`
   color: white;
   text-transform: uppercase;
`;

export default function LanguageSelection({ isMouseOverLink, setIsMouseOverLink }) {
   const { switchLanguage, language } = useContext(LanguageContext);
   return (
      <Wrapper
         onClick={() => switchLanguage()}
         onMouseEnter={() => setIsMouseOverLink((isMouseOverLink = true))}
         onMouseLeave={() => setIsMouseOverLink((isMouseOverLink = false))}
      >
         <Text>
            {language === 'fr' ? 'en' : 'fr'}
         </Text>
      </Wrapper>
   );
}

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { LanguageContext } from "../utils/context";

const Wrapper = styled.div``;

const Icon = styled(FontAwesomeIcon)`
   color: white;
   width: 20px;
   height: 20px;
`;

export default function LanguageSelection({ isMouseOverLink, setIsMouseOverLink }) {
   const { switchLanguage } = useContext(LanguageContext);
   return (
      <Wrapper
         onClick={() => switchLanguage()}
         onMouseEnter={() => setIsMouseOverLink((isMouseOverLink = true))}
         onMouseLeave={() => setIsMouseOverLink((isMouseOverLink = false))}
      >
         <Icon icon={faEarthEurope} />
      </Wrapper>
   );
}

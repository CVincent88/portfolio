import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../utils/context";
import LanguageSelection from "./LanguageSelection";

const Wrapper = styled.div`
   height: 60px;
   width: 100%;
   padding: 10px 30px;
   position: fixed;
   top: 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: transparent;
   z-index: 900;
`;
const LinkWrapper = styled.div`
   display: flex;
   gap: 15px;
`;

const NavbarLink = styled(Link)`
   text-decoration: none;
   font-family: "League Spartan", sans-serif;
   font-size: 20px;
   color: white;
   &:hover {
      color: red;
   }
`;

export default function Header({ isMouseOverLink, setIsMouseOverLink }) {
   const { language } = useContext(LanguageContext);

   return (
      <Wrapper id="header">
         <LanguageSelection
            isMouseOverLink={isMouseOverLink}
            setIsMouseOverLink={setIsMouseOverLink}
         />
         <LinkWrapper>
            <NavbarLink
               to="/"
               onMouseEnter={() => setIsMouseOverLink((true))}
               onMouseLeave={() => setIsMouseOverLink((false))}
            >
               {language === "fr" ? "Accueil" : "Home"}
            </NavbarLink>
            <NavbarLink
               to="/about"
               onMouseEnter={() => setIsMouseOverLink((true))}
               onMouseLeave={() => setIsMouseOverLink((false))}
            >
               {language === "fr" ? "À propos" : "About"}
            </NavbarLink>
            <NavbarLink
               to="/skills"
               onMouseEnter={() => setIsMouseOverLink((true))}
               onMouseLeave={() => setIsMouseOverLink((false))}
            >
               {language === "fr" ? "Compétences" : "Skills"}
            </NavbarLink>
            <NavbarLink
               to="/Projects"
               onMouseEnter={() => setIsMouseOverLink((true))}
               onMouseLeave={() => setIsMouseOverLink((false))}
            >
               {language === "fr" ? "Projets" : "Projects"}
            </NavbarLink>
         </LinkWrapper>
      </Wrapper>
   );
}

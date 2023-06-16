import styled from "styled-components";
import { useContext } from "react";
import { LanguageContext } from "../utils/context";
import LanguageSelection from "./LanguageSelection";
import NavbarLink from "./NavBarLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
   align-items: center;
   gap: 20px;
`;
const ContactButton = styled.span`
   font-family: "League Spartan", sans-serif;
   font-size: 20px;
   color: white;
   display: inline-block;
   position: relative;
   text-decoration: none;
   margin: 0 var(--spacing, 0px);
   transition: margin 0.25s;
`;

const Icon = styled(FontAwesomeIcon)`
   width: 20px;
   height: 20px;
   color: white;
   transition: color 0.3s;
   transform: translateY(2px);
   &:hover {
      color: #3eb4e7;
   }
`;

export default function Header({
   isMouseOverLink,
   setIsMouseOverLink,
   setIsContactFormOpen,
}) {
   const { language } = useContext(LanguageContext);

   return (
      <Wrapper id="header">
         <ContactButton
            onClick={() => setIsContactFormOpen(true)}
            onMouseEnter={() => setIsMouseOverLink(true)}
            onMouseLeave={() => setIsMouseOverLink(false)}
         >
            <Icon icon={faEnvelope} />
         </ContactButton>
         <LinkWrapper>
            <NavbarLink
               path={""}
               text={language === "fr" ? "Accueil" : "Home"}
               setIsMouseOverLink={setIsMouseOverLink}
            />
            <NavbarLink
               path={"about"}
               text={language === "fr" ? "À propos" : "About"}
               setIsMouseOverLink={setIsMouseOverLink}
            />
            <NavbarLink
               path={"projects"}
               text={language === "fr" ? "Projets" : "Projects"}
               setIsMouseOverLink={setIsMouseOverLink}
            />
            <LanguageSelection
               isMouseOverLink={isMouseOverLink}
               setIsMouseOverLink={setIsMouseOverLink}
            />
         </LinkWrapper>
      </Wrapper>
   );
}

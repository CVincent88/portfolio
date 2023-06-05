import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../utils/context";

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 10px 30px;
   postition: fixed;
   top: 0;
   display: flex;
   justify-content: end;
`;
const LinkWrapper = styled.div`
   display: flex;
   gap: 15px
`;

const NavbarLink = styled(Link)`
   text-decoration: none;
`;

export default function Header() {

   const { switchLanguage, language} = useContext(LanguageContext);

   return (
      <Wrapper id="header">
         <span onClick={() => switchLanguage()}>lang</span>
         <LinkWrapper>
            <NavbarLink to="/">{language === 'fr' ? 'Accueil' : 'Home'}</NavbarLink>
            <NavbarLink to="/about">{language === 'fr' ? 'À propos' : 'About'}</NavbarLink>
            <NavbarLink to="/skills">{language === 'fr' ? 'Compétences' : 'Skills'}</NavbarLink>
            <NavbarLink to="/Projects">{language === 'fr' ? 'Projets' : 'Projects'}</NavbarLink>
         </LinkWrapper>
      </Wrapper>
   );
}

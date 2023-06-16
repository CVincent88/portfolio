import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
   font-family: "League Spartan", sans-serif;
   font-size: 20px;
   color: white;
   display: inline-block;
   position: relative;
   text-decoration: none;
   margin: 0 var(--spacing, 0px);
   transition: margin 0.25s;
   & .svg {
      width: 76px;
      height: 40px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 7px) translateZ(0);
      fill: none;
      stroke: var(--stroke, var(--line));
      stroke-linecap: round;
      stroke-width: 2px;
      stroke-dasharray: var(--offset, 69px) 278px;
      stroke-dashoffset: 361px;
      transition: stroke 0.25s ease var(--stroke-delay, 0s),
         stroke-dasharray 0.35s;
   }
   &:hover {
      --spacing: 4px;
      --stroke: #b0bfec;
      --stroke-delay: 0.1s;
      --offset: 180px;
   }
`;

export default function NavbarLink({ path, text, setIsMouseOverLink }) {
   return (
      <Wrapper
         to={`/${path}`}
         onMouseEnter={() => setIsMouseOverLink(true)}
         onMouseLeave={() => setIsMouseOverLink(false)}
      >
         <svg className="svg" viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
         </svg>
         <span>{text}</span>
      </Wrapper>
   );
}
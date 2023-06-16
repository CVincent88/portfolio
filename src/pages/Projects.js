import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { projects } from "../utils/ProjectList";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import BackgroundImage from "../components/BackgroundImage";
import desertNuit from "../assets/images/desert_nuit.jpg";

const Wrapper = styled(motion.div)`
   width: 100vw;
   height: 100vh;
   background-color: rgba(35, 37, 52, 0.795);
   display: flex;
   justify-content: center;
   align-items: end;
   padding-right: 20px;

   &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: fixed;
      pointer-events: none;
      background: radial-gradient(
         circle 15vmax at var(--cursorX) var(--cursorY),
         rgba(13, 16, 37, 0) 0%,
         rgba(13, 16, 37, 0.5) 80%,
         rgba(13, 16, 37, 0.95) 100%
      );
   }
`;

const ProjectsWrapper = styled.div`
   width: 100%;
   display: flex;
   align-items: end;
   height: 60%;
   position: relative;
   z-index: 10;
`;

const ImagesWrapper = styled(motion.div)`
   position: relative;
   width: 50%;
   height: 100%;
   aspect-ratio: 1;
   border-radius: 3px;
   overflow: hidden;
`;

const SingleImage = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   background-image: url(${(props) => props.url});
   background-size: cover;
   opacity: 0;
   transition: opacity 0.3s;
   background-position: center;
   &.active {
      opacity: 1;
   }
`;

const LinkContainer = styled.div`
   display: flex;
   gap: 20px;
   margin-top: 20px;
`;

const Icon = styled(FontAwesomeIcon)`
   width: 30px;
   height: 30px;
   color: white;
   transition: color 0.3s;
   &:hover {
      color: #3eb4e7;
   }
`;

const Title = styled.div`
   font-family: "League Spartan";
   font-size: 40px;
   color: white;
   -webkit-text-stroke: 1px;
   -webkit-text-fill-color: transparent;
`;

const TextWrapper = styled(motion.div)`
   margin-left: 40px;
   height: 100%;
   overflow: auto;
`;

const TextContent = styled(Link)`
   padding: 10px;
   text-decoration: none;
   display: block;
   &:not(:last-child) {
      border-bottom: 1px solid white;
   }
`;
const Description = styled.div`
   max-height: 0;
   transition: max-height 0.2s ease-out;
   overflow: hidden;
   color: white;
`;

export default function Projects({ setIsMouseOverLink }) {
   function activateFirstProject() {
      let firsProjectDescription = document.querySelector(".description");
      firsProjectDescription.style.maxHeight =
         firsProjectDescription.scrollHeight + "px";
      firsProjectDescription.classList.add("active");
      firsProjectDescription.setAttribute("data-active", "true");

      let id = firsProjectDescription.parentElement.getAttribute("id");
      let image = document.querySelector(`#image-${id}`);
      image.classList.add("active");
   }

   useEffect(() => {
      activateFirstProject();
   }, []);

   function handleOnHoverTitle(e) {
      triggerAccordion(e);
      triggerImage(e);
   }

   function triggerAccordion(e) {
      let activeProjectDescription = document.querySelector(
         '[data-active="true"]'
      );
      let acc = e.currentTarget.querySelector(".description");

      if (acc !== activeProjectDescription) {
         activeProjectDescription.style.maxHeight = null;
         activeProjectDescription.setAttribute("data-active", "false");
      }

      if (!acc.style.maxHeight) {
         acc.style.maxHeight = acc.scrollHeight + "px";
         acc.setAttribute("data-active", "true");
      }
   }

   function triggerImage(e) {
      let activeProjectImage = document.querySelector(".image.active");
      let id = e.currentTarget.getAttribute("id");
      let image = document.querySelector(`#image-${id}`);

      if (image !== activeProjectImage) {
         activeProjectImage.classList.remove("active");
         image.classList.add("active");
      }
   }

   function update(e) {
      var x = e.clientX || e.touches[0].clientX;
      var y = e.clientY || e.touches[0].clientY;

      document.documentElement.style.setProperty("--cursorX", x + "px");
      document.documentElement.style.setProperty("--cursorY", y + "px");
   }

   document.addEventListener("mousemove", update);
   document.addEventListener("touchmove", update);

   return (
      <Wrapper
         initial={{ x: 150, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.3 }}
      >
         {/* <BackgroundImage
            url={desertNuit}
            backgroundopacity={0.2}
         ></BackgroundImage> */}
         <ProjectsWrapper>
            <ImagesWrapper
               id="imageswrapper"
               initial={{ y: 150, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: -150, opacity: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
            >
               {projects.map((project, index) => (
                  <SingleImage
                     key={index}
                     url={project.image}
                     id={`image-${project.id}`}
                     data-active="false"
                     className="image"
                  />
               ))}
            </ImagesWrapper>
            <TextWrapper
               initial={{ y: -150, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: 150, opacity: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
            >
               {projects.map((project, index) => (
                  <TextContent
                     key={`${index}-${project.title}`}
                     id={project.id}
                     onMouseEnter={(e) => handleOnHoverTitle(e)}
                     onMouseLeave={(e) => handleOnHoverTitle(e)}
                     to={`${project.link.web}`}
                     target="_blank"
                  >
                     <Title className="title">{project.title}</Title>
                     <Description className="description" data-active="false">
                        {project.description}
                        <LinkContainer>
                           {project.link.web && (
                              <Icon
                                 icon={faGlobe}
                                 onMouseEnter={() => setIsMouseOverLink(true)}
                                 onMouseLeave={() => setIsMouseOverLink(false)}
                              />
                           )}
                           {project.link.github && (
                              <Icon
                                 icon={faGithub}
                                 onMouseEnter={() => setIsMouseOverLink(true)}
                                 onMouseLeave={() => setIsMouseOverLink(false)}
                              />
                           )}
                        </LinkContainer>
                     </Description>
                  </TextContent>
               ))}
            </TextWrapper>
         </ProjectsWrapper>
      </Wrapper>
   );
}

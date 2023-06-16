import { motion } from "framer-motion";
import styled from "styled-components";
import night from "../assets/images/night.webp";
import BackgroundImage from "../components/BackgroundImage";
import { useContext } from "react";
import { LanguageContext } from "../utils/context";
import SkillsCanvas from "../components/SkillsCanvas";

const Wrapper = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 20px;
   gap: 40px;
   background-color: rgba(35, 37, 52, 0.795);
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

const TextWrapper = styled(motion.div)`
   flex: 1 1 50%;
   position: relative;
   z-index: 10;
   font-family: "Roboto", sans-serif;
   line-height: 30px;
   padding: 20px;
   opacity: 1;
   border-radius: 10px;
   color: white;
`;

const Text = styled.p`
   font-size: 20px;
   color: #b0afaf;
`;
const Title = styled.p`
   font-size: 40px;
   margin-bottom: 30px;
`;
const Subtitle = styled.p`
   font-size: 30px;
   margin-bottom: 30px;
`;

const SkillsWrapper = styled(motion.div)`
   flex: 1 1 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   z-index: 10;
`;

export default function About() {
   let { language } = useContext(LanguageContext);

   const subtitleText =
      language === "fr"
         ? "Développeur web front-end"
         : "Front-end web developper";

   const descriptionText =
      language === "fr"
         ? <p>Je suis un développeur web front-end passionné par la création d'expériences interactives et engageantes en ligne. Avec une première expérience professionnelle dans le développement web, je continue à me former aux dernières tendances et technologies du domaine. Je suis toujours ouvert aux nouvelles opportunités de collaboration et j'apprécie le travail d'équipe pour relever des défis techniques stimulants. <br /> N'hésitez pas à parcourir mes projets présentés ici pour avoir un petit aperçu de mon travail. Si vous avez des questions ou souhaitez discuter d'un projet potentiel, n'hésitez pas à me contacter. Je serais ravi de discuter avec vous !</p>
         : <p>I am a passionate front-end web developer who thrives on creating interactive and engaging online experiences. With initial professional experience in web development, I continue to stay abreast of the latest trends and technologies in the field. I am always open to new collaboration opportunities and enjoy working in a team to tackle exciting technical challenges. <br /> Feel free to browse through my showcased projects here for a glimpse of my work. If you have any questions or would like to discuss a potential project, please don't hesitate to contact me. I would be delighted to chat with you!</p>;

   function update(e) {
      var x = e.clientX || e.touches[0].clientX;
      var y = e.clientY || e.touches[0].clientY;

      document.documentElement.style.setProperty("--cursorX", x + "px");
      document.documentElement.style.setProperty("--cursorY", y + "px");
   }

   document.addEventListener("mousemove", update);
   document.addEventListener("touchmove", update);

   return (
      <motion.div
         initial={{ x: 150, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         exit={{ x: -150, opacity: 0 }}
         transition={{ opacity: { duration: 0.5 }, duration: 0.3 }}
      >
         <Wrapper id="Wrapper">
            {/* <BackgroundImage
               url={night}
               backgroundopacity={.8}
            ></BackgroundImage> */}
            <TextWrapper
               initial={{ y: -150, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: 150, opacity: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
            >
               <Title>Côme Vincent</Title>
               <Subtitle>{subtitleText}</Subtitle>
               <Text>{descriptionText}</Text>
            </TextWrapper>

            <SkillsWrapper
               initial={{ y: 150, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: -150, opacity: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
            >
               <SkillsCanvas />
            </SkillsWrapper>
         </Wrapper>
      </motion.div>
   );
}

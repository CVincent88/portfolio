import { useState } from "react";
import styled from "styled-components";
import FormInput from "./FormInput";

import { useContext } from "react";
import { LanguageContext } from "../utils/context";

const Wrapper = styled.div`
   position: absolute;
   width: 100vw;
   height: 100vh;
   top: 0;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   transform: scale(${(props) => (props.open ? "1" : "0")});
   opacity: ${(props) => (props.open ? "1" : "0")};
   background-color: #1f1e1eec;
   border-radius: 5px;
   z-index: 990;
   transition: transform 0.3s, opacity .2s;
`;

const Close = styled.div`
   width: 30px;
   height: 30px;
   position: absolute;
   top: 50px;
   right: 50px;
   &::before {
      content: "";
      width: 100%;
      height: 2px;
      background-color: white;
      position: absolute;
      top: 0;
      left: 0;
      transform: rotate(45deg);
      display: inline-block;
      transform-origin: center;
   }
   &::after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: white;
      position: absolute;
      top: 0;
      left: 0;
      transform: rotate(-45deg);
      display: inline-block;
      transform-origin: center;
   }
`;

const InnerContainer = styled.div`
   width: 80%;
   height: 90%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

const Header = styled.div`
   display: flex;
   flex-direction: column;
`;

const Title = styled.h3`
   text-align: center;
   margin-bottom: 20px;
   color: #f9f9f9;
   font-family: "Dosis", sans-serif;
   font-weight: 500;
   font-size: 26px;
   letter-spacing: 1px;
`;

const Text = styled.p`
   color: #f9f9f9;
   font-family: "Titillium Web", sans-serif;
   font-style: italic;
   font-weight: 100;
   text-align: center;
   margin-bottom: 20px;
   padding: 0 10px;
`;

const FormContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   max-width: 500px;
   padding: 0 30px;
`;

const SubmitButton = styled.a`
   font-family: "Dosis", sans-serif;
   text-decoration: none;
   border-radius: 4px;
   padding: 10px 15px;
   background-color: #444444;
   margin-top: 15px;
   border: 1px solid #f9f9f9;
   color: #f9f9f9;
   outline: none;
   transition: all 0.3s linear;
   &:hover {
      background-color: #f9f9f9;
      color: #444444;
   }
   &:active {
      background-color: #f9f9f9;
      color: #444444;
   }
`;

export default function Contact({
   isContactFormOpen,
   setIsContactFormOpen,
   setIsMouseOverStar,
   setIsMouseOverInput,
}) {
   const [name, setName] = useState("");
   const [object, setObject] = useState("");
   const [message, setMessage] = useState("");

   const { language } = useContext(LanguageContext);

   return (
      <Wrapper id="contact" open={isContactFormOpen}>
         <Close
            onClick={() => setIsContactFormOpen(false)}
            onMouseEnter={() => setIsMouseOverStar(true)}
            onMouseLeave={() => setIsMouseOverStar(false)}
         />
         <InnerContainer>
            <Header>
               <Title>Contact</Title>
               <Text>
                  {language === "fr" ? (
                     <span>
                        Pour plus d'information, <br /> n'hésitez pas à
                        m'envoyer un message !
                     </span>
                  ) : (
                     <span>
                        For more information, <br />
                        do not hesitate to send me a message
                     </span>
                  )}
               </Text>
            </Header>
            <FormContainer>
               <FormInput
                  type="text"
                  placeholder={language === "fr" ? "Nom" : "Name"}
                  value={name}
                  onChange={setName}
                  setIsMouseOverInput={setIsMouseOverInput}
               />
               <FormInput
                  type="text"
                  placeholder={language === "fr" ? "Objet" : "Object"}
                  value={object}
                  onChange={setObject}
                  setIsMouseOverInput={setIsMouseOverInput}
               />
               <FormInput
                  type="textarea"
                  placeholder={
                     language === "fr" ? "Votre message" : "Your message"
                  }
                  value={message}
                  onChange={setMessage}
                  setIsMouseOverInput={setIsMouseOverInput}
               />
               <SubmitButton
                  href={`mailto:come.vincent@live.fr?subject=${name} - ${object}&body=${message}`}
                  onMouseEnter={() => setIsMouseOverInput(true)}
                  onMouseLeave={() => setIsMouseOverInput(false)}
               >
                  Envoyer
               </SubmitButton>
            </FormContainer>
         </InnerContainer>
      </Wrapper>
   );
}

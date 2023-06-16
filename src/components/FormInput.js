import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
   background-color: #fff;
   padding: 10px 0 10px 0;
   margin: 5px 0;
   display: flex;
   flex-direction: column;
   position: relative;
   width: 100%;
   border-radius: 3px;
`;

const FloatingText = styled.span`
   font-family: "Dosis", sans-serif;
   position: absolute;
   top: 3px;
   opacity: ${(props) => (props.visible ? "1" : "0")};
   transform: ${(props) =>
      props.visible ? "translateY(0)" : "translateY(10px)"};
   color: #000;
   font-size: 10px;
   padding-left: 3px;
   transition: all 0.2s linear;
   color: rgb(0, 121, 190);
`;

const Placeholder = styled.span`
   font-family: "Dosis", sans-serif;
   padding-top: 7px;
   position: absolute;
   left: 5px;
   color: rgba(0, 0, 0, 0.6);
   opacity: ${(props) => (props.visible ? "1" : "0")};
   transform: ${(props) =>
      props.visible ? "translateY(0)" : "translateY(-50%)"};
   transition: all 0.2s linear;
   pointer-events: none;
`;

const Input = styled.input`
   background-color: transparent;
   height: 100%;
   outline: none;
   padding: 5px 5px 2px 5px;
   border: none;
   font-size: 16px;
   &::placeholder {
      font-size: 15px;
   }
   z-index: 99;
`;

const TextArea = styled.textarea`
   background-color: transparent;
   height: 100%;
   outline: none;
   padding: 5px 5px 2px 5px;
   border: none;
   font-family: "Dosis", sans-serif;
   font-size: 16px;
   &::placeholder {
      font-size: 15px;
   }
   z-index: 99;
   resize: none;
`;

function FormInput({ type, placeholder, onChange, setIsMouseOverInput }) {
   const [floatingTextVisibility, setFloatingTextVisibility] = useState(false);
   const [placeholderVisibility, setPlaceholderVisibility] = useState(true);

   const handleOnChange = (text) => {
      onChange(text);

      if (text.length > 0) {
         setFloatingTextVisibility(true);
         setPlaceholderVisibility(false);
      } else {
         setFloatingTextVisibility(false);
         setPlaceholderVisibility(true);
      }
   };

   return (
      <Container
         onMouseEnter={() => setIsMouseOverInput(true)}
         onMouseLeave={() => setIsMouseOverInput(false)}
      >
         {type === "text" ? (
            <Input
               type={type}
               onChange={(e) => handleOnChange(e.target.value)}
            />
         ) : (
            <TextArea
               rows={5}
               onChange={(e) => handleOnChange(e.target.value)}
            />
         )}
         <Placeholder visible={placeholderVisibility}>
            {placeholder}
         </Placeholder>
         <FloatingText
            visible={floatingTextVisibility}
            className="floating-text"
         >
            {placeholder}
         </FloatingText>
      </Container>
   );
}

export default FormInput;

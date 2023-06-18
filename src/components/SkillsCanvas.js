import TagsCanvas from "react-tags-canvas";
import styled from "styled-components";

const Canvas = styled(TagsCanvas)`
   position: relative;
   z-index: 8;
   width: 80%;
   height: 50%;
`;

export default function SkillsCanvas() {
   return (
      <Canvas
         textColour="white"
         maxSpeed={0.06}
         freezeActive
         shape="sphere"
         zoom={.7}
         noSelect
         // pinchZoom
         decel={.91}
         radiusX={1.8} 
         radiusY={1.8} 
         radiusZ={1.8}
         wheelZoom={false} 
         weightSize={.9} 
         textFont="Poppins"
         tags={[
            { value: "Javascript", weight: 8 },
            { value: "React", weight: 8 },
            { value: "HTML5", weight: 8 },
            { value: "CSS3", weight: 8 },
            { value: "PHP", weight: 8 },
            { value: "Git", weight: 8 },
            { value: "Redux", weight: 8 },
            { value: "NodeJS", weight: 8 },
            { value: "MySQL", weight: 8 },
            { value: "MongoDB", weight: 8 },
            { value: "React Native", weight: 8 },
            { value: "VueJs", weight: 8 },
            { value: "Figma", weight: 8 },
         ]}
      />
   );
}

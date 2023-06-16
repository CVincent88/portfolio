import "./DotRing.css";
import { useMousePosition } from "../../utils/hooks";

export default function DotRing({
   isMouseOverLink,
   isMouseOverLetter,
   isMouseOverStar,
   isMouseOverInput
}) {
   const { x, y } = useMousePosition();
   const classes = [
      "dot ",
      isMouseOverLetter ? " hoverLetter " : "",
      isMouseOverLink ? " hoverLink " : "",
      isMouseOverStar ? " hoverStar " : "",
      isMouseOverInput ? " hoverInput " : "",
   ];
   return (
      <div id="cursor">
         <div
            className={classes.join('')}
            style={{ left: `${x}px`, top: `${y}px` }}
         ></div>
      </div>
   );
}

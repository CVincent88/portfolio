import "./DotRing.css";
import { useMousePosition } from "../../utils/hooks";

export default function DotRing({ isMouseOverLink, isMouseOverLetter }) {
   const { x, y } = useMousePosition();
   return (
      <div>
         {/* 2. */}
         {/* <div style={{ left: `${x}px`, top: `${y}px` }} className="ring"></div> */}
         {/* 3. */}
         {!isMouseOverLetter && !isMouseOverLink && (
            <div
               className="dot"
               style={{ left: `${x}px`, top: `${y}px` }}
            ></div>
         )}
         {isMouseOverLetter && (
            <div
               className="dot hoverLetter"
               style={{ left: `${x}px`, top: `${y}px` }}
            ></div>
         )}
         {isMouseOverLink && (
            <div
               className="dot hoverLink"
               style={{ left: `${x}px`, top: `${y}px` }}
            ></div>
         )}
      </div>
   );
}

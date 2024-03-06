// import { useRef, useState } from "react";

// const Virtualize = ({ list = [], components, threshld = 2, gap = 0 }) => {

//     const [listToRender, setListToRender] = useState({ start: 0, end: 1 });
//     const [elHeight, setElHeight] = useState(0);
//     const parentContainerRef = useRef(null)
    
//     return(
//     <>
//         <div ref={parentContainerRef}>
//                 {
//                     list
//                     ?.slice(listToRender.start , listToRender.end)
//                 }
//         </div>
//     </>
//     ) 
// };

// export default Virtualize
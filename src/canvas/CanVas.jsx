import React, { useRef, useEffect } from "react";
import { mockData } from "../mockData/Mock";
const CanVas = (props) => {
  

 
  return (
    <>
      <canvas ref={canvasRef} width={props.maxWidth/2} height={props.maxHeight/2} {...props} style={{border:'2px solid red'}}></canvas>
    </>
  );
};

export default CanVas;

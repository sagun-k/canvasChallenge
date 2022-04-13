import React, { useRef, useEffect } from "react";
import { mockData, maxValues } from "./mockData/utils";
function App() {
  const canvasRef = useRef(null);
  const draw = (w, h) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.strokeRect(0, 0, w, h);
  };

  const { maxHeight, maxWidth } = maxValues(mockData);

  var loop = mockData.length;

  useEffect(() => {
    while (loop > 0) {
      mockData.map((val) => {
        console.log(val.width/2, val.height/2);
        return draw(val.width / 2, val.height / 2);
      });
      loop--;
    }
  }, [loop]);
  return (
    <canvas
      ref={canvasRef}
      width={maxHeight / 2}
      height={maxWidth / 2}
      style={{ border: "2px solid red" }}
      onClick={(e)=>{
       
        alert(JSON.stringify({width:e.clientX,height:e.clientY}))
      }}
    />
  );
}

export default App;

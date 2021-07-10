import React from "react";

const App =() =>{

const [elements, setElements]=useState([]);
const [drawing, setDrawing]=useState(false);

}
const handleMouseDown=(event)=>{
    setDrawing(true);
}

const handleMouseMove= (event)=>{
    if (!drawing) return;
    const {clientX,clientY};
}

const handleMouseUp=()=>{
    setDrawing(false);
}

return{
    <canvas id="canvas" width={window.innerWidth} height={window.innerHeight}
    onmousedown={handleMouseDown}
    onmousemove={handleMouseMove}
    onmouseup={handleMouseUp}
    >
    Canvas
    </canvas>
}
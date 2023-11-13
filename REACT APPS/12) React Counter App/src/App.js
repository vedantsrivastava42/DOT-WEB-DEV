import React, { useState } from "react";
import "./App.css";

function App() {
  const[count,setCount] =useState(0);
  function decrease(){
    setCount(count-1);
  }
  function increase(){
    setCount(count+1);
  }
  function reset(){
    setCount(0);
  }
  return (
<div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
  <div className="text-[#0398d4] font-medium text-[20px]">Increment & Decrement</div>
  <div className="flex bg-white text-[25px] text-[#344151] rounded-sm gap-12 p-3 px-5">
  <button onClick={decrease} className="border-r-2 border-[#bfbfbf] pr-5 text-center w-20 text-5xl">
    -
  </button>
  <div className="text-5xl font-bold">{count}
  </div>
  <button onClick={increase} className="border-l-2 border-[#bfbfbf] pl-5 text-center w-20 text-5xl">
    +
  </button>
</div>
<button onClick={reset} className="bg-[#0398d4] text-white p-5 py-2 rounded-sm text-lg">
  Reset
</button>
</div>


  );
}

export default App;

import React from 'react'
import Random from "./components/Random";
import Tag from "./components/Tag";

// axios is a package to run HTTP request. JSON format is not needed 
const App = () => {
  return (
   <div className="background w-full h-screen flex flex-col overflow-x-hidden items-center  py-8">
    <h1 className="w-11/12 bg-white rounded-lg text-center py-2 px-10 text-3xl font-bold uppercase"> Random GIFS</h1>
    <div className="flex flex-col w-full items-center mt-[30px] gap-y-10">
    <Tag/> 
    <Random/>
    </div>
   </div>
  )
}

export default App
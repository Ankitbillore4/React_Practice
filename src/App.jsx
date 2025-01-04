import React from "react";
import { useState } from "react";

function App(){
  // useState Basic
  const [data,UpdateData] =  useState(10);
  return(
    <div className="p-5">
      <h1>{data}</h1>
      <button onClick={()=>UpdateData(20)} className="text-xs bg-blue-500 text-white px-2 py-1 mt-2 rounded-full">Update</button>
    </div>
  )
}

export default App;
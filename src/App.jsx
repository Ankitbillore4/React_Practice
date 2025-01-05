import React from "react";
import { useState } from "react";

function App(){
  // useState Advanced
  const [val,updateVal] =  useState({name:"Ankit",isBanned:false});
  return(
    <div className="p-5">
      <h1>name : {val.name}</h1>
      <h1>isBanned : {val.isBanned.toString()}</h1>
      <button onClick={()=>updateVal({...val,isBanned: !val.isBanned , name: "ankit"})} className="text-xs rounded-full text-white px-2 py-1 bg-blue-400">change</button>
    </div>
  )
}

export default App;
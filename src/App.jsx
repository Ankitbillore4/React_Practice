import React from 'react';
import { useState } from 'react';
function App(){
  // useState Intermideate
  const [score,UpdateScore] = useState(1)
  return(
    <div className='p-5'>
      <h1>{score}</h1>
      <button onClick={()=>UpdateScore((prev)=>prev+1)} className='text-xs text-white mt-2 px-2 py-1 rounded-full bg-blue-500'>update</button>
    </div>
  )
}
export default App
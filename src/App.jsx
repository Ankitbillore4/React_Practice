import React from 'react'
import { useState } from 'react'

function App() {
  const [val,setval] = useState({name:'ankit',age:20})
  return (
    <div>
     <button onClick={async ()=>{
      await setval({...val,gender:'male'});
      await console.log(val);
      
     }
     }>click</button>
    </div>
  )
}

export default App

import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  return (
    <div>
      <h1>Number is  : {num}</h1>
      <button onClick={()=>{
              setnum(num+1)  
              console.log(num);
                    
      }}>Increment</button>
      <button onClick={()=>{
        setnum(num-1)
        console.log(num);

      }}>Decrement</button>

    </div>
  )
}

export default App

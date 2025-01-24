import React from 'react'

const App = () => {
  const handeler = (e)=>{
e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        handeler(e)
        console.log("submited");
        
      }}>
        <label>
          <input className='bg-yellow-200 outline-none ' type="text" placeholder='enter your name' />
        </label>
        <button className='rounded-xl'>Click</button>
      </form>
    </div>
  )
}

export default App

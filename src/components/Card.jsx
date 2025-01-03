import React from 'react';

function create(){
    const data = [
        {name:"Raske Qumar",description:"the name of the device that will be used to connect to the server."},
        {name:"Ashique 2",description:"this verson cal for the device that will be used to connect to the server"},
        {name:"Darde dil",description:"Another version of the device that will be used to connect to the server"}
    ]

const Clicked = ()=>{alert("Song Downloaded...")}

    return (
        <div  className='Main bg-zinc-400 h-screen w-full flex flex-col items-center justify-center gap-2'>
          {data.map((elem,index) =>(
                  <div className='card h-32 w-60 bg-zinc-100 rounded-md px-2 py-2'>
                  <h2 className='text-2xl font-bold'>{elem.name}</h2>
                  <p className='text-xs'>{elem.description}</p>
                  <button onClick={Clicked} className='text-sm px-2 py-1 bg-blue-400 rounded-md mt-2'>Download Now</button>
                 </div>
          ))}
        
        </div>
    )
}

export default create;
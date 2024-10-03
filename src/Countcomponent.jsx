import React, { useState } from 'react'

function Countcomponent() {
    const [count,setCount] = useState(0)
    const minusCounter = () =>{
        setCount(count-1)
    } 
  return (
    <>
    
    <h1>count is -- {count}</h1>
    <button onClick={()=>setCount(count+1)} className='one'>Add</button>
    <button onClick={minusCounter} className='two'>Minus</button>
    <button onClick={()=>setCount(0)} className='three'>Reset</button>
    </>
  )
}

export default Countcomponent
import React, { useState } from 'react'

export default function Body() {
  let [count,setCount] = useState(0);
  function Add(){
    
  }

  return (
    <>
        <div className="container">
        <button className='btn btn-primary'> + </button>
        <p>1</p>
        <button className='btn btn-primary'> - </button>
          
        </div>
    </>
  )
}

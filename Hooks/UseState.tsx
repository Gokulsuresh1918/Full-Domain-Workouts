import React, { useState } from 'react'

const UseState = () => {
    const[count ,setcount]=useState(0)

    function handleClick(): void {
     setcount((prevcount)=>prevcount+1)
    }

  return (
    <div>
        <p>{count}</p>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UseState
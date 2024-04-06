import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const[a,setA]=useState(1)
    const[b,setB ]=useState(1)
    const result=useMemo(()=>{
        let sum=0
        for (let i = 0; i < 1000000000; i++) {
           sum+=i
        }
        return sum
    },[a,b])
  return (
    <div>
    <input type="Number" onChange={(e)=>setA(Number(e.target.value))} />    
    <input type="Number" onChange={(e)=>setB(Number(e.target.value))} />
    </div>
  )
}

export default UseMemo

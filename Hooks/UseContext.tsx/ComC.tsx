import React, { useContext } from 'react'
import { MyContext } from './ComA'

const ComC = () => {
  const a= useContext(MyContext)
  return (
    <div>
        <h1>{`bye${a}`}</h1>
    </div>
  )
}

export default ComC
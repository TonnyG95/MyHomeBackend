import React, { useEffect, useState } from 'react'

function Testing() {

  const [count, setCount] = useState(1)

  useEffect(()=>{
    console.log('this is our use effect')
  }, [])

  function IncreseCount(){
    setCount(current=>current + 1 )
  }

  useEffect(()=>{
    console.log(`The count is: ${count}`)
  }, [count])

  function DecresCount(){
    setCount(current=>current - 1 )
  }

  return (
    <div>
      <h1>The count is: {count}</h1>
      <button onClick={IncreseCount}>increse</button>
      <br />
      <button onClick={DecresCount}>decrese</button>
    </div>
  )
}

export default Testing
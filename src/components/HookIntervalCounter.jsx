import React, { useEffect, useState } from 'react'

function HookIntervalCounter() {
const [count, setCount] = useState(0)

const timer = () => {
    setCount(prevCount=> prevCount + 1)
} 

useEffect(()=>{
    const interval = setInterval(timer, 1000)
    return () => {
        clearInterval(interval)
    }
}, [] )

  return (
    <div>
      <h1
      >{count}
      </h1>
    </div>
  )
}

export default HookIntervalCounter

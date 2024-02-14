import React, {useState} from 'react'

function HookCounterTwo() {
const initialCount = 0
const [count, setCount] = useState(initialCount)

const handleIncreamentFive = () => {
    for(let i=0;i<5;i++){
        setCount(prevCount => prevCount + 1)
    }
}

  return (
    <div>
      count : {count}
      <button onClick={()=>setCount(initialCount)} >Reset</button>
      <button onClick={()=>setCount(prevCount => prevCount + 1)} >+</button>
      <button onClick={()=>setCount(prevCount => prevCount - 1)} >-</button>
      <button onClick={handleIncreamentFive}>+5</button>
    </div>
  )
}

export default HookCounterTwo

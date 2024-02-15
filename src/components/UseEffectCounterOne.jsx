import React, {useState, useEffect} from 'react'

function UseEffectCounterOne() {
const [count, setCount] = useState(0)
const [name, setName] = useState("")

useEffect(()=>{
    console.log('updating title')
    document.title = `you clicked ${count} times`
}, [count] )
// useEffect function runs after first render and after every update in count 
  return (
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
      <button onClick={()=>setCount(prevCount=>prevCount+1)} >clicked {count} times</button>
    </div>
  )
}

export default UseEffectCounterOne

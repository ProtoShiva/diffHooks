import React, { useRef } from "react"

function RefTutorial() {
  const osho = useRef(null)
  function onclick() {
    osho.current.focus()
    console.log(osho.current.value)
  }
  return (
    <>
      <h1>Hello World</h1>
      <input type="text" placeholder="name" ref={osho} />
      <button onClick={onclick}>Submit</button>
    </>
  )
}

export default RefTutorial
//when you feel like you want to manipulate DOM then use this hook

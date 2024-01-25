import React, { useState, createContext } from "react"
import Login from "./Login"
import User from "./User"

export const AppContext = createContext(null)

function ContextTutorial() {
  const [username, setUsername] = useState("")

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
    // {/* <Login setUsername = {setUsername} /> <User username = {username}/> */}
  )
}

export default ContextTutorial
//Context API is used to managed our state very easily. here we don't have to pass info as props to all the components

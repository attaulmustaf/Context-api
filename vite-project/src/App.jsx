import { useState } from 'react'
import Login from './Components/Login/login'
import Profile from './Components/Profile/Profile'
import { LoginContext } from './Contexts/LoginContext'
import Product from './Components/Product/Product'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const [username,setUsername] = useState("")
  // const[showProfile,setShowProfile] = useState(false);

  return (
    
    <div className="App">
      <Product/>
      {/* <LoginContext.Provider value={{username,setUsername,showProfile,setShowProfile}}>
      {showProfile ? <Profile/> :<Login/>}
      </LoginContext.Provider> */}
     </div>
  )
}

export default App

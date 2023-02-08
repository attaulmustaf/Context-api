import { useState } from "react"
import React from 'react'
import { LoginContext } from "../../Contexts/LoginContext"
import { useContext } from "react"

const Login = () => {
  const {setUsername,setShowProfile} = useContext(LoginContext)
      
  return (
    <>
    <input type="text" placeholder="Username...."
    onChange={(event)=>{
         (event.target.value)
    }}
    />

    <br></br>
    <br></br>
    <input type ="text" placeholder="Password..." />
    <button onClick={(e)=>{
    setShowProfile(true)
    }}
    >Login</button>
   
    </>
  )
}

export default Login 
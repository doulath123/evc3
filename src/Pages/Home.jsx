import React from 'react'
import {useState} from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginaction } from '../Redux/auth/action'


export const Home = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    console.log(email,password)
    const dispatch = useDispatch()
    const token = useSelector((store)=>store.authentications.authentication)
    console.log(token)
  const handlelogin = () =>{
      let user = {
          email: email,
          password: password

          
      }
      console.log(user)
      dispatch(loginaction(user))
      if(token != null){
          console.log("token")
          navigate("/Posts")
      }

  }

  return (
    <div>
        <input onChange={ (e) => setEmail(e.target.value) } placeholder="ENTER EMAIL" name="email" type="text"/>
        <input onChange={ (e) => setPassword(e.target.value) } placeholder="ENTER PASSWORD" name="password" type="text"/>
        <button onClick={handlelogin}>Log In</button>
    </div>
  )
}

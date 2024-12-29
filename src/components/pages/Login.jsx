import axios from 'axios'
import React, { useState } from 'react'

function Login() {

  const [email, setEmail] = useState("Your email")
  const [password, setPassword] = useState("")

  function userLogin(){

    axios.post("http://localhost:5000/api/users/login",{
      email : email,
      password : password
    }).then(
      (res)=>{
      

        localStorage.setItem("token",res.data.token)


      }
    )
  }

  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold text-gray-700 text-center mb-6">Login</h2>
      
        <div class="mb-4">
          <input 
            type="email" 
           defaultValue={email}
           onChange={(e)=>{
            setEmail(e.target.value)
           }} 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="mb-4">
          <input 
            type="password" 
           defaultValue={password} 
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
        onClick={userLogin}
          class="w-full bg-blue-500 text-white py-2  rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>

    </div>
  </div>
  
  )
}

export default Login
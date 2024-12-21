import React from 'react'

function Login() {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold text-gray-700 text-center mb-6">Login</h2>
      <form>
        <div class="mb-4">
          <input 
            type="email" 
            placeholder="Email" 
            required 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="mb-4">
          <input 
            type="password" 
            placeholder="Password" 
            required 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit" 
          class="w-full bg-blue-500 text-white py-2  rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  </div>
  
  )
}

export default Login
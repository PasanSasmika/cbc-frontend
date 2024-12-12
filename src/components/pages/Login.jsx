import React from 'react'

function Login() {
  return (
    <div>
        <h2>Login</h2>
    <form>
      <input type="email" placeholder="Email" required />
      <br />
      <input type="password" placeholder="Password" required />
      <br />
      <button type="submit">Login</button>
    </form>
    
    </div>
  )
}

export default Login
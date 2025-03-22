import React, { useState } from 'react';
import image from "/facecream.jpg";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function RegistrationForm(){

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate()

  function registration() {
    const registerData = {
        firstName,
        lastName,
        email,
        password
    }
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("All fields are required!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    axios.post(import.meta.env.VITE_BACKEND_URL + '/api/users/register', registerData).then((res) => {
        toast.success("Registration successfully")
       navigate("/login")
      })
      .catch((error) => {
        console.log(error)
        toast.error(error.response?.data?.message || "Registration unsuccessful")
        
      })
     
    ;
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4">
   
    <img 
      src={image}
      alt="Background" 
      className="absolute inset-0 w-full h-full object-cover z-[-1]" 
    />

    <div className="bg-white/50 p-8 rounded-xl shadow-lg w-full max-w-md relative z-10">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Welcome</h2>
      <p className="text-gray-500 text-center mb-6">Create  your account</p>
      <div className="mb-4">
        <input
          type="text"
          value={firstName}
          onChange={(e)=> setFirstName(e.target.value)}
          placeholder="First Name"
          
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={lastName}
          onChange={(e)=> setLastName(e.target.value)}
          placeholder="Last Name"
          
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e)=> setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
       
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-200 font-semibold"
        onClick={registration}
      >
        Login
      </button>
    
      <p className="text-black font-medium text-center relative top-3">Already have an account? <Link to="/login"><span className='text-blue-900'>Log in</span></Link></p>
    </div>
    
  </div>
  );
};

export default RegistrationForm;

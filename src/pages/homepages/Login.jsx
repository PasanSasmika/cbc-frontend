import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import image from "/facecream.jpg";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const googleLogin = useGoogleLogin({
    onSuccess: (res) => {
      console.log(res);
      axios.post(import.meta.env.VITE_BACKEND_URL + '/api/users/google', {
        token: res.access_token,
      }).then((res) => {
        if (res.data.message === 'User created') {
          toast.success('Your account is created..!');
        } else {
          localStorage.setItem('token', res.data.token);
          window.location.href = res.data.user.type === 'admin' ? '/admin' : '/';
        }
      });
    },
  });

  function userLogin() {
    axios.post(import.meta.env.VITE_BACKEND_URL + '/api/users/login', {
      email,
      password,
    }).then((res) => {
      if (res.data.user == null) {
        toast.error(res.data.message);
        return;
      }
      toast.success('Login success');
      localStorage.setItem('token', res.data.token);
      window.location.href = res.data.user.type === 'admin' ? '/admin' : '/';
    });
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4">
      {/* Background Image */}
      <img 
        src={image}
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover z-[-1]" 
      />

      <div className="bg-white/50 p-8 rounded-xl shadow-lg w-full max-w-md relative z-10">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Welcome Back</h2>
        <p className="text-gray-500 text-center mb-6">Login to your account</p>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={userLogin}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-200 font-semibold"
        >
          Login
        </button>
        <div className="mt-4 text-center text-gray-500">OR</div>
        <button
          onClick={() => googleLogin()}
          className="w-full flex items-center justify-center border border-gray-300 py-2 mt-4 rounded-lg bg-gray-100 hover:scale-105 transition duration-200"
        >
          <FcGoogle className="text-xl mr-2" /> Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;

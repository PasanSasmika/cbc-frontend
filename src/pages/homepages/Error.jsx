import React from 'react'
import image from '/error.svg'

function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-center">
    <div className="text-6xl font-bold flex items-center">
      <span>4</span>
      <img src={image} className="w-16 h-16 mx-2" />
      <span>4</span>
    </div>
    <h1 className="text-2xl font-semibold mt-4">Oh No... We Lost This Page</h1>
    <p className="text-gray-500 mt-2">We suggest you go to the homepage and try a notherway.</p>
    <a href="/" className="mt-6 px-6 py-2 bg-secondary text-white rounded-lg shadow-md hover:scale-105">
      Back to Home
    </a>
  </div>
  )
}

export default Error
import React from 'react'

function SecondaryLoader() {
  return (
    <div><div className="w-full h-screen bg-primary flex flex-col justify-center items-center">
    <div className="w-[120px] h-[120px] rounded-full border-8 border-dashed border-[#9c4221] flex justify-center items-center animate-spin">
      <div className="w-[80%] h-[80%] rounded-full bg-gradient-to-r from-teal-500 to-blue-500 animate-pulse"></div>
    </div>
    <h2 className="mt-6 text-2xl text-gray-800 font-bold animate-fadeIn">
      Please Wait...
    </h2>
  </div></div>
  )
}

export default SecondaryLoader
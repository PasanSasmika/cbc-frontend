import React from 'react'
import logo from '/logo.png'

function Footer() {
  return (
    <footer className="bg-primary min-h-[400px] flex items-center justify-center py-6 px-4">
    <div className="w-full max-w-[1394px] p-6 md:p-10 min-h-[370px] rounded-[20px] bg-accent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
        {/* Logo Section with Description */}
        <div className="flex flex-col items-start">
          <img
            src={logo}
            alt="Crystal Beauty Clear Logo"
            className="w-40 md:w-52 h-40 md:h-52 object-cover"
          />
          
        </div>

        {/* Pages Section */}
        <div>
          <h3 className="font-main text-2xl md:text-[33px] font-semibold text-gray-800">Pages</h3>
          <ul className="space-y-2 mt-4">
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer font-accent text-base md:text-[18px] font-semibold">Home</li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer font-accent text-base md:text-[18px] font-semibold">Shop</li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer font-accent text-base md:text-[18px] font-semibold">About Us</li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer font-accent text-base md:text-[18px] font-semibold">Blogs</li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer font-accent text-base md:text-[18px] font-semibold">FAQ</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="md:col-span-1">
          <h3 className="font-main text-2xl md:text-[33px] font-semibold text-gray-800">Contact Us</h3>
          <p className="text-gray-600 hover:text-gray-800 cursor-pointer mt-4 font-accent text-base md:text-[18px] font-semibold">
            Have questions or suggestions?
          </p>
          <p className="text-gray-800 font-semibold mb-4 md:mb-8 font-main text-sm md:text-base break-all">
            crystalbeautyclear@gmail.com
          </p>
          <p className="text-gray-600 hover:text-gray-800 cursor-pointer font-accent text-base md:text-[18px] font-semibold">
            Need assistance? Give us a call
          </p>
          <p className="text-gray-800 font-semibold font-main text-sm md:text-base">
            077 9812 300
          </p>
        </div>

        {/* Availability Section */}
        <div>
          <h3 className="font-main text-2xl md:text-[33px] font-semibold text-gray-800">
            We Are Here for You
          </h3>
          <p className="text-gray-600 hover:text-gray-800 cursor-pointer mt-4 font-accent text-base md:text-[18px] font-semibold">
            Monday - Friday
            <br />
            <span className="font-semibold text-gray-800 font-main">8.00 - 18.00</span>
          </p>
          <p className="text-gray-600 hover:text-gray-800 cursor-pointer mt-4 md:mt-8 font-accent text-base md:text-[18px] font-semibold">
            Saturday
            <br />
            <span className="font-semibold text-gray-800 font-main">8.00 - 15.00</span>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex justify-center items-center mt-8 md:mt-0 relative">
        <h3 className="text-center font-main text-xs md:text-[12px] text-gray-800">
          © Copyright Crystal Beauty Clear 2025.
        </h3>
      </div>
    </div>
  </footer>
  )
}

export default Footer
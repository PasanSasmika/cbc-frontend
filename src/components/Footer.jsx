import React from 'react'
import logo from '/logo.png'

function Footer() {
  return (
    <footer className="bg-primary  h-[400px] flex items-center justify-center">
        <div className='w-[1394px] p-10 h-[370px] rounded-[20px] bg-accent'>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Logo Section */}
      <div className="flex flex-col items-start">
        <img
          src={logo}
          alt="Crystal Beauty Clear Logo"
          className="w-52 h-52 object-cover pb-28 pr-11"
        />
      </div>

      {/* Pages Section */}
      <div>
        <h3 className="font-main text-[33px] font-semibold text-gray-800">Pages</h3>
        <ul className="space-y-2">
          <li className="text-gray-600 hover:text-gray-800 cursor-pointer mt-4 font-accent text-[18px] font-semibold">Home</li>
          <li className="text-gray-600 hover:text-gray-800 cursor-pointer font-accent text-[18px] font-semibold">Shop</li>
          <li className="text-gray-600 hover:text-gray-800 cursor-pointer font-accent text-[18px] font-semibold">About Us</li>
          <li className="text-gray-600 hover:text-gray-800 cursor-pointer font-accent text-[18px] font-semibold">Blogs</li>
          <li className="text-gray-600 hover:text-gray-800 cursor-pointer font-accent text-[18px] font-semibold">FAQ</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="md:col-span-1 ml-[-60px]">
        <h3 className="font-main text-[33px] font-semibold text-gray-800">Contact Us</h3>
        <p className="text-gray-600 hover:text-gray-800 cursor-pointer mt-4 font-accent text-[18px] font-semibold">Have questions or suggestions?</p>
        <p className="text-gray-800 font-semibold mb-8 font-main">
          crystalbeautyclear@gmail.com
        </p>
        <p className="text-gray-600 hover:text-gray-800 cursor-pointer  font-accent text-[18px] font-semibold">Need assistance? Give us a call</p>
        <p className="text-gray-800 font-semibold  font-main">077 9812 300</p>
      </div>

      {/* Availability Section */}
      <div>
        <h3 className="font-main text-[33px] font-semibold text-gray-800">
          We Are Here for You
        </h3>
        <p className="text-gray-600 hover:text-gray-800 cursor-pointer mt-4 font-accent text-[18px] font-semibold">
          Monday - Friday
          <br />
          <span className="font-semibold text-gray-800  font-main">8.00 - 18.00</span>
        </p>
        <p className="text-gray-600 hover:text-gray-800 cursor-pointer mt-8 font-accent text-[18px] font-semibold">
          Saturday
          <br />
          <span className="font-semibold text-gray-800 font-main">8.00 - 15.00</span>
        </p>
      </div>
    </div>
    </div>
  </footer>
  )
}

export default Footer
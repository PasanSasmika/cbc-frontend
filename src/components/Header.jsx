import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '/logo.png'
import { FaUser, FaShoppingCart } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import { motion } from "framer-motion";


function Header() {
  const [isSliderOpen , setIsSliderOpen] = useState(false)
  const [isMorePages, setIsMorePages] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);
  return (
    <>
      {/* Mobile Slider Menu */}
      {isSliderOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed w-full h-screen bg-[#00000070] z-[100]"
          onClick={() => setIsSliderOpen(false)}
        >
          <motion.div
            initial={{ x: -255 }}
            animate={{ x: 0 }}
            exit={{ x: -255 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="w-[255px] h-screen bg-white flex flex-col items-center p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <IoMdClose
              className="text-3xl cursor-pointer self-end mb-6"
              onClick={() => setIsSliderOpen(false)}
            />
            <Link
              to="/"
              className="w-full py-3 text-center uppercase font-accent text-secondary text-[20px] hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="w-full py-3 text-center uppercase font-accent text-secondary text-[20px] hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              Shop
            </Link>
            <Link
              to="/aboutus"
              className="w-full py-3 text-center uppercase font-accent text-secondary text-[20px] hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              Our Story
            </Link>
            <div className="relative"
         onMouseEnter={() => setIsMorePages(true)}
        onMouseLeave={() => setIsMorePages(false)}
>
  <Link
    to=""
    className="w-full py-3 text-center uppercase font-accent text-secondary text-[20px] rounded-lg transition-all duration-300"
  >
    Pages
  </Link>
  {isMorePages && (
    <div className="absolute w-[160px] flex flex-col gap-3 rounded-xl justify-center p-3 ml-20 h-40 bg-accent z-30 shadow-lg transform transition-all duration-300 origin-top">
      <Link to="/blogs">
        <h1 className="uppercase font-accent text-secondary hover:text-gray-600 text-[14px] transition-all duration-200">
          Blogs
        </h1>
      </Link>
      <Link to="/faq">
        <h1 className="uppercase font-accent text-secondary hover:text-gray-600 text-[14px] transition-all duration-200">
          FAQ
        </h1>
      </Link>
      <Link to="/contact">
        <h1 className="uppercase font-accent text-secondary hover:text-gray-600 text-[14px] transition-all duration-200">
          Contact
        </h1>
      </Link>
      <Link to="/products">
        <h1 className="uppercase font-accent text-secondary hover:text-gray-600 text-[14px] transition-all duration-200">
          Products
        </h1>
      </Link>
    </div>
  )}
</div>
            <div className="w-full mt-6 flex flex-col gap-4">
              <Link
                to={isLoggedIn ? '/profile' : '/login'}
                className="w-full py-3 text-center uppercase font-accent text-secondary text-[20px] hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                <FaUser className="inline-block mr-2" />
                {isLoggedIn ? 'Profile' : 'Login'}
              </Link>
              <Link
                to="/cart"
                className="w-full py-3 text-center uppercase font-accent text-secondary text-[20px] hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                <FaShoppingCart className="inline-block mr-2" />
                Cart
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Header */}
      <div className="w-full h-[85px] bg-primary px-8 text-black">
        {/* Logo */}
        <div className="w-[164px] h-[164px] absolute hidden lg:block">
          <img src={logo} alt="Logo" className="relative bottom-8" />
        </div>
        <div className='lg:hidden flex flex-col w-[150px] items-center justify-center'>
          <h1 className='pt-3 text-[18px] text-secondary font-main font-bold'>Crystal Beauty</h1>
         <h2 className='text-[18px] font-main text-secondary'>Clear</h2>
        </div>

        {/* Mobile Hamburger Icon */}
        <RxHamburgerMenu
          className="text-3xl lg:hidden absolute right-10 top-6 cursor-pointer"
          onClick={() => setIsSliderOpen(true)}
        />

        {/* Desktop Navigation */}
        <div
          className="gap-16 items-center justify-center pt-7 hidden lg:flex"
          onMouseLeave={() => setIsMorePages(false)}
        >
          <Link
            to="/"
            className="flex flex-col items-center uppercase font-accent text-secondary text-[18px] hover:after:block after:w-0 after:h-[2px] after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="flex flex-col items-center uppercase font-accent text-secondary text-[18px] hover:after:block after:w-0 after:h-[2px] after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
          >
            Shop
          </Link>
          <Link
            to="/aboutus"
            className="flex flex-col items-center uppercase font-accent text-secondary text-[18px] hover:after:block after:w-0 after:h-[2px] after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
          >
            Our Story
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsMorePages(true)}
            onMouseLeave={() => setIsMorePages(false)}
          >
            <Link
              to=""
              className="flex flex-col items-center uppercase font-accent text-secondary text-[18px] hover:after:block after:w-0 after:h-[2px] after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
            >
              Pages
            </Link>
            {isMorePages && (
              <div className="absolute w-[160px] flex flex-col gap-3 rounded-xl  justify-center p-3  h-40 bg-accent z-30">
                <Link to="/blogs">
                  <h1 className="uppercase font-accent text-secondary hover:text-gray-600 text-[14px]">
                    Blogs
                  </h1>
                </Link>
                <Link to="/faq">
                  <h1 className="uppercase font-accent text-secondary hover:text-gray-600 text-[14px]">
                    FAQ
                  </h1>
                </Link>
                <Link to="/contact">
                  <h1 className="uppercase font-accent text-secondary hover:text-gray-600 text-[14px]">
                    Contact
                  </h1>
                </Link>
                <Link to="/products">
                  <h1 className="uppercase font-accent text-secondary hover:text-gray-600 text-[14px]">
                    Products
                  </h1>
                </Link>
              </div>
            )}
          </div>

          {/* User and Cart Icons */}
          <div className="flex absolute right-0 mr-20">
            <div className="flex w-12 h-12 border-2 ml-4 border-accent  items-center justify-center py-4 text-center uppercase font-accent text-secondary text-[20px] hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 rounded-full transition-all duration-300 transform hover:scale-105">
              <Link to={isLoggedIn ? '/profile' : '/login'}>
                <div className="text-[20px]">
                  <FaUser />
                </div>
              </Link>
            </div>
            <div className="flex w-12 h-12 border-2 ml-4 border-accent  items-center justify-center py-4 text-center uppercase font-accent text-secondary text-[20px] hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 rounded-full transition-all duration-300 transform hover:scale-105">
              <Link to="/cart">
                <div className="text-[20px]">
                  <FaShoppingCart />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
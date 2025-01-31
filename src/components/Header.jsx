import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '/logo.png'
import { FaUser, FaShoppingCart } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import { motion } from "framer-motion";


function Header() {
  const [isSliderOpen , setIsSliderOpen] = useState(false)
  const [isMorePages, setIsMorePages] = useState(false)
  return (
    <>
    {isSliderOpen&& 
    <div className=' lg:hidden fixed w-full h-screen bg-[#00000070] z-[100]'>
      <div className='w-[255px] flex flex-col h-screen items-center bg-white'>
        <IoMdClose className='text-[60px]' onClick={()=>setIsSliderOpen(false)}/>
      <Link to="/" className="flex flex-col  items-center  uppercase font-accent text-secondary text-[20px]  hover:after:block after:w-0 after:h-[2px]
     after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
      Home
    </Link>
    <Link to="/products" className="flex flex-col  items-center  uppercase font-accent text-secondary text-[20px]  hover:after:block after:w-0 after:h-[2px]
     after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
      Shop

    </Link>
    <Link to="/aboutus" className="flex flex-col  items-center  uppercase font-accent text-secondary text-[20px]  hover:after:block after:w-0 after:h-[2px]
     after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
      
      Our story

    </Link>
    <Link to="/contact" className="flex flex-col  items-center  uppercase font-accent text-secondary text-[20px]  hover:after:block after:w-0 after:h-[2px]
     after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
      
      Pages

    </Link>
      </div>
    </div>}


    <div className="w-full h-[85px] bg-primary justify-start  px-8  text-black">
      <div className='w-[164px] h-[164px] absolute'>
        <img src={logo} alt="" className='relative bottom-8' />
      </div>
      <RxHamburgerMenu className='text-3xl lg:hidden absolute right-10' onClick={()=>setIsSliderOpen(true)}/>

      <div className='gap-16 items-center justify-center pt-7  hidden lg:flex' onMouseLeave={()=>setIsMorePages(false)}>
        
    <Link to="/" className="flex flex-col  items-center  uppercase font-accent text-secondary text-[18px]  hover:after:block after:w-0 after:h-[2px]
     after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
      Home
    </Link>
    <Link to="/products" className="flex flex-col  items-center  uppercase font-accent text-secondary text-[18px]  hover:after:block after:w-0 after:h-[2px]
     after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
      Shop

    </Link>
    <Link to="/aboutus" className="flex flex-col  items-center  uppercase font-accent text-secondary text-[18px]  hover:after:block after:w-0 after:h-[2px]
     after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
      
      Our story

    </Link>
    <Link to="" className="flex flex-col  items-center  uppercase font-accent text-secondary text-[18px]  hover:after:block after:w-0 after:h-[2px]
     after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full" onMouseEnter={()=>setIsMorePages(true)}>
      
      Pages
      {isMorePages&&<div className='absolute w-[160px] flex flex-col gap-3 rounded-xl ml-20 justify-center p-3 mt-9 h-40 bg-accent z-30' onMouseLeave={()=>setIsMorePages(false)}>
       <Link to="/blogs"><h1 className='uppercase font-accent text-secondary hover:text-gray-600 text-[14px]'>blogs</h1></Link> 
       <Link to="/faq"><h1 className='uppercase font-accent text-secondary hover:text-gray-600 text-[14px]'>faq</h1></Link> 
        <Link to="/contact"><h1 className='uppercase font-accent text-secondary hover:text-gray-600 text-[14px]'>contact</h1></Link>
       <Link to="/products"><h1 className='uppercase font-accent text-secondary hover:text-gray-600 text-[14px]'>products</h1></Link> 
      </div>}
    </Link>
   

    <div className='flex absolute right-0 mr-20'>
    <div className='flex w-12 h-12 border-2 border-accent rounded-full items-center justify-center'>
    <Link to="/login"><div className='text-[20px]'> <FaUser/></div></Link>
    </div>
    <div className='flex w-12 h-12 border-2 ml-4 border-accent rounded-full items-center justify-center'>
      <Link to="/cart"><div className='text-[20px]'> <FaShoppingCart/></div></Link>
    </div>
    </div>

    </div>

    
    
    </div>
    </>
  )
}

export default Header
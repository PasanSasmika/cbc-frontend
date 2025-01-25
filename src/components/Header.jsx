import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '/logo.png'
import { FaUser, FaShoppingCart } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'


function Header() {
  const [isSliderOpen , setIsSliderOpen] = useState(false)
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
    <Link to="/contact" className="flex flex-col  items-center  uppercase font-accent text-secondary text-[20px]  hover:after:block after:w-0 after:h-[2px]
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

      <div className='gap-16 items-center pt-7 pl-56 hidden lg:flex'>
        
    <Link to="/" className="flex flex-col  items-center  uppercase font-accent text-secondary text-[20px]  hover:after:block after:w-0 after:h-[2px]
     after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
      Home
    </Link>
    <Link to="/products" className="flex flex-col  items-center  uppercase font-accent text-secondary text-[20px]  hover:after:block after:w-0 after:h-[2px]
     after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
      Shop

    </Link>
    <Link to="/contact" className="flex flex-col  items-center  uppercase font-accent text-secondary text-[20px]  hover:after:block after:w-0 after:h-[2px]
     after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
      
      Our story

    </Link>
    <Link to="/contact" className="flex flex-col  items-center  uppercase font-accent text-secondary text-[20px]  hover:after:block after:w-0 after:h-[2px]
     after:bg-secondary after:mt-1 after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
      
      Pages

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
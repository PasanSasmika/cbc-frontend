import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className="w-full h-[85px] bg-primary flex gap-20 justify-center  py-8  text-black">
        
    <Link to="/" className="flex items-center gap-2 font-semibold uppercase font-accent text-secondary text-3xl">
      Home
    </Link>
    <Link to="/products" className="flex items-center gap-2 font-semibold uppercase font-accent text-secondary text-3xl">
     
      Shop
    </Link>
    <Link to="/contact" className="flex items-center gap-2 font-semibold uppercase font-accent text-secondary text-3xl">
      
      Our story
    </Link>
    <Link to="/contact" className="flex items-center gap-2 font-semibold uppercase font-accent text-secondary text-3xl">
      
      Pages
    </Link>

    
    </div>
  
  )
}

export default Header
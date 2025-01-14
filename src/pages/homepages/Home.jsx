import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ProductOverview from './ProductOverview'

function Home() {
  return (
    <>
  <div className="bg-blue-200 w-full h-screen">
      {/* Sidebar */}
      <div className="w-full h-5 bg-blue-500 flex gap-7 flex-row justify-center items-center py-8 space-y-6 text-white">
        <Link to="/" className="flex items-center gap-2 text-lg hover:text-blue-200">
          Home
        </Link>
        <Link to="/products" className="flex items-center gap-2 text-lg hover:text-blue-200">
         
          Products
        </Link>
        <Link to="/contact" className="flex items-center gap-2 text-lg hover:text-blue-200">
          
          Contact us
        </Link>
      </div>

     
      <div className="w-full h-screen bg-yellow-600 flex flex-col">
      <Routes path="/*">
      <Route path='/' element={<h1>Home</h1>}/>
     <Route path='/products' element={<h1>product</h1>}/>
     <Route path='/productInfo/:id' element={<ProductOverview/>}/>
     <Route path='/contact' element={<h1>contact</h1>}/>
     <Route path='/*' element={<h1>Error</h1>}/>

</Routes>
      </div>
    </div>
    </>
  )
}

export default Home
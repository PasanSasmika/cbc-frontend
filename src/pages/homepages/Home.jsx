import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ProductOverview from './ProductOverview'
import Products from './Products'
import Cart from './Cart'
import { FaOpencart } from 'react-icons/fa'
import Header from '../../components/Header'

function Home() {
  return (
    <>
  <div className="bg-blue-200 w-full h-screen">
     <Header/>
      

     
      <div className="w-full h-screen bg-yellow-600 flex flex-col">
      <Routes path="/*">
      <Route path='/' element={<h1>Home</h1>}/>
     <Route path='/products' element={<Products/>}/>
     <Route path='/productInfo/:id' element={<ProductOverview/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/contact' element={<h1>contact</h1>}/>
     <Route path='/*' element={<h1>Error</h1>}/>

</Routes>
      </div>
    </div>
    </>
  )
}

export default Home
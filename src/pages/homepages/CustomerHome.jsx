import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ProductOverview from './ProductOverview'
import Products from './Products'
import Cart from './Cart'
import { FaOpencart } from 'react-icons/fa'
import Header from '../../components/Header'
import Home from './Home'

function CustomerHome() {
  return (
    <>
      <div className="w-full h-screen bg-primary">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productInfo/:id" element={<ProductOverview />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<h1>Contact</h1>} />
            <Route path="/*" element={<h1>Error</h1>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default CustomerHome
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FaTachometerAlt, FaBox, FaShoppingCart, FaUsers } from 'react-icons/fa';

function AdminHome() {
  return (
    <div className="bg-blue-200 w-full h-screen flex">
      {/* Sidebar */}
      <div className="w-[20%] h-screen bg-blue-500 flex flex-col items-center py-8 space-y-6 text-white">
        <Link to="/admin/dashboard" className="flex items-center gap-2 text-lg hover:text-blue-200">
          <FaTachometerAlt />
          Dashboard
        </Link>
        <Link to="/admin/products" className="flex items-center gap-2 text-lg hover:text-blue-200">
          <FaBox />
          Products
        </Link>
        <Link to="/admin/orders" className="flex items-center gap-2 text-lg hover:text-blue-200">
          <FaShoppingCart />
          Orders
        </Link>
        <Link to="/admin/customers" className="flex items-center gap-2 text-lg hover:text-blue-200">
          <FaUsers />
          Customers
        </Link>
      </div>

     
      <div className="w-[80%] h-screen bg-red-600">
      <Routes path="/*">
      <Route path='/dashboard' element={<h1>dashboard</h1>}/>
     <Route path='/orders' element={<h1>orders</h1>}/>
     <Route path='/customers' element={<h1>customers</h1>}/>
     <Route path='/products' element={<h1>products</h1>}/>
     <Route path='/*' element={<h1>Error</h1>}/>

</Routes>
      </div>
    </div>
  );
}

export default AdminHome;

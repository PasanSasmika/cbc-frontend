import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { BsBoxFill, BsCartCheckFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import AdminProducts from './AdminProducts';
import AddproductForm from './AddproductForm';
import { Animation, Animation2 } from '../../animations/animation';
import EditProductForm from './EditProductForm';

function AdminHome() {
  const [notIsopen, setNotIsOpen] = useState(null);

  const menuItems = [
    { id: "dashboard", icon: <TbLayoutDashboardFilled />, label: "Dashboard", path: "/admin/dashboard" },
    { id: "product", icon: <BsBoxFill />, label: "Products", path: "/admin/products" },
    { id: "orders", icon: <BsCartCheckFill />, label: "Orders", path: "/admin/orders" },
    { id: "customers", icon: <FaUsers />, label: "Customers", path: "/admin/customers" }
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      {/* Sidebar */}
      <div className="w-[276px] h-[97vh] bg-white rounded-2xl shadow-lg">
        <div className="w-full h-full flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800 p-8 text-center border-b">
            Dashboard
          </h1>

          <div className="flex-1 flex flex-col items-center justify-center gap-8 py-6">
            {menuItems.map((item) => (
              <div key={item.id} className="relative">
                <motion.div
                  {...Animation()}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f2cdb4] to-[#daaa8a] hover:from-[#daaa8a] hover:to-[#f2cdb4] 
                    text-white flex justify-center items-center text-2xl cursor-pointer transform transition-all hover:scale-105 shadow-md"
                  onClick={() => setNotIsOpen(item.id)}
                >
                  {item.icon}
                </motion.div>
                
                {notIsopen === item.id && (
                  <Link to={item.path}>
                    <motion.div
                      layout
                      {...Animation2()}
                      className="absolute top-2 left-20 z-10 bg-white shadow-lg rounded-xl"
                    >
                      <div className="relative w-44 h-12 overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#f2cdb4] to-[#daaa8a]" />
                        <div className="relative w-full h-full flex items-center justify-center text-white text-lg font-semibold">
                          {item.label}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[80%] h-[97vh] rounded-2xl ml-4 bg-white shadow-lg p-6 overflow-auto">
        <Routes path="/*">
          <Route path="/dashboard" element={<div className="text-2xl font-bold text-gray-800">Dashboard Overview</div>} />
          <Route path="/orders" element={<div className="text-2xl font-bold text-gray-800">Orders</div>} />
          <Route path="/customers" element={<div className="text-2xl font-bold text-gray-800">Customers</div>} />
          <Route path="/products" element={<AdminProducts />} />
          <Route path="/products/addproducts" element={<AddproductForm />} />
          <Route path="/products/editproduct" element={<EditProductForm />} />
          <Route path="/*" element={<div className="text-2xl font-bold text-text-gray-800">404 - Page Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminHome;
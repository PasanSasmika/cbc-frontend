import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { BsBoxFill, BsCartCheckFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import { Animation, Animation2 } from '../../animations/animation';
import { FaNoteSticky } from 'react-icons/fa6';
import AddBlogs from './Blogs/AddBlogs';
import AdminBlogs from './Blogs/AdminBlogs';
import AdminProducts from './Products/AdminProducts';
import AddProductForm from './Products/AddproductForm';
import EditProductForm from './Products/EditProductForm';

function AdminHome() {

  const [notIsopen, setNotIsOpen] = useState(null);

  return (
    <div className="w-full  h-screen bg-[#E7DED8] absolute flex items-center justify-center">
      <div className="w-[276px] h-[97vh] bg-[#E7DED8] rounded-[16px]">
        <div className="w-[100%] h-[97vh] rounded-[16px] bg-[#E7DED8]">
          <h1 className="flex items-center justify-center text-[26px] p-6">
            Dashboard
          </h1>

          <div className="w-[100px] h-[550px] bg-[#E7DED8] flex flex-col items-center justify-center gap-9">

            {/*Dashboard*/}

            <div className="relative">
              <motion.div
                {...Animation()}
                className="w-[70px] h-[70px] rounded-full bg-[#FBFCFC] flex justify-center items-center text-[35px]"
                onClick={() => setNotIsOpen("dashboard")}
              >
                <TbLayoutDashboardFilled />
              </motion.div>
              {notIsopen === "dashboard" && (
            <Link to={"/admin/dashboard"}> <motion.h1
                  layout
                  {...Animation2()}
                  className="absolute  font-third font-medium top-2 z-10 left-[90px] transform -translate-y-1/2 bg-gradient-to-r from-[#f2cdb4] to-[#daaa8a] 
                  shadow-lg w-44 h-12 text-white text-[28px] px-4 py-2 rounded-lg flex items-center justify-center"
                >
                  Dashboard
                </motion.h1> </Link> 
              )}
            </div>

              {/*Product*/}

            <div className="relative">
              <motion.div
                {...Animation()}
                className="w-[70px] h-[70px] rounded-full bg-[#FBFCFC] flex justify-center items-center text-[35px]"
                onClick={() => setNotIsOpen("product")}
              >
                <BsBoxFill />
              </motion.div>
              {notIsopen === "product" && (
             <Link to={"/admin/products"}><motion.h1
                  layout
                  {...Animation2()}
                  className="absolute top-2 z-10 left-[90px] transform -translate-y-1/2 bg-gradient-to-r from-[#f2cdb4] to-[#daaa8a] 
                  shadow-lg w-44 h-12 text-white text-[20px] font-semibold px-4 py-2 rounded-lg flex items-center justify-center"
                >
                  Products
                </motion.h1></Link>
              )}
            </div>

            {/* Orders */}

            <div className="relative">
              <motion.div
                {...Animation()}
                className="w-[70px] h-[70px] rounded-full bg-[#FBFCFC] flex justify-center items-center text-[35px]"
                onClick={() => setNotIsOpen("orders")}
              >
                <BsCartCheckFill />
              </motion.div>
              {notIsopen === "orders" && (
                <Link to={"/admin/orders"}> <motion.h1
                  layout
                  {...Animation2()}
                  className="absolute top-2 z-10 left-[90px] transform -translate-y-1/2 bg-gradient-to-r from-[#f2cdb4] to-[#daaa8a] 
                  shadow-lg w-44 h-12 text-white text-[20px] font-semibold px-4 py-2 rounded-lg flex items-center justify-center"
                >
                  Orders
                </motion.h1></Link>
              )}
            </div>


            {/* Customers */}

            <div className="relative">
              <motion.div
                {...Animation()}
                className="w-[70px] h-[70px] rounded-full bg-[#FBFCFC] flex justify-center items-center text-[35px]"
                onClick={() => setNotIsOpen("customers")}
              >
                <FaUsers />
              </motion.div>
              {notIsopen === "customers" && (
                 <Link to={"/admin/customers"}><motion.h1
                  layout
                  {...Animation2()}
                  className="absolute top-2 z-10 left-[90px] transform -translate-y-1/2 bg-gradient-to-r from-[#f2cdb4] to-[#daaa8a]
                   shadow-lg w-44 h-12 text-white text-[20px] font-semibold px-4 py-2 rounded-lg flex items-center justify-center"
                >
                  Customers
                </motion.h1></Link>
              )}
            </div>

             {/* Blogs */}

             <div className="relative">
              <motion.div
                {...Animation()}
                className="w-[70px] h-[70px] rounded-full bg-[#FBFCFC] flex justify-center items-center text-[35px]"
                onClick={() => setNotIsOpen("blogs")}
              >
                <FaNoteSticky />
              </motion.div>
              {notIsopen === "blogs" && (
                 <Link to={"/admin/blogs"}><motion.h1
                  layout
                  {...Animation2()}
                  className="absolute top-2 z-10 left-[90px] transform -translate-y-1/2 bg-gradient-to-r from-[#f2cdb4] to-[#daaa8a]
                   shadow-lg w-44 h-12 text-white text-[20px] font-semibold px-4 py-2 rounded-lg flex items-center justify-center"
                >
                  Blogs
                </motion.h1></Link>
              )}
            </div>
          </div>
        </div>
      </div>
      


      <div className="w-[80%] h-[97vh] rounded-[16px] ml-2 bg-[#FBFCFC]">
  <Routes path="/*">
    <Route path='/' element={<h1>dashboard</h1>}/>
    <Route path='/orders' element={<h1>orders</h1>}/>
    <Route path='/customers' element={<h1>customers</h1>}/>
    <Route path='/products' element={<AdminProducts/>}/>
    <Route path='/blogs' element={<AdminBlogs/>}/>
    <Route path='/blogs/addblogs' element={<AddBlogs/>}/>
    <Route path='/products/addproducts' element={<AddProductForm/>}/>
    <Route path='/products/editproduct' element={<EditProductForm/>}/>
    <Route path='/*' element={<h1>Error</h1>}/>
  </Routes>
</div>    
      </div>

     
      
   
  );
}

export default AdminHome;
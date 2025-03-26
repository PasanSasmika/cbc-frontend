import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { BsBoxFill, BsCartCheckFill } from "react-icons/bs";
import { FaUsers, FaBars, FaTimes } from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import { Animation, Animation2 } from '../../animations/animation';
import { FaNoteSticky } from 'react-icons/fa6';
import AddBlogs from './Blogs/AddBlogs';
import AdminBlogs from './Blogs/AdminBlogs';
import AdminProducts from './Products/AdminProducts';
import AddProductForm from './Products/AddproductForm';
import EditProductForm from './Products/EditProductForm';
import EditBlogsForm from './Blogs/EditBlogsForm';
import Error from '../homepages/Error';
import Orders from './Orders/Orders';
import axios from 'axios';
import toast from 'react-hot-toast';
import Preloader from '../../components/Preloader';
import AllUsers from './AllUsers';
import ProductCharts from './Charts/ProductCharts';
import { IoLogOut } from 'react-icons/io5';

function AdminHome() {
  const [notIsopen, setNotIsOpen] = useState(null);
  const [user, setUser] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You are not a valid user. Please login again.");
      navigate("/login");
      return;
    }
    axios.get(import.meta.env.VITE_BACKEND_URL + '/api/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.data.type !== "admin") {
        toast.error("Unauthorized access!");
      } else {
        setUser(res.data);
      }
    }).catch((err) => {
      console.log(err);
      toast.error("Failed to fetch user data");
    });
  }, []);

  const handleLogout = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('You are not logged in.');
      return;
    }

    axios
      .post(import.meta.env.VITE_BACKEND_URL + '/api/users/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        localStorage.removeItem('token');
        toast.success('Logged out successfully!');
        window.location.href = '/';
      })
      .catch(() => {
        toast.error('Logout failed, please try again.');
      });
  };
  return (
    <div className="w-full h-screen bg-[#F5F5F5] flex">
      {/* Sidebar */}
      <div
        className={`h-screen bg-[#1E293B] transition-all duration-300 ${isSidebarCollapsed ? 'w-20' : 'w-64'
          } shadow-lg`}
      >
        <div className="p-4 flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between mb-8">
            {!isSidebarCollapsed && (
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            )}
            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="text-white hover:text-[#1ABC9C] transition-all"
            >
              {isSidebarCollapsed ? (
                <FaBars className="text-2xl" /> // Icon for collapsed state
              ) : (
                <FaTimes className="text-2xl" /> // Icon for expanded state
              )}
            </button>
          </div>

          {/* Sidebar Menu */}
          <div className="flex flex-col gap-4">
            {/* Dashboard */}
            <Link to={"/admin/"} className="flex items-center gap-3 p-3 text-white hover:bg-[#1ABC9C] rounded-lg transition-all">
              <TbLayoutDashboardFilled className="text-2xl" />
              {!isSidebarCollapsed && <span className="text-lg">Dashboard</span>}
            </Link>

            {/* Products */}
            <Link to={"/admin/products"} className="flex items-center gap-3 p-3 text-white hover:bg-[#1ABC9C] rounded-lg transition-all">
              <BsBoxFill className="text-2xl" />
              {!isSidebarCollapsed && <span className="text-lg">Products</span>}
            </Link>

            {/* Orders */}
            <Link to={"/admin/orders"} className="flex items-center gap-3 p-3 text-white hover:bg-[#1ABC9C] rounded-lg transition-all">
              <BsCartCheckFill className="text-2xl" />
              {!isSidebarCollapsed && <span className="text-lg">Orders</span>}
            </Link>

            {/* Customers */}
            <Link to={"/admin/customers"} className="flex items-center gap-3 p-3 text-white hover:bg-[#1ABC9C] rounded-lg transition-all">
              <FaUsers className="text-2xl" />
              {!isSidebarCollapsed && <span className="text-lg">Customers</span>}
            </Link>

            {/* Blogs */}
            <Link to={"/admin/blogs"} className="flex items-center gap-3 p-3 text-white hover:bg-[#1ABC9C] rounded-lg transition-all">
              <FaNoteSticky className="text-2xl" />
              {!isSidebarCollapsed && <span className="text-lg">Blogs</span>}
            </Link>

            <Link to={"/"} className="flex items-center gap-3 p-3 text-white hover:bg-[#1ABC9C] rounded-lg transition-all">
              <IoLogOut className="text-2xl" />
              {!isSidebarCollapsed && <span className="text-lg"><button onClick={handleLogout}>Logout</button></span>}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[calc(100%-16rem)] h-screen bg-[#F5F5F5] p-6 overflow-y-auto">
        {user != null && (
          <Routes path="/*">
            <Route path='/' element={<ProductCharts />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/customers' element={<AllUsers />} />
            <Route path='/products' element={<AdminProducts />} />
            <Route path='/blogs' element={<AdminBlogs />} />
            <Route path='/blogs/addblogs' element={<AddBlogs />} />
            <Route path='/blogs/editblogs' element={<EditBlogsForm />} />
            <Route path='/products/addproducts' element={<AddProductForm />} />
            <Route path='/products/editproduct' element={<EditProductForm />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        )}
        {user == null && <Preloader />}
      </div>
    </div>
  );
}

export default AdminHome;
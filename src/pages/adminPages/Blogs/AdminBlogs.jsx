import axios from 'axios';
import { div } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { FaPlus, FaTrash } from 'react-icons/fa'
import { FaPencil } from 'react-icons/fa6';
import { Link } from 'react-router-dom'

function AdminBlogs() {
  const [blogs,setBlogs] = useState([]);
  const [blogLoaded, setBlogLoades] = useState(false);

  useEffect(()=>{
    if(!blogLoaded){
      axios.get(import.meta.env.VITE_BACKEND_URL +"/api/blogs").then((res)=>{
          setBlogs(res.data);
          setBlogLoades(true);
      })
    }
  },[blogLoaded])
  return (
    <>
    <div className="p-6 max-w-7xl mx-auto relative">
      <Link
        to="/admin/blogs/addblogs"
        className="absolute right-[25px] top-[600px] text-[25px] border-[2px] border-[#3b82f6] text-[#3b82f6] p-5 rounded-xl"
      >
        <FaPlus />
      </Link>
  
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Blog Page</h1>
  
      {blogLoaded ? (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Blog ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Topic
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Mini Description
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {blogs.map((blog, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {blog.blogId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {blog.blogTopic}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {blog.blogCatg}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 max-w-xs truncate">
                    {blog.miniDesc}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 max-w-xs truncate">
                    {blog.desc}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 max-w-xs truncate">
                    {blog.date.split("T")[0]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <div className="flex gap-4">
                    <button className="text-red-600 hover:text-red-800" title="Delete"
                  
                  onClick={()=>{
                    const token = localStorage.getItem("token");

                    axios.delete(import.meta.env.VITE_BACKEND_URL +`/api/blogs/${blog.blogId}`, {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }).then((res)=>{
                      console.log(res.data);
                      toast.success("Blog deleted successfully");
                      setBlogLoades(false);
                    });

                  }}>
                    <FaTrash />
                  </button>
  
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        title="Edit"
                       
                      >
                        <FaPencil />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[60px] h-[60px] border-[4px] border-gray-200 border-b-[#3b82f6] animate-spin rounded-full"></div>
        </div>
      )}
    </div>
  </>
  
  )
}

export default AdminBlogs
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import uploadMediaToSupabase from '../../../utils/mediaUpload';

function AddBlogs() {
  const [blogId, setBlogId] = useState("");
  const [blogCatg, setBlogCat] = useState("");
  const [blogTopic, setBlogTopic] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [miniDesc, setMiniDesc] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  async function submitBlog(){
      const promiseArray = Array.from(imageFiles).map(file => uploadMediaToSupabase(file));
      const imgUrls = await Promise.all(promiseArray);
      
      const blogs = {
        blogId,
        blogTopic,
        blogCatg,
        Images: imgUrls,
        miniDesc,
        desc
      };

      
    const token = localStorage.getItem('token');

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/blogs`, 
        blogs, 
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      console.log(blogs)
      navigate('/admin/blogs');
      toast.success('Blog added successfully!');
    } catch (error) {
      toast.error('Failed to add product!');
    }
  }


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-2xl bg-white rounded-lg shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Add New Blog post
          </h1>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Blog ID
              </label>
              <input
                type="text"
                value={blogId}
                onChange={(e) => setBlogId(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Blog category
              </label>
              <input
                type="text"
                value={blogCatg}
                onChange={(e) => setBlogCat(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
              Blog Topic
              </label>
              <input
                type="text"
                value={blogTopic}
                onChange={(e) => setBlogTopic(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
           
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Images
              </label>
              <input
                type="file"
                onChange={(e) => setImageFiles(e.target.files)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Mini Description
              </label>
              <textarea
                value={miniDesc}
                onChange={(e) => setMiniDesc(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none min-h-[120px] resize-y"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none min-h-[120px] resize-y"
              />
            </div>

            <button
            
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors" onClick={submitBlog}
            >
              Add Blog
            </button>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default AddBlogs
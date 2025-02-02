import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaPlus, FaTrash } from 'react-icons/fa'
import { FaPencil } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [productLoded, setProductsLoded] = useState(false);

  useEffect(() => {
    if(!productLoded){
      axios.get(import.meta.env.VITE_BACKEND_URL +"/api/products").then((res) => {
        setProducts(res.data);
        setProductsLoded(true);
      })
    }
   
  }, [productLoded]);

  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-7xl mx-auto relative">

    <Link to={"/admin/products/addproducts"} className=' absolute right-[25px] top-[600px] text-[25px] border-[2-x] border-[#3b82f6] text-[#3b82f6] p-5 rounded-xl'><FaPlus/></Link>
      
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Product Page</h1>
      
     {
      productLoded?
      <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Product Id</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Product Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Last price</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Stock</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.productId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.productName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${product.lastPrice}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.stock}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.category}</td>
              <td className="px-6 py-4 text-sm text-gray-700 max-w-xs truncate">{product.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                <div className="flex gap-4">
                  <button className="text-red-600 hover:text-red-800" title="Delete"
                  
                  onClick={()=>{
                    const token = localStorage.getItem("token");

                    axios.delete(import.meta.env.VITE_BACKEND_URL +`/api/products/${product.productId}`, {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }).then((res)=>{
                      console.log(res.data);
                      toast.success("Product deleted successfully");
                      setProductsLoded(false);
                    });

                  }}>
                    <FaTrash />
                  </button>

                  <button className="text-blue-600 hover:text-blue-800" title='Edit' 
                  onClick={()=>{
                    navigate("/admin/products/editproduct" , {state : {product : product}});
                  }}>
                    <FaPencil />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>: 
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-[60px] h-[60px] border-[4px] border-gray-200 border-b-[#3b82f6] animate-spin rounded-full'></div>

    </div>

     }
    </div>
  )
}

export default AdminProducts
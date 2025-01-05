import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import uploadMediaToSupabase from '../../../utils/mediaUpload';

function AddProductForm() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [alternativeNames, setAlternativeNames] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [price, setPrice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
    const navigate  =  useNavigate()


  async function handleSubmit() {

    const altNames = alternativeNames.split(",")
    const promiseArray = []

    for(let i=0; i<imageFiles.length; i++){
      promiseArray[i] = uploadMediaToSupabase
      (imageFiles[i])
    }

    const imgUrls = await Promise.all(promiseArray)
   


    const product = {
      
      productId : productId,
      productName : productName,
      altNames : altNames,
      Images : imgUrls,
      price : price,
      lastPrice : lastPrice,
      stock : stock,
      description : description
    }

    const token = localStorage.getItem("token")

    try {
      await axios.post(import.meta.env.VITE_BACKEND_URL +"/api/products", product,{
        headers : {
          Authorization : "Bearer "+token
        }
      })
      navigate("/admin/products")
      toast.success("Product added successfully..!")
    } catch (error) {
      toast.error("Failed to add product..!")
    }


  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">Add Product</h1>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Product ID</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Product Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Alternative Names</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={alternativeNames}
              onChange={(e) => setAlternativeNames(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Image</label>
            <input
              type="file"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

              onChange={(e) =>{ setImageFiles(e.target.files)}}
              multiple
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Price</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Last Price</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={lastPrice}
              onChange={(e) => setLastPrice(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Stock</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <textarea
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            onClick={handleSubmit}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProductForm;



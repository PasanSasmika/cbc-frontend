import React, { useState } from 'react'

function AddProductForm() {

const [productId, setProductId] = useState("");
const [productName, setProductName] = useState("");
const [alternativeNames, setAlternativeNames] = useState("");
const [imageUrls, setImageUrls] = useState("");
const [price, setPrice] = useState("");
const [lastPrice, setLastPrice] = useState("");
const [stock, setStock] = useState("");
const [description, setDescription] = useState("");












  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">Add Product</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Product ID</label>
            <input type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={productId}
            onChange={(e)=> setProductId(e.target.value)} />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Product Name</label>
            <input type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={productName}
            onChange={(e)=> setProductName(e.target.value)}  />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Alternative Names</label>
            <input type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            value={alternativeNames}
            onChange={(e)=> setAlternativeNames(e.target.value)} />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Image URLs</label>
            <input type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            value={imageUrls}
            onChange={(e)=> setImageUrls(e.target.value)} />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Price</label>
            <input type="number" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={price}
            onChange={(e)=> setPrice(e.target.value)}  />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Last Price</label>
            <input type="number" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={lastPrice}
            onChange={(e)=> setLastPrice(e.target.value)}  />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Stock</label>
            <input type="number" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            value={stock}
            onChange={(e)=> setStock(e.target.value)} />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <textarea className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
            value={description}
            onChange={(e)=> setDescription(e.target.value)}  />
          </div>
          
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProductForm
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Category() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/category/${category}`)

        .then((res) => {
            setProducts(res.data);
            setLoading(false); 
        })
        .catch((err) => {
            console.error(err);
            setLoading(false); 
        });
    }, [category]);

  return (
    <>
{ loading?  <div className='w-full h-full flex items-center justify-center'>
            <div className='w-32 h-32 border-2 rounded-full animate-spin border-gray-500
            border-b-red-300 border-b-4'></div>
          </div> :<div>
<h1 className="text-2xl font-semibold text-gray-800 mb-6">{category} Products</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{products.map((product) => (
    <div
    key={product._id}
    className="group w-[245px] h-[400px] flex flex-col shadow-lg hover:scale-105 transform transition-transform duration-300"
    >
    <div className="w-full h-[73%] relative">
        <img
        src={product.Images[0]}
        alt={product.productName}
        className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
        />
        <img
        src={product.Images[1]}
        alt="Product Image"
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
    </div>
    <div className="bg-accent w-full h-[27%] flex flex-col items-center justify-center gap-2">
        <h1 className="font-normal text-[16px] text-gray-600 mt-3">
        {product.category}
        </h1>
        <h2 className="font-main text-[23px] font-semibold text-gray-800">
        {product.productName}
        </h2>
        <div className="flex items-center justify-center mb-4 gap-5">
        <h1 className="font-main text-[24px] font-semibold text-[#9c4221]">
            {product.lastPrice.toFixed(2)}
        </h1>
        {product.lastPrice < product.price && (
            <h1 className="font-main text-[21px] font-semibold text-gray-500 line-through">
            {product.price.toFixed(2)}
            </h1>
        )}
        </div>
    </div>
    </div>
))}
</div>
</div>}
</>
  )
}

export default Category
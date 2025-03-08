import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import image2 from "/faqH.jpg";
import { motion } from "framer-motion";
import Preloader from '../../components/Preloader';

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
        
        window.scrollTo(0, 0);

    }, [category]);

  return (
    <>
    <Header/>
{ loading? <Preloader/> :

<div className='w-full h-[100vh] bg-primary'>
<div className="w-full h-[370px] bg-primary flex items-center justify-center mt-8 relative">
        <div className="w-[1404px] h-full relative">
          <img
            src={image2}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/35 rounded-xl z-10 flex flex-col items-center justify-center">
            <motion.h1
            
              className="text-white font-main font-bold text-[80px] z-40"
            >
              {category} 
            </motion.h1>
            <motion.h1
         
              className="text-white font-second text-[65px] z-40"
            >
             products
            </motion.h1>
          </div>
        </div>
      </div>
<div className="bg-primary w-full h-full flex flex-wrap overflow-y-scroll gap-16 mt-44 justify-center">
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
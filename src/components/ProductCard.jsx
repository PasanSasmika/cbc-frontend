import React from 'react'
import product1 from '/product.jpg'
import product2 from '/product3.jpg'
import { Link } from 'react-router-dom'


function ProductCard(props) {
  return (
    <Link to={`/productInfo/${props.product.productId}`}>
    <div className='group w-[245px] h-[400px] bg-purple-200 flex flex-col  shadow-lg hover:scale-105 transform transition-transform duration-300'>
    <div className='w-full h-[73%] relative'>
      <img src={props.product.Images[0]} alt={props.product.productName} className='w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300' />
      <img src={product2} alt="Product Image" className='absolute inset-0 w-full h-full object-cover  opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
    </div>
    <div className='bg-accent w-full h-[27%] flex flex-col items-center justify-center gap-2'>
      <h1 className='font-normal text-[16px] text-gray-600'>Serum</h1>
      <h2 className='font-main text-[23px] font-semibold text-gray-800'>{props.product.productName}</h2>
      <div className='flex items-center justify-center gap-5'>
      <h1 className='font-main text-[24px] font-semibold text-[#9c4221]'>{props.product.lastPrice.toFixed(2)}</h1>
            {
                (props.product.lastPrice<props.product.price)&&
                <h1  className='font-main text-[21px] font-semibold text-gray-500 line-through'>{props.product.price.toFixed(2)}</h1>
            }
     
      </div>
    </div>
  </div>
  </Link>
  )
}

export default ProductCard;
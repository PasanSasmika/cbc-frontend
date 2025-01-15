import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
  return (
    <Link to={`/productInfo/${props.product.productId}`}>
        <div className='flex flex-col items-center'>
            <img src={props.product.Images[0]} alt={props.product.productName} 
            className='h-40 w-40 object-cover' />
            <h1>{props.product.productName}</h1>
            <h1>{props.product.lastPrice.toFixed(2)}</h1>
            {
                (props.product.lastPrice<props.product.price)&&
                <h1 className='line-through'>{props.product.price.toFixed(2)}</h1>
            }
           

        </div>
    </Link>
  )
}

export default ProductCard
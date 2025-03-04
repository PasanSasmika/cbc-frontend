import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { deleteItem } from '../utils/cartFunctions';

function CartCard({ productId, qty }) {
  const [product, setProduct] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + `/api/products/${productId}`)
        .then((response) => {
          if (response.data) {
            setProduct(response.data);
            setLoaded(true);
          } else {
            deleteItem(productId);
          }
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <>
      {!loaded ? (
        <div>Loading...</div>
      ) : (
        <div className="w-full max-w-[700px] bg-white hover:scale-105 transition duration-300 shadow-md p-4 rounded-lg flex items-center justify-between">
          {/* Product Image */}
          <img src={product?.Images[0]} alt="" className="w-16 h-16 rounded-md" />

          {/* Product Details */}
          <div className="flex-1 ml-4">
            <h1>{product?.productId}</h1>
            <h3 className="text-lg font-semibold">{product?.productName}</h3>
            <p className="text-gray-500">LKR. {product?.lastPrice.toFixed(2)}</p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center">
            <span className="mx-4"> {qty} |</span>
            
          </div>

          {/* Total Price */}
          <p className="text-lg font-bold">LKR. {(product?.lastPrice * qty).toFixed(2)}</p>
        </div>
      )}
    </>
  );
}

export default CartCard;

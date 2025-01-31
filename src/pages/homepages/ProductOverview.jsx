import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../utils/cartFunctions';
import toast from 'react-hot-toast';
import SecondaryLoader from '../../components/SecondaryLoader';
import Header from '../../components/Header';

function ProductOverview() {

  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  

  useEffect(()=>{
    console.log(productId)
    axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products/"+productId).then((res)=>{
      console.log(res.data)

      //if null

      if(res.data == null){
        setStatus("not-found")
      }

      if(res.data != null){
        setProduct(res.data)
        setStatus("found")
      }
      window.scrollTo(0, 0);

    })
  },[])

  function onAddtoCartClick(){
    addToCart(product.productId,1)
    toast.success(product.productName+ " Added to cart")
  }

  return (
    <>
    <Header/>
    <div className="h-[120vh] w-full bg-primary flex items-center justify-center p-8">
  {status === "loading" && <SecondaryLoader />}

  {status === "not-found" && (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-red-500">Oops..! Product Not Found</h1>
    </div>
  )}

  {status === "found" && (
    <div className="flex w-full h-full rounded-lg overflow-hidden">
      
      <div className="w-[60%] bg-primary p-6 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-4 w-full">
  <img src={product.Images[0]} alt="" className="w-full h-[400px] object-cover  shadow-md" />
  <img src={product.Images[1]} alt="" className="w-full h-[400px] object-cover  shadow-md" />
  <img src={product.Images[2]} alt="" className="w-full h-[400px] object-cover shadow-md" />
  <img src={product.Images[3]} alt="" className="w-full h-[400px] object-cover  shadow-md" />
</div>

      </div>

      
      <div className="w-[40%] bg-primary p-8 flex flex-col  space-y-6">
        <h3 className="text-gray-600 text-lg font-accent font-medium uppercase tracking-wide">
          {product.category}
        </h3>
        <h1 className="text-4xl font-bold font-main text-gray-900">{product.productName}</h1>
        <h2 className="text-2xl font-medium text-gray-700">
          {product.altNames.join(" / ")}
        </h2>

        <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
          {product.price > product.lastPrice && (
            <span className="line-through text-red-500 font-main">LKR. {product.price}</span>
          )}
          <span className="text-green-600 font-main">LKR. {product.lastPrice}</span>
        </h1>

        <p className="text-gray-600 text-md font-accent">{product.description}</p>

        <button
          onClick={onAddtoCartClick}
          className="mt-4 px-6 py-3 bg-[#653c20] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-secondary transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )}
</div>
</>
  )
}

export default ProductOverview
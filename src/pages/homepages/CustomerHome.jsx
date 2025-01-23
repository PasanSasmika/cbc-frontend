import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ProductOverview from "./ProductOverview";
import Products from "./Products";
import Cart from "./Cart";
import { FaOpencart } from "react-icons/fa";
import Header from "../../components/Header";
import Home from "./Home";
import SkinImprove from "./SkinImprove";
import GlowCollection from "./GlowCollection";
import PassionPage from "./PassionPage";
import Preloader from "../../components/Preloader";
import ProductCollection from "./ProductCollection";

function CustomerHome() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 4200);
  },[])
  return (
    <>
    {loading ? <Preloader/>:
       <div className="w-full h-screen bg-primary">
       <div>
         <Routes>
           <Route
             path="/"
             element={
               <main>
                 <Header />
                 <Home />
                 <PassionPage/>
                 <GlowCollection/>
                 <SkinImprove/>
                 <ProductCollection/>
                 
               </main>
             }
           />
           <Route path="/products" element={<Products />} />
           <Route path="/productInfo/:id" element={<ProductOverview />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/contact" element={<h1>Contact</h1>} />
           <Route path="/*" element={<h1>Error</h1>} />
         </Routes>
       </div>
     </div>
    }
   
    </>
  );
}

export default CustomerHome;

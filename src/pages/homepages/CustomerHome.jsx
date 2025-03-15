import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ProductOverview from "./ProductOverview";
import Products from "./Products";
import Cart from "./Cart";
import { FaOpencart } from "react-icons/fa";
import Header from "../../components/Header";
import Home from "./Home";
import GlowCollection from "./GlowCollection";
import PassionPage from "./PassionPage";
import Preloader from "../../components/Preloader";
import ProductCollection from "./ProductCollection";
import Category from "./Category";
import SpecialProduct from "./SpecialProduct";
import Footer from "../../components/Footer";
import AboutUs from "./AboutUs";
import Blogs from "./Blogs";
import Faq from "./Faq";
import Contact from "./Contact";
import BlogInfo from "./BlogInfo";
import Shipping from "./Shipping";
import Error from "./Error";
import MyOrders from "./MyOrders";
import MyProfile from "./MyProfile";
import AddReview from "./AddReview";


function CustomerHome() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 4200);
    window.scrollTo(0, 0);

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
                 <ProductCollection/>
                 <SpecialProduct/>
                 <Footer/>
                 
               </main>
             }
           />
           <Route path="/products" element={<Products />} />
           <Route path="/productInfo/:id" element={<ProductOverview />} />
           <Route path="/products/:category" element={<Category/>} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/aboutus" element={<AboutUs/>} />
           <Route path="/blogs" element={<Blogs/>} />
           <Route path="/blogdata" element={<BlogInfo/>} />
           <Route path="/faq" element={<Faq/>} />
           <Route path="/shipping" element={<Shipping/>} />
           <Route path="/contact" element={<Contact/>} />
           <Route path="/profile" element={<MyProfile/>} />
           <Route path="/review" element={<AddReview/>} />
           <Route path="/*" element={<Error/>} />
         </Routes>
       </div>
     </div>
    }
   
    </>
  );
}

export default CustomerHome;

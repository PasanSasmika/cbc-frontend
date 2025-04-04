import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import ProductCard from '../../components/ProductCard'
import Header from '../../components/Header'
import image from '/image2.jpg'
import { motion } from 'framer-motion' 
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { BiSearch } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'
import { Category, CategoryBar, HomePageAnimation } from '../../animations/animation'
import Preloader from '../../components/Preloader'

function Products() {
    const [products, setProducts] = useState([])
    const [loadingStatus, SetLoadingStatus] = useState("loading")
    const [catBar, setCatBar] = useState(false);
    const [query, setQuery] = useState("")
    
    useEffect(()=>{
        if(loadingStatus === "loading"){
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/products')
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
                SetLoadingStatus('loaded')
            })
            .catch(() => toast.error('Error loading products'))
        }
        window.scrollTo(0, 0);
    },[])

    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate(`/products/${category}`);
    };

    const search = () => {
        if (query === "") {
            toast.error('Enter a search query');
            return;
        }
        
        SetLoadingStatus("loading")
        axios.get(import.meta.env.VITE_BACKEND_URL + '/api/products/search/' + query)
        .then((res) => {
            console.log(res.data)
            setProducts(res.data)
            SetLoadingStatus('loaded')
        })
        .catch(() => toast.error('Error loading products'))
    };

    return (
        <>
           {loadingStatus === "loaded" && (
    <div className="w-full h-full flex-col bg-primary">
        <Header />
        <div className="w-full h-[370px] flex items-center justify-center mt-8 relative">
            <div className="w-[1404px] h-full relative">
                <img src={image} alt="" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/35 rounded-xl z-10 flex flex-col items-center justify-center">
                    <motion.h1 {...Category()}  className="text-white font-main font-bold text-[80px] z-40">Shop </motion.h1>
                    <motion.h1 {...Category()} className="text-white font-second text-[65px] z-40">Our products</motion.h1>
                </div>
            </div>
        </div>

        {/* Search Bar */}
        <div className="w-full flex justify-center items-center mt-8"> {/* Adjusted margin-top */}
            <div className="flex items-center bg-primary rounded-full shadow-md overflow-hidden border-2 border-secondary focus-within:border-secondary transition">
                <input 
                    type="text"  
                    placeholder="Search products..." 
                    className="px-4 py-2 outline-none w-[250px] md:w-[400px] text-secondary bg-primary"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button 
                    onClick={search} 
                    className=" px-4 py-2 flex items-center justify-center text-secondary hover:bg-secondary-dark transition"
                >
                    <BiSearch size={21}/>
                </button>
            </div>
        </div>

        {/* Category Dropdown */}
        <div className="w-full flex justify-center items-center mt-14 relative">
            <div className="flex items-center gap-4">
                <h1 className="text-secondary text-[30px] font-main font-semibold">Category</h1>
                <span 
                    className="text-secondary text-[30px] font-main cursor-pointer transform transition-all duration-300 hover:scale-110"
                    onClick={() => setCatBar(true)}
                >
                    <MdOutlineKeyboardArrowDown />
                </span>
            </div>

            {catBar && (
                <div className="absolute top-0 left-0 w-full flex justify-center mt-2" onClick={() => setCatBar(false)}>
                    <motion.div {...CategoryBar()} className="bg-accent shadow-md rounded-lg flex items-center cursor-pointer justify-center gap-6 p-6 w-[700px] mt-12 transform transition-all duration-500 ease-in-out">
                        <h1 className="text-secondary text-[16px] font-accent" onClick={() => handleCategoryClick("skincare")}>Skincare</h1>
                        <h1 className="text-secondary text-[16px] font-accent" onClick={() => handleCategoryClick("nailcare")}>Nailcare</h1>
                        <h1 className="text-secondary text-[16px] font-accent" onClick={() => handleCategoryClick("fragrance")}>Fragrance</h1>
                        <h1 className="text-secondary text-[16px] font-accent" onClick={() => handleCategoryClick("bath&body")}>Bath & Body</h1>
                        <h1 className="text-secondary text-[16px] font-accent" onClick={() => handleCategoryClick("makeup")}>Makeup</h1>
                    </motion.div>
                </div>
            )}
        </div>

        {/* Product Grid */}
        <div className="flex-1 overflow-y-auto w-full bg-gradient-to-b from-primary flex-wrap flex items-center justify-center gap-16 gap-y-32 p-16 mt-14">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
)}

{loadingStatus === "loading" && (
    <div>
        <Preloader />
    </div>
)}
        </>
    )
}

export default Products;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image from "/image14.jpg";
import image2 from "/image7.jpg";
import image3 from "/about3.jpg";
import image4 from "/image40.jpg";
import image5 from "/about4.jpg";
import Header from "../../components/Header";
import { About, About2, Category } from "../../animations/animation";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Blogs() {
  const [blog, setBlog] = useState([]);
  const [blogState, setBlogState] = useState("loading");

  useEffect(() => {
    if (blogState == "loading") {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/blogs")
        .then((res) => {
          setBlog(res.data);
          setBlogState("loaded");
        })
        .catch((err) => toast.error("Error loading blogs"));
        window.scrollTo(0, 0);

    }
  },[]);
  
  const blogNavigate = useNavigate();

  const click = (post) => {
    blogNavigate(`/blogdata/`, {
      state: {
        catg: post.blogCatg,
        image: post.Images,
        topic: post.blogTopic,
        data: post.miniDesc,
        desc: post.desc,
        date: post.date.split("T")[0],
      },
    });
  };
  return (
    <div className=" min-h-[120vh] w-full bg-primary">
      <Header />
      <div className="w-full h-[370px] flex items-center justify-center mt-8 relative">
        <div className="w-[1404px] h-full relative">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/35 rounded-xl z-10 flex flex-col items-center justify-center">
            <motion.h1
              {...Category()}
              className="text-white font-main font-bold text-[80px] z-40"
            >
              Fresh Beauty
            </motion.h1>
            <motion.h1
              {...Category()}
              className="text-white font-second text-[65px] z-40"
            >
              insights
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="w-full h-[450px] flex items-center mt-32">
        <motion.div
          {...About()}
          className="flex w-[50%] h-full items-center ml-6"
        >
          <img src={image2} alt="" className="w-[90%] h-[420px] object-cover" />
        </motion.div>
        <div className="flex flex-col   w-[50%] h-full p-10">
          <h2 className="text-[35px] font-second text-gray-600 mt-2">
            Moisturizers
          </h2>
          <h1 className="text-[37px] w-[600px] font-main font-bold text-gray-900">
            How to choose perfect moisturizers for every occasion
          </h1>
          <p className="text-gray-700 font-accent mt-4 leading-relaxed">
            Discover crystal’s collection of moisturizers and learn how to
            select the right scent for your style and mood.here, this part need
            30 words Discover crystal’s collection of moisturizers and learn how
            to select the right scent for your style and mood.
          </p>
          <div className="w-24 h-[3px] bg-gray-500 mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-28">
       {  <div className="grid grid-cols-2 gap-12 w-[80%]">
          {blog.map((post) => (
            <div
              key={post.id}
              className="bg-accent  overflow-hidden transition-transform duration-500 hover:scale-105"
              onClick={() => click(post)}
            >
              <div className="relative">
                <img
                  src={post.Images}
                  alt="Skincare product"
                  className="w-full h-[260px] object-cover"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                  <button className="text-white font-second text-[20px] px-4 py-2 rounded-lg shadow-md hover:bg-opacity-80">
                    Read More
                  </button>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">
                  {post.date.split("T")[0]}
                </p>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">
                  {post.blogCatg}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mt-2 leading-snug">
                  {post.blogTopic}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{post.miniDesc}</p>
                <div className="mt-4 w-16 h-[3px] bg-gray-400 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>}
      </div>

        <div className="mt-20">
        <Footer />
        </div>
    </div>
  );
}

export default Blogs;

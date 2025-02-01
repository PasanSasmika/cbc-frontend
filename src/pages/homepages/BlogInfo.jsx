import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";

function BlogInfo() {
  const location = useLocation();
  const { catg, image, topic, data, desc } = location.state || {};

  return (
    <>
     <Header/>
   
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-primary p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
        {/* Category */}
        <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
          {catg}
        </span>

        {/* Image */}
        <img
          src={image}
          alt={topic}
          className="w-full h-60 object-cover rounded-lg mt-4"
        />

        {/* Topic */}
        <h1 className="text-gray-900 text-2xl font-bold mt-4">{topic}</h1>

        {/* Date */}
        <span className="text-gray-500 text-sm mt-2">{data}</span>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mt-4">{desc}</p>
      </div>
    </div>
    </>
  );
}

export default BlogInfo;

import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";

function BlogInfo() {
  const location = useLocation();
  const { catg, image, topic, desc } = location.state || {};

  return (
    <>
      <Header />
      <div className="flex flex-col items-center w-full min-h-screen bg-primary p-6">
        <div className="max-w-4xl w-full  shadow-lg rounded-lg p-8">
          <span className="text-secondary text-lg font-accent font-medium uppercase tracking-wide">
            {catg}
          </span>
          <h1 className="text-4xl font-bold font-main text-gray-900 mt-4 text-center md:text-left">
            {topic}
          </h1>
          <img
            src={image}
            alt={topic}
            className="w-full h-80 object-cover rounded-lg mt-6"
          />
          <p className="text-lg text-gray-700 mt-6 leading-relaxed">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default BlogInfo;

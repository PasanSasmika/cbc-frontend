import React, { useState } from "react";
import image from "/faq.jpg";
import image1 from "/nws.jpg";
import image2 from "/faqH.jpg";
import Header from "../../components/Header";
import { motion } from "framer-motion";
import { About, Category } from "../../animations/animation";
import { RiArrowDownSLine } from "react-icons/ri";
import Footer from "../../components/Footer";

function Faq() {
  const questions = [
    {
      id: 1,
      question: "How can I place an order?",
      answer:
        "Discover crystal’s collection of moisturizers and learn how to select the right scent for your style and mood. Our experts guide you through the best options for your needs.",
    },
    {
      id: 2,
      question: "How can I track my order?",
      answer:
        "Once your order is placed, you will receive a tracking number via email. You can use this number to monitor the status of your order on our website.",
    },
    {
      id: 3,
      question: "Can I modify my order after placing it?",
      answer:
        "We allow modifications to your order within 24 hours of placing it. Please contact customer service immediately to request any changes.",
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and Apple Pay for your convenience.",
    },
  ];

  const [openAnswers, setOpenAnswers] = useState({});

  const toggleAnswer = (id) => {
    const newOpenAnswers = { ...openAnswers };
    newOpenAnswers[id] = !newOpenAnswers[id];
    setOpenAnswers(newOpenAnswers);
  };

  return (
    <div className="min-h-[120vh] w-full bg-primary">
      <Header />
      <div className="w-full h-[370px] flex items-center justify-center mt-8 relative">
        <div className="w-[1404px] h-full relative">
          <img
            src={image2}
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
              Insights
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="w-full h-[950px] flex items-center mt-24">
        <motion.div
          {...About()}
          className="flex w-[40%] h-full items-center ml-20"
        >
          <img
            src={image}
            alt=""
            className="w-[90%] h-[680px] mb-6 object-cover"
          />
        </motion.div>
        <div className="flex flex-col mr-9 w-[50%] h-full p-10">
          {questions.map((q) => (
            <div key={q.id} className="flex flex-col mt-14">
              <div className="flex">
                <h1 className="text-[30px] w-[600px] mt-5 font-main font-bold text-gray-900">
                  {q.question}
                </h1>
                <button
                  className="text-secondary text-[32px] font-second transition-all duration-300 ease-in-out transform 
                hover:scale-110 "
                  onClick={() => toggleAnswer(q.id)}
                >
                  <RiArrowDownSLine className="w-8 h-8" />
                </button>
              </div>
              {openAnswers[q.id] && (
                <motion.div
                  initial={{ y: -18 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.2, ease: "linear" }}
                >
                  <p className="text-gray-700 text-[19px] font-accent mt-4 leading-relaxed">
                    {q.answer}
                    <div className="w-24 h-[3px] bg-gray-500 mt-6 rounded-full"></div>
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[450px] bg-accent flex items-center mt-28">
        <motion.div {...About()} className="flex w-[50%] h-full items-center">
          <img
            src={image1}
            alt=""
            className="w-[90%] h-full object-cover ml-4"
          />
        </motion.div>
        <div className="flex flex-col items-center  w-[45%] h-full p-10">
          <h2 className="text-[35px] font-second text-gray-600 mt-2">
            join our newsletter
          </h2>
          <h1 className="text-[40px] w-[500px] text-center font-main font-bold text-gray-900">
            Subscribe for latest updates & news
          </h1>
          <div className=" flex-col justify-center items-center mt-7">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-[280px] h-12 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
            />
            <h1 className="text-center text-gray-700 text-[19px] font-accent mt-3 cursor-pointer">
              Subscribe
            </h1>
          </div>
          <div className="w-28 h-[3px] bg-gray-500 mt-3 rounded-full"></div>
        </div>
      </div>
      <div className="mt-36">
        <Footer />
      </div>
    </div>
  );
}

export default Faq;

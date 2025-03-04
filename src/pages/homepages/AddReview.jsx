import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import axios from 'axios';

function AddReview() {
  const location = useLocation();
  const { selectedOrder } = location.state || {};

  // State hooks for user information and review details
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productId, setProductId] = useState('');
  const [comment, setComment] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleReviewClick = (id) => {
    setProductId(id);
    setIsModalOpen(true);
  };

  async function handleSubmit() {
    const review = { 
      comment,
      firstName,
      lastName,
    };
    const token = localStorage.getItem('token');

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/products/${productId}/review`, 
        review, 
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
     
      toast.success('Review added successfully!');
      navigate('/')
    } catch (error) {
      toast.error('Failed to add review!');
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-primary">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-5">Your Order</h2>
        {selectedOrder ? (
          <div className="w-full space-y-4">
            {selectedOrder.orderedItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg shadow-md object-cover border-2 border-gray-300"
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="font-semibold text-gray-900">{item.productId}</p>
                </div>
                <button
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-md hover:scale-105 transition"
                  onClick={() => handleReviewClick(item.productId)}
                >
                  Review
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No order details available.</p>
        )}
      </motion.div>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg bg-white p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Write a Review</h3>
            
            <div className="mb-4">
              <label htmlFor="first-name" className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none"
                placeholder="Your First Name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="last-name" className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none"
                placeholder="Your Last Name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="review-text" className="block text-gray-700 mb-2">Write your review</label>
              <textarea
                id="review-text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none"
                rows="4"
                placeholder="Write your review here"
              ></textarea>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg"
                onClick={handleSubmit}
              >
                Submit Review
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default AddReview;

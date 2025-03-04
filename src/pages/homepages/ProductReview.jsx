import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';

function ProductReview({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [reviewStatus, setReviewStatus] = useState("loading");

  useEffect(() => {
    if (reviewStatus === "loading" && productId) {
      axios.get(import.meta.env.VITE_BACKEND_URL + `/api/products/${productId}/review`)
        .then((res) => {
          setReviews(res.data.reviews || []);
          setReviewStatus("loaded");
        })
        .catch(() => {
          toast.error("Error loading reviews");
          setReviewStatus("error");
        });
    }
  }, [productId]);

  return (
    <div className="bg-[#f9f3ef] min-h-screen p-10 flex flex-col items-center">
      <h2 className="text-4xl font-bold font-main text-gray-900">Customer Reviews</h2>
      <p className="text-center text-gray-600 max-w-xl mb-8">
        See what our customers have to say about this product.
      </p>
      <div className="w-full max-w-2xl">
        {reviewStatus === "loading" && <p className="text-gray-500 text-center">Loading reviews...</p>}
        {reviewStatus === "error" && <p className="text-red-500 text-center">Failed to load reviews.</p>}
        {reviews.length === 0 && reviewStatus === "loaded" && (
          <p className="text-gray-500 text-center">No reviews yet. Be the first to write one!</p>
        )}
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-300 pb-4 mb-4">
            <div className="flex items-center mb-1">
              <FaStar className="text-yellow-500" />
              <p className="ml-2 text-gray-800 font-semibold">{review.firstName}</p>
              <p className="ml-2 text-gray-800 font-semibold">{review.lastName || 'Anonymous'}</p>
            </div>
            <p className="text-gray-700 mb-1 font-main">{review.comment}</p>
            <p className="text-gray-500 text-sm">{new Date(review.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductReview;

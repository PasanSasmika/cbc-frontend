import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { BiPlus } from "react-icons/bi";
import { ProfileAnimation, ProfileAnimation2, ProfileAnimation3 } from "../../animations/animation";
import { useNavigate } from "react-router-dom";

function MyOrders({ userFirstName, userLastName }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    setLoading(true);
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to fetch orders. Please try again.");
        setLoading(false);
      });
  }, []);

  const calculateTotal = (orderedItems) => {
    return orderedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleRowClick = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  function clicked(e, order) {
    e.stopPropagation();
    toast.success("Add a review");
    navigate("/review", { state: { selectedOrder: order } });
  }
  return (
    <motion.div {...ProfileAnimation()} className="w-full min-h-screen flex flex-col items-center p-4 bg-primary">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">My Orders</h1>

      {loading ? (
        <p className="text-gray-700">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        <motion.div {...ProfileAnimation2()}className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full text-sm sm:text-base">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-2 sm:p-3 text-left">Order ID</th>
                <th className="p-2 sm:p-3 text-left">Status</th>
                <th className="p-2 sm:p-3 text-left">Date</th>
                <th className="p-2 sm:p-3 text-left">Total</th>
              </tr>
            </thead>
            <motion.tbody {...ProfileAnimation3()}>
              {orders.map((order) => (
                <tr
                  key={order.orderId}
                  className="hover:bg-gray-100 cursor-pointer transition-all"
                  onClick={() => handleRowClick(order)}
                >
                  <td className="p-2 sm:p-3 border-b">{order.orderId}</td>
                  <td className="p-2 sm:p-3 border-b">
                    <span
                      className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors duration-300 ease-in-out ${
                        order.status === "Delivered"
                          ? "bg-green-600 text-white shadow-md hover:bg-green-700"
                          : "bg-yellow-600 text-white shadow-md hover:bg-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                    {order.status === "Delivered" && (
                     <button
                     className="flex items-center gap-3 mt-3 bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-700 active:scale-95"
                     onClick={(e) => clicked(e, order)}
                   >
                     <BiPlus size={18} />
                     <span className="font-semibold">Add a review</span>
                   </button>
                    )}
                  </td>
                  <td className="p-2 sm:p-3 border-b">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="p-2 sm:p-3 border-b font-semibold">
                    LKR {calculateTotal(order.orderedItems).toFixed(2)}
                  </td>
                </tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>
      )}

      {/* Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-lg p-4 sm:p-6 rounded-lg shadow-lg relative">
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              Order Details
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <span className="font-semibold">Order ID:</span>{" "}
                {selectedOrder.orderId}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {selectedOrder.status}
              </p>
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {new Date(selectedOrder.date).toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Name:</span>{" "}
                {selectedOrder.name}
              </p>
              <p>
                <span className="font-semibold">Address:</span>{" "}
                {selectedOrder.address}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {selectedOrder.phone}
              </p>
              <p>
                <span className="font-semibold">Notes:</span>{" "}
                {selectedOrder.notes || "None"}
              </p>
            </div>

            <h3 className="text-md font-bold mt-4">Ordered Items:</h3>
            <div className="border-t border-gray-200 mt-2 pt-2 max-h-40 overflow-y-auto">
              {selectedOrder.orderedItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 mb-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-md shadow-sm"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p>{item.productId}</p>
                    <p className="text-sm text-gray-600">
                      LKR {item.price.toFixed(2)} x {item.quantity} ={" "}
                      <span className="font-bold">
                        LKR {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default MyOrders;

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import CartCard from "../../components/CartCard";
import axios from "axios";

function Shipping() {
  const navigate = useNavigate();
  const location = useLocation();
  const cart = location.state?.items;

  const [total, setTotal] = useState(0);
  const [labeledTotal, setLabeledTotal] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!cart || cart.length === 0) {
      toast.error("No items in the cart.");
      navigate("/cart");
      return;
    }

    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/orders/quote", {
        orderedItems: cart,
      })
      .then((res) => {
        if (res.data.total != null) {
          setTotal(res.data.total);
          setLabeledTotal(res.data.labeledTotal);
        }
      })
      .catch((err) => {
        toast.error("Failed to fetch order quote. Please try again.");
        console.error(err);
      });
  }, [cart, navigate]);

  function createOrder() {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to place an order.");
      return;
    }

    if (!name || !phone || !address) {
      toast.error("Please fill in all shipping details.");
      return;
    }

    axios
      .post(
        import.meta.env.VITE_BACKEND_URL + "/api/orders",
        {
          orderedItems: cart,
          name,
          address,
          phone,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        console.log(res.data)
        toast.success("Order placed successfully!");
        navigate("/", { state: { orderId: res.data.orderId } });
      })
      .catch((err) => {
        toast.error("Failed to place order. Please try again.");
        console.error(err);
      });
  }

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 p-8 bg-gradient-to-r from-primary to-teal-50">
      {/* Cart Section */}
      <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h2 className="text-3xl font-medium text-gray-700">Selected Products</h2>
        <div className="space-y-4">
          {cart.map((item) => (
            <CartCard key={item.productId} productId={item.productId} qty={item.qty} />
          ))}
        </div>

        {/* Price Breakdown */}
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between text-lg text-gray-600">
            <span>Subtotal:</span>
            <span className="font-semibold">LKR {labeledTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-green-600 text-lg">
            <span>Discount:</span>
            <span>-LKR {(labeledTotal - total).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-xl text-gray-900">
            <span>Total:</span>
            <span>LKR {total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Shipping Form */}
      <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h3 className="text-3xl font-semibold text-gray-800">Shipping Details</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-4 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-4 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 placeholder-gray-500"
          />
          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border p-4 rounded-lg shadow-sm h-32 focus:ring-2 focus:ring-teal-400 placeholder-gray-500"
          />
        </div>

        {/* Checkout Button */}
        <button
          onClick={createOrder}
          className="mt-6 w-full bg-[#d5883a] text-white py-3 text-lg rounded-lg font-semibold hover:bg-teal-700 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Shipping;

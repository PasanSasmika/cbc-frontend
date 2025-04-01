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
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

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

  // Check if all required fields are filled
  const isFormValid = () => {
    return (
      name &&
      address &&
      phone &&
      paymentMethod &&
      (paymentMethod !== "card" || (cardNumber && expiryDate && cvv))
    );
  };

  function createOrder() {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to place an order.");
      return;
    }

    if (!isFormValid()) {
      toast.error("Please fill in all required details.");
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
          paymentMethod,
          ...(paymentMethod === "card" && {
            cardDetails: {
              cardNumber,
              expiryDate,
              cvv,
            },
          }),
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        toast.success("Order placed successfully!");
        // navigate("/", { state: { orderId: res.data.orderId } });
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

      {/* Shipping and Payment Form */}
      <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h3 className="text-3xl font-semibold text-gray-800">Shipping & Payment</h3>
        
        {/* Shipping Details */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-4 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 placeholder-gray-500"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-4 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 placeholder-gray-500"
            required
          />
          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border p-4 rounded-lg shadow-sm h-32 focus:ring-2 focus:ring-teal-400 placeholder-gray-500"
            required
          />
        </div>

        {/* Payment Method Selection */}
        <div className="space-y-4">
          <h4 className="text-xl font-medium text-gray-700">Payment Method</h4>
          
          <div className="flex items-center space-x-4">
            <input
              type="radio"
              id="cod"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              className="h-5 w-5 text-teal-600"
            />
            <label htmlFor="cod" className="text-gray-700">Cash on Delivery</label>
          </div>
          
          <div className="flex items-center space-x-4">
            <input
              type="radio"
              id="card"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
              className="h-5 w-5 text-teal-600"
            />
            <label htmlFor="card" className="text-gray-700">Credit/Debit Card</label>
          </div>
        </div>

        {/* Card Details (shown only when card payment is selected) */}
        {paymentMethod === "card" && (
          <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full border p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 placeholder-gray-500"
              maxLength="16"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-1/2 border p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 placeholder-gray-500"
                maxLength="5"
              />
              <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-1/2 border p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 placeholder-gray-500"
                maxLength="3"
              />
            </div>
            {/* Dummy card preview */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-white">
              <div className="flex justify-between items-center">
                <span>•••• •••• •••• {cardNumber.slice(-4) || '••••'}</span>
                <span className="text-xs">VALID THRU</span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span>{expiryDate || '••/••'}</span>
                <span className="text-xs">CVV: {cvv || '•••'}</span>
              </div>
            </div>
          </div>
        )}

        {/* Checkout Button */}
        <button
          onClick={createOrder}
          disabled={!isFormValid()}
          className={`mt-6 w-full py-3 text-lg rounded-lg font-semibold transition ${
            isFormValid()
              ? "bg-[#d5883a] text-white hover:bg-teal-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Shipping;
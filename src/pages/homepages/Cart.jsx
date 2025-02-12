import React, { useEffect, useState } from 'react';
import { loadCart } from '../../utils/cartFunctions';
import CartCard from '../../components/CartCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [labeledTotal, setLabeledTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loadedCart = loadCart();
    setCart(loadedCart);
    axios
      .post(import.meta.env.VITE_BACKEND_URL + '/api/orders/quote', {
        orderedItems: loadedCart,
      })
      .then((res) => {
        setTotal(res.data.total);
        setLabeledTotal(res.data.labeledTotal);
      });
  }, []);

  function checkoutOrderClicked() {
    navigate('/shipping', {
      state: { items: loadCart() },
    });
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-6">
      <h2 className="text-4xl font-bold font-main text-gray-900 mb-4">Your Cart</h2>

      {/* Cart Items - Full Width */}
      <div className="w-full max-w-4xl space-y-4">
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartCard key={item.productId} productId={item.productId} qty={item.qty} />
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Price Breakdown */}
      <div className="w-full max-w-4xl mt-6 border-t pt-4 text-gray-700 text-lg">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>LKR {labeledTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-green-500">
          <span>Discount:</span>
          <span>-LKR {(labeledTotal - total).toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-xl">
          <span>Total:</span>
          <span>LKR {total.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={checkoutOrderClicked}
        className="mt-6 w-full max-w-4xl bg-black text-white py-3 text-lg rounded-lg font-medium hover:bg-gray-800 transition"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;

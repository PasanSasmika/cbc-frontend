import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [editOrder, setEditOrder] = useState(null);
  const [updatedStatus, setUpdatedStatus] = useState('');
  const [updatedNotes, setUpdatedNotes] = useState('');

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setLoading(true);
    axios.get(import.meta.env.VITE_BACKEND_URL + '/api/orders', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {
      setOrders(res.data);
      setLoading(false);
    })
    .catch(() => {
      toast.error("Failed to fetch orders. Please try again");
      setLoading(false);
    });
  }, []);

  const calculateTotal = (orderedItems) => {
    return orderedItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const handleUpdateClick = (order) => {
    setEditOrder(order);
    setUpdatedStatus(order.status);
    setUpdatedNotes(order.notes || '');
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setEditOrder(null);
  };

  const handleUpdateOrder = async () => {
    try {
      await axios.put(import.meta.env.VITE_BACKEND_URL + `/api/orders/${editOrder.orderId}`, {
        status: updatedStatus,
        notes: updatedNotes,
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });

      toast.success("Order updated successfully");
      setOrders((prevOrders) => prevOrders.map(order => 
        order.orderId === editOrder.orderId ? { ...order, status: updatedStatus, notes: updatedNotes } : order
      ));
      closeModal();
    } catch (error) {
        console.log(error)
      toast.error("Failed to update order. Please try again");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">My Orders</h1>
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="w-full max-w-4xl border border-gray-200 shadow-sm rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border-b text-left">Order ID</th>
              <th className="p-2 border-b text-left">Status</th>
              <th className="p-2 border-b text-left">Date</th>
              <th className="p-2 border-b text-left">Total</th>
              <th className="p-2 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId} className="hover:bg-gray-50">
                <td className="p-2 border-b">{order.orderId}</td>
                <td className="p-2 border-b">{order.status}</td>
                <td className="p-2 border-b">{new Date(order.date).toLocaleDateString()}</td>
                <td className="p-2 border-b">LKR {calculateTotal(order.orderedItems).toFixed(2)}</td>
                <td className="p-2 border-b">
                  <button onClick={() => handleViewDetails(order)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">View Details</button>
                  <button onClick={() => handleUpdateClick(order)} className="bg-green-500 text-white px-2 py-1 rounded">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Order Details</h2>
            <p><span className="font-semibold">Order ID:</span> {selectedOrder.orderId}</p>
            <p><span className="font-semibold">Status:</span> {selectedOrder.status}</p>
            <p><span className="font-semibold">Date:</span> {new Date(selectedOrder.date).toLocaleString()}</p>
            <div className="flex justify-end mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}

      {editOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Update Order</h2>
            <label className="block mb-2">Status:</label>
            <input type="text" className="border p-2 w-full mb-4" value={updatedStatus} onChange={(e) => setUpdatedStatus(e.target.value)} />
            <label className="block mb-2">Notes:</label>
            <textarea className="border p-2 w-full mb-4" value={updatedNotes} onChange={(e) => setUpdatedNotes(e.target.value)}></textarea>
            <div className="flex justify-end">
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2" onClick={closeModal}>Cancel</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handleUpdateOrder}>Update</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import MyOrders from './MyOrders';
import cover from "/cover.png";
import { MdEdit } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

function MyProfile() {
  const [myDetails, setMyDetails] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('You are not a valid user. Please log in again.');
      return;
    }

    axios
      .get(import.meta.env.VITE_BACKEND_URL + '/api/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.type !== 'admin' && res.data.type !== 'customer') {
          toast.error('Unauthorized access..!');
        } else {
          setMyDetails(res.data);
        }
      })
      .catch(() => {
        toast.error('Failed to fetch user data');
      });
  }, []);

  return (
    <div className="flex flex-col items-center bg-primary py-10 px-4">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Cover Photo */}
        <div className="w-full h-48 bg-gray-200">
          <img
            src={myDetails.coverPhoto || cover}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center p-6 -mt-20">
          {/* Profile Picture */}
          <div className="w-36 h-36 border-4 border-white rounded-full overflow-hidden shadow-md">
            <img
              src={myDetails.profilepic || 'https://freesvg.org/img/abstract-user-flat-3.png'}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Details */}
          <h2 className="mt-4 text-2xl font-semibold text-gray-900">
            {myDetails.firstName} {myDetails.lastName}
          </h2>
          <p className="text-gray-600 text-lg">{myDetails.email}</p>
          

          {/* Action Buttons */}
          <div className="mt-4 flex gap-4">
  <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">
    <FiLogOut />
    Logout
  </button>
  <button className="flex items-center gap-2 border border-gray-400 text-gray-800 px-3 py-1.5 rounded-md shadow hover:bg-gray-200 transition duration-300 text-sm">
    <MdEdit />
    Edit
  </button>
</div>
        </div>
      </div>
      
      {/* Orders Section */}
      <div className="w-full max-w-4xl mt-8">
        <MyOrders />
      </div>
    </div>
  );
}

export default MyProfile;

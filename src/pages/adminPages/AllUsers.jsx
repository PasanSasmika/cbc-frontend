import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function AllUsers() {
    const [users, setUsers] = useState([]);
    const [pageStatus, setPageStatus] = useState("loading");

    useEffect(() => {
        if (pageStatus === "loading") {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/users/allusers")
                .then((res) => {
                    setUsers(res.data);
                    setPageStatus("loaded");
                })
                .catch(error => {
                    toast.error('Error loading users');
                    setPageStatus("error");
                });
        }
    }, []); const handleDelete = (userId) => {
        const token = localStorage.getItem("token");

        axios.delete(import.meta.env.VITE_BACKEND_URL + `/api/users/deleteuser/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            toast.success("User deleted successfully");
            setUsers(users.filter(user => user._id !== userId));
        })
        .catch((error) => {
            toast.error("Failed to delete user");
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">User Management</h1>
                    <p className="text-gray-600">Manage all system users</p>
                </div>

                <div className="space-y-4">
                    {users.map((user) => (
                        <div key={user.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                        {user.firstName} {user.lastName}
                                    </h2>
                                    <div className="flex items-center space-x-4">
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            user.type === 'customer' ? 'bg-red-100 text-red-800' :
                                            user.type === 'admin' ? 'bg-green-100 text-green-800' :
                                            'bg-blue-100 text-blue-800'
                                        }`}>
                                            {user.type}
                                        </span>
                                        <p className="text-gray-600">Email: {user.email}</p>
                                    </div>
                                </div>
                                
                                <div className="flex space-x-2">
                                    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                                        {user.status === 'active' ? 'Block' : 'Unblock'}
                                    </button>
                                    <button className="px-4 py-2 text-sm font-medium text-red-600 bg-red-100 rounded-md hover:bg-red-200"
                                     onClick={() => handleDelete(user._id)}>
                                        Delete
                                        
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllUsers;
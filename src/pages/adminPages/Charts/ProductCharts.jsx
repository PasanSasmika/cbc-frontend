import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';
import axios from 'axios';

const ProductCharts = () => {
  const barChartRef = useRef(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/stats/category`,
          { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        );
        setStats(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  useEffect(() => {
    if (!stats) return;

    let barChart;
    if (barChartRef.current) {
      const barCtx = barChartRef.current.getContext('2d');
      barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: stats.map(item => item._id),
          datasets: [{
            label: 'Products per Category',
            data: stats.map(item => item.count),
            backgroundColor: 'rgba(26, 188, 156, 0.6)',
            borderColor: 'rgb(26, 188, 156)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Product Distribution by Category',
              font: { size: 16 }
            }
          },
          scales: {
            y: { beginAtZero: true, ticks: { precision: 0 } }
          }
        }
      });
    }

    return () => barChart?.destroy();
  }, [stats]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-[#1ABC9C] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Loading product statistics...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 mx-auto mt-8 max-w-2xl bg-red-100 text-red-700 rounded-lg">
        <strong>Error:</strong> {error}
      </div>
    );
  }

  return (
    <div className="container max-w-7xl px-4 mx-auto py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Product Analytics Dashboard</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="h-80">
            <canvas ref={barChartRef}></canvas>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Category Metrics</h3>
          <ul className="space-y-3">
            {stats.map(cat => (
              <li key={cat._id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                <div className="font-medium text-gray-700">{cat._id}</div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-500">Products:</span>
                    <span className="ml-1 font-medium">{cat.count}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Avg Price:</span>
                    <span className="ml-1 font-medium">${cat.averagePrice.toFixed(2)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCharts;
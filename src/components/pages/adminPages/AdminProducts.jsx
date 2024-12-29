import React, { useState } from 'react'
import axios from 'axios';

function AdminProducts() {

  const [products, setProducts] = useState(
    [
      {
          "_id": "6753d0a7f8abae72e874f5f7",
          "productId": "P12345",
          "productName": "Wireless Earbuds",
          "altNames": [
              "Bluetooth Earbuds",
              "Cordless Earphones"
          ],
          "Images": [
              "https://example.com/images/earbuds1.jpg",
              "https://example.com/images/earbuds2.jpg"
          ],
          "price": 49.99,
          "lastPrice": 59.99,
          "stock": 120,
          "description": "High-quality wireless earbuds with noise cancellation and long battery life.",
          "__v": 0
      }
  ]
  )
  console.log(products)

axios.get("http://localhost:5000/api/products").then((res)=>{
    console.log(res)
})

  return (
    <div>fgdf</div>
  )
}

export default AdminProducts
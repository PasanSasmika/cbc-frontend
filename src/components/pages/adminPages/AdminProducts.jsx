import React from 'react'
import axios from 'axios';

function AdminProducts() {

axios.get("http://localhost:5000/api/products").then((res)=>{
    console.log(res)
})

  return (
    <div>fgdf</div>
  )
}

export default AdminProducts
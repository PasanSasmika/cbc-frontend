import React, { useState } from 'react'
 

function Product() {

const [count,setCount] = useState(0)
const [name,setName] = useState("School")


function inc(){
  setCount (count + 1)
}

function dec(){
  setCount (count - 1)
}


function changeName(value){
  setName(value)
}

  return (
    <div>
      <button onClick={dec} >-</button>
      <span>{count}</span>
      <button onClick={inc}>+</button>
      <h1>{name}</h1>

      <button onClick={()=>{changeName("teachers")}}>Teachers</button>
      <button onClick={()=>{changeName("Student")}}>Student</button>
      <button onClick={()=>{changeName("Principle")}}>Principle</button>


    </div>
  )
}

export default Product
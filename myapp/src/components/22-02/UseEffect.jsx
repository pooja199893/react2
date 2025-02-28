import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UseEffect = () => {
   const [counter,setCounter]=useState(0);
   const [counter1,setCounter1]=useState(0)
   const router=useNavigate();

   useEffect(()=>{
      console.log("inside useEffect")
   },[counter])


   const increase=()=>{
    setCounter((prevCount)=>prevCount+1)
   }
   const increase1=()=>{
    console.log("Outside useEffect");
    setCounter1((prevCount)=>prevCount+1)
   }

   
    
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increase}>+</button>
      <p>Counter1: {counter1}</p>
      <button onClick={increase1}>+</button>
      <br/> <br/>
      <button onClick={()=>router("/homeA")}>Home</button>

    </div>
  )
}

export default UseEffect
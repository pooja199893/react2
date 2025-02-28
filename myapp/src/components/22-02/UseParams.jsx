import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UseParams = () => {
    const router=useNavigate();
    const [numbers,setNumbers]=useState([1,2,3,4,5,6])
  return (
    <>
    <h1>Params :</h1>
    {numbers.map((number,idx)=>(
        <button key={idx} onClick={()=>router(`/paramProducts/${number}`)}>{number}</button>
    ))}
    </>
  )
}

export default UseParams
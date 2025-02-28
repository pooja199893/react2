import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ParamsProduct = () => {
    const {uniqueid} = useParams()
    const router= useNavigate();
  return (
    <div>
      <h1>ParamProduct :{uniqueid}</h1>
      <button onClick={()=>router("/homeA")}>Home</button>
    </div>
  )
}

export default ParamsProduct
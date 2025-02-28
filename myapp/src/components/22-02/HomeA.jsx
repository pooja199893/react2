import React from 'react'
import {useNavigate} from 'react-router-dom'

const Homee = () => {
    const router= useNavigate()
  return (
    <>
      <div>
        <button onClick={()=>router("/params")}>ParamsProduct</button>
        <button onClick={()=>router("/registerA")}>Register</button>
        <button onClick={()=>router("/useEffect")}>useEffect</button>
        <button onClick={()=>router("/params")}>useParams</button> 
        <button onClick={()=>router("/counter")}>Counter</button>

      </div>
    </>
  )
}

export default Homee
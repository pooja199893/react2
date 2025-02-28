import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const router=useNavigate();

  const increase = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter((prevCount) => prevCount - 1);
    }
  };

  const reset = () => {
    setCounter(1);
  };
  return (
    <div>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
      <br/>
      <button onClick={()=>router("/homeA")}>Home</button>
      
    </div>
  );
};

export default Counter;
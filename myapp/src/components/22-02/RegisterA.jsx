import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterA = () => {
  const router=useNavigate();
  const [loggedUser, setLoggedUser] = useState(false);

  const toggleBtn = () => {
    setLoggedUser(!loggedUser);
  };

  return (
    <div>
      {loggedUser ? (
        <div>
          <p>Welcome</p>
          <button onClick={toggleBtn}>logout</button>
        </div>
      ) : (
        <div>
          <p>Please login in</p>
          <button onClick={toggleBtn}>login</button>
        </div>
      )}
      <button onClick={()=>router("/homeA")}>Home</button>

    </div>
  );
};

export default RegisterA
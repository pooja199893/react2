// import { useNavigate } from "react-router-dom"

// function Login(){
//     const router = useNavigate();
//     return(
//         <>
//         <h1>Login</h1>
//         <button onClick={()=>router("/home")}>Home</button>
//         <button onClick={()=>router("/register")}>Register</button>
//         </>
//     )
// }
// export default Login

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const router = useNavigate();
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        { email: userData.email, password: userData.password }
      );
      if (response.data.success) {
        dispatch(login(response.data.userData));
        toast.success(response.data.message);
        setUserData({ email: "", password: "" });
        router("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message || error.response.data.error);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email :</label>
        <br />
        <input
          value={userData.email}
          onChange={handleChange}
          required
          type="email"
          name="email"
        />
        <br />
        <label>Password :</label>
        <br />
        <input
          value={userData.password}
          onChange={handleChange}
          required
          type="password"
          name="password"
        />
        <br />
        <input type="submit" />
        <br />
      </form>
      <button onClick={() => router("/register")}>Register</button>
    </div>
  );
}

export default Login;
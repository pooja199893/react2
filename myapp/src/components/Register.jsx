// import { useNavigate } from "react-router-dom"

// import { useContext, useState } from "react";
// import { MyCounterContext } from "../context/CounterContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";



// function Register(){
//     const router=useNavigate();
//     return(
//         <>
//         <h1>Register</h1>
//         <button onClick={()=>router("/")}>Home</button>
//         <button onClick={()=>router("/login")}>Login</button>
//         </>
//     )
// }
// export default Register



// import React, { useState } from 'react'

// const Register = () => {
//   const [allUsers,setAllUsers]=useState([])
//   const [users , setUsers]= useState({
//     name:"",
//     email:"",
//     pass:"",
//     cPass:""
//   })
//   // console.log(users)

//   const handleChange=(e)=>{
//     e.preventDefault();
//     // console.log(e.target.value,e.target.name)
//     setUsers({...users,[e.target.name]: e.target.value});
//   }

//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     if(
//       users.name &&
//       users.email &&
//       users.pass &&
//       users.cPass 
//     ){
//       if(users.pass === users.cPass){
//         setAllUsers([...allUsers,users]);
//         setUsers({
//           name:"",
//           email:"",
//           pass:"",
//           cPass:"",
//         });
//       }else{
//         alert("Password not matched")
//       }
//     }else{
//       alert("All fields are required");
//     }


//   }
//   return (
//     <>
//     <form onSubmit={handleSubmit} className='w-96 mx-auto mt-8 p-4 bg-blue-300 rounded-md'>
//       <h1 className='text-center text-2xl mb-4'>Register</h1>
//     <h2 htmlFor="name" className=" ">User Name :</h2>
//       <input 
//       className='outline p-1 w-full '
//       type='text'
//       placeholder='Enter your name'
//       name='name'
//       id='name'
//       onChange={handleChange}
//       value={users.name}
//       />
//       <br/>
//       <label htmlFor="email">Email :</label><br/>
//       <input 
//       className='outline p-1 w-full'
//       type='text'
//       placeholder='Enter your email'
//       name='email'
//       id='email'
//       onChange={handleChange}
//       value={users.email}
      
//       />
//       <br/>
//       <label htmlFor="password">Password :</label><br/>
//       <input 
//       className='outline p-1 w-full'
//       type='text'
//       placeholder='Enter your password'
//       name='pass'
//       id='password'
//       onChange={handleChange}
//       value={users.pass}

//       />
//       <br/>
//       <label htmlFor="cPassword" className='mb-8'>Confirm Password :</label><br/>
//       <input 
//       className='outline p-1 w-full'
//       type='text'
//       placeholder='Enter your Confirm Password'
//       name='cPass'
//       id='cPassword'
//       onChange={handleChange}
//       value={users.cPass}

//       />
//       <br/>
//       <input
//       type='submit'
//       className='bg-blue-500 text-white p-2 rounded-md mb-4'
//       />
//     </form>
//     <div>
//     <h5> All Users = </h5>

//       {
//         allUsers.map((user,idx)=>(
//           <ul key={idx} className='bg-blue-100 w-96 mx-auto mt-4 p-2 rounded-md'>
//             <li>Name : {user.name}</li>
//             <li>Email : {user.email}</li>
//             <li>Password : {user.pass}</li>
//           </ul>
//         ))
        
       
//       }
//     </div>
//     </>
//   )
// }

// export default Register

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { MyCounterContext } from "../context/CounterContext";

function Register() {
  const { state, dispatch } = useContext(MyCounterContext);
  console.log(state, "state in resgiter");
  const router = useNavigate();

  const [allUsers, setAllUsers] = useState([]);
  console.log(allUsers, "allUsers  ");

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(userData, "userData");

  const handleChange = (event) => {
    // console.log(event.target.value, "value", event.target.name, "name");
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (
        userData.name &&
        userData.email &&
        userData.password &&
        userData.confirmPassword
      ) {
        if (userData.password === userData.confirmPassword) {
          const response = await axios.post(
            "http://localhost:8000/api/v1/auth/register",
            {
              userData,
            }
          );
          if (response.data.success === true) {
            toast.success(response.data.message);
            console.log(response.data, "response from register apu");
            setAllUsers([...allUsers, userData]);
            setUserData({
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            });
            router("/login");
          } else {
            toast.error(response.data.message);
          }
        } else {
          toast.error("Password not amtched.");
        }
      } else {
        toast.error("All fields are required.");
      }
    } catch (error) {
      console.log(error, "error while submitting register.");
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <button onClick={() => router("/login")}>Login</button>
      <button onClick={() => router("/")}>Home</button>

      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <br />
        <input
          type="text"
          value={userData.name}
          onChange={handleChange}
          name="name"
        />
        <br />
        <label>Email : </label>
        <br />
        <input
          type="email"
          value={userData.email}
          onChange={handleChange}
          name="email"
        />
        <br />
        <label>Password : </label>
        <br />
        <input
          type="password"
          value={userData.password}
          onChange={handleChange}
          name="password"
        />
        <br />
        <label>Confirm Password : </label>
        <br />
        <input
          type="password"
          value={userData.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />
        <br />
        <input type="submit" />
        <br />
      </form>

      <h1>All Users</h1>
      {/* {user.email } */}
      {allUsers.map((user, i) => (
        <div>
          <h1>{i + 1}</h1>
          <h1>Name : {user.name}</h1>
          <h3>Email : {user.email}</h3>
        </div>
      ))}
    </div>
  );
}

export default Register;
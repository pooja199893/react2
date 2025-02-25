import { useNavigate } from "react-router-dom"

function Register(){
    const router=useNavigate();
    return(
        <>
        <h1>Register</h1>
        <button onClick={()=>router("/")}>Home</button>
        <button onClick={()=>router("/login")}>Login</button>
        </>
    )
}
export default Register
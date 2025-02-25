import { useNavigate } from "react-router-dom"

function Login(){
    const router = useNavigate();
    return(
        <>
        <h1>Login</h1>
        <button onClick={()=>router("/")}>Home</button>
        <button onClick={()=>router("/register")}>Register</button>
        </>
    )
}
export default Login
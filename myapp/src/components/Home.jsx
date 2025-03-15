import { useNavigate } from "react-router-dom"

function Home(){
    const router=useNavigate();
    return(
        <>
        <h1>Home</h1>
         <button onClick={()=>router("/register")}>Register</button>
        <button onClick={()=>router("/login")}>Login</button> 
         <button onClick={()=>router("/all-products")}>All Products</button>
        </>
    )
}

export default Home
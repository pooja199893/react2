import { Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Counter from './components/22-02/Counter'
import UseEffect from './components/22-02/UseEffect'
import UseParams from './components/22-02/UseParams'
import ParamsProduct from './components/22-02/ParamsProduct'
import RegisterA from './components/22-02/RegisterA'
import HomeA from './components/22-02/HomeA'
import Todo from './components/23-02/Todo'
import Todos from './components/01-03/Todos'
import UseMemo from './components/01-03/UseMemo'
import UseCallback from './components/01-03/UseCallback'
import UseRef from './components/02-03/UseRef'
import UseReducer from './components/02-03/UseReducer'
 import ContextCounter from './components/04-03/ContextCounter'
 import { MyCounterContext } from './context/CounterContext'
import { useContext, useEffect, useState } from 'react'
import ReduxCounter from './components/06-03/ReduxCounter'
import ContextTheme from './components/04-03/Contexttheme'
import FakeLogin from "./components/08-03/FakeLogin";
import AllProducts from "./components/08-03/AllProducts";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/userSlice";
import SingleProduct from "./components/09-03/SingleProduct";
import Navbar from "./components/09-03/Navbar";
 
function App() {
    // const { state, dispatch } = useContext(MyCounterContext);
    // console.log(state, "state in app from context");

    // console.log("Inside app");


    const [counter,setCounter] = useState(0);
    const tokenFromRedux = useSelector((state)=> state.user.token );
    console.log(tokenFromRedux);
    const dispatch = useDispatch();
  

    // useEffect(() => {
    //   const tokenFromLocalStorage = JSON.parse(localStorage.getItem("token"));
    //   if (tokenFromLocalStorage) {
    //     if (tokenFromRedux == null) {
    //       dispatch(login(tokenFromLocalStorage));
    //     }
    //   }
    // }, []);
 
  return (
    <>
    <Navbar />
      <Routes>
         <Route path='/home' element={<Home/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/Login' element={<Login/>}/>
         <Route path='/homeA' element={<HomeA/>}/>
         <Route path='/counter' element={<Counter/>}/>
          <Route path='/useEffect' element={<UseEffect/>}/>
          <Route path='/params' element={<UseParams/>}/>
        <Route path='/paramProducts/:uniqueid' element={<ParamsProduct/>}/>
        <Route path='/registerA' element={<RegisterA/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path="/todos" element={<Todos />} />
        <Route path='/use-memo' element={<UseMemo />} />
        <Route path='/use-callback' element={<UseCallback />} />
       <Route path='/use-ref' element={<UseRef />} />
        <Route path='/use-reducer' element={<UseReducer />} />
        <Route path="/context-counter" element={<ContextCounter />} />
        <Route path="/redux-counter" element={<ReduxCounter />} />
        <Route path="/context-theme" element={<ContextTheme />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/fake-login" element={<FakeLogin />} />
        {/* <Route path="/allprod" element={<AllProd  />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/add-product" element={<AddProduct />} /> */}
      </Routes>
    </>
  )
}

export default App

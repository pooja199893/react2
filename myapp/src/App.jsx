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

function App() {

  return (
    <>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/Login' element={<Login/>}/>
         <Route path='/homeA' element={<HomeA/>}/>
         <Route path='/counter' element={<Counter/>}/>
          <Route path='/useEffect' element={<UseEffect/>}/>
          <Route path='/params' element={<UseParams/>}/>
        <Route path='/paramProducts/:uniqueid' element={<ParamsProduct/>}/>
        <Route path='/registerA' element={<RegisterA/>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
    </>
  )
}

export default App

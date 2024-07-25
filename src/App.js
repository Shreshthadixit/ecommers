import './App.css';
import Navbar from './component/Navbar';
import Cart from './page/Cart';
import Home from './page/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes }from 'react-router-dom'
import Single from './page/Single';
import { useState } from 'react';
import Signup from './page/Signup';
import Login from './page/Login';
function App() {
  const[cartArr,setcartArr]=useState([]);
  console.log(cartArr)

  let getCartItems=(ans)=>{
    console.log(ans)
    ans.quantity=1;
    setcartArr([...cartArr,ans])
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home getCartItems={getCartItems}/>}/>
      <Route path='/Cart'element={<Cart cartArr={cartArr} setcartArr={setcartArr}/>}/>
      <Route path='/Single' element={<Single/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>


     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

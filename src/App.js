import './App.css';
import Navbar from './component/Navbar';
import Cart from './page/Cart';
import Home from './page/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes }from 'react-router-dom'
import Single from './page/Single';
import { useState } from 'react';
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
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

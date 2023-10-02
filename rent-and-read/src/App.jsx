import './App.css'

import Category from './Pages/Category';
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wishlist from './Pages/Wishlist';
import SignIn from './Pages/Signin';
import AddToCart from './Pages/AddtoCart'
import Registration from './Pages/registrationform'
function App() {
  
  return (
    <>
     
    <BrowserRouter>
    
      <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/wishlist" element={<Wishlist/>} />
          <Route exact path="/signin" element={<SignIn/>} />
          <Route exact path="/addtocart" element={<AddToCart/>} />
          <Route exact path="/registrationform" element={<Registration/>} />
      </Routes>
    </BrowserRouter>

     </>
  )
}

export default App

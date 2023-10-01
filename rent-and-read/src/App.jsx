import './App.css'
import NavBar from './Components/Navbar/Navbar'
import Category from './Pages/Category';
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wishlist from './Pages/Wishlist';
function App() {
  
  return (
    <>
     
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/wishlist" element={<Wishlist/>} />
          
       
      </Routes>
    </BrowserRouter>
     </>
  )
}

export default App

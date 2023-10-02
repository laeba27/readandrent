import styles from  "../Navbar/navbar.module.css";
import logo from "../../assets/logo.png";
import searchlogo from "../../assets/search.svg";
import {  Link } from "react-router-dom";
// import { useState } from "react";

export default function NavBar() {
// const [isuser, setisuser] = useState(username)
  return (
    <div className={styles.navbar}>
    <div className={styles.leftnav}>
    <img className={styles.logo} src={logo} alt="" />
      
      <div className={styles.navitems}>
      <Link to="/">Home</Link>
      <Link to="/category">Categories</Link>
      <Link to="/wishlist">Wishlist</Link>
      <Link to="/">AboutUs</Link>
      </div>
    </div>
   
      <div className={styles.rightnav}>
      <img className={styles.searchlogo} src={searchlogo} alt="" />
        <input type={styles.text} placeholder="Search your book"  />
        <h2>|</h2>
         <Link to="/signin">SignIn</Link>
      </div>
     
    </div>
  );
}

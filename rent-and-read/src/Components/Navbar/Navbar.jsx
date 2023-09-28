import styles from  "../Navbar/navbar.module.css";
import logo from "../../assets/logo.png";
import searchlogo from "../../assets/search.svg";
export default function NavBar() {
  return (
    <div className={styles.navbar}>
    <div className={styles.leftnav}>
    <img className={styles.logo} src={logo} alt="" />
      <div className={styles.navitems}>
      <a href="/">Home</a>
      <a href="/">Categories</a>
      <a href="/">Wishlist</a>
      <a href="/">AboutUs</a>
      </div>
    </div>
   
      <div className={styles.rightnav}>
      <img className={styles.searchlogo} src={searchlogo} alt="" />
        <input type={styles.text} placeholder="Search your book"  />
        <h2>|</h2>
         <h4 className={styles.signin}>SignIn</h4>
      </div>
    </div>
  );
}

import styles from "../Header/header.module.css";

import book from "../../assets/h-book1.png";
import book2 from "../../assets/h-book3.png";
import book3 from "../../assets/h-book2.png";
import { Link } from "react-router-dom";

const Header = () => {

  const arr = [1, 2, 3]


  return (
    <div className={styles.carousel}>
      <div className={styles.container}>
        {
          arr.map((item, index) => {
            return (
              <div key={index} className={styles.header}>
                <div className={styles.left}>
                  <h1>Find Your Next Book</h1>
                  <p>
                  Start a Reading Adventure: Explore, Find, and Dive into Books {"with '"}Find Your Next {"Book'"} – Your Trusted Friend for Handpicked Reading Recommendations!
                  </p>
                  <Link to={"/category"}>

                  <button className={styles.explore}>Explore now</button>
                  </Link>
                </div>
                <div className={styles.bookspic}>
                  <div className={styles.bookcontainer1}>
                    <img className={styles.book1} src={book} alt="" />
                    <h4>Art of the Modern Age</h4>
                    <h5>Jean-Marie Schaeffer</h5>
                  </div>
                  <div className={styles.bookcontainer2}>
                    <h4>Art of the Modern Age</h4>
                    <h5>Jean-Marie Schaeffer</h5>
                    <img className={styles.book2} src={book2} alt="" />
                  </div>

                  <div className={styles.bookcontainer1}>
                    <img className={styles.book1} src={book3} alt="" />
                    <h4>Art of the Modern Age</h4>
                    <h5>Jean-Marie Schaeffer</h5>
                  </div>
                </div>
              </div>
            )
          })
        }





      </div>
    </div>
  );
};

export default Header;

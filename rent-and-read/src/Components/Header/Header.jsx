import styles from "../Header/header.module.css";

import book from "../../assets/h-book1.png";
import book2 from "../../assets/h-book3.png";
import book3 from "../../assets/h-book2.png";

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit lorem.Lorem
                    ipsum dolor sit amet consectetur
                  </p>
                  <button className={styles.explore}>Explore now</button>
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

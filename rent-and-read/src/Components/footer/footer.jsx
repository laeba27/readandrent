import styles from "../footer/footer.module.css";
import {Link} from "react-router-dom";
const footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.firstrow}>
          <h2>Company</h2>
          <ul>
            <li>About us</li>
            <li>contact us</li>
           
            <li>company</li>
          </ul>
        </div>
        <div className={styles.firstrow}>
          <h2>help</h2>
          <ul>
            <li>subscription instruction</li>
            <li>help center</li>
            <li>problem with the site</li>
          </ul>
        </div>
        <div className={styles.firstrow}>
          <h2>user</h2>
          <ul>
          <Link to={"/registrationform"}>
          <li>registration</li>
          </Link>
            <li>basket</li>
            <Link to={"/wishlist"}>
          <li>Wishlist</li>
          </Link>
          </ul>
        </div>
        <div className={styles.firstrow}>
          <h2>follow us</h2>
          <ul>
            <li>instagram</li>
            <li>facebook</li>
            <li>twitter</li>
          </ul>
        </div>
        <div className={styles.firstrow}>
        <h2>Contact Us</h2> 
        <input type="text" placeholder="Enter Email Here" />
        <button>Send Email</button>
        </div>
      </div>
    </div>
  );
};

export default footer;

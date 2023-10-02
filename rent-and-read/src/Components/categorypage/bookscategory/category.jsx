
import styles from "../bookscategory/category.module.css";

const category = () => {
  return (
    <div>
    <div className={styles.container}>
    <div className={styles.verticalnavbar}>
        <h3>Categories</h3>
        <ul>
          <li><a href="/">All</a></li>
          <li><a href="/">Fiction</a>
          </li>
          <li><a href="/">Science</a></li>
          <li><a href="/">Philosphy</a></li>
          <li><a href="/">History</a></li>
        </ul>
        <hr />
        <h3>New arrival </h3>
        <ul>
          <li><a href="/">Last 30 days </a></li>
          <li><a href="/">Last 90 days</a></li>
          <li><a href="/">Next 90 days </a></li>
        </ul>
        <hr />
        <h3>Language</h3>
        <ul>
          <li><a href="/">Hindi</a></li>
          <li><a href="/">English</a></li>
          <li><a href="/">Marathi</a></li>
        </ul>
        <hr />
      </div>
      
    
    </div>
     
    </div>
  );
};

export default category;

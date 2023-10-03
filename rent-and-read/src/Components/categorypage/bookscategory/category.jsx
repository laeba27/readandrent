
import SelectionCategory from "../SelectionCategory/SelectionCategory";
import styles from "../bookscategory/category.module.css";

const category = () => {
  return (
    <div>

      <div className={styles.container}>


        <div className={styles.verticalnavbar}>
          <h3>Categories</h3>
          <ul>
          <li><a href="#">All</a></li>
          <li><a href="#">{"Today's"} offer</a></li>
            <li><a href="#">Top best</a></li>
            <li><a href="#">Fiction</a>
            </li>
            <li><a href="#">Science</a></li>
            <li><a href="#">Philosphy</a></li>
            <li><a href="#">History</a></li>
          </ul>
          
          <h3>New arrival </h3>
          <ul>
          <li><a href="#">New Collection </a></li>
            <li><a href="#">Last 30 days </a></li>
            <li><a href="#">Last 60 days</a></li>
            <li><a href="#">Last 90 days </a></li>
          </ul>
          
          <h3>Language</h3>
          <ul>
            <li><a href="#">Hindi</a></li>
            <li><a href="#">English</a></li>
            <li><a href="#">French</a></li>
            <li><a href="#">Spanish</a></li>
            <li><a href="#">German</a></li>
          </ul>
          
        </div>



        <div className={styles.selection}>
          <SelectionCategory />
        </div>
      </div>
    </div>
  );
};

export default category;

import styles from "../Headercategory/HeaderCategory.module.css";
import bookshelf from "../../../assets/bookshelffull.png";
import book2 from "../../../assets/booksmess.png";
const HeaderCategory = () => {
  
  return (
    <div>
      <div className={styles.header}>
      
        <img className={styles.bookshelf} src={bookshelf} alt="" />
        <div className={styles.zoom}>
          <img src={book2} alt="" />
          <p>
            That is the thing about books. <hr />
             They let you travel without moving
            your feet.
          </p>
          <br />
          <button></button>
        </div>
      </div>

    </div>
  );
};

export default HeaderCategory;

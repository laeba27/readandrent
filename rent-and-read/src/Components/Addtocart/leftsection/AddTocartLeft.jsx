
import styles from "./addtocartleft.module.css"

import cross from "../../../assets/cross.svg"
import book2 from '../../../assets/Book101.png'

const AddTocartLeft = () => {
    const handleRemoveClick = (event) => {
        // Get the parent div of the clicked element with class "remove"
        const parentDiv = event.target.closest(`.${styles.card}`);
        
        // Remove the parent div if found
        if (parentDiv) {
          parentDiv.remove();
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Your Cart</h1>
            </div>
            <div className={styles.cardcontainer}>
                <div className={styles.card}>
                    <div className={styles.left}>
                        <img src={book2} alt="" />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.bookinfo}>
                            <div className={styles.bookname}>
                                <h1>Ugly Love</h1>
                            </div>
                            <div className={styles.bookprice}>
                                <h5>Rs 120/-</h5>
                            </div>
                        </div>
                        <div className={styles.choose}>
                            <div className={styles.chooseleft}>
                                <div className={styles.options}>
                                    <span>Book ID:</span> <br />
                                    <span> FGY65738</span>
                                </div>
                                <div className={styles.options}>
                                    <span>Condition:</span><br />
                                    <span> Good</span>
                                </div>
                            </div>
                            <div className={styles.chooseright}>
                                <span className={styles.qunatity}>Duration</span>
                                <select>
                                    <option >1 Month</option>
                                    <option >2 Month</option>
                                    <option >3 Month</option>

                                </select>
                            </div>
                        </div>
                        <div className={styles.status}>
                            <h5>Delivered in 3-5 working days</h5>
                        </div>
                        <div className={styles.hr}></div>
                        <div className={styles.optbtn}>
                            <div className={styles.wish}>
                                <h5>Move to wishlist</h5>
                            </div>
                            <div className={styles.remove}>
                                <img src={cross} onClick={handleRemoveClick} alt="" />
                                <h5>remove</h5>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AddTocartLeft
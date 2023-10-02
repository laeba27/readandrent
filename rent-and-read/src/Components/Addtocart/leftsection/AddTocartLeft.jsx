
import styles from "./addtocartleft.module.css"
import book from "../../../assets/Book302.png"
import cross from "../../../assets/cross.svg"

const AddTocartLeft = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Your Cart</h1>
            </div>
            <div className={styles.cardcontainer}>
                <div className={styles.card}>
                    <div className={styles.left}>
                        <img src={book} alt="" />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.bookinfo}>
                            <div className={styles.bookname}>
                                <h1>Culture of animal cells</h1>
                            </div>
                            <div className={styles.bookprice}>
                                <h5>Rs 120/-</h5>
                            </div>
                        </div>
                        <div className={styles.choose}>
                            <div className={styles.chooseleft}>
                                <div className={styles.options}>
                                    <span>Rent Durantion :</span>
                                    <span>30 days</span>
                                </div>
                                <div className={styles.options}>
                                    <span>Time duration :</span>
                                    <span>30 days</span>
                                </div>
                            </div>
                            <div className={styles.chooseright}>
                                <span className={styles.qunatity}>quantity</span>
                                <select>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>

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
                                <img src={cross} alt="" />
                                <h5>remove</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.left}>
                        <img src={book} alt="" />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.bookinfo}>
                            <div className={styles.bookname}>
                                <h1>Culture of animal cells</h1>
                            </div>
                            <div className={styles.bookprice}>
                                <h5>Rs 120/-</h5>
                            </div>
                        </div>
                        <div className={styles.choose}>
                            <div className={styles.chooseleft}>
                                <div className={styles.options}>
                                    <span>Rent Durantion :</span>
                                    <span>30 days</span>
                                </div>
                                <div className={styles.options}>
                                    <span>Time duration :</span>
                                    <span>30 days</span>
                                </div>
                            </div>
                            <div className={styles.chooseright}>
                                <span className={styles.qunatity}>quantity</span>
                                <select>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>

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
                                <img src={cross} alt="" />
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
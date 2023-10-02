
import styles from "./addtocartright.module.css"

const AddtocartRight = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h5>Order Summary</h5>
            </div>
            <div className={styles.amount}>
                <div className={styles.subtotal}>
                    <div>
                        <h5 className={styles.title}>Items Subtotal</h5>
                    </div>
                    <div>
                        <h5 className={styles.title}>Rs 120/-</h5>
                    </div>
                </div>
                <div className={styles.tax}>
                    <div>
                        <h5 className={styles.title}>Tax</h5>
                    </div>
                    <div>
                        <h5 className={styles.title}>Rs 20/-</h5>
                    </div>
                </div>
                <div className={styles.total}>
                    <div>
                        <h5 className={styles.title}>Items Total</h5>
                    </div>
                    <div>
                        <h5 className={styles.title}>Rs 140/-</h5>
                    </div>
                </div>
            </div>
            <div className={styles.continue}>
                <h5>Continue</h5>
            </div>
        </div>
    )
}

export default AddtocartRight

import styles from "./addtocartsection.module.css"
import AddTocartLeft from '../leftsection/AddTocartLeft'
import AddtocartRight from '../rightsection/AddtocartRight'

const AddtoCartSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <AddTocartLeft />
            </div>
            <div className={styles.right}>
                <AddtocartRight />
            </div>
        </div>
    )
}

export default AddtoCartSection
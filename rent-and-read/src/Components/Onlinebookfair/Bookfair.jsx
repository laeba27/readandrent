import styles from '../Onlinebookfair/Bookfair.module.css'
import img from '../../assets/header-cover.jpg'

const bookfair = () => {
  return (
    <div>
      <div className={styles.fair}>
        <img className={styles.backimg} src={img} alt="" />
        <div className={styles.card}>
            <h1 className={styles.topic}>Online Book Fair 2023</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam fugit vero ipsam delectus nam consequuntur id explicabo ducimus consectetur. </p>
            <button className={styles.account}>Create Your Account</button>
        </div>
      </div>
    </div>
  )
}

export default bookfair

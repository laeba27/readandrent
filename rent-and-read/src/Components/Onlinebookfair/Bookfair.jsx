import styles from '../Onlinebookfair/Bookfair.module.css'
import img from '../../assets/header-cover.jpg'

const bookfair = () => {
  return (
    <div>
      <div className={styles.fair}>
        <img className={styles.backimg} src={img} alt="" />
        <div className={styles.card}>
            <h1 className={styles.topic}>Online Book Fair 2023</h1>
            <p>Discover, Explore, and Immerse Yourself in the World of Literature! <br />
            A Digital Wonderland for Book Lovers - Join Us in 2023
             </p>
            <button className={styles.account}>Create Your Account</button>
        </div>
      </div>
    </div>
  )
}

export default bookfair

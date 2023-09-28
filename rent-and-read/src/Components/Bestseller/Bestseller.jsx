
import styles from '../Bestseller/bestseller.module.css'
import { booksData } from '../data/data'

const Bestseller = () => {

  return (
    <div className={styles.bestseller}>
      <h1>Bestseller</h1>
      <div className={styles.container}>
      <div className={styles.bestsellercollections}>
      {
        booksData.map((item,index)=>{
          return(
            <div key={index} className={styles.book}>
      <div className={styles.front}><img src={item.imageSrc} alt="" /></div>
        <div className={styles.nameprice}>
        <h3>{item.name}</h3>
         <h4>{item.price}</h4>
        </div>
         <h4 className={styles.author}>{item.author}</h4>
      </div> 
            
          )
        })
      }
      </div>
      </div>
    </div>
  )
}

export default Bestseller

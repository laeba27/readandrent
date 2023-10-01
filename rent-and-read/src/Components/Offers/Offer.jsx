import styles from "../Offers/Offer.module.css";
import { offerData } from "../data/data";
import { useState } from "react";
const Offer = () => {
      const [secitem, setsecitem] = useState(1)
            
  return (
    <div>
      <h1 className={styles.offer}>Offers</h1>
      
      <div className={styles.wrapper}>
        {offerData.map((item, index) => {
            
          return (
            
            <div className={styles.container} key={index}>
              <div className={index===secitem? styles.inverted: styles.pic4}>
                <div className={styles.upper}>
                  <img className={styles.img} src={item.imageSrc1} alt="" />
                  <img className={styles.img} src={item.imageSrc2} alt="" />
                </div>
                <div className={styles.below}>
                  <img className={styles.img} src={item.imageSrc3} alt="" />
                  <img className={styles.img} src={item.imageSrc4} alt="" />
                </div>
              </div>
              <h1 className={styles.discount}>
                This Months Discount is-{item.discount}
              </h1>
              
           </div>

          );
        })}
      </div>
      <button className={styles.seeall}>See All</button>
    </div>
  );
};

export default Offer;

import styles from "../topbest/topbest.module.css";

import { topbestData } from "../data/data";
const topbest = () => {
  return (
    <div>
      <div className={styles.topbest}>
      <div className={styles.title}>
      <h1>Top - 10 Best Sellers</h1>
      <a className={styles.explore} href="/">Explore</a>
      </div>
      
        <div className={styles.container}>
          {topbestData.map((item, index) => {
            return (
              <div key={index} className={styles.book}>
                <h2 className={styles.abouttitle}>ABOUT</h2>

                <h4 className={styles.about}>{item.about}</h4>

                <button className={styles.moreinfo}>More Info</button>
                <div className={styles.container}></div>
                <div className={styles.cover}>
                  <div className={styles.book}>
                    <div className={styles.front}>
                      <img src={item.imageSrc1} alt="" />
                    </div>
                    <div className={styles.nameauthor}>
                      <h2>{item.name}</h2>
                      <h4 className={styles.author}>{item.author}</h4>
                    </div>
                    
                  </div>
                </div>
              </div>
              
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default topbest;

import styles from "./wishlistitem.module.css"
import { Link } from "react-router-dom"
import { useState } from 'react';
import book301 from '../../../assets/book301.png'
import book302 from '../../../assets/book302.png'
import book303 from '../../../assets/book303.png'
import book from "../../../wishlistassests/book.png"
import book1 from "../../../wishlistassests/book1.png"
import book2 from "../../../wishlistassests/book2.png"
import book3 from "../../../wishlistassests/book3.png"

const WishlistItem = () => {

    const wishlist = [
        {
            id: 1,
            name: "Eating the Sun",
            price: "100/-",
            author: " Ella Frances Sanders ",
            imageSrc: book301,
        },
        {
            id: 2,
            name: "Freshney's Culture of Animal Cells",
            price: "100/-",
            author: " Amanda Capes-Davi ",
            imageSrc: book302,
        },
        {
            id: 3,
            name: "Dangerous Earth: What We Wish We Knew About Volcanoes, Hurricanes, Climate Change, Earthquakes and More",
            price: "100/-",
            author: "Prager, Ellen",
            imageSrc: book303,
        },

    ]

    const [Wishlist, setWishlist] = useState(wishlist);

    const handleRemoveFromWishlist = (id) => {
        const updatedWishlist = Wishlist.filter((item) => item.id !== id);
        setWishlist(updatedWishlist);
        console.log(Wishlist);
    };
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Your personal wishlist</h1>
                <Link to={"/category"}>
                    <button>browse more</button>
                </Link>
            </div>
            {Wishlist.length === 0 ?
                (
                    <div className={styles.empty}>

                        <img className={styles.book1} src={book} alt="" />
                        <img className={styles.book2} src={book1} alt="" />
                        <img className={styles.book3} src={book2} alt="" />
                        <img className={styles.book4} src={book3} alt="" />

                        <h5>
                            your Wishlist is empty
                        </h5>

                    </div>
                )
                : <div className={styles.wishlist}>
                    {
                        Wishlist.map((item, index) => {
                            return (
                                <div key={index} className={styles.sinlebook}>
                                    <div className={styles.heart}>
                                        <svg onClick={() => handleRemoveFromWishlist(item.id)} className={styles.heartimg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="red"
                                            fill="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    </div>
                                    <img className={styles.img} src={item.imageSrc} alt="" />
                                    <div className={styles.info}>
                                        <h4>{item.author}</h4>
                                        <h5>{item.name.length > 10 ? `${item.name.substring(0, 20)}...` : item.name}</h5>
                                        <p>Rs{" "}{item.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>}
        </div>
    )
}

export default WishlistItem

import styles from "./selectioncategory.module.css"
import { useState } from 'react'
import { topbestData, fictionData, phylosphyData, scienceData, historyData, todayoffer } from '../../data/data'
import { Link } from "react-router-dom"



const SelectionCategory = () => {

    const [wishlist, setWishlist] = useState([]);
    const [offer, setoffer] = useState(true)
    const [top, settop] = useState(false)
    const [fiction, setfiction] = useState(false)
    const [phylosphy, setphylosphy] = useState(false)
    const [science, setscience] = useState(false)
    const [history, sethistory] = useState(false)

    const [cart, setCart] = useState([]);
    


    const handlewishlist = (index) => {

        const itemIndex = wishlist.indexOf(index);

        if (itemIndex === -1) {

            setWishlist([...wishlist, index]);
        } else {

            const updatedWishlist = [...wishlist];
            updatedWishlist.splice(itemIndex, 1);
            setWishlist(updatedWishlist);
        }
    };

    const handleAddToCart = (index) => {
        const selectedItem = todayoffer[index];
        setCart([...cart, selectedItem]);
        console.log(selectedItem);
    };

    const handleoffer = () => {
        setoffer(true)
        settop(false)
        setfiction(false)
        setphylosphy(false)
        setscience(false)
        sethistory(false)
    }
    const handletop = () => {
        setoffer(false)
        settop(true)
        setfiction(false)
        setphylosphy(false)
        setscience(false)
        sethistory(false)
    }
    const handlefiction = () => {
        setoffer(false)
        settop(false)
        setfiction(true)
        setphylosphy(false)
        setscience(false)
        sethistory(false)
    }
    const handlephylosphy = () => {
        setoffer(false)
        settop(false)
        setfiction(false)
        setphylosphy(true)
        setscience(false)
        sethistory(false)
    }
    const handlescience = () => {
        setoffer(false)
        settop(false)
        setfiction(false)
        setphylosphy(false)
        setscience(true)
        sethistory(false)
    }
    const handlehistory = () => {
        setoffer(false)
        settop(false)
        setfiction(false)
        setphylosphy(false)
        setscience(false)
        sethistory(true)
    }



    return (

        <div className={styles.container}>
            <div className={styles.btns}>
                <div onClick={handleoffer} className={offer ? styles.activebtn : styles.btn}>Offer</div>
                <div onClick={handletop} className={top ? styles.activebtn : styles.btn}>Top best</div>
                <div onClick={handlefiction} className={fiction ? styles.activebtn : styles.btn}>fiction</div>
                <div onClick={handlephylosphy} className={phylosphy ? styles.activebtn : styles.btn}>phylosphy</div>
                <div onClick={handlescience} className={science ? styles.activebtn : styles.btn}>science</div>
                <div onClick={handlehistory} className={history ? styles.activebtn : styles.btn}>history</div>
            </div>

            {offer && (
                <div className={styles.categroyContainer}>
                    {
                        todayoffer.map((item, index) => {
                            const isClicked = wishlist.includes(index);
                            return (
                                <div key={index} className={styles.sinlebook}>
                                    <div className={styles.heart}>
                                        <svg onClick={() => handlewishlist(index)} className={styles.heartimg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke={isClicked ? "red" : "#fff"}
                                            fill={isClicked ? "red" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    </div>
                                    <img className={styles.img} src={item.imageSrc} alt="" />
                                    <div className={styles.info}>
                                        <h5>{item.name.length > 10 ? `${item.name.substring(0, 10)}...` : item.name}</h5>
                                        <h5>Rs{item.price}</h5>
                                    </div>
                                    <div className={styles.bookbtn}>
                                        <Link to={"/addtocart"}>

                                            <button onClick={() => handleAddToCart(index)}>add to cart</button>
                                        </Link>
                                        <div>read more</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            ) || top && (
                <div className={styles.categroyContainer}>
                    {
                        topbestData.map((item, index) => {
                            const isClicked = wishlist.includes(index);
                            return (
                                <div key={index} className={styles.sinlebook}>
                                    <div className={styles.heart}>
                                        <svg onClick={() => handlewishlist(index)} className={styles.heartimg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke={isClicked ? "red" : "#fff"}
                                            fill={isClicked ? "red" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    </div>
                                    <img className={styles.img} src={item.imageSrc1} alt="" />
                                    <div className={styles.info}>
                                        <h5>{item.name.length > 10 ? `${item.name.substring(0, 10)}...` : item.name}</h5>
                                        <h5>Rs{item.price}</h5>
                                    </div>
                                    <div className={styles.bookbtn}>
                                        <button onClick={() => handleAddToCart(index)}>add to cart</button>
                                        <div>read more</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            ) || fiction && (
                <div className={styles.categroyContainer}>
                    {
                        fictionData.map((item, index) => {
                            const isClicked = wishlist.includes(index);
                            return (
                                <div key={index} className={styles.sinlebook}>
                                    <div className={styles.heart}>
                                        <svg onClick={() => handlewishlist(index)} className={styles.heartimg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke={isClicked ? "red" : "#fff"}
                                            fill={isClicked ? "red" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    </div>
                                    <img className={styles.img} src={item.imageSrc} alt="" />
                                    <div className={styles.info}>
                                        <h5>{item.name.length > 10 ? `${item.name.substring(0, 10)}...` : item.name}</h5>
                                        <h5>Rs{item.price}</h5>
                                    </div>
                                    <div className={styles.bookbtn}>
                                        <button onClick={() => handleAddToCart(index)}>add to cart</button>
                                        <div>read more</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            ) || phylosphy && (
                <div className={styles.categroyContainer}>
                    {
                        phylosphyData.map((item, index) => {
                            const isClicked = wishlist.includes(index);
                            return (
                                <div key={index} className={styles.sinlebook}>
                                    <div className={styles.heart}>
                                        <svg onClick={() => handlewishlist(index)} className={styles.heartimg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke={isClicked ? "red" : "#fff"}
                                            fill={isClicked ? "red" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    </div>
                                    <img className={styles.img} src={item.imageSrc} alt="" />
                                    <div className={styles.info}>
                                        <h5>{item.name.length > 10 ? `${item.name.substring(0, 10)}...` : item.name}</h5>
                                        <h5>Rs{item.price}</h5>
                                    </div>
                                    <div className={styles.bookbtn}>
                                        <button onClick={() => handleAddToCart(index)}>add to cart</button>
                                        <div>read more</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            ) || science && (
                <div className={styles.categroyContainer}>
                    {
                        scienceData.map((item, index) => {
                            const isClicked = wishlist.includes(index);
                            return (
                                <div key={index} className={styles.sinlebook}>
                                    <div className={styles.heart}>
                                        <svg onClick={() => handlewishlist(index)} className={styles.heartimg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke={isClicked ? "red" : "#fff"}
                                            fill={isClicked ? "red" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    </div>
                                    <img className={styles.img} src={item.imageSrc} alt="" />
                                    <div className={styles.info}>
                                        <h5>{item.name.length > 10 ? `${item.name.substring(0, 10)}...` : item.name}</h5>
                                        <h5>Rs{item.price}</h5>
                                    </div>
                                    <div className={styles.bookbtn}>
                                        <button onClick={() => handleAddToCart(index)}>add to cart</button>
                                        <div>read more</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            ) || history && (
                <div className={styles.categroyContainer}>
                    {
                        historyData.map((item, index) => {
                            const isClicked = wishlist.includes(index);
                            return (
                                <div key={index} className={styles.sinlebook}>
                                    <div className={styles.heart}>
                                        <svg onClick={() => handlewishlist(index)} className={styles.heartimg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke={isClicked ? "red" : "#fff"}
                                            fill={isClicked ? "red" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    </div>
                                    <img className={styles.img} src={item.imageSrc} alt="" />
                                    <div className={styles.info}>
                                        <h5>{item.name.length > 10 ? `${item.name.substring(0, 10)}...` : item.name}</h5>
                                        <h5>Rs{item.price}</h5>
                                    </div>
                                    <div className={styles.bookbtn}>
                                        <button onClick={() => handleAddToCart(index)}>add to cart</button>
                                        <div>read more</div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            )

            }



        </div>

    )
}

export default SelectionCategory
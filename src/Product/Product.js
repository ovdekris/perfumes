import Header from "../MainPage/Header/Header";
import Module from "../MainPage/Module/Module"
import Footer from "../MainPage/Footer/Footer";
import {AiOutlineStar,AiFillStar,AiOutlineHeart} from "react-icons/ai";
import {BiSolidShoppingBags} from "react-icons/bi"
import style from "./Product.module.css";
import {useState} from "react";
import {useLocation, useParams} from "react-router-dom";
function Product({props}){
    const [count,setCount]=useState(0);
    const location=useLocation();
    //express regulary
    const inputString = location.pathname;
    const regex = /\/([^/]+)/;
    const match = inputString.match(regex);
    const extractedText = match[1];
    let data;
    if(extractedText==='forwoman'){
        data=props.forwoman;
    }
    const inputsString = "http://localhost:3000/forwoman/2";
    const regexs = /\/(\d+)$/; // Регулярное выражение для извлечения последней цифры после последнего слеша
    const matchs = inputsString.match(regex);
    if (matchs) {
        const extractedNumber = matchs[1];
        console.log(extractedNumber); // Выведет "2"
    } else {
        console.log("Совпадений не найдено");
    }
    // console.log(data)
    return(
        <div>
            <Module/>
            <Header/>
            <div className={style.content}>
                <div className={style.content__image}>
                   <div className={style.content__img}>
                       <img src="https://assets.vogue.com/photos/6054ce48ba2b50871bd1d368/3:4/w_640,c_limit/slide_8.jpg" alt="image"/>
                   </div>
                    <div className={style.content__image__description}>
                        <div className={style.content__title}>
                            Dior Sauvage - pefume for Man
                        </div>
                        <div  className={style.content__range}>
                            <AiFillStar className={style.content__range__item}/>
                            <AiFillStar className={style.content__range__item}/>
                            <AiOutlineStar className={style.content__range__item}/>
                            <AiOutlineStar className={style.content__range__item}/>
                            <AiOutlineStar className={style.content__range__item}/>
                        </div>
                        <div className={style.content__availabality}>
                            Availabality:   available
                        </div>
                        <div className={style.content__price}>
                            130$
                        </div>
                        <div className={style.content__count}>
                           <div className={style.content__count__title}> Quantity</div>
                            <div className={style.content__counter}>
                                <div className={style.content__counter__item} onClick={()=>{
                                    if(count<=0){
                                        return count
                                    }
                                    else {
                                        setCount(count-1)
                                    }
                                }}>-</div>
                                <div className={style.content__counter__number}>{count}</div>
                                <div className={style.content__counter__item} onClick={()=>{
                                    setCount(count+1)
                                }}>+</div>
                            </div>
                        </div>
                        <div className={style.button__item}>
                        <div className={style.button__buy}>
                            Add to basket
                        </div>
                            <div className={style.button__like}>
                                <AiOutlineHeart className={style.button__like__heart}/>
                            </div>
                        </div>
                        <div className={style.bought__item}>
                            <BiSolidShoppingBags className={style.basket}/>
                            100 customers bought this product</div>
                    </div>
                </div>
                <div className={style.description}>
                    <div className={style.description__container}>
                    <div className={style.description__title}>
                        <div className={style.description__title__border}></div>
                        Description
                        <div className={style.description__title__border}></div>
                    </div>
                    <div className={style.description__item}>The fragrance has two characteristic features: passion and seduction. n the top notes of the perfume, grapefruit, mandarin and strong marine accents make you feel fresh. The heart contains patchouli, jasmine and amber. In the deep notes, guaiac wood provides the final masculine accent. This will be your new passion, creating an irresistible masculine style.</div>
                    <div className={style.description__item}> <b> Fragrance family:</b> fresh
                        Preferred time of day: day
                        Top notes: grapefruit, sea notes, mandarin</div>
                    <div className={style.description__item}><b>Heart notes</b>: bay leaf, jasmine</div>
                    <div className={style.description__item}><b>Base notes:</b> guaiac wood, oakmoss, patchouli, amber</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Product;
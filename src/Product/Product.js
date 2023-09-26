import Header from "../MainPage/Header/Header";
import Module from "../MainPage/Module/Module"
import Footer from "../MainPage/Footer/Footer";
import {AiOutlineStar,AiFillStar,AiOutlineHeart} from "react-icons/ai";
import {BiSolidShoppingBags} from "react-icons/bi"
import style from "./Product.module.css";
import {useContext, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {CustomContext} from "../MainPage/Context/Context";
function Product({props}){
    const [count,setCount]=useState(0);
    const {show,addBasket}=useContext(CustomContext);
    //take location
    const location=useLocation();
    const pathName=location.pathname;
    // express regulary for string
    const inputString = pathName;
    const regex = /\/([^/]+)/;
    const match = inputString.match(regex);
    const extractedText = match[1];
    //express regulary for number
    const inputNumber = location.pathname;
    const regular = /\/(\d+)$/;
    const matchNumber = inputNumber.match(regular);
    let extractedNumber;
    if (matchNumber) {
        extractedNumber = matchNumber[1];

    }
    //Variable
    let data;
    let result;
    //Check and result
    switch (extractedText) {
        case 'forwoman':
            data = props.forwoman;
            break;
        case 'forman':
            data = props.forman;
            break;
        case 'bestseller':
            data = props.bestseller;
            break;
        case 'homefragrances':
            data = props.homefragrances;
            break;
            case 'sale':
            data = props.sale;
            break;
        case 'signature':
            data = props.signature;
            break;
        case 'bodymist':
            data = props.bodymist;
            break;
        default:
            data = null;
            break;
    }
    result=data[extractedNumber-1];
    return(
        <div style={{position: show? 'fixed':'relative'}}>
            <Module/>
            <Header/>
            <div className={style.content}>
                <div className={style.content__image}>
                   <div className={style.content__img}>
                       <img src={result.image} alt="image"/>
                   </div>
                    <div className={style.content__image__description}>
                        <div className={style.content__title}>
                            {result.title} - pefume for Man
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
                            {extractedText==='sale'?result.reducePrice:result.price}$
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
                        <div className={style.button__buy} onClick={()=>{
                            addBasket(result);
                        }}>
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
                    <div className={style.description__item}>{result.description}</div>
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
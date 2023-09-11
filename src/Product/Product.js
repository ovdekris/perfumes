import Header from "../MainPage/Header/Header";
import Module from "../MainPage/Module/Module"
import Footer from "../MainPage/Footer/Footer";
import {AiOutlineStar,AiFillStar} from "react-icons/ai";
import style from "./Product.module.css";
function Product({props}){
    const data=props.forMen;
    data.map(record => (
        record.title
    ))
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
                            Count
                        </div>
                        <div className={style.button}>
                            Buy
                        </div>
                    </div>
                </div>
                <div>
                    Description
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Product;
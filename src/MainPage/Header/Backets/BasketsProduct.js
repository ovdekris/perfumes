import style from "./BasketsProduct.module.css";
import {MdDelete} from "react-icons/md"
import {useContext} from "react";
import {CustomContext} from "../../Context/Context";
function BasketsProduct({props}){
    const {addToCart,minusToCart,delBasket}=useContext(CustomContext);
    console.log(props)
    return(
        <div className={style.content__product}>
            <div className={style.content__image}>
                <img src={props.image} alt="Image"/>
            </div>
            <div className={style.content__product__description}>
                <div className={style.content__product__description__item__title}>{props.title}</div>
                <div className={style.content__product__description__item}>{props.scents[0]}</div>
                <div className={style.content__product__description__item}>{props.scents[1]}</div>
            </div>
            <div className={style.content__product__description__price}>
                ${props.price}
            </div>
            <div className={style.content__product__description__count}>
                <div className={style.content__product__description__count__minus} onClick={()=>{
                    minusToCart(props)
                }}>-</div>
                <div className={style.content__product__description__count__number}>{props.count}</div>
                <div className={style.content__product__description__count__plus} onClick={()=>{
                    addToCart(props)
                }}>+</div>
            </div>
            <div className={style.content__product__description__price__count}>
                ${props.count*props.price}
            </div>
            <div className={style.content__product__description__delete}>
                <MdDelete/>
            </div>
            </div>
    )
}

export default BasketsProduct;
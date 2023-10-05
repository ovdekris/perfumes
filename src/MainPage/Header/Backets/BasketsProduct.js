import style from "./BasketsProduct.module.css";
import {MdDelete} from "react-icons/md"
import {useContext} from "react";
import {CustomContext} from "../../Context/Context";
function BasketsProduct({props}){
    const {basket,addToCart,minusToCart,delBasket}=useContext(CustomContext);
    return(
        <div className={style.content__product}>
            <div className={style.content__image}>
                <img src={props.image} alt="Image"/>
            </div>
            <div className={style.content__product__description}>
                <div className={style.content__product__description__item__title}>{props.title}</div>
                <div className={style.content__product__description__item}><b>Scents: </b>{props.scents[0]}, {props.scents[1]}</div>
                <div className={style.content__product__description__item}><b>Sex:</b> unisex</div>
            </div>
            <div className={style.content__product__description__price}>
                ${props.price}
            </div>
            <div className={style.content__product__description__count}>
                <div className={`${style.content__product__description__count__minus} ${style.content__product__description__count__item}`} onClick={()=>{
                    minusToCart(props)
                }}>-</div>
                <div className={style.content__product__description__count__item}>{props.count}</div>
                <div className={`${style.content__product__description__count__plus} ${style.content__product__description__count__item}`} onClick={()=>{
                    addToCart(props)
                }}>+</div>
            </div>
            <div className={style.content__product__description__price__count}>
                ${props.count*props.price}
            </div>
            <div className={style.content__product__description__delete} onClick={()=>{
                delBasket(props.idList)
                console.log(basket)
            }}>
                <MdDelete />
            </div>
            </div>
    )
}

export default BasketsProduct;
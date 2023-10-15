import style from "../Backets/BasketsProduct.module.css";
import {MdDelete} from "react-icons/md"
import {useContext} from "react";
import {CustomContext} from "../../Context/Context";
function LikesProduct({props}){
    const {delLikes,addBasket}=useContext(CustomContext);
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
            <div className={`${style.content__product__description__count} ${style.content__product__likes}`} onClick={()=>{
                addBasket(props)
            }}>
               Add to basket
            </div>
            <div className={style.content__product__description__delete} onClick={()=>{
                delLikes(props)
            }}>
                <MdDelete />
            </div>
            </div>
    )
}

export default LikesProduct;
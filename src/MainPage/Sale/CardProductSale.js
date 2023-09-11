import style from "../CardProduct/CardProduct.module.css"
import {AiOutlineHeart} from "react-icons/ai";
import styleSale from "./CardProductSale.module.css"
function CardProduct({props}){
    return(
        <div className={style.content__item} key={props.id}>
            <div className={`${style.content__heart}, ${styleSale.sale}`}>
                <div className={styleSale.sale__item}>SALE</div>
                <AiOutlineHeart className={style.heart}/>
            </div>
            <div className={style.image__container}>
                <img src={props.image} alt="image" className={style.image}/>
            </div>
            <div className={style.description__item}>
                <div className={style.description__title}>
                    <div className={style.title}>{props.title}</div>
                </div>
                <div className={style.description}>
                    {props.description}
                </div>
                <div className={style.scents}>
                    <div className={style.scents__item}>{props.scents[0]}</div>
                    <div className={style.scents__item}>{props.scents[1]}</div>
                </div>
            </div>
            <div className={styleSale.price__item}>
            <div className={styleSale.price}>{props.price}$</div>
            <div className={styleSale.price__reduce}>{props.reducePrice}$</div>
            </div>
        </div>
    )
}

export default CardProduct;
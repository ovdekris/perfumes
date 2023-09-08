import style from "./CardProduct.module.css";
import {AiOutlineHeart} from "react-icons/ai";

function CardProduct({props}){
    return(
        <div className={style.content__item} key={props.id}>
            <div className={style.content__heart}>
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
            <div className={style.price}>{props.price}$</div>
        </div>
    )
}

export default CardProduct;
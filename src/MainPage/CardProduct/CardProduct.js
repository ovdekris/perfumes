import style from "../ForMan/ForMan.module.css";
import {AiOutlineHeart} from "react-icons/ai";

function CardProduct(){
    return(
        <div className={style.content__item}>
            <div className={style.content__heart}>
                <AiOutlineHeart className={style.heart}/>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="image" className={style.image}/>
            </div>
            <div className={style.description__item}>
                <div className={style.description__title}>
                    <div className={style.title}>Bleu de Chanel</div>
                </div>
                <div className={style.description}>
                    Bleu de Chanel  is a men's fragrance created by Jacques
                </div>
                <div className={style.scents}>
                    <div className={style.scents__item}>flower</div>
                    <div className={style.scents__item}>rose</div>
                </div>
            </div>
            <div className={style.price}>from 40$</div>
        </div>
    )
}

export default CardProduct;
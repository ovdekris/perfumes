import style from "./BasketsProduct.module.css"
function BasketsProduct({props}){
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
                <div className={style.content__product__description__item}>{props.scents}</div>
                <div className={style.content__product__description__item}>{props.scents}</div>
                <div className={style.content__product__description__item}>{props.scents}</div>
            </div>
            <div className={style.content__product__description__price}>
                ${props.price}
            </div>
            <div className={style.content__product__description__count}>
                <div className={style.content__product__description__count__plus}>+</div>
                <div className={style.content__product__description__count__number}>{props.count}</div>
                <div className={style.content__product__description__count__minus}></div>
            </div>
            <div className={style.content__product__description__price__count}>
                ${props.count*props.price}
            </div>
            <div className={style.content__product__description__delete}>
                delete
            </div>
            </div>
    )
}

export default BasketsProduct;
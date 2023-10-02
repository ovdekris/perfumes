import style from "./BasketsProduct.module.css"
function BasketsProduct({props}){
    return(
        <div className={style.content__product}>
            <div className={style.content__image}>
                <img src={props.image} alt="Image"/>
            </div>
            <div className={style.content__product__description}>
                description
            </div>
            <div className={style.content__product__description__price}>
                price
            </div>
            <div className={style.content__product__description__count}>
                count
            </div>
            <div className={style.content__product__description__price__count}>
                price count
            </div>
            <div className={style.content__product__description__delete}>
                delete
            </div>
            </div>
    )
}

export default BasketsProduct;
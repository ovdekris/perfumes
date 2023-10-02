import style from "./BasketsProduct.module.css"
function BasketsProduct({props}){
    console.log(props)
    return(
        <div className={style.content__product}>
            <div className={style.content__image}>
                <img src={props.image} alt="Image"/>
            </div>
            <div className={style.content__product__description}>
                {props.title}, {props.scents} ,
            </div>
            <div className={style.content__product__description__price}>
                {props.price}
            </div>
            <div className={style.content__product__description__count}>
                {props.count}
            </div>
            <div className={style.content__product__description__price__count}>
                {props.count*props.price}
            </div>
            <div className={style.content__product__description__delete}>
                delete
            </div>
            </div>
    )
}

export default BasketsProduct;
import style from "./BasketZero.module.css";
import icon from "./iconBasket.png";
function BasketsZero({show,setShow}){
    return(
        <div style={{display: show? 'flex':'none'}} className={style.container}>
            <div className={style.content}>
                <div className={style.cotent__button__close} onClick={()=>{setShow(false)}}></div>
                <div><img src={icon} alt="icon" className={style.icon}/></div>
                <div className={style.content__title}>Basket Empty</div>
                <button className={style.content__button} onClick={()=>{
                    setShow(false)
                }}>Shop</button>
            </div>
        </div>
    )
}

export default BasketsZero;
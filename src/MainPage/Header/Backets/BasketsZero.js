import style from "./BasketZero.module.css";
import icon from "./iconBasket.png";
function BasketsZero({show,setShow}){
    return(
        <div style={{display: show? 'flex':'none'}} className={style.container}>
            <div className={style.content}>
                <div><img src={icon} alt="icon" className={style.icon}/></div>
                <div className={style.content__title}>Basket Empty</div>
                <button>shopping</button>
            </div>
        </div>
    )
}

export default BasketsZero;
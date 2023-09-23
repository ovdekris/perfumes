import style from "./BasketZero.module.css";
import {SlBasket} from "react-icons/sl"
function BasketsZero({show,setShow}){
    return(
        <div style={{display: show? 'flex':'none'}} className={style.container}>
            <div className={style.content}>
                <SlBasket/>
                Basket Empty
                <button>shopping</button>
            </div>
        </div>
    )
}

export default BasketsZero;
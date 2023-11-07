import Module from "../../Module/Module";
import Header from "../Header";
import {useContext} from "react";
import {CustomContext} from "../../Context/Context";
import style from "./BasketsProduct.module.css";
import BasketsProduct from "./BasketsProduct";
import BasketIem from "./BasketIem";
function Backets(){
    const {basket}=useContext(CustomContext)
    let result=0;
    basket.map(record=>(
        result+=record.count*record.price
    ))
    return(
        <div>
            <Module/>
            <Header/>
            <div className={style.container}>
               <div className={style.container__title}>
                   <div className={style.title__div}></div>
                   Basket
                   <div className={style.title__div}></div></div>
           <BasketIem/>
            <div className={style.product__card}>
                {basket.map(record => (
                    <BasketsProduct  key={record.id} props={record} className={style.content__item}/>
                ))}
            </div>
                <div className={style.product__price__container}>
                    <div className={style.product__price__content}>
              <div className={style.product__price}>PRICE: {result}$ </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backets;
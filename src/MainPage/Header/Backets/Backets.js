import Module from "../../Module/Module";
import Header from "../Header";
import {useContext} from "react";
import {CustomContext} from "../../Context/Context";
import style from "./BasketsProduct.module.css";
import BasketsProduct from "./BasketsProduct";
import BasketIem from "./BasketIem";
function Backets(){
    const {basket}=useContext(CustomContext)
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
            </div>
        </div>
    )
}

export default Backets;
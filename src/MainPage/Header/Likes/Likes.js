import Module from "../../Module/Module";
import Header from "../Header";
import {useContext} from "react";
import {CustomContext} from "../../Context/Context";
import BasketIem from "../Backets/BasketIem";
import style from "../Backets/BasketsProduct.module.css";
import BasketsProduct from "../Backets/BasketsProduct";
function Likes(){
    const {likes}=useContext(CustomContext);
    console.log(likes)
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
                </div>
            </div>
        </div>
    )
}

export default Likes;
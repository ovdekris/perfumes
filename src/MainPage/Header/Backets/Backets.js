import Module from "../../Module/Module";
import Header from "../Header";
import {useContext} from "react";
import {CustomContext} from "../../Context/Context";
import CardProduct from "../../CardProduct/CardProduct";
import style from "../../ForWoman/ForWoman.module.css";
import BasketsProduct from "./BasketsProduct";
function Backets(){
    const {basket}=useContext(CustomContext)
    return(
        <div>
            <Module/>
            <Header/>
            <div>
                Your Baskets
            </div>
            <div>
                Product
                {basket.map(record => (
                    <BasketsProduct key={record.id} props={record} className={style.content__item}/>
                ))}
            </div>
        </div>
    )
}

export default Backets;
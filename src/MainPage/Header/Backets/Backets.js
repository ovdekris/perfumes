import Module from "../../Module/Module";
import Header from "../Header";
import {useContext} from "react";
import {CustomContext} from "../../Context/Context";
import style from "./BasketsProduct.module.css";
import BasketsProduct from "./BasketsProduct";
import {RiSecurePaymentLine} from "react-icons/ri";
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
            <div className={style.content}>
                <div className={style.content__item}>
                    <div className={style.content__icon}><RiSecurePaymentLine/></div>
                    <div className={style.content__description}>
                        <div>Secure Shopping</div>
                        <div>We use latest SSl security technology to encypt all personal information</div>
                    </div>
                </div>
            </div>
            <div>
                Product
                {basket.map(record => (
                    <BasketsProduct key={record.id} props={record} className={style.content__item}/>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Backets;
import Module from "../../Module/Module";
import Header from "../Header";
import {useContext} from "react";
import {CustomContext} from "../../Context/Context";
import style from "./BasketsProduct.module.css";
import BasketsProduct from "./BasketsProduct";
import {RiSecurePaymentLine} from "react-icons/ri";
import {FaRegCreditCard} from "react-icons/fa";
import {HiArrowPath} from "react-icons/hi2";
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
                        <div className={style.content__description__title}>Secure Shopping</div>
                        <div className={style.content__description__describe}>We use latest SSl security technology to encypt all personal information</div>
                    </div>
                </div>
                <div className={style.content__item}>
                    <div className={style.content__icon}><FaRegCreditCard/></div>
                    <div className={style.content__description}>
                        <div className={style.content__description__title}>Payment Options</div>
                        <div className={style.content__description__describe}>We accept all major redit and debit cards: Visa, Mastercard,Pay Pal</div>
                    </div>
                </div>
                <div className={style.content__item}>
                    <div className={style.content__icon}><HiArrowPath/></div>
                    <div className={style.content__description}>
                        <div className={style.content__description__title}>365 Day Returns</div>
                        <div className={style.content__description__describe}>You can Return in House purchase within 365 Days fot an Exchange</div>
                    </div>
                </div>
            </div>
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
import Module from "../Module/Module";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "../ForWoman/ForWoman.module.css"
import CardProductSale from "./CardProductSale";
import {useContext} from "react";
import {CustomContext} from "../Context/Context";

function Sale({props}){
    const {show}=useContext(CustomContext);
    return(
        <div style={{position: show? 'fixed':'relative'}}>
            <Module/>
            <Header/>
            <div className={style.container}>
                <div className={style.container__title}>
                    <div className={style.title__div}></div>
                    Sale
                    <div className={style.title__div}></div>
                </div>
                <div className={style.content}>
                    {props.map(record => (
                        <CardProductSale key={props.id} props={record} className={style.content__item}/>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Sale;
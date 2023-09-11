import Header from "../MainPage/Header/Header";
import Module from "../MainPage/Module/Module"
import Footer from "../MainPage/Footer/Footer";
import style from "./Product.module.css";
function Product({props}){
    const data=props.forMen;
    data.map(record => (
        record.title
    ))
    return(
        <div>
            <Module/>
            <Header/>
            <div className={style.content}>
                <div className={style.content__image}>
                   <div className={style.content__img}></div>
                    <div className={style.content__image__description}>
                        <div className={style.content__title}>
                            Chanel 5
                        </div>
                        <div className={style.content__availabality}>
                            Availabality: available
                        </div>
                        <div className={style.content__price}>
                            Price: 130$
                        </div>
                        <div className={style.content__count}>
                            Count
                        </div>
                        <div className={style.button}>
                            Buy
                        </div>
                    </div>
                </div>
                <div>
                    Description
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Product;
import Module from "../Module/Module";
import Header from "../Header/Header";
import CardProduct from "../CardProduct/CardProduct";
import style from "../ForWoman/ForWoman.module.css";
import Footer from "../Footer/Footer";
function HomeFragrances({props}){
    return(
        <div>
            <Module/>
            <Header/>
            <div className={style.container}>
                <div className={style.container__title}>
                    <div className={style.title__div}></div>
                    Home Fragrances
                    <div className={style.title__div}></div>
                </div>
                <div className={style.content}>
                    {props.map(record => (
                        <CardProduct key={props.id} props={record} className={style.content__item}/>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomeFragrances;
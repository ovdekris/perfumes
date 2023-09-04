import Module from "../Module/Module";
import Header from "../Header/Header";
import CardProduct from "../CardProduct/CardProduct";
import style from "../ForWoman/ForWoman.module.css";
function HomeFragrances({props}){
    return(
        <div>
            <Module/>
            <Header/>
            <div className={style.content}>
            {props.map(record => (
                <CardProduct key={props.id} props={record} className={style.content__item}/>
            ))}
            </div>
        </div>
    )
}

export default HomeFragrances;
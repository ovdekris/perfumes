import style from "./Bestseller.module.css";
import BestsellerItem from "./BestsellerItem";
import BestsellerItemEven from "./BestsellerItemEven";

function Bestseller({props}){
    console.log(props);
    return(<>
        <div className={style.container}>
            <div className={style.title}>
                <div className={style.title__content}></div>
                <div className={style.title__description}>Bestseller</div>
                <div  className={style.title__content}></div>
            </div>
        </div>
            <BestsellerItem props={props[0]}/>
            <BestsellerItemEven props={props[1]}/>
            <BestsellerItem props={props[2]}/>
            <BestsellerItemEven props={props[3]}/>
        </>
    )
}

export default Bestseller;
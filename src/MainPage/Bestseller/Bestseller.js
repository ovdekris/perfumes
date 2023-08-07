import style from "./Bestseller.module.css";
import BestsellerItem from "./BestsellerItem";
import BestsellerItemEven from "./BestsellerItemEven";

function Bestseller(){
    return(<>
        <div className={style.container}>
            <div className={style.title}>
                <div className={style.title__content}></div>
                <div className={style.title__description}>Bestseller</div>
                <div  className={style.title__content}></div>
            </div>
        </div>
            <BestsellerItem/>
            <BestsellerItemEven/>
            <BestsellerItem/>
            <BestsellerItemEven/>
        </>
    )
}

export default Bestseller;
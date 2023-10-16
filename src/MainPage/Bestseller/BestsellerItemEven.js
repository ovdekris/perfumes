import style from "./BestsellerItemEven.module.css";
import {useNavigate, Link} from "react-router-dom";
function BestsellerItemEven({props}){
    console.log(props)
    return(
            <div className={style.container} >
                <div className={style.content}>
                    <div className={style.image}>
                        <img src={props.image} alt="Bestseller"/>
                    </div>
                    <div className={style.description__container}>
                        <div className={style.title}>{props.title}</div>
                        <div className={style.description}>{props.description}</div>
                        <Link className={style.button} to={`${props.сategory}/${props.id}`}>Discover</Link>
                    </div>
                </div>
                <div className={style.background}></div>
            </div>

    )
}

export default BestsellerItemEven;
import style from "./CategoryItem.module.css";
import {Link} from "react-router-dom";
function CategoryItem({props}){
    return(
        <Link to={props.link} className={style.container} key={props.id}>
            <img src={props.image} alt="image" className={style.image}/>
           <div className={style.title} key={props.id}>
               {props.title}
           </div>
        </Link>
    )
}
export default CategoryItem;
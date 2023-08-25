import style from "./CategoryItem.module.css";
import image from "./image2Category.jpg"
function CategoryItem({props}){

    return(
        <div className={style.container} key={props.id}>
            <img src={props.image} alt="image" className={style.image}/>
           <div className={style.title} key={props.id}>
               {props.title}
           </div>
        </div>
    )
}
export default CategoryItem;
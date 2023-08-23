import style from "./CategoryItem.module.css";
import image from "./img1.jpg";
function CategoryItem({props}){
    return(
        <div className={style.container}>
            <img src={image} alt="image" className={style.image}/>
           <div className={style.title}></div>
        </div>
    )
}
export default CategoryItem;
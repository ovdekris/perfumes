import style from "./CategoryItem.module.css";
import image from "./img1.jpg";
function CategoryItem(){
    return(
        <div className={style.container}>
           <div className={style.title}>For Woman</div>
        </div>
    )
}
export default CategoryItem;
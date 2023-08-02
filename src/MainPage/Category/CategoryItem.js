import style from "./CategoryItem.module.css";
import image from "./img1.jpg";
function CategoryItem(){
    return(
        <div className={style.container}>
            <img src={image} alt="image" className={style.image}/>
           <div className={style.title}>For Woman</div>
        </div>
    )
}
export default CategoryItem;
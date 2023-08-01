import CategoryItem from "./CategoryItem";
import style from "./Category.module.css";

function Category(){
    return(
        <div className={style.container}>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
        </div>
    )
}

export default Category;

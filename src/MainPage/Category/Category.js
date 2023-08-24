import CategoryItem from "./CategoryItem";
import style from "./Category.module.css";
import {useState} from "react";

function Category({props}){
    return(
        <div className={style.container}>
            <CategoryItem props={props}/>
            {/*<CategoryItem/>*/}
            {/*<CategoryItem/>*/}
        </div>
    )
}

export default Category;

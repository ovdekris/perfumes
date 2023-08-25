import CategoryItem from "./CategoryItem";
import style from "./Category.module.css";

function Category({props}){
    return(
        <div className={style.container}>
            {props.map(record => (
                <CategoryItem key={props.id} props={record}/>
            ))}
        </div>
    )
}

export default Category;

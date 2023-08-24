import style from "./CategoryItem.module.css";
import image from "./img1.jpg";
function CategoryItem({props}){
    console.log(props.map((d)=>{
        return d.title
    }))
    return(
        <div className={style.container}>
            <img src={image} alt="image" className={style.image}/>
           <div className={style.title}>
               {props.map(record => (
                   <li key={record.id}>{record.title}</li>
               ))}
           </div>
        </div>
    )
}
export default CategoryItem;
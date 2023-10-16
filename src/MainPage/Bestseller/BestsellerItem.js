import style from "./BestsellerItem.module.css";
function BestsellerItem({props}){
   return(
       <div className={style.container}>
           <div className={style.content}>
           <div className={style.image}>
               <img src={props.image} alt="Bestseller"/>
           </div>
           <div className={style.description__container}>
               <div className={style.title}>{props.title}</div>
               <div className={style.description}>{props.description}</div>
               <div className={style.button}>Discover</div>
           </div>
           </div>
           <div className={style.background}></div>
       </div>
   )
}

export default BestsellerItem;
import style from "./BestsellerItem.module.css";
import image from "./imag5.jpg";
function BestsellerItem(){
   return(
       <div className={style.container}>
           <div className={style.content}>
           <div className={style.image}>
               <img src={image} alt="image"/>
           </div>
           <div>
               <div className={style.title}>TItle</div>
               <div className={style.description}>Description</div>
               <div className={style.button}>Button</div>
           </div>
           </div>
           <div className={style.background}></div>
       </div>
   )
}

export default BestsellerItem;
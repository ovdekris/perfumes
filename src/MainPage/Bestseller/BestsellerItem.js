import style from "./BestsellerItem.module.css";
import image from "./imag5.jpg";
function BestsellerItem(){
   return(
       <div className={style.container}>
           <div className={style.content}>
           <div className={style.image}>
               <img src="https://perfumowyblog.files.wordpress.com/2016/02/mfk-baccarat-rouge-540.jpg?w=1234&h=822" alt="Bestseller"/>
           </div>
           <div className={style.description__container}>
               <div className={style.title}>Paco Rabanne 1 million</div>
               <div className={style.description}>1 Million by Paco Rabanne is a fragrance for gallant men who
                   willingly put everything on one card. The fragrance composition brings to mind a daring gambling
                   game in which only one thing matters: Gold!</div>
               <div className={style.button}>Discover</div>
           </div>
           </div>
           <div className={style.background}></div>
       </div>
   )
}

export default BestsellerItem;
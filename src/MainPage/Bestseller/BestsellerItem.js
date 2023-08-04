import style from "./BestsellerItem.module.css";
import image from "./imag5.jpg";
function BestsellerItem(){
   return(
       <div className={style.container}>
           <div className={style.content}>
           <div className={style.image}>
               <img src={image} alt="image"/>
           </div>
           <div className={style.description__container}>
               <div className={style.title}>Paco Rabanne 1 million</div>
               <div className={style.description}>1 Million od Paco Rabanne to zapach dla szarmanckich mężczyzn, którzy ochoczo stawiają wszystko na jedną kartę. Kompozycja zapachowa przywodzi na myśl śmialą grę hazardową, w której chodzi tylko o jedno: Złoto! </div>
               <div className={style.button}>Button</div>
           </div>
           </div>
           <div className={style.background}></div>
       </div>
   )
}

export default BestsellerItem;
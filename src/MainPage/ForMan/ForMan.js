import Module from "../Module/Module";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./ForMan.module.css";
function ForMan(){
   return(
       <div>
           <Module/>
           <Header/>
           <div className={style.container}>
               <div className={style.title}>
                   <div className={style.title__div}></div>
                   For Man
                   <div className={style.title__div}></div>
               </div>
               <div className={style.content}>
                   <div className={style.content__item}>
                       <div>
                           <img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="image" className={style.image}/>
                       </div>
                       <div className={style.description}>Description</div>
                       <div className={style.price}>Price</div>
                   </div>
               </div>
           </div>
           <Footer/>
       </div>
   )
}

export default ForMan;
import Module from "../Module/Module";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./ForMan.module.css";
import {AiOutlineHeart} from "react-icons/ai";
import {BsGenderFemale} from "react-icons/bs";

function ForMan(){
   return(
       <div>
           <Module/>
           <Header/>
           <div className={style.container}>
               <div className={style.container__title}>
                   <div className={style.title__div}></div>
                   For Man
                   <div className={style.title__div}></div>
               </div>
               <div className={style.content}>
                   <div className={style.content__item}>
                       <div className={style.content__heart}>
                       <AiOutlineHeart className={style.heart}/>
                       </div>
                       <div>
                           <img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="image" className={style.image}/>
                       </div>
                       <div className={style.description__item}>
                           <div className={style.description__title}>
                           <div className={style.title}>Bleu de Chanel</div>
                           </div>
                           <div className={style.description}>
                               Bleu de Chanel  is a men's fragrance created by Jacques
                           </div>
                           <div className={style.scents}>
                               <div className={style.scents__item}>flower</div>
                               <div className={style.scents__item}>rose</div>
                           </div>
                       </div>
                       <div className={style.price}>from 40$</div>
                   </div>
                   <div className={style.content__item}>
                       <div>
                           <img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="image" className={style.image}/>
                       </div>
                       <div className={style.description}>Description</div>
                       <div className={style.price}>Price</div>
                   </div>
                   <div className={style.content__item}>
                       <div>
                           <img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="image" className={style.image}/>
                       </div>
                       <div className={style.description}>Description</div>
                       <div className={style.price}>Price</div>
                   </div>
                   <div className={style.content__item}>
                       <div>
                           <img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="image" className={style.image}/>
                       </div>
                       <div className={style.description}>Description</div>
                       <div className={style.price}>Price</div>
                   </div>
                   <div className={style.content__item}>
                       <div>
                           <img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="image" className={style.image}/>
                       </div>
                       <div className={style.description}>Description</div>
                       <div className={style.price}>Price</div>
                   </div> <div className={style.content__item}>
                   <div>
                       <img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="image" className={style.image}/>
                   </div>
                   <div className={style.description}>Description</div>
                   <div className={style.price}>Price</div>
               </div> <div className={style.content__item}>
                   <div>
                       <img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="image" className={style.image}/>
                   </div>
                   <div className={style.description}>Description</div>
                   <div className={style.price}>Price</div>
               </div>
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
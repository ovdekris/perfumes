import Module from "../Module/Module";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./ForMan.module.css";
import CardProduct from "../CardProduct/CardProduct";
import {useContext} from "react";
import {CustomContext} from "../Context/Context";
function ForMan({props}){
    const {show}=useContext(CustomContext);
   return(
       <div style={{position: show? 'fixed':'relative'}}>
           <Module/>
           <Header/>
           <div className={style.container}>
               <div className={style.container__title}>
                   <div className={style.title__div}></div>
                   For Man
                   <div className={style.title__div}></div>
               </div>
               <div className={style.content}>
                   {props.map(record => (
                       <CardProduct key={props.id} props={record} className={style.content__item}/>
                   ))}
               </div>
           </div>
           <Footer/>
       </div>
   )
}
export default ForMan;
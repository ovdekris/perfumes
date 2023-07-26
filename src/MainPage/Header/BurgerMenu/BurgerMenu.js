import  "./BurgerMenu.Module.css";
import style from "../Header.module.css";
import React from "react";
function BurgerMenu({active, setActive}){
    return(
        <>
         <div className={active? 'container active' :'container'}>
             <div className="blur">
                 <div className="container__menu">
                     <div className="content__menu__button">
                         <div className="content__menu__title">Perfumy</div>
                     <div onClick={()=>{setActive(!active)}} className="button__burger"></div>
                     </div>
                         <div className="content__menu__list">
                             <ul className="content__menu__list__ul">
                                 <li>
                                     <a href="">Sale</a>
                                 </li>
                                 <hr/>
                                 <li>
                                     <a href="">For men</a>
                                 </li>
                                 <hr/>
                                 <li>
                                     <a href="">For women</a>
                                 </li>
                                 <hr/>
                                 <li>
                                     <a href="">Body mist</a>
                                 </li>
                                 <hr/>
                                 <li>
                                     <a href="">Home fragrances</a>
                                 </li>
                                 <hr/>
                                 <li>
                                     <a href="">Signature</a>
                                 </li>
                                 <hr/>
                             </ul>
                         </div>
                     </div>
             </div>
         </div>
        </>
    )
}
export default BurgerMenu;
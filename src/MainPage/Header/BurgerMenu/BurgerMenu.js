import  "./BurgerMenu.Module.css";
import style from "../Header.module.css";
import React from "react";
function BurgerMenu({active, setActive}){
    return(
        <>
         <div className={active? 'container active' :'container'}>
             <div className="blur">
                 <div className="container__menu">

                         <div>
                             <ul>
                                 <li>
                                     <a href="">Sale</a>
                                 </li>
                                 <li>
                                     <a href="">For men</a>
                                 </li>
                                 <li>
                                     <a href="">For women</a>
                                 </li>
                                 <li>
                                     <a href="">Body mist</a>
                                 </li>
                                 <li>
                                     <a href="">Home fragrances</a>
                                 </li>
                                 <li>
                                     <a href="">Signature</a>
                                 </li>
                             </ul>
                         </div>
                     <div onClick={()=>{setActive(!active)}}>button</div>
                     </div>
             </div>
         </div>
        </>
    )
}
export default BurgerMenu;
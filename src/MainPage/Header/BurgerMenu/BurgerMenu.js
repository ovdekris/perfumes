import  "./BurgerMenu.Module.css";
import React from "react";
import {Link} from "react-router-dom";
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
                                     <Link to="/sale">Sale</Link>
                                 </li>
                                 <hr/>
                                 <li>
                                     <Link to="/forman">For men</Link>
                                 </li>
                                 <hr/>
                                 <li>
                                     <Link to="/forwoman">For women</Link>
                                 </li>
                                 <hr/>
                                 <li>
                                     <Link to="bodymist">Body mist</Link>
                                 </li>
                                 <hr/>
                                 <li>
                                     <Link to="homefragrances">Home fragrances</Link>
                                 </li>
                                 <hr/>
                                 <li>
                                     <Link to="signature">Signature</Link>
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
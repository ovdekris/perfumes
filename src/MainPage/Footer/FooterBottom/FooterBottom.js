import style from './FooterBottom.module.css';
import {BiLogoInstagram, BiLogoFacebookCircle} from "react-icons/bi";

function FooterBottom(){
    const titleInput="Your email";
    return(
        <div className={style.container}>
           <div className={style.content}>
                   <div className={style.content__newstseller__item}>
                    <div className={style.content__newstseller__title}>
                        Sign up for our newsletter
                    </div>
                   <div className={style.input__item}>
                   <input type="text" placeholder={titleInput}/>
                       <button>
                           <i className={style.arrow}></i>
                       </button>
                   </div>
               </div>
               <div className={style.content__social}>
                    <BiLogoInstagram className={style.content__social__item}/>
                   <BiLogoFacebookCircle className={style.content__social__item}/>
               </div>
           </div>
            <div className={style.info}>
                © 2023 All rights reserved
            </div>
        </div>
    )
}

export default FooterBottom;
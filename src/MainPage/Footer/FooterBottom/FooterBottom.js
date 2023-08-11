import style from './FooterBottom.module.css';

function FooterBottom(){
    return(
        <div className={style.container}>
           <div className={style.content}>
               <div className={style.content__newstseller}>

               </div>
               <div className={style.content__social}>

               </div>
           </div>
            <div className={style.info}>
                © 2023 All rights reserved
            </div>
        </div>
    )
}

export default FooterBottom;
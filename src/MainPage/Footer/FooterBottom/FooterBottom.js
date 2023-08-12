import style from './FooterBottom.module.css';

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
                       </button>
                   </div>
               </div>
               <div className={style.content__social}>
                    social
               </div>
           </div>
            <div className={style.info}>
                © 2023 All rights reserved
            </div>
        </div>
    )
}

export default FooterBottom;
import style from "./Footer.module.css";

function Footer(){
    return(
        <div className={style.container}>
           <div className={style.content}>
               <div className={style.title}>
                   Contact
               </div>
               <div className={style.description}>
                   <div className={style.description__item}>
                       GLARE PERFUME SP. Z O.O.
                   </div>
                   <div className={style.description__item}>
                       Office address: MALEWSKI 15,
                       Poland, Warsaw 02-273
                   </div>
                   <div className={style.description__item__number}>
                       Call us at: 568-646-1*8
                   </div>
                   <div className={style.description__item__mail}>
                       Email: kontaktperfume@gmail.com
                   </div>
               </div>
           </div>
            <div className={style.content}>
                <div className={style.title}>
                    INFORMATION ABOUT PERFUME - ONLINE PERFUMERY
                </div>
                <div className={style.description}>
                    <div className={style.description__item}>
                        Privacy Policy - GDPR
                    </div>
                    <div className={style.description__item}>
                        Office address: MALEWSKI 15,
                        Statute
                    </div>
                    <div className={style.description__item__number}>
                        About us
                    </div>
                    <div className={style.description__item__mail}>
                        Delivery
                    </div>
                    <div className={style.description__item__mail}>
                        Payment methods
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
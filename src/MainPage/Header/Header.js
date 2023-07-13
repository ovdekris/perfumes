import style from "./Header.module.css"
import React, {useState} from "react";
import logo from "./logo-2.png";
import {BiBasket, BiHeart, BiUser} from "react-icons/bi";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
function Header(){
    const[menuActive, setMenuActive]=useState(false)
    return (<>
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.burger_container}>
                <div className={style.burger} onClick={()=>{setMenuActive(!menuActive)}}>
                    <span></span>
                </div>
                    <BurgerMenu active={menuActive} setActive={setMenuActive}/>
                </div>
                <div className={style.content__search} >
                    <input type="text" placeholder="What are you search?"/>
                </div>
                <div className={style.content__logo}>
                    <img src={logo} alt="logo" className={style.image__logo}/>
                </div>
                <div className={style.content__client__part}>
                    <BiUser className={style.content__client__part__icon}/>
                    <BiHeart className={style.content__client__part__icon}/>
                    <BiBasket className={style.content__client__part__icon}/>
                </div>
            </div>
            <div className={style.content__menu}>
                <menu>
                    <ul className={style.content__menu__items}>
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
                </menu>
            </div>
        </div>

        </>
    )
}
export default Header;
import style from "./Header.module.css"
import React from "react";
import logo from "./logo-2.png";
import {BiBasket, BiHeart, BiUser} from "react-icons/bi";
function Header(){
    return (<>
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.content__search} >
                    <input type="text" placeholder="What are you search?"/>
                </div>
                <div className={style.content__logo}>
                    <img src={logo} alt="logo" className={style.image__logo}/>
                </div>
                <div className={style.content__client__part}>
                    <BiUser  size={28}/>
                    <BiHeart size={28}/>
                    <BiBasket size={28}/>
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
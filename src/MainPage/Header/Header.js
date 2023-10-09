import style from "./Header.module.css"
import React, {useContext, useState} from "react";
import logo from "./logo-2.png";
import  {BiHeart, BiUser} from "react-icons/bi";
import {SlBasket} from "react-icons/sl"
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import {Link, useNavigate} from "react-router-dom";
import {CustomContext} from "../Context/Context";
import BasketsZero from "./Backets/BasketsZero";
import Search from "./Search/Search";
function Header(){
    const[menuActive, setMenuActive]=useState(false);
    const {basket,show,setShow}=useContext(CustomContext);
    const navigate=useNavigate();
    return (<>
        <div className={style.container} >
            <div className={style.content}>
                <div className={style.burger_container}>
                <div className={style.burger} onClick={()=>{setMenuActive(!menuActive)}}>
                    <span></span>
                </div>
                    <BurgerMenu active={menuActive} setActive={setMenuActive}/>
                </div>
                <Search/>
                <Link to="/" className={style.content__logo}>
                    <img src={logo} alt="logo" className={style.image__logo}/>
                </Link>
                <div className={style.content__client__part}>
                    <Link to="/profile" className={style.link}>
                    <BiUser className={style.content__client__part__icon}/>
                    </Link>
                    <Link to="/likes" className={style.link}>
                    <BiHeart className={style.content__client__part__icon}/>
                    </Link>
                    <div className={`${style.link} ${style.link__basket__container}`} onClick={()=>{
                        if (basket.length){
                            navigate('/baskets')
                        }else {
                            setShow(true)
                        }
                    }}>
                    <SlBasket className={style.content__client__part__icon}/>
                        <div className={style.link__basket}>{basket.length}</div>
                    </div>
                </div>
            </div>
            <div className={style.content__menu}>
                <menu>
                    <ul className={style.content__menu__items}>
                        <li>
                            <Link to="/sale">Sale</Link>
                        </li>
                        <li>
                            <Link to="/forman">For man</Link>
                        </li>
                        <li>
                            <Link to="/forwoman">For woman</Link>
                        </li>
                        <li>
                            <Link to="/bodymist">Body mist</Link>
                        </li>
                        <li>
                            <Link to="/homefragrances">Home fragrances</Link>
                        </li>
                        <li>
                            <Link to="/signature">Signature</Link>
                        </li>
                    </ul>
                </menu>
                <BasketsZero show={show} setShow={setShow}/>
            </div>
        </div>
        </>
    )
}
export default Header;
import style from "./Header.module.css"
import logo from "./logo-2.png"
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
                <div className={style.content__klient__part}>
                    clas
                </div>
            </div>
        </div>
        </>
    )
}
export default Header;
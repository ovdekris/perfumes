import  "./BurgerMenu.Module.css";
function BurgerMenu({active, setActive}){
    return(
        <>
         <div className={active? 'container active' :'container'}>
             <div className="blur">
                 <div className="container__menu">

                 </div>
             </div>
         </div>
        </>
    )
}
export default BurgerMenu;
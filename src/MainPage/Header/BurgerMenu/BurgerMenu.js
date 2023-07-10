import  "./BurgerMenu.Module.css";
function BurgerMenu({active, setActive}){
    return(
        <>
         <div className={active? 'container active' :'container'}></div>
        </>
    )
}
export default BurgerMenu;
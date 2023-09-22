import style from "./BasketZero.module.css";
function BasketsZero({show,setShow}){
    return(
        <div style={{display: show? 'flex':'none'}} className={style.container}>
            BasketZero
        </div>
    )
}

export default BasketsZero;
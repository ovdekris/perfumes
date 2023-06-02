import style from "./Module.module.css";
function Module({setOpenModule}){
    return(
        <div className={style.container}>
            <div className={style.description}>Free delivery from 200 zł!</div>
            <div className={style.button} onClick={()=>{
                    setOpenModule(false)
            }}>
            </div>
        </div>
    )
}

export default Module;
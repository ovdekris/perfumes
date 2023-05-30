import style from "./Module.module.css";
function Module({setOpenModule}){
    return(
        <div className={style.container}>
            <div className={style.description}>Free delivery from 200 zł!</div>
            <button className={style.button} onClick={()=>{
                    setOpenModule(false)
            }}>
                Button
            </button>
        </div>
    )
}

export default Module;
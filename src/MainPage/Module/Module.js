import style from "./Module.module.css";
import {useState} from "react";
function Module({open},{setOpenModule}){
    console.log({open}, {setOpenModule});
    return(
        <div className={style.container}>
            <button className={style.button} onClick={()=>{
            }}>
                Button
            </button>
        </div>
    )
}

export default Module;
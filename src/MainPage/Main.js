import Module from "./Module/Module";
import style from "./Main.module.css"
import {useState} from "react";


function Main(){
    const [openModule,setOpenModule]=useState(true);
    return(
        <div>
            {openModule && <Module open={openModule} setOpenModule={setOpenModule}/>}
            <div className={style.container}>
                ffff
            </div>
        </div>
    )
}

export default Main;
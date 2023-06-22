import Module from "./Module/Module";
import style from "./Main.module.css"
import {useState} from "react";
import Header from "./Header/Header";


function Main(){
    const [openModule,setOpenModule]=useState(true);
    return(
        <div>
            {openModule && <Module open={openModule} setOpenModule={setOpenModule}/>}
            <Header/>

        </div>
    )
}

export default Main;
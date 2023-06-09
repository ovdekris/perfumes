import Module from "./Module/Module";
import style from "./Main.module.css"
import {useState} from "react";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";


function Main(){
    const [openModule,setOpenModule]=useState(true);
    return(
        <div className={style.container}>
            {openModule && <Module open={openModule} setOpenModule={setOpenModule}/>}
            <Header/>
            <Slider/>
        </div>
    )
}

export default Main;
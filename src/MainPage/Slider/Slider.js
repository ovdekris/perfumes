import React from "react";
import  style from "./Slider.module.css";
import image from "./img__slider.jpg"
function Slider(){
    return(
        <div className={style.container}>
            <img src={image} alt=""/>
        </div>
    )
}
export default Slider;
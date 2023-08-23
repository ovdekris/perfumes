import Module from "./Module/Module";
import style from "./Main.module.css"
import {useEffect, useState} from "react";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import Category from "./Category/Category";
import Bestseller from "./Bestseller/Bestseller";
import Footer from "./Footer/Footer";
import axios from "axios";

function Main(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/data")
            .then(res=>setData(res.data))
            .catch(er=>console.log(er))
    },[])
    const [openModule,setOpenModule]=useState(true);
    console.log(data)
    return(
        <div className={style.container}>
            {openModule && <Module open={openModule} setOpenModule={setOpenModule}/>}
            <Header/>
            <Slider/>
            <Category props={data}/>
            <Bestseller/>
            <Footer/>
        </div>
    )
}

export default Main;
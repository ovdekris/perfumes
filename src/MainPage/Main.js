import Module from "./Module/Module";
import style from "./Main.module.css"
import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import Category from "./Category/Category";
import Bestseller from "./Bestseller/Bestseller";
import Footer from "./Footer/Footer";
import axios from "axios";

function Main() {
    const [isLoading, setIsLoading] = useState(true);
    const [records, setRecords] = useState([]);
    const [openModule, setOpenModule] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(response => response.json())
            .then(data => {
                setRecords(data);
                setIsLoading(false); // Установить флаг загрузки в false после получения данных
            })
            .catch(err => console.log(err))
    }, []);

    if (isLoading) {
        return <p>Loading...</p>; // Показать индикатор загрузки
    }
   let data=records.favorites;
    return (
        <div className={style.container}>
                            {openModule && <Module open={openModule} setOpenModule={setOpenModule} />}
                            <Header />
                            <Slider />
                            <Category props={data} />}
                            <Bestseller />
                            <Footer />
        </div>
    );
}

export default Main;

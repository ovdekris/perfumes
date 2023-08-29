import Module from "./Module/Module";
import style from "./Main.module.css"
import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import Category from "./Category/Category";
import Bestseller from "./Bestseller/Bestseller";
import Footer from "./Footer/Footer";

function Main({props}) {
    const [isLoading, setIsLoading] = useState(true);
    const [records, setRecords] = useState([]);
    const [openModule, setOpenModule] = useState(true);
    const url='http://localhost:5000/data';
    useEffect(() => {
        fetch(url)
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
    const data=records.favorites;
    const dataBestseller=records.bestseller;
    return (
        <div className={style.container}>
                            {openModule && <Module open={openModule} setOpenModule={setOpenModule} />}
                            <Header props={data} />
                            <Slider />
                            <Category props={data} />}
                            <Bestseller props={data}/>
                            <Footer />
        </div>
    );
}

export default Main;

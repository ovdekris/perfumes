import Module from "./Module/Module";
import style from "./Main.module.css"
import {useContext, useEffect, useState} from "react";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import Category from "./Category/Category";
import Bestseller from "./Bestseller/Bestseller";
import Footer from "./Footer/Footer";
import {CustomContext} from "./Context/Context";

function Main({props}) {
    const [isLoading, setIsLoading] = useState(true);
    const [records, setRecords] = useState([]);
    const [openModule, setOpenModule] = useState(true);
    const url='http://localhost:5000/data';
    const {show,setShow}=useContext(CustomContext);
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
    return (
        <div className={style.container} style={{position: show? 'fixed':'relative'}}>
                            {openModule && <Module  setOpenModule={setOpenModule} />}
                            <Header props={records} />
                            <Slider />
                            <Category props={data} />}
                            <Bestseller props={data}/>
                            <Footer />
        </div>
    );
}

export default Main;

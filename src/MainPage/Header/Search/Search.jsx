import style from "../Header.module.css";
import React, {useContext, useEffect, useState} from "react";
import {BsSearch} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {CustomContext} from "../../Context/Context";
function Search(){
    const navigate=useNavigate();
    const {setSearchResults,setInputValue}=useContext(CustomContext);
    const [isLoading, setIsLoading] = useState(true);
    const [records, setRecords] = useState([]);
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
    const data=records.forman;
    const handleSearch=(e)=>{
        const inputValue=e.target.value;
        const results=data.filter((it)=>{
           return  it.title.toLowerCase().indexOf(inputValue.toLowerCase()) !==-1
        })
        setSearchResults(results);
        setInputValue(inputValue);
    }
    const navigateSearch=(e)=>{
        if (e.key==='Enter'){
            navigate("/search");
        }
    }
    return(
        <div className={style.content__search} >
            <input type="text" placeholder="What are you search?" onChange={handleSearch}/>
            <BsSearch className={style.content__search__item} onClick={()=>{
                navigate("/search");
            }}/>
        </div>
    )
}

export default Search;
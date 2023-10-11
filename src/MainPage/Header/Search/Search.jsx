import style from "../Header.module.css";
import React from "react";
function Search({props}){
    const handleSearch=(e)=>{
        const inputValue=e.target.value;
    }
    const results=(data, title)=>{
        for (let category in data) {
            if (data.hasOwnProperty(category)) {
                const categoryArray = data[category];
                const foundObject = categoryArray.find(item => item.title === title);
                if (foundObject) {
                    return foundObject;
                }
            }
        }
        return null; // Вернуть null, если объект не найден
    }
    console.log(props,"Jo ")
    return(
        <div className={style.content__search} >
            <input type="text" placeholder="What are you search?" onChange={handleSearch}/>
        </div>
    )
}

export default Search;
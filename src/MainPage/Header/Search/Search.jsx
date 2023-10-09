import style from "../Header.module.css";
import React from "react";

function Search(){
    const handleSearch=(e)=>{
        console.log(e.target.value);
    }
    return(
        <div className={style.content__search} >
            <input type="text" placeholder="What are you search?" onChange={handleSearch}/>
        </div>
    )
}

export default Search;
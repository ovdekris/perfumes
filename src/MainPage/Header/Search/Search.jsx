import style from "../Header.module.css";
import React from "react";
import {BsSearch} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
function Search({props}){
    const navigate=useNavigate();
    const handleSearch=(e)=>{
        const inputValue=e.target.value;
        const data=props.forman;
        const results=data.filter((it)=>{
           return  it.title.toLowerCase().indexOf(inputValue.toLowerCase()) !==-1
        })
        console.log(results);
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
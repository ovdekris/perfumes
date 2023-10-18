import Module from "../Module/Module";
import Header from "../Header/Header";
import {useContext} from "react";
import {CustomContext} from "../Context/Context";
import style from "./SearchResult.module.css";
import styleCard from "../ForWoman/ForWoman.module.css";
import CardProduct from "../CardProduct/CardProduct";
import CardProductSearch from "./CardProductSearch";
function SearchResult() {
    const {searchResults,inputValue}=useContext(CustomContext);
    return (
        <>
            <Module/>
            <Header/>
           <div className={style.content}>
               <div className={style.content__title}>Your search for "{inputValue}" has provided the following results:</div>
               <div className={styleCard.content}>
                   {searchResults.map(record => (
                       <CardProductSearch props={record} key={record.id} className={styleCard.content__item}/>
                   ))}
               </div>

           </div>
        </>
    )
}

export default SearchResult;
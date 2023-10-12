import Module from "../Module/Module";
import Header from "../Header/Header";
import {useContext} from "react";
import {CustomContext} from "../Context/Context";

function SearchResult() {
    const {searchResults}=useContext(CustomContext);
    console.log(searchResults);
    return (
        <>
            <Module/>
            <Header/>
            Search Result
        </>
    )
}

export default SearchResult;
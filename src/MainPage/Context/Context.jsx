import {createContext, useState} from "react";

export const CustomContext=createContext();

function Context(props){
    const [basket,setBasket]=useState([]);
    const value={
        basket
    }
    return <CustomContext.Provider value={value }>
        {props.children}
    </CustomContext.Provider>
}

export default Context;
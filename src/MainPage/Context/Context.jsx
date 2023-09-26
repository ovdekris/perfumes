import {createContext, useState} from "react";

export const CustomContext=createContext();

function Context(props){
    const [basket,setBasket]=useState([]);
    const[show,setShow]=useState(false);
    const addBasket=(product)=>{
        setBasket(prev=>[...prev,product])
    }
    const value={
        basket,
        show,setShow,
        addBasket
    }
    return <CustomContext.Provider value={value }>
        {props.children}
    </CustomContext.Provider>
}

export default Context;
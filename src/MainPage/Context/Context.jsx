import {createContext, useState} from "react";

export const CustomContext=createContext();

function Context(props){
    const [basket,setBasket]=useState([]);
    const[show,setShow]=useState(false);
    const addBasket=(product)=>{
        setBasket(prev=>[...prev,
            {...product, count:1}])
    }
    const plusOneBasket=(id)=>{
        setBasket(prev=>prev.map(item=>{
            if (item.id===id){
                return{
                    ...item, count: item.count+1
                }
                return item;
            }
        }))
    }
    const minusOneBasket=(id)=>{
        setBasket(prev=>prev.map(item=>{
            if (item.id===id){
                return{
                    ...item, count: item.count-1
                }
                return item;
            }
        }))
    }
    const value={
        basket,
        show,setShow,
        addBasket,
        plusOneBasket,
        minusOneBasket
    }
    return <CustomContext.Provider value={value }>
        {props.children}
    </CustomContext.Provider>
}

export default Context;
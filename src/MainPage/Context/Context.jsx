import {createContext, useState} from "react";

export const CustomContext=createContext();

function Context(props){
    const [basket,setBasket]=useState([]);
    const[show,setShow]=useState(false);
    const addBasket=async (product)=>{
        await setBasket(prev=>[...prev,
            {...product,
                count:1}
        ])
        localStorage.setItem('basket', JSON.stringify(basket));
    }
    const delBasket=async (id)=>{
        await setBasket(prev=>prev.filter(item=>item.id!==id))
        localStorage.setItem('basket', JSON.stringify(basket));
    }
    const addToCart = (product) => {
        const existingProduct = basket.find((item) => item.idList === product.idList);
        if (existingProduct) {
            const updatedCart = basket.map((item) =>
                item.idList === product.idList
                    ? { ...item, count: item.count + 1 }
                    : item
            );
            setBasket(updatedCart);
        } else {
            setBasket([...basket, { ...product, count: 1 }]);
        }
    }
    const minusToCart = (product) => {
        const existingProductCount=basket.find((item) => item.idList === product.idList).count;
        const existingProduct = basket.find((item) => item.idList === product.idList);
        if (existingProduct) {
            const updatedCart = basket.map((item) =>
                item.idList === product.idList
                    ? { ...item, count: item.count - 1 }
                    : item
            );
            setBasket(updatedCart);
        } else {
            setBasket([...basket, { ...product, count: 1 }]);
        }
    }
    const value={
        basket,
        show,setShow,
        addBasket,
        minusToCart,
        delBasket,
        addToCart
    }
    return <CustomContext.Provider value={value }>
        {props.children}
    </CustomContext.Provider>
}

export default Context;
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
    const delBasket=(itemId)=>{
        const updatedCart = basket.filter((item) => item.id !== itemId);
        setBasket(updatedCart);
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
            const updatedCart = basket.map((item) => {
                if (item.idList === product.idList) {
                    if (item.quantity === 1) {
                        return null;
                    } else {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                }
                return item;
            });

            const filteredCart = updatedCart.filter((item) => item !== null);

            setBasket(filteredCart);
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
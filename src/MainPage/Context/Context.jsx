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
    // const plusOneBasket=async (id)=>{
    //     await setBasket(prev=>prev.map(item=>{
    //         if (item.idList===id){
    //             return{
    //                 ...item, count: item.count+1
    //             }
    //         }
    //     }))
    // }
    const addToCart = (product) => {
        // Проверяем, есть ли товар уже в корзине
        const existingProduct = basket.find((item) => item.idList === product.idList);

        if (existingProduct) {
            // Если товар уже есть в корзине, увеличиваем количество
            const updatedCart = basket.map((item) =>
                item.idList === product.idList
                    ? { ...item, count: item.count + 1 }
                    : item
            );
            setBasket(updatedCart);
        } else {
            // Если товара нет в корзине, добавляем его с начальным количеством 1
            setBasket([...basket, { ...product, count: 1 }]);
        }
    };
    const minusOneBasket=async (id)=>{
        let countBasket=basket.find(item=>item.id===id).count
        if (countBasket===1){
           await setBasket(prev=>prev.filter(item=>item.id!==id))
        }else {
            await setBasket(prev=>prev.map(item=>{
                if (item.id===id){
                    return{
                        ...item, count: item.count-1
                    }
                    return item;
                }
            }))
        }
        localStorage.setItem('basket', JSON.stringify(basket));
    }
    const value={
        basket,
        show,setShow,
        addBasket,
        minusOneBasket,
        delBasket,
        addToCart
    }
    return <CustomContext.Provider value={value }>
        {props.children}
    </CustomContext.Provider>
}

export default Context;
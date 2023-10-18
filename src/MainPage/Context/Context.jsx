import {createContext, useEffect, useState} from "react";

export const CustomContext=createContext();

function Context(props){
    const [basket,setBasket]=useState([]);
    const [likes,setLikes]=useState([]);
    const[show,setShow]=useState(false);
    const [searchResults,setSearchResults]=useState([]);
    const [inputValue, setInputValue]=useState();
    //Logic for likes
    const addLikes=(product)=>{
        setLikes(prev=>[...prev,
            {...product,
                count:1}
        ])
    }
    const delLikes=(product)=>{
        const updatedCart = likes.filter((item) => item.idList !== product.idList);
        setLikes(updatedCart);
    }
    const addToLikes = (product) => {
        const existingProduct = likes.find((item) => item.idList === product.idList);
        if (existingProduct) {
            const updatedCart = likes.map((item) =>
                item.idList === product.idList
                    ? { ...item, count: item.count + 1 }
                    : item
            );
            setBasket(updatedCart);
        } else {
            setBasket([...basket, { ...product, count: 1 }]);
        }
    }

    //Logic for basket
    const addBasket=(product)=>{
     setBasket(prev=>[...prev,
            {...product,
                count:1}
        ])
    }
    const delBasket= (product)=>{
      const updatedCart = basket.filter((item) => item.idList !== product.idList);
        setBasket(updatedCart);
    }
    const addToCart =  (product) => {
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
    const minusToCart =  (product) => {
         const updatedCart = basket.filter((item) => item.idList !== product.idList);
          let count=basket.find(item=>item.idList===product.idList).count;
          if (count===1){
           setBasket(updatedCart)
          }
          else
          {
              setBasket(prev=>prev.map(item=>{
                  if (item.idList===product.idList){
                      return {...item, count:item.count-1}
                  }
                  return item
              }))
          }
    }
    useEffect(()=>{
        localStorage.setItem("basket", JSON.stringify(basket))
    },[basket])
    const value={
        basket,
        show,setShow,
        addBasket,
        minusToCart,
        delBasket,
        addToCart,
        addLikes,
        delLikes,
        likes,
        searchResults,
        setSearchResults,
        inputValue,
        setInputValue
    }
    return <CustomContext.Provider value={value }>
        {props.children}
    </CustomContext.Provider>
}

export default Context;
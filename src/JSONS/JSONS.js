import axios from "axios";
import {useEffect, useState} from "react";

function JSONS(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/data")
            .then(res=>setData(res.data))
            .catch(er=>console.log(er))
    },[])
    console.log(data.titles.map((d)=>{
        console.log(d.title)
    }));
    return(
        <div>
            {/*{data.map((d,i)=>*/}
            {/*{*/}
            {/*    return (*/}
            {/*        <div>*/}
            {/*            {d.title}*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*})}*/}
        </div>
    )
}
export default JSONS;
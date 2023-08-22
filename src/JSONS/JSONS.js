import axios from "axios";
import {useEffect, useState} from "react";

function JSONS(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/perfume")
            .then(res=>setData(res.data))
            .catch(er=>console.log(er))
    },[])
    return(
        <div>
            {data.map((d,i)=>
            {
                return (
                    <div>
                        {d.title}
                    </div>
                )
            })}
        </div>
    )
}
export default JSONS;
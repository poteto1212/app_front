import react ,{useState }from "react";
import { useEffect } from "react/cjs/react.production.min";
import {userFetchRest} from "../../restapi/test";

export default function TestApi(){
    const {get,setGets} = userFetchRest()

    const getData = () =>{
        
    }
    
    return(<>
    <div>{get.id}</div>
    <div>{get.content}</div>
    <div>{get.environTest}</div>
    <input id="name" type="text" defaultvalue= {get.content} />
    </>)
   
}
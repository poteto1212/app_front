import {useState, useEffect} from 'react';

import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});
export const userFetchRest = (name) =>{
    const [get, setGets] = useState([])
    const endopoint = '/greeting';
    useEffect(()=>{
      api.get(endopoint,{
        params:{
          name: name
        },
        headers: {
          'Content-Type': 'application/json',
          }, 
    }).then(response => {
        setGets(response.data)})
    },[])  
    
   
    
   return {get,setGets}
}

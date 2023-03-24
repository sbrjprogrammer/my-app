import React,{useEffect, useState} from 'react'
import axios from 'axios'

export function Useeffect() {
   let[state,setstate]=useState(0)
   
   
    useEffect(()=>{
            if(state>0){
                document.title=state
            }

    

        // axios.get(`https://jsonplaceholder.typicode.com/users`)

        // .then((res)=>{
        //     console.log(res.data)
        //    setstate(res.data)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
    },[state])

    return (
        <>
          <h1>{state}</h1>
        <button onClick={()=>{setstate(state+1)}}></button>
        </>
    )
}

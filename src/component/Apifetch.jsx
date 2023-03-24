import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Useeffect } from './useeffect'
import { Apifetchloading } from './apifetchloading';

export function Apifetch(props) {
    let [data,setdata]= useState([]);
    let [loading,setloading] =useState(true)
 
    const getUsers=  async ()=>{
        
      try{ 
          setloading(false)
          const data1 = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data2=await data1.json()
        setdata(data2)
        .then((res)=>{
            console.log(res.json())
        
        })
    }catch(error){
        console.log(error)
    }

    }

    useEffect(()=>{
        getUsers()
    },[])

    if (loading) {
        return <Apifetchloading/>
    }

    return (
        <div>
            {
                data.map((val,ind)=>{
                    return  <div key={ind}>

                        <h4 >  {val.id}  </h4>
                    </div>
                    
                })
            }
        </div>
    )
}

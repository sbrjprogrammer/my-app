import React, { useEffect, useState } from 'react'
import { Useeffect } from './useeffect'

export function Cleanup() {
    let [state,setState]=useState(window.screen.width)
    
    useEffect(()=>{
            window.addEventListener("resize",()=>{
                console.log(window.innerWidth)
                    setState(window.innerWidth)
            })
            return()=>{
                window.removeEventListener("resize",()=>{
                    
                        setState(window.innerWidth)
                })
            }
    })

    return (
        <>
          <h1>{state}</h1>  
        </>
    )
}

import React, { useRef,useState } from 'react'

export function Useref() {
    let[show,setShow]=useState(false)

    const controlled = useRef(null)


    const submitForm= (e)=>{
        e.preventDefault()
        let name = controlled.current.value;
        name===""  ? alert("please fill the input filed"):setShow(true)


    }
    

    return (
        <>
            <form action="" onSubmit={submitForm}>
                <label htmlFor=" data">
        <input type="text" id='data' ref={controlled}/>
                <button >submit</button>
                </label>

            </form>

            <p>{show?`your name is ${controlled.current.value}`:"" }</p>
        </>
    )
}

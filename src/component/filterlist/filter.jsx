import React,{useState} from 'react'

export function Filter(props) {
    let list = [
        "apple",
        "banana",
        "grapes",
        "kino",
        "mango"
    ]

    const [filterlist, setFilterlist] = useState(list)  
    const handleChange=(event)=>{
        if(event.target.value==""){
            setFilterlist(list)
        }
        const filtervalues = list.filter((item)=>{
            return item.toLowerCase().indexOf(event.target.value.toLowerCase())!==-1
        })
        setFilterlist(filtervalues)

    }

    return (
        <>
           search :<input type="text" onChange={handleChange} /> 
           {filterlist && filterlist.map((val,ind)=>{
               return  <div key={ind}>
                   {val}
               </div>
           })}
        </>
    )
}

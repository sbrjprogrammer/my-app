import React,{useState} from "react";



function Todo (){

 let [todo,setTodo]  = useState(["shahzaib","sharjeel","fazeel"]);




    return(
        <div>
          <input type="text" onChange={(e)=> setTodo([...todo,e.target.value])} />
      


        {todo.map((val,ind)=>{
            return <li key={ind}>{val}</li>
        })}

        </div>
    )
}

export default Todo
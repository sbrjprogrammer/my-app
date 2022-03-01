import React,{useState} from 'react';
import Child from './Child';
import './App.css';

function App() {
  let [count,setCount]=useState(0)
  let [name,setName]=useState("shahzib")
     

  const updname=()=>{
    var updatename = prompt("enter value")
    setName(updatename)
  }
  return (
    /* html or js ko sath me likhana jsx kehlata h */
  <>
    <h2>{count}</h2>
    <button onClick={()=>{setCount(count+1)}}></button>
  
    <h2>{name}</h2>
    <button onClick={()=>{updname()}}></button>


    <h1>hello</h1>
    <Child name="shahzaib" age={12} obj={{name : "shahzaib"}}/>
  </>
  );
}

export default App;

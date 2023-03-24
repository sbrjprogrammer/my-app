import React, {useState } from "react";
// import Child from "./Child";
// import RouterCom from "./route/Route";
// import Todo from "./component/todo";
import { BrowserRouter,Router,Routes,Route} from "react-router-dom";

import "./App.css";
import Home from "./Components/Home";
import { Useeffect } from "./component/useeffect";
import { Cleanup } from "./component/cleanup";
import { Useref } from "./component/UseRef";
import { Apifetch } from "./component/Apifetch";
import { Filter } from "./component/filterlist/filter";
import Header from "./Components/Header";
import AttendancePolicy from "./Components/Attendancetabel/Attendance";
import Attendance from "./Components/Attendancetabel/attendance2/Attendance";
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       item:"",
//       todo:[]
//     }
//   }

//   setItem(e){
//     this.setState({
//       ...this.state.item,
//       item:e.target.value,
//     })
//   }
//   addItem(){
//     this.setState({
//       ...this.state,
//       todo:[...this.state.todo, this.state.item]
//     })
//   }

//   del(i){
//    let todo= [...this.state.todo]
//    todo.splice(i,1)
//    this.setState({
//     todo:todo
//    })
//   }


//   render(){
//     return(
//       // <div>
//       //   <input type="text" name="" id=""  onChange={(e)=>this.setItem(e)} />
//       //  <button onClick={()=>this.addItem()}> add</button>

//       //  {this.state.todo.map((e,i)=>{
//       //   return <li>
//       //     {e}
//       //     <button onClick={()=>this.del(i)}>cxc</button>
//       //   </li>
//       //  })}
//       // </div>
//     )
//   }
// }

function App(){
  return(
    <div>
      {/* <AttendancePolicy/> */}
      <Attendance/>
    </div>
  )
}

export default App;

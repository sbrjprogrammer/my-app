import React,{useState} from 'react'
import { LoginComp } from './loginComp'

export function LoginForm(props) {
    const adminUser ={
        name:"shahzaib",
        email:"sbrj@gmail.com"
    }

    const [user, setuser] = useState({name:"",email:""})
    const [error, seterror] = useState("")


    const login=()=>{
        console.log('login')
    }
    const logout=()=>{
        console.log('logout')
    }

    return (
        <>
           {(user.email!=="")?(
               <div className='welcome'>
                   <h2>welcome to {user.name}</h2>
                   <button>logout</button>

               </div>
           ):(
               <LoginComp/>
           )} 
        </>
    )
}

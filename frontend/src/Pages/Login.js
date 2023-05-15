import '../Styles/index.css'
import Shoes from '../Images/Shoes.jpeg'

import {useState} from 'react'
import {useNavigate} from 'react-router'
import { useAuth } from './auth'
import Grocery from '../Images/Grocery.webp'


const Login=()=>{
    const navigate=useNavigate()
    const auth=useAuth()
    const [user,setUsers]=useState({
        Email:'',password:''
    })
  
    let name,value

    const handleOnchange=(e)=>{
        name=e.target.name
        value=e.target.value
        setUsers({...user,[name]:value})
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const res=await fetch('http://localhost:3001/Login', 
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify
            ({
            Email:user.Email,
            password:user.password,
            })
       })
       if(res.status===500)
       {
         alert('Wrong email or password')
         
       }
       else if(res.status===404)
       {
         alert('Data not found')
         
       }
       else
       {
        auth.login(user)
         navigate('/Products')
         setUsers({
          Email:'',password:''
         })
        }
       
  
    }
    return(
        
        <article className='fields'>
           
          <div>
            <img src={Grocery} className="img_grocery" alt="" />
          </div>

            <div className='login mx-3 '>
             <form className="needs-validation" onSubmit={handleSubmit} noValidate>
             
            <div className="form-group was-validated">
                <label className="form-label" htmlFor="email">Email address</label>
                <input value={user.Email} name="Email"   onChange={handleOnchange} className="form-control" type="email" id="email" required autoComplete='off'/>
                <div className="invalid-feedback">
                    Please enter your email address
                </div>
            </div>
            <div className="form-group was-validated">
                <label className="form-label" htmlFor="password">Password</label>
                <input value={user.password} name="password" onChange={handleOnchange} className="form-control" type="password" id="password" required autoComplete='off'/>
                <div className="invalid-feedback">
                    Please enter your password
                </div>
            </div>
            
            <input className="btn btn-primary w-100"  type="submit" value="SIGN IN" />
            
        </form>
        </div>
            
        </article>
    )
}

export default Login
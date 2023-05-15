import '../Styles/Register.css'
import { useState} from 'react'
import axios from 'axios'


const Register=()=>{
const [user,setuser]=useState({
First_Name:'',
Last_Name:'',
Email:'',
Contact_Number:'',
password:'',
confirm_password:''
})




let name,value
const handleOnchange=(e)=>{
name=e.target.name
value=e.target.value

setuser({...user,[name]:value})
}


const handleSubmit=(e)=>{
    e.preventDefault()
    if(user.password!==user.confirm_password)
    {
        alert("Confirm password do not match the password ")
    }
    else
    {
        axios.post('http://localhost:3001/Register',user)
        .then(res=>console.log(res))
        setuser({
        First_Name:'',
        Last_Name:'',
        Email:'',
        Contact_Number:'',
        password:'',
        confirm_password:''
    })
    }
   

}


    return(
        <>
      <section className='content_alignment'>
        
      <div className='login mx-3'>
             <form className="needs-validation" onSubmit={handleSubmit}>
            <div className="form-group was-validated">
                <label className="form-label" htmlFor="Firstname">Firstname</label>
                <input value={user.First_Name} name="First_Name"  onChange={handleOnchange} className="form-control" type="text" id="text" required autoComplete='off'/>
                <div className="invalid-feedback">
                    Please enter your Firstname
                </div>
            </div>
            <div className="form-group was-validated">
                <label className="form-label" htmlFor="Lastname">Lastname</label>
                <input value={user.Last_Name} name="Last_Name"  onChange={handleOnchange} className="form-control" type="text" id="Lastname" required autoComplete='off'/>
                <div className="invalid-feedback">
                    Please enter your Lastname
                </div>
            </div>
            <div className="form-group was-validated">
                <label className="form-label" htmlFor="email">Email address</label>
                <input value={user.Email} name="Email"  onChange={handleOnchange} className="form-control" type="email" id="email" required autoComplete='off'/>
                <div className="invalid-feedback">
                    Please enter your email address
                </div>
            </div>
            <div className="form-group was-validated">
                <label className="form-label" htmlFor="Contact_Number">Contact Number</label>
                <input value={user.Contact_Number} name="Contact_Number"  onChange={handleOnchange} className="form-control" type="tel" id="Contact_Number" required autoComplete='off'/>
                <div className="invalid-feedback">
                    Please enter your Mobile No.
                </div>
            </div>
            <div className="form-group was-validated">
                <label className="form-label" htmlFor="confirm_password">Password</label>
                <input value={user.confirm_password} name="confirm_password" onChange={handleOnchange} className="form-control" type="password" id="confirm_password" required autoComplete='off'/>
                <div className="invalid-feedback">
                    Please enter your Password
                </div>
            </div>
            <div className="form-group was-validated">
                <label className="form-label" htmlFor="password">Confirm Password</label>
                <input value={user.password} name="password"  onChange={handleOnchange} className="form-control" type="password" id="password" required autoComplete='off'/>
                <div className="invalid-feedback">
                Please Confirm your Password
                </div>
            </div>
            <span className='d-flex justify-content-center'>
            <a href="/Login">Already have an account</a>
            </span>
            
            
            
            <input className="btn btn-primary w-100"  type="submit" value="SIGN IN" />
        </form>
        </div>
        
        </section>    
        </>
    )
}

export default Register
import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const[values,setValues]= useState({
        email:'',
        password:''
    })
    
    const [formData, setFormData] = useState({});
    const Navigate = useNavigate();
    const[errors,setErrors]=useState({})
    // const handleInput = (event) =>{
    //     setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
    // }
    const handleInput = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
      };
    const handleSubmit =(event) =>{
        event.preventDefault();
        window.localStorage.setItem("isLogedin" , true);
           axios.post('http://localhost:3000/login',{
            email:formData.email,
            password:formData.password
           })
            .then(res=> {
                if(res.data === "Success"){
                    Navigate('/');
                }else{
                    alert("No record existed");
                }
            })
            .catch(err=>console.log(err));
        
    }
    return (

        <div>
            <div className="main">
                <div className="img">
                    <img src="/src/assets/img1.png" alt="" />
                </div>
                <div className="Form">
                
                    <form action="" onSubmit = {handleSubmit}>
                    <h2>Sign-in</h2>
                        <div>
                            <label htmlFor='email'>Email:</label>
                            <input type='email' placeholder='Enter Email' name='email' id='email'
                            onChange={handleInput} className='form-control rounded-0' />
                            {errors.email && <span className='text-danger'>{errors.email}</span>}
                        </div>
                        <div>
                            <label htmlFor='password'>Password:</label>
                            <input type='password' placeholder='Enter Password' name='password' id='password'
                            onChange={handleInput} className= 'form-control rounded-0' />
                            {errors.password && <span className='text-danger'>{errors.password}</span>}
                        </div>
                       <button style={{color:'white'}} type='submit' className='btn btn-success w-100 rounded-0' id='btn1'>Log in</button>
                       <p>You are agree to your tearms and policies</p>
                        <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                       
                       
                
                       
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login
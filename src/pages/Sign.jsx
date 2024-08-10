import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Login.scss'
function Sign() {

    // const [values, setValues] = useState({
    //     name: '',
    //     email: '',
    //     password: ''
    // })
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    // const handleInput = (event) => {
    //     setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    // } 

    const handleInput = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // setErrors(validation(values));
        // if (errors.name !== "" && errors.email !== "" && errors.password !== "") 
        if(true){
            axios.post('http://localhost:3000/sign', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            })
                .then(res => {
                    navigate('/login');
                })
                .catch(err => console.log(err));
        }
    }
    return (
        <div>
            <div className="main">
                <div className="img">
                <img className='openimg' src="/src/assets/online.png" alt="" />
                <img className='hideimg' src="/src/assets/online2.png" alt="" />
                </div>
                <div className="Form">

                    <form action="" onSubmit={handleSubmit}>
                        <h2>Sign Up</h2>
                        <div>
                            <label htmlFor='name'>Name</label>
                            <input type='text' placeholder='Enter Name' name='name' id='name'
                                onChange={handleInput} className='form-control rounded-0' />
                            {errors.name && <span className='text-danger'>{errors.name}</span>}
                        </div>
                        <div>
                            <label htmlFor='email'>Email:</label>
                            <input type='email' placeholder='Enter Email' name='email' id='email'
                                onChange={handleInput} className='form-control rounded-0' />
                            {errors.email && <span className='text-danger'>{errors.email}</span>}
                        </div>
                        <div>
                            <label htmlFor='password'>Password:</label>
                            <input type='password' placeholder='Enter Password' name='password' id='password'
                                onChange={handleInput} className='form-control rounded-0' />
                            {errors.password && <span className='text-danger'>{errors.password}</span>}
                        </div>
                        <button type='submit' style={{ color: 'white' }} className='btn btn-sucess w-100 rounded-0'>Sign up</button>
                        <p>You are agree to your tearms and policies</p>
                        <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sign
import React, {useState} from 'react';
import {useAuth} from '../context/authContext';
//import {auth} from "firebase/auth";
import {auth} from '../Firebase';



export const Register = () => {


  const [data, setData] = useState({
    name: '',
    email:'',
    password:'',
  });

  const {signup} = useAuth();

  const handleChange = ({target: {name, value}}) => {
    setData({...data, [name]: value});
    
  }

  const handleSubmit = e => {
    e.preventDefault()
    //console.log(data);
    signup(data.name, data.email, data.password);
  }


  return (
    <section>
        <h3>Create an Account</h3>
          <form action="" className='form' onSubmit={handleSubmit}>
            
            <div className='input_container'>
                <label htmlFor='email'>Email</label>
                <input type="text" name='email'  onChange={handleChange}/>
            </div>
            <div className='input_container'>
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' onChange={handleChange}/>
            </div>

            <div className='btn_container'>
              <button className='btn'>Register</button>
            </div>
          </form>
    </section>
  )
}

export default Register;

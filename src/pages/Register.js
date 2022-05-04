import React, {useState} from 'react'



export const Register = () => {
  const [data,setData] = useState({
    name: '',
    email:'',
    password:'',
    error:null,
    loading:false,
  })

  const {name, email, password, error, loading} =data;
  const handleChange = e = {
    setData({...data, [e.target.name]: })
  }
  return (
    <section>
        <h3>Create an Account</h3>
          <form action="" className='form'>
            <div className='input_container'>
                <label htmlFor='name'>Name</label>
                <input type="text" name='name' value={name} onChange={handleChange}/>
            </div>
            <div className='input_container'>
                <label htmlFor='email'>Email</label>
                <input type="text" name='email' value={email} onChange={handleChange}/>
            </div>
            <div className='input_container'>
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' value={password} onChange={handleChange}/>
            </div>
            <div className='btn_container'>
              <button className='btn'>Register</button>
            </div>
          </form>
    </section>
  )
}

export default Register;

import React from 'react'

export const Register = () => {
  return (
    <section>
        <h3>Create an account</h3>
          <form action="" className='form'>
            <div className='input_container'>
                <label htmlFor='name'>Name</label>
                <input type="text" name='name'/>
            </div>
            <div className='input_container'>
                <label htmlFor='email'>email</label>
                <input type="text" name='email'/>
            </div>
            <div className='input_container'>
                <label htmlFor='password'>password</label>
                <input type="password" name='password'/>
            </div>
          </form>
    </section>
  )
}

export default Register;

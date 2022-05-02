import React from 'react'
import {Route} from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
        <h3>
        <Route path="/messenger" element ={<Messenger/>}/>
        </h3>
        <div>
            <Route></Route>
            <Route></Route>
            

        </div>
        <div>

        </div>
    </nav>
  )
}

export default Navbar

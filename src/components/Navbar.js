import React from "react";
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
        <h3>
             <Link to="/messenger">Messenger</Link>
        </h3>

        <div>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/">Home</Link>
        </div>
    </nav>
  )
}

export default Navbar

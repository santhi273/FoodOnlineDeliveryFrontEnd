import React from 'react'

import { NavLink,Link} from "react-router-dom";
const Navbar=()=>
{
  
    return (
        <nav className="navbar navbar-expand-md navbar-white bg-dark ">
         <div className="container">   
  <Link  className="navbar-brand" to="/">HungerOut</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
      <li class="nav-item">
        <NavLink className="nav-link" exact to="/">Home </NavLink>
      </li>
  
      
    </ul>
  </div>
  </div>
</nav>
    )
}
export default Navbar;
import React, { useState } from "react"
import "./header.css"
import {NavLink} from "react-router-dom";

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/Logo3.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              <li>
                <NavLink to="/">home</NavLink>
              </li>
              <li>
                <NavLink to="/about">about</NavLink>
              </li>
              <li>
                <NavLink to="/services">Our services</NavLink>
              </li>
              <li>
                <NavLink to="/client">Client</NavLink>
              </li>
              <li>
                <NavLink to="/project">Personal Project</NavLink>
              </li>
             
            </ul>
          </div>
        

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
              

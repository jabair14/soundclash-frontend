import { Nav, Link } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

function NavBar({ currentUser }) {

    // console.log(currentUser.name)
    
    // useEffect

    
    return (
        <>
  <Nav className="justify-content-center" >
    <Nav.Item>
      <NavLink to='/'> Logout | </NavLink>
    </Nav.Item>
   
    <Nav.Item>
      <NavLink to='/createpack'> Create Pack | </NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink to="/packs"> Sounds |</NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink to={`/users/${currentUser.id}`} >
        Profile
      </NavLink>
    </Nav.Item> 
  </Nav>

</>
      

    )
}

export default NavBar;
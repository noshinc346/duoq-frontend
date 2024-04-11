import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <>
  <NavLink className="authlink" to ="/profile">Profile</NavLink> 
  <NavLink className="authlink" to ="/sign-out">Sign Out</NavLink>
  </>
)
  

const unauthenticatedOptions = (
  <>
  <button className="login-button"><NavLink className="link" to="/login">Login</NavLink></button>
  </> 
)

const alwaysOptions = (
  <>
  <NavLink className="logo-name" to="/">DuoQ</NavLink>
  </>
)

function Nav({ user }) {
  return (
    <div className="nav">
      <nav className="navbar">
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}

        {/* <p className="logo">DuoQ</p>
        <button><NavLink to="/" className="login-button">Login</NavLink></button> */}
      </nav>

    </div>
  )
}

export default Nav
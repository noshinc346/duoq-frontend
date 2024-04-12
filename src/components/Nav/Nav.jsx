import React from 'react'
import './Nav.css'
import { NavLink, useLocation } from 'react-router-dom'

const authenticatedOptions = (
  <>
  <NavLink className="authlink" to="/profile">Profile</NavLink> 
  <NavLink className="authlink" to="/sign-out">Sign Out</NavLink>
  </>
)
  
const unauthenticatedOptions = (
  <>
  <NavLink className="login-link" to="/login">
    <button className="login-button">
      Login
    </button>
  </NavLink>
  </> 
)

const alwaysOptions = (
  <>
  <NavLink className="logo-name" to="/">DuoQ</NavLink>
  </>
)

function Nav({ user }) {

  const location = useLocation();

  const isLoginPage = location.pathname === '/login';

  return (
    <div className="nav">
      <nav className="navbar">
        {alwaysOptions}
        {user ? authenticatedOptions : !isLoginPage && unauthenticatedOptions}
      </nav>

    </div>
  )
}

export default Nav
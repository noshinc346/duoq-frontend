// import React from 'react'
// import './Nav.css'
// import { NavLink, useLocation } from 'react-router-dom'

// const authenticatedOptions = (
//   <>
//   <NavLink className="authlink" to="/profile">Profile</NavLink>
//   <NavLink className="authlink" to="/matched-page">Matches</NavLink>
//   <NavLink className="authlink" to="/matching-page">Find Matches</NavLink> 
//   <NavLink className="authlink" to="/sign-out">Sign Out</NavLink>
//   </>
// )
  
// const unauthenticatedOptions = (
//   <>
//   <NavLink className="login-link" to="/login">
//     <button className="login-button">
//       Login
//     </button>
//   </NavLink>
//   </> 
// )

// const alwaysOptions = (
//   <>
//   <NavLink className="logo-name" to="/">DuoQ</NavLink>
//   </>
// )

// function Nav({ user }) {

//   const location = useLocation();

//   const isLoginPage = location.pathname === '/login';

//   return (
//     <div className="nav">
//       <nav className="navbar">
//         {alwaysOptions}
//         {user ? authenticatedOptions : !isLoginPage && unauthenticatedOptions}
//       </nav>

//     </div>
//   )
// }

// export default Nav

import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Nav.css';

function Nav({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="nav">
      <nav className="navbar">
        <NavLink className="logo-name" to="/">DuoQ</NavLink>
        {user && (
          <div onClick={toggleDropdown} className="welcome">
            Welcome <span className={`arrow ${isOpen ? 'up' : 'down'}`}>▼</span>
            {isOpen && (
              <div className="dropdown">
                <NavLink className="authlink" to="/profile">Profile</NavLink> 
                <NavLink className="authlink" to="/matched-page">Matches</NavLink>
                <NavLink className="authlink" to="/matching-page">Find Matches</NavLink>
                <NavLink className="authlink" to="/sign-out">Sign Out</NavLink>
              </div>
            )}
          </div>
        )}
        {!user && !isLoginPage && (
          <NavLink className="login-link" to="/login">
            <button className="login-button">Login</button>
          </NavLink>
        )}
      </nav>
    </div>
  );
}

export default Nav;
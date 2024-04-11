import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <NavLink className="about-link" to="/about">About Us</NavLink>
    </div>
  )
}

export default Footer
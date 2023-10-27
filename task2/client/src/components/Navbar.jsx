import React from 'react'
import ToggleSwitch from './toggleSwitch/ToggleSwitch.jsx'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
    <a className="navbar-brand" href="#">
    <img src="/assets/hogwarts.png" className="navbarLogo" alt="hogwarts letter" />
    </a>
    <div className="ml-auto">
      <ToggleSwitch/>
    </div>
  </nav>
  )
}

export default Navbar
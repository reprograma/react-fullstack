import React from 'react'
import { Link as PageLink } from 'react-router-dom'
import logo from './logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <PageLink to="/">
        <img className="navbar__logo" src={logo} alt="Logo" />
      </PageLink>

      {/* Menu */}
    </nav>
  )
}

export default Navbar
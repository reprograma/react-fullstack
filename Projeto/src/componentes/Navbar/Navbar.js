import React from 'react'
import { Link as PageLink } from 'react-router-dom'
import Menu from './Menu/Menu'
import logo from './logo.png'
import './Navbar.css'

function Navbar(props) {
  return (
    <header className="navbar">
      <PageLink to="/">
        <img className="navbar__logo" src={logo} alt="Logo" />
      </PageLink>

      <Menu usuario={props.usuario} onSairClick={props.onSairClick} />
    </header>
  )
}

export default Navbar
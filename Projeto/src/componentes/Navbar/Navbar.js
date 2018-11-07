import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { deslogaUsuario } from '../../redux/actions'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'
import logo from './logo.png'
import './Navbar.css'

function Navbar(props) {
  return (
    <header className="navbar">
      <Link to="/">
        <img className="navbar__logo" src={logo} alt="Logo" />
      </Link>

      <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} />
    </header>
  )
}

export default withRouter(
  connect(
    ({ usuario }) => ({ usuario }), 
    { deslogaUsuario }
  )(Navbar)
)
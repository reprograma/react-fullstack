import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'
import logo from './logo.png'
import './Navbar.css'

// <Navbar usuario={usuario} deslogaUsuario={deslogaUsuario} />
// const props = { usuario: usuario, deslogaUsuario: deslogaUsuario }
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

function passaEstadoNoProps(state) {
  return {
    usuario: state.usuario
  }
}

function passaAcoesNoProps(dispatch) {
  return {
    deslogaUsuario: () => {
      const acao = {
        type: 'DESLOGA_USUARIO'
      }
      
      dispatch(acao)
    }
  }
}

const conectaNaStore = connect(
  passaEstadoNoProps,
  passaAcoesNoProps
)

const NavbarConectado = conectaNaStore(Navbar)

export default NavbarConectado
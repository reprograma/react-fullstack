import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

/*
1) O componente pode mudar de estado? Sim // Class
2) O que muda? setState({ aberto: true }) ou  // setState({aberto: false})
3) Qual o estado inicial? state = { aberto: false } // constructor
4) O que faz ele mudar?
// function onClick no botao menu ou nas opções do menu
*/
class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = { aberto: false }
  }

  abreOuFechaOpcoes = () => {
    this.setState(estadoAnterior => ({
      aberto: !estadoAnterior.aberto
    }))
  }

  deslogaUsuario = () => {
    this.props.onSairClick()
    this.abreOuFechaOpcoes()
  }

  render() {
    let classesBotao = "navbar-menu__botao"
    let classesOpcoes = "navbar-menu__opcoes"

    if (this.state.aberto) {
      classesBotao += " navbar-menu__botao--aberto"
      classesOpcoes += " navbar-menu__opcoes--aberto"
    }

    return (
      <nav className="navbar-menu">
        <a className={classesBotao} onClick={this.abreOuFechaOpcoes}>
          Menu
        </a>

        <ul className={classesOpcoes}>
          <li>
            <NavLink to="/quem-somos" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaOpcoes}>
              Quem somos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaOpcoes}>
              Contato
            </NavLink>
          </li>
          <li>
            {this.props.usuario ? (
              <NavLink to="/login" activeClassName="navbar-menu__opcoes--ativo" onClick={this.deslogaUsuario}>
                Sair
              </NavLink>
            ) : (
              <NavLink to="/login" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaOpcoes}>
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    )
  }
}

export default Menu
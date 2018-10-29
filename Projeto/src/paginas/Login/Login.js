import React, { Component } from 'react'
import Formulario from '../../componentes/Formulario/Formulario'
import Link from '../../componentes/Link/Link'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    
    this.email = { erro: true }
    this.senha = { erro: true }
    
    this.state = { desabilitado: true }
  }

  desabilita = (nome, erro) => {
    this[nome].erro = erro

    if (this.email.erro || this.senha.erro) {
      this.setState({ desabilitado: true })
    } else {
      this.setState({ desabilitado: false })
    }
  }

  render() {
      return (
        <main className="login">
        <h1>Login</h1>
        <p>Entre com seu email e senha.</p>
        
        <Formulario>
          <Formulario.Legenda htmlFor="email">Email:</Formulario.Legenda>
          <Formulario.Campo 
            id="email" 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            onChange={this.desabilita}
          />
          
          <Formulario.Legenda htmlFor="senha">Senha:</Formulario.Legenda>
          <Formulario.Campo 
            id="senha" 
            type="password" 
            name="senha" 
            placeholder="Senha" 
            required 
            minLength={6} 
            onChange={this.desabilita}
          />
          
          <Formulario.Botao disabled={this.state.desabilitado}>
            Enviar
          </Formulario.Botao>
        </Formulario>

        <Link url="/conta">Criar uma conta</Link>
      </main>
    )
  }
}

export default Login
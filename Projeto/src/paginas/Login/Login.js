import React, { Component } from 'react'
import Formulario from '../../componentes/Formulario/Formulario'
import Link from '../../componentes/Link/Link'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    
    this.state = { desabilitado: true }

    this.emailRef = React.createRef()
    this.senhaRef = React.createRef()
  }

  desabilita = () => {
    const email = this.emailRef.current
    const senha = this.senhaRef.current

    if (email.temErro() || senha.temErro()) {
      this.setState({ desabilitado: true })
    } else {
      this.setState({ desabilitado: false })
    }
  }

  logaUsuario = (evento) => {
    evento.preventDefault()

    const email = this.emailRef.current
    const senha = this.senhaRef.current
    
    const dados = {
      email: email.getValor(),
      senha: senha.getValor()
    }

    // chamar api de verdade
    this.props.onEnviarClick(dados)

    this.props.historico.push('/')
  }

  render() {
      return (
        <main className="login">
        <h1>Login</h1>
        <p>Entre com seu email e senha.</p>
        
        <Formulario onSubmit={this.logaUsuario}>
          <Formulario.Legenda htmlFor="email">Email:</Formulario.Legenda>
          <Formulario.Campo 
            ref={this.emailRef}
            id="email" 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            onChange={this.desabilita}
          />
          
          <Formulario.Legenda htmlFor="senha">Senha:</Formulario.Legenda>
          <Formulario.Campo 
            ref={this.senhaRef}
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
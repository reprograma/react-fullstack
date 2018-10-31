import React, { Component } from 'react'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Login.css'


class Login extends Component {
  constructor(props) {
    super(props)

    this.emailRef = React.createRef() // { current: null }
    this.senhaRef = React.createRef()
    this.state = { desabilitado: true }
  }

  habilitaOuDesabilita = () => {
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current

    if (campoEmail.temErro() || campoSenha.temErro()) {
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
        
        <Legenda htmlFor="email">Email:</Legenda>
        <Campo 
          ref={this.emailRef}
          id="email" 
          type="email" 
          name="email" 
          placeholder="Email" 
          required 
          onChange={this.habilitaOuDesabilita} 
        />
        
        <Legenda htmlFor="senha">Senha:</Legenda>
        <Campo 
          ref={this.senhaRef}
          id="senha" 
          type="password" 
          name="senha"
          placeholder="Senha" 
          required 
          minLength={6}
          onChange={this.habilitaOuDesabilita}
        />
        
        <Botao desabilitado={this.state.desabilitado}>
          Enviar
        </Botao>

        <Link url="/conta">Criar uma conta</Link>
      </main>
    )
  }
}

export default Login
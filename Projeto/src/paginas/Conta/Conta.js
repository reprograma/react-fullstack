import React, { Component } from 'react'
import Formulario from '../../componentes/Formulario/Formulario'
import Link from '../../componentes/Link/Link'
import './Conta.css'


class Conta extends Component {
  constructor(props) {
    super(props)
    
    this.state = { desabilitado: true }

    this.nomeRef = React.createRef()
    this.telefoneRef = React.createRef()
    this.emailRef = React.createRef()
    this.senhaRef = React.createRef()
  }

  desabilita = () => {
    const nome = this.nomeRef.current
    const telefone = this.telefoneRef.current
    const email = this.emailRef.current
    const senha = this.senhaRef.current

    if (nome.temErro() || telefone.temErro() || email.temErro() || senha.temErro()) {
      this.setState({ desabilitado: true })
    } else {
      this.setState({ desabilitado: false })
    }
  }

  render() {
    return (
      <main className="conta">
        <h1>Conta</h1>
        <p>Envie o formulário para criar uma conta!</p>
        
        <Formulario>
          <Formulario.Legenda htmlFor="nome">Nome:</Formulario.Legenda>
          <Formulario.Campo 
            ref={this.nomeRef}
            id="nome" 
            type="text" 
            name="nome" 
            placeholder="Nome" 
            required 
            minLength={10} 
            onChange={this.desabilita} 
          />
          
          <Formulario.Legenda htmlFor="telefone">Telefone:</Formulario.Legenda>
          <Formulario.Campo 
            ref={this.telefoneRef}
            id="telefone" 
            type="tel" 
            name="telefone" 
            placeholder="Telefone" 
            required 
            onChange={this.desabilita} 
          />
          
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
  
        <Link url="/login">Fazer login</Link>
      </main>
    )
  }
}

export default Conta
import React, { Component } from 'react'
import Formulario from '../../componentes/Formulario/Formulario'
import Link from '../../componentes/Link/Link'
import './Conta.css'


class Conta extends Component {
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
      <main className="conta">
        <h1>Conta</h1>
        <p>Envie o formulário para criar uma conta!</p>
        
        <Formulario>
          <Formulario.Legenda htmlFor="nome">Nome:</Formulario.Legenda>
          <Formulario.Campo 
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
            id="telefone" 
            type="tel" 
            name="telefone" 
            placeholder="Telefone" 
            required 
            onChange={this.desabilita} 
          />
          
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
  
        <Link url="/login">Fazer login</Link>
      </main>
    )
  }
}

export default Conta
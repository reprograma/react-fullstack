import React, { Component } from 'react'
import './Campo.css'

class Campo extends Component {
  constructor(props) {
    super(props)
    this.valor = ''
    this.state = { modificado: false, erro: '' }
  }

  getValor() {
    return this.valor;
  }

  temErro = () => {
    if (!this.state.modificado || this.state.erro) {
      return true
    } else {
      return false
    }
  }

  valida = (evento) => {
    const input = evento.target
    const { value, type } = input

    this.valor = value

    const { required, minLength } = this.props
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let mensagem = ''

    if (required && value.trim() === '') {
      mensagem = 'Campo obrigatório'
    } else if (minLength && value.length < minLength) {
      mensagem = `Digite pelo menos ${minLength} caracteres`
    } else if (type === 'email' && !regex.test(value)) {
      mensagem = 'Valor inválido'
    }

    this.setState(
      { modificado: true, erro: mensagem }, 
      this.props.onChange
    )
  }

  render() {
    return (
      <div>
        <input 
          id={this.props.id}
          className="campo"
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.valida}
          onBlur={this.valida}
        />

        <p className="campo__erro">{this.state.erro}</p>
      </div>
    )
  }
}

export default Campo
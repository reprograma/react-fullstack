import React, { Component } from 'react'
import './Campo.css'

class Campo extends Component {
  constructor(props) {
    super(props)
    this.input = { value: '' }
    this.state = { erro: null }
  }

  getValor() {
    return this.input.value;
  }

  temErro = () => {
    if (this.state.erro === null || this.state.erro !== '') {
      return true
    } else {
      return false
    }
  }

  valida = (evento) => {
    this.input = evento.target

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let mensagem = ''

    if (this.props.required && this.input.value.trim() === '') {
      mensagem = 'Campo obrigatório'
    } else if (this.props.minLength && this.input.value.length < this.props.minLength) {
      mensagem = `Digite pelo menos ${this.props.minLength} caracteres`
    } else if (this.props.type === 'email' && !regex.test(this.input.value)) {
      mensagem = 'Valor inválido'
    }

    this.setState({ erro: mensagem }, this.props.onChange)
  }

  render() {
    let classesDoCampo = 'campo'

    if (this.props.className) {
      classesDoCampo += ` ${this.props.className}`
    }

    return (
      <div>
        <input 
          id={this.props.id}
          className={classesDoCampo}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          autoComplete="off"
          onChange={this.valida}
          onBlur={this.valida}
        />

        {this.state.erro && (
          <p className="campo__erro">{this.state.erro}</p>
        )}
      </div>
    )
  }
}

export default Campo
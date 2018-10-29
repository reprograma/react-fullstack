import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Campo.css'


class Campo extends Component {
  constructor(props) {
    super(props)
    this.valor = ''
    this.state = { erro: '' }
  }

  getValor() {
    return this.valor
  }

  temErro() {
    return this.state.erro ? true : false
  }

  valida = (evento) => {
    const { required, minLength, onChange } = this.props

    const tipo = evento.target.type
    const valor = evento.target.value

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    let mensagem = ''
    
    if (required && valor.trim() === '') {
      mensagem = 'Campo obrigatório'
    } else if (minLength && valor.length < minLength) {
      mensagem = `Digite pelo menos ${minLength} caracteres`
    } else if (tipo === 'email' && !regex.test(valor)) {
      mensagem = 'Valor inválido'
    }

    this.valor = valor
    this.setState({ erro: mensagem }, onChange)
  }

  render() {
    return (
      <>
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
      </>
    )
  }
}

Campo.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default Campo
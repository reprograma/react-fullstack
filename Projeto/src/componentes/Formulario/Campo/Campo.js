import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './Campo.css'


class Campo extends Component {
  constructor(props) {
    super(props)
    this.state = { erro: '' }
  }

  

  valida = (evento) => {
    const { required, minLength, onChange } = this.props
    const { type, name, value } = evento.target
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let mensagem = ''
    
    if (required && value.trim() === '') {
      mensagem = 'Campo obrigatório'
    } else if (minLength && value.length < minLength) {
      mensagem = `Digite pelo menos ${minLength} caracteres`
    } else if (type === 'email' && !regex.test(value)) {
      mensagem = 'Valor inválido'
    }

    this.setState({ erro: mensagem })

    const erro = mensagem ? true : false
    onChange(name, value, erro)
  }

  render() {
    return (
      <Fragment>
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
      </Fragment>
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
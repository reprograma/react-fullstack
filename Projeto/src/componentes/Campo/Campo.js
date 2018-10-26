import React from 'react'
import './Campo.css'

class Campo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      erro: ''
    }
  }

  valida = (evento) => {
    const alvo = evento.target

    if (this.props.obrigatorio && alvo.value.trim() === '') {
      const state = {
        erro: 'Campo obrigatorio'
      }

      this.setState(state)
    }
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
        />

        <p className="grupo__erro">
          {this.state.erro}
        </p>
      </div>
    )
  }
}

export default Campo
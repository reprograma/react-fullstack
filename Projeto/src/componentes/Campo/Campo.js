import React from 'react'
import './Campo.css'

/*
1) O componente pode mudar de estado? Sim // Class
2) Qual o estado inicial? state = { erro: '' } // constructor
3) O que muda? setState({ erro: '' }) ou  // setState({erro: 'Campo obrigatório'})
4) O que faz ele mudar?
// function onChange pra verificar se devo ou não mostrar uma mensagem de erro
if condição mostra erro
- Email: obrigatorio, pelo menos 10 carateres
- Senha: obrigatorio, pelo menos 6 caracteres
*/
class Campo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { erro: ''}
  }

  valida = (evento) => {
    const input = evento.target
    
    if (this.props.required && input.value.trim() === '') {
      this.setState({ erro: 'Campo obrigatório'})
    } else if (this.props.minLength && input.value.length < this.props.minLength) {
      this.setState({ erro: `Digite pelo menos ${this.props.minLength} caracteres`})
    } else if (this.props.pattern && !this.props.pattern.test(input.value)) {
      this.setState({ erro: 'Valor inválido' })
    } else {
      this.setState({ erro: ''})
    }
  }

  render() {
    console.log('Quero ver se o render foi chamado')
    console.log(`this.props do campo ${this.props.name}`, this.props)
    
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

        <p className="campo__erro">{this.state.erro}</p>
      </div>
    )
  }
}

export default Campo
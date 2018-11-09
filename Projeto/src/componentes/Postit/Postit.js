import React, { Component } from 'react'
import { cadastraPostit } from '../../redux/actions'
import { connect } from 'react-redux'
import './Postit.css'

class Postit extends Component {
  constructor(props) {
    super(props)

  }

  cadastraOuAlteraPostit = (evento) => {
    evento.preventDefault()

    const form = evento.target

    const dados = {
      id: `aa2b3293-9fb0-41b5-a97f-3d238615604${Math.random(100)}`,
      titulo: form.titulo.value,
      texto: form.texto.value
    }
    
    this.props.cadastraPostit(dados)

    form.reset()
  }

  render() {
    const cadastrando = !this.props.id

    return (
      <form className="postit" onSubmit={this.cadastraOuAlteraPostit}>
        <input
          className="postit__titulo"
          type="text"
          name="titulo"
          placeholder="Título"
          autoComplete="off"
          defaultValue={this.props.titulo}
        />
        <textarea
          className="postit__texto"
          name="texto"
          placeholder="Digite um texto..."
          rows={5}
          autoComplete="off"
          defaultValue={this.props.texto}
        />
        
        <button className="postit__botao-concluir">
          Concluído
        </button>
      </form>
    )
  }
}

export default connect(
  null, 
  { cadastraPostit }
)(Postit)
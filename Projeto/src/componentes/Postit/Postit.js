import React, { Component } from 'react'
import { cadastraPostit, alteraPostit } from '../../redux/actions'
import { connect } from 'react-redux' 
import './Postit.css'

class Postit extends Component {
  cadastraOuEditaPostit = (evento) => {
    evento.preventDefault()

    const form = evento.target

    let dados = {
      titulo: form.titulo.value,
      texto: form.texto.value
    }

    if (this.props.id) {      
      dados.id = this.props.id
      this.props.alteraPostit(dados)
    } else {
      this.props.cadastraPostit(dados)
      form.reset()
    }
  }

  render() {
    const cadastranto = !this.props.id
    
    return (
      <form className="postit" onSubmit={this.cadastraOuEditaPostit}>
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
  { cadastraPostit, alteraPostit }
)(Postit)
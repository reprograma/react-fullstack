import React, { Component } from 'react'
import { cadastraPostit, alteraPostit, removePostit } from '../../redux/actions'
import { connect } from 'react-redux'
import { MdDelete } from 'react-icons/md'
import './Postit.css'

class Postit extends Component {
  constructor(props) {
    super(props)
    this.state = { editando: false }
  }

  cadastraOuEditaPostit = (evento) => {
    evento.preventDefault()

    const cadastrando = !this.props.id
    const form = evento.target
    let dados = {
      titulo: form.titulo.value,
      texto: form.texto.value
    }
  
    if (cadastrando) {      
      this.props.cadastraPostit(dados)
      form.reset()
    } else {
      dados.id = this.props.id
      this.props.alteraPostit(dados)
      this.setState({ editando: false })
    }
  }

  removePostit = (evento) => {
    evento.stopPropagation()
    this.props.removePostit(this.props.id)
  }

  habilitaEdicao = () => {
    this.setState({ editando: true })
  }

  render() {
    const cadastrando = !this.props.id
    
    return (
      <form className="postit" onClick={this.habilitaEdicao} onSubmit={this.cadastraOuEditaPostit}>
        {!cadastrando && this.state.editando && (
          <button type="button" className="postit__botao-remover" onClick={this.removePostit}>
            <MdDelete />
          </button>
        )}
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
        {(cadastrando || this.state.editando) && (
          <button className="postit__botao-concluir">
            Concluído
          </button>
        )}
      </form>
    )
  }
}

export default connect(
  null,
  { cadastraPostit, alteraPostit, removePostit }
)(Postit)
import React, { Component } from 'react'
import { MdDelete } from 'react-icons/md'
import './Postit.css'

class Postit extends Component {
  constructor(props) {
    super(props)

    this.titulo = props.titulo
    this.texto = props.texto

    this.state = { editando: false }
  }

  alteraTitulo = (evento) => {
    this.titulo = evento.target.value
  }

  alteraTexto = (evento) => {
    this.texto = evento.target.value
  }

  ativaEditando = (evento) => {
    this.setState({ editando: true })
  }

  cadastraOuEdita = (evento) => {
    evento.preventDefault()

    const cadastrando = this.props.id ? false : true

    if (cadastrando) {
      this.props.onConcluir(this.titulo, this.texto)
      evento.target.reset()
    } else {
      this.props.onConcluir(this.props.id, this.titulo, this.texto)
    }

    this.setState({ editando: false })
  }

  deleta = (evento) => {
    evento.stopPropagation()

    this.props.onExcluir(this.props.id)

    this.setState({ editando: false })
  }

  render() {
    const cadastrando = this.props.id ? false : true

    return (
      <form className="postit" onClick={this.ativaEditando} onSubmit={this.cadastraOuEdita}>
        {!cadastrando && this.state.editando && (
          <button className="postit__botao-remover" type="button" onClick={this.deleta}>
            <MdDelete />
          </button>
        )}
        <input 
          className="postit__titulo" 
          type="text" 
          name="titulo" 
          defaultValue={this.titulo} 
          placeholder="Título..." 
          area-label="Título" 
          onChange={this.alteraTitulo}
        />
        <textarea 
          className="postit__texto" 
          name="texto" 
          defaultValue={this.texto} 
          placeholder="Digite o texto..." 
          area-label="Texto"
          onChange={this.alteraTexto}
        />
        {(cadastrando || this.state.editando) && (
          <button className="postit__botao-concluir" type="submit">
            Concluído
          </button>
        )}
      </form>
    )
  }
}

export default Postit
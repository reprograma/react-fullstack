import React, { Component } from 'react'
import './Postit.css'

/*	
1) O componente pode mudar de estado? Sim // Class	
2) O que muda? setState({ editando: false }) ou  // setState({ editando: true })	
3) Qual o estado inicial? state = { editando: false } // constructor	
4) O que faz ele mudar?	
// function onClick em cima do postit para editar	
*/

class Postit extends Component {
  render() {
    return (
      <form className="postit">
        <input className="postit__titulo" type="text" name="titulo" placeholder="Título..." area-label="Título" />
        <textarea className="postit__texto" name="texto" placeholder="Digite o texto..." area-label="Texto" />
        <button className="postit__botao-concluir">
          Concluído
        </button>
      </form>
    )
  }
}

export default Postit
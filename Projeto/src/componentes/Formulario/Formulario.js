import React from 'react'
import Botao from '../Botao/Botao'

function Formulario(props) {
  return (
    <form onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}

Formulario.Botao = Botao

export default Formulario
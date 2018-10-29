import React from 'react'
import PropTypes from 'prop-types'
import Legenda from './Legenda/Legenda'
import Campo from './Campo/Campo'
import Botao from './Botao/Botao'


function Formulario(props) {
  return (
    <form onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}

Formulario.propTypes = {
  children: PropTypes.node.isRequired
}

Formulario.Legenda = Legenda
Formulario.Campo = Campo
Formulario.Botao = Botao

export default Formulario
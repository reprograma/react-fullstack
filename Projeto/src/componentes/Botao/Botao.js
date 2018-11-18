import React from 'react'
import PropTypes from 'prop-types'
import './Botao.css'

function Botao(props) {
  let classes = "botao"

  if (props.desabilitado) {
    classes += " botao--desabilitado"
  }
  
  return (
    <button className={classes} disabled={props.desabilitado}>
      {props.children}
    </button>
  )
}

Botao.propTypes = {
  desabilitado: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Botao
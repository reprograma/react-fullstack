import React from 'react'
import PropTypes from 'prop-types'
import './Botao.css'

function Botao(props) {
  let classes = "botao"

  if (props.disabled) {
    classes += " botao--desabilitado"
  }
  
  return (
    <button className={classes}>
      {props.children}
    </button>
  )
}

Botao.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Botao
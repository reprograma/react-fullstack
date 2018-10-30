import React from 'react'
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

export default Botao
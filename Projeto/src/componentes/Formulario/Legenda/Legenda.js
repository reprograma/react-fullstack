import React from 'react'
import PropTypes from 'prop-types'
import './Legenda.css'

function Legenda(props) {
  return (
    <label className="legenda" htmlFor={props.htmlFor}>
      {props.children}
    </label>
  )
}

Legenda.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Legenda
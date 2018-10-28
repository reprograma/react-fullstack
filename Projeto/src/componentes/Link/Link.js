import React from 'react'
import PropTypes from 'prop-types'
import './Link.css'

function Link(props) {
  return (
    <a className="link" href={props.url}>
      {props.children}
    </a>
  )
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Link
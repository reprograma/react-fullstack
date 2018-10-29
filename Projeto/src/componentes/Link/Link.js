import React from 'react'
import PropTypes from 'prop-types'
import { Link as PageLink } from 'react-router-dom'
import './Link.css'

function Link(props) {
  return (
    <PageLink className="link" to={props.url}>
      {props.children}
    </PageLink>
  )
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Link
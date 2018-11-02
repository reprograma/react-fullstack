import React from 'react'
import { Link as PaginaLink} from 'react-router-dom'
import './Link.css'

function Link(props) {
  return (
    <PaginaLink className="link" to={props.url}>
      {props.children}
    </PaginaLink>
  )
}

export default Link
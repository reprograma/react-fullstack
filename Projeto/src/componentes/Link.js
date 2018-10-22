import React from 'react'

function Link(props) {
  return (<a className="link" href={props.href}>
    {props.children}
  </a>);
}

export default Link
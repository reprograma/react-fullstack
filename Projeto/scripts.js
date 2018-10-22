function Link(props) {
  return (
    <a className="link" href={props.href}>
      {props.children}
    </a>
  )
}

function Formulario() {
  return (
    <form>
     <Link href="/">Criar umaconta</Link>
     <Link href="/login">Fazer login</Link>
    </form>
  )
}

ReactDOM.render(<Formulario />, document.getElementById('projeto'))

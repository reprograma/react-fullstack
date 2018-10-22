import React from 'react'
import Link from './Link'

function Formulario() {
  return (<form>
    <Link href="/">Criar umaconta</Link>
    <Link href="/login">Fazer login</Link>
  </form>);
}

export default Formulario
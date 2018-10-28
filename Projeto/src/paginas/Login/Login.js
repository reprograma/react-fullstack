import React from 'react'
import Formulario from '../../componentes/Formulario/Formulario'
import Link from '../../componentes/Link/Link'
import './Login.css'

function Login() {
  return (
    <main className="login">
      <h1>Login</h1>
      <p>Entre com seu email e senha.</p>
      
      <Formulario>
        <Formulario.Legenda htmlFor="email">Email:</Formulario.Legenda>
        <Formulario.Campo id="email" type="email" name="email" placeholder="Email" required />
        
        <Formulario.Legenda htmlFor="senha">Senha:</Formulario.Legenda>
        <Formulario.Campo id="senha" type="password" name="senha" placeholder="Senha" required minLength={6} />
        
        <Formulario.Botao disabled>Enviar</Formulario.Botao>
      </Formulario>

      <Link url="/conta">Criar uma conta</Link>
    </main>
  )
}

export default Login
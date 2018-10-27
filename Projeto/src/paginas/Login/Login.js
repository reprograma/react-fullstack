import React from 'react'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Login.css'

function Login() {
  return (
    <main className="login">
      <h1>Login</h1>
      <p>Entre com seu email e senha.</p>
      
      <Legenda htmlFor="email">Email:</Legenda>
      <Campo 
        id="email" 
        type="email" 
        name="email"
        placeholder="Email"
        required
        pattern={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
      />
      
      <Legenda htmlFor="senha">Senha:</Legenda>
      <Campo 
        id="senha" 
        type="password" 
        name="senha"
        placeholder="Senha"
        required
        minLength={6}
      />
      
      <Botao>Enviar</Botao>

      <Link url="/conta">Criar uma conta</Link>
    </main>
  )
}

export default Login
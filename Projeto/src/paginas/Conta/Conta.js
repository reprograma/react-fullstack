import React from 'react'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Conta.css'

function Conta() {
  return (
    <main className="conta">
      <h1>Conta</h1>
      <p>Envie o formulário para criar uma conta!</p>
      
      <Legenda htmlFor="nome">Nome:</Legenda>
      <Campo 
        id="nome" 
        type="text" 
        name="nome" 
        placeholder="Nome" 
        required
        minLength={10}
      />
      
      <Legenda htmlFor="telefone">Telefone:</Legenda>
      <Campo 
        id="telefone" 
        type="tel" 
        name="telefone" 
        placeholder="Telefone"
        required
      />
      
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

      <Link url="/login">Fazer login</Link>
    </main>
  )
}

export default Conta
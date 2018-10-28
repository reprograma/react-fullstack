import React from 'react'
import Formulario from '../../componentes/Formulario/Formulario'
import Link from '../../componentes/Link/Link'
import './Conta.css'

function Conta() {
  return (
    <main className="conta">
      <h1>Conta</h1>
      <p>Envie o formulário para criar uma conta!</p>
      
      <Formulario>
        <Formulario.Legenda htmlFor="nome">Nome:</Formulario.Legenda>
        <Formulario.Campo id="nome" type="text" name="nome" placeholder="Nome" required minLength={10} />
        
        <Formulario.Legenda htmlFor="telefone">Telefone:</Formulario.Legenda>
        <Formulario.Campo id="telefone" type="tel" name="telefone" placeholder="Telefone" required />
        
        <Formulario.Legenda htmlFor="email">Email:</Formulario.Legenda>
        <Formulario.Campo id="email" type="email" name="email" placeholder="Email" required />
        
        <Formulario.Legenda htmlFor="senha">Senha:</Formulario.Legenda>
        <Formulario.Campo id="senha" type="password" name="senha" placeholder="Senha" required minLength={6} />
        
        <Formulario.Botao disabled>Enviar</Formulario.Botao>
      </Formulario>

      <Link url="/login">Fazer login</Link>
    </main>
  )
}

export default Conta
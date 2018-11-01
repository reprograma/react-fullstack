import React from 'react'
import gatinho from './gatinho.jpg'
import './NaoEncontrada.css'

function NaoEncontrada() {
  return (
    <main className="nao-encontrada">
      <h1>Página não encontrada</h1>
      <p className="nao-encontrada__simbolo">
        :-(
      </p>
      <img src={gatinho} alt="Gatinho não encontrado"/>
    </main>
  )
}

export default NaoEncontrada
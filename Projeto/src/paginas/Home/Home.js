import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { carregando: true }
  }


  render() {
    return (
      <main className="home">
        {this.state.carregando ? 'carregando' : 'lista de postits'}
      </main>
    )
  }
  
}

export default Home
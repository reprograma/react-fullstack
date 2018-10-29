import React, { Component } from 'react'
import loading from './loading.svg'
import Postit from '../../componentes/Postit/Postit'
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { carregando: true, lista: [] }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        carregando: false,
        lista: [
          {
            id: 'ba2fb042-3fe6-4230-8ab4-c0205b670144',
            titulo: 'Estudar javascript',
            texto: 'Ler sobre ES6 e OO'
          },
          {
            id: '101a56a7-04e3-4063-b5b2-59a7454a39aa',
            titulo: 'Estudar React',
            texto: 'Porque ele é lindo ❤️'
          },
        ]
      })
    }, 2000)
    
  }

  cadastraPostit = (titulo, texto) => {
    const lista = this.state.lista

    const id = `101a56a7-04e3-4063-b5b2-59a7454a39a${lista.length + 1}`

    const postit = {
      id: id,
      titulo: titulo,
      texto: texto
    }

    this.setState({
      lista: lista.concat(postit)
    })
  }

  alteraPostit = (id, titulo, texto) => {
    const postit = {
      id: id,
      titulo: titulo,
      texto: texto
    }

    const lista = this.state.lista.map(item => item.id === id ? postit : item)

    this.setState({
      lista: lista
    })
  }

  deletaPostit = (id) => {
    const lista = this.state.lista.filter(item => item.id !== id)

    this.setState({
      lista: lista
    })
  }

  render() {
    return (
      <main className="home">
        <Postit onConcluir={this.cadastraPostit} />

        {this.state.carregando ? (
          <img className="home__loading" src={loading} alt="Carregando" />
        ) : (
          <div className="home__lista">
            {this.state.lista.map(item => (
              <Postit 
                key={item.id} 
                id={item.id} 
                titulo={item.titulo} 
                texto={item.texto} 
                onConcluir={this.alteraPostit}
                onExcluir={this.deletaPostit}
              />
            ))}
          </div>
        )}
      </main>
    )
  }
  
}

export default Home
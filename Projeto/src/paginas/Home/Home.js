import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { listaPostits } from '../../redux/actions'
import Postit from '../../componentes/Postit/Postit'
import carregando from './carregando.svg'
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { carregando: true }
  }

  componentDidMount() {
    this.props.listaPostits()
  }

  componentDidUpdate() {
    if (this.state.carregando) {
      this.setState({ carregando: false })
    }
  }

  render() {
    if (!this.props.usuario) {
      return <Redirect to="/login" />
    }

    const postits = this.props.postits.filter(
      item => item.titulo.toLowerCase().includes(this.props.filtro.toLowerCase())
    )

    return (
      <main className="home">
        {this.state.carregando ? (
          <img className="home__carregando" src={carregando} alt="Carregando" />
        ) : (
          <div>
            <Postit />

            <div>
              {postits.map(postit => (
                <Postit 
                  key={postit.id}
                  id={postit.id}
                  titulo={postit.titulo}
                  texto={postit.texto}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    )
  }
}

export default connect(
  (state) => ({ usuario: state.usuario, postits: state.postits, filtro: state.filtro }),
  { listaPostits }
)(Home)

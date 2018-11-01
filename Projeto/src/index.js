import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './paginas/Home/Home'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import Conta from './paginas/Conta/Conta'
import Login from './paginas/Login/Login'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import './index.css'

let usuario = JSON.parse(localStorage.getItem('usuario'))

function logaUsuario(dados) {
  const json = JSON.stringify(dados)
  localStorage.setItem('usuario', json)
  usuario = dados
}

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}

      <Switch>
        <Route path="/" exact render={() => {
          return usuario ? <Home /> : <Redirect to="/login" />
        }} />

        <Route path="/login" render={(props) => {
          return <Login historico={props.history} logaUsuario={logaUsuario} />
        }}/>
        
        <Route path="/conta" component={Conta}/>
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/contato" component={Contato} />
        <Route component={NaoEncontrada} />
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('projeto')
)

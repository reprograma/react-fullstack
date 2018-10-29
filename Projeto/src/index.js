import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar';
import Home from './paginas/Home/Home';
import Login from './paginas/Login/Login';
import Conta from './paginas/Conta/Conta';
import QuemSomos from './paginas/QuemSomos/QuemSomos';
import Contato from './paginas/Contato/Contato';
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada';
import './index.css'

let usuario = { nome: 'Camila' }

const deslogaUsuario = () => {
  usuario = null
  console.log('usuario deslogado', usuario)
}

const logaUsuario = (dados) => {
  usuario = dados
  console.log('usuario logado', usuario)
}

function App() {
  return (
    <div className="app">
      <Navbar usuario={usuario} onSairClick={deslogaUsuario} />
      
      <Switch>
        <Route path="/" exact render={() => (
          usuario ? <Home /> : <Redirect to="/login" />
        )} />
        <Route path="/login" render={(props) => (
          <Login historico={props.history} onEnviarClick={logaUsuario}/>
        )} />
        <Route path="/conta" component={Conta} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/contato" component={Contato} />
        <Route component={NaoEncontrada} />
      </Switch>
    </div>
    
  )
}

ReactDOM.render(
  (
    <Router>
      <App />
    </Router>
  ), 
  document.getElementById('projeto')
)

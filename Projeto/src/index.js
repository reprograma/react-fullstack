import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './paginas/Login/Login';
import Conta from './paginas/Conta/Conta';
import QuemSomos from './paginas/QuemSomos/QuemSomos';
import Contato from './paginas/Contato/Contato';
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada';
import './index.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/conta" component={Conta} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/contato" component={Contato} />
        <Route component={NaoEncontrada} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('projeto'))

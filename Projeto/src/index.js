import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar';
import Login from './paginas/Login/Login';
import Conta from './paginas/Conta/Conta';
import QuemSomos from './paginas/QuemSomos/QuemSomos';
import Contato from './paginas/Contato/Contato';
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada';
import './index.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
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

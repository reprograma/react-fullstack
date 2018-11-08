import axios from 'axios'

let configuracoes = {
  urlBase: 'https://reprograma-postit-api.herokuapp.com'
}

const json = localStorage.getItem('usuario')
if (json) {
  const usuario = JSON.parse(json)
  configuracoes.headers = {
    'Authorization': usuario.token
  }
}

const protocolo = axios.create(configuracoes)

export default protocolo
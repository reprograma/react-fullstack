import axios from 'axios'

const configuracoes = {
  baseURL: 'https://reprograma-postit-api.herokuapp.com'
}

const json = localStorage.getItem('usuario')
if (json) {
  const usuario = JSON.parse(json)
  configuracoes.headers = {
    'Authorization': usuario.token
  }
}

const api = axios.create(configuracoes)

export function logaUsuario(dados) {
  return (dispatch) => {
    api
      .post('/login', dados)
      .then(response => {
        api.defaults.headers.common['Authorization'] = response.data.usuario.token
        dispatch({ type: 'LOGA_USUARIO', dados: response.data.usuario })
      })
      .catch(error => {
        console.error(error)
        // if (error.response) {
        //   alert(error.response.data.erro)
        // }
        alert('Email ou usuário invalido!')
      })
  }
}

export function deslogaUsuario() {
  return {
    type: 'DESLOGA_USUARIO'
  }
}

export function cadastraPostit(dados) {
  return (dispatch) => {
    api
      .post('/postits', dados)
      .then(response => {
        dados.id = response.data.id
        dispatch({ type: 'CADASTRA_POSTIT', dados })
      })
  }
}

export function alteraPostit(dados) {
  return (dispatch) => {
    const url = `/postits/${dados.id}`
    api
      .put(url, dados)
      .then(() => {
        dispatch({ type: 'ALTERA_POSTIT', dados })
      })
  }
}

export function removePostit(id) {
  return (dispatch) => {
    const url = `/postits/${id}`
    api
      .delete(url)
      .then(() => {
        dispatch({ type: 'REMOVE_POSTIT', id })
      })
  } 
}

export function listaPostits() {
  return (dispatch) => {
    api
      .get('/postits')
      .then(response => {
        dispatch({ type: 'LISTA_POSTITS', dados: response.data.postits })
      })
  }
}

export function alteraFiltro(texto) {
  return {
    type: 'ALTERA_FILTRO', 
    texto
  }
}
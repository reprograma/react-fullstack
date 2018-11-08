import * as apiUsuarios from '../api/usuarios'
import * as apiPostits from '../api/postits'

export function logaUsuario(dados) {
  return (dispatch) => {
     apiUsuarios
      .postLogin(dados)
      .then(response => {
        dispatch({ type: 'LOGA_USUARIO', dados: response.data.usuario })
      })
      .catch(erro => {
        console.error(erro)
        if (erro.response) {
          alert(erro.response.data.erro)
        }
      })
  }
}

export function deslogaUsuario() {
  return { type: 'DESLOGA_USUARIO' }
}

export function cadastraPostit(dados) {
  return (dispatch) => {
    apiPostits
      .postPostit(dados)
      .then(response => {
        dados.id = response.data.id
        dispatch({ type: 'CADASTRA_POSTIT', dados })
      })
      .catch(erro => {
        console.error(erro)
        if (erro.response) {
          alert(erro.response.data.erro)
        }
      })
  }
}

export function alteraPostit(dados) {
  return (dispatch) => {
    apiPostits
      .putPostit(dados)
      .then(() => {
        dispatch({ type: 'ALTERA_POSTIT', dados })
      })
      .catch(erro => {
        console.error(erro)
        if (erro.response) {
          alert(erro.response.data.erro)
        }
      })
  }
}

export function removePostit(id) {
  return (dispatch) => {
    apiPostits
      .deletePostit(id)
      .then(() => {
        dispatch({ type: 'REMOVE_POSTIT', id })
      })
      .catch(erro => {
        console.error(erro)
        if (erro.response) {
          alert(erro.response.data.erro)
        }
      })
  }
}

export function listaPostits() {
  return (dispatch) => {
    apiPostits
      .getPostits()
      .then(response => {
        dispatch({ type: 'LISTA_POSTITS', dados: response.data.postits })
      })
      .catch(erro => {
        console.error(erro)
        if (erro.response) {
          alert(erro.response.data.erro)
        }
      })
  }
}

export function alteraFiltro(texto) {
  return {
    type: 'ALTERA_FILTRO',
    texto
  }
}
import { combineReducers } from 'redux'

let usuarioInicial = null

const json = localStorage.getItem('usuario')
if (json) {
  usuarioInicial = JSON.parse(json)
}

function usuario(state = usuarioInicial, action) {
  switch(action.type) {
    case 'LOGA_USUARIO':
      const usuario = action.dados
      const json = JSON.stringify(usuario)
      localStorage.setItem('usuario', json)
      return usuario
    case 'DESLOGA_USUARIO':
      localStorage.removeItem('usuario')
      return null
    default:
      return state
  }
}

function postits(state = [], action) {
  switch(action.type) {
    case 'LISTA_POSTITS':
      return action.dados
    case 'CADASTRA_POSTIT':
      return state.concat(action.dados)
    case 'ALTERA_POSTIT':
      return state.map(postit => 
        postit.id === action.dados.id ? action.dados : postit
      )
    case 'REMOVE_POSTIT':
      return state.filter(postit => postit.id !== action.id)
    default:
      return state
  }
}

function filtro(state = '', action) {
  switch(action.type) {
    case 'ALTERA_FILTRO':
      return action.texto
    default:
      return state
  }
}

export function getPostitsFiltrados(state) {
  return state.postits.filter(postit =>
    postit.titulo.toLowerCase().match(state.filtro.toLowerCase())
  )
}

const reducers = combineReducers({ usuario, postits, filtro })

export default reducers
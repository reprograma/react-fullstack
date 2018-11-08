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
      localStorage.setItem('usuario', usuario)
      return usuario
    case 'DESLOGA_USUARIO':
      localStorage.removeItem('item')
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
      return state.filter(postit => 
        postit.id !== action.id
      )
    default:
      return state
  }
}

const reducers = combineReducers({
  usuario: usuario,
  postits: postits
})

export default reducers
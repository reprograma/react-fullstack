import { combineReducers } from 'redux'

const usuarioInicial = null

function usuario(state = usuarioInicial, action) {
  switch(action.type) {
    case 'LOGA_USUARIO':
      const usuarioLogado = action.dados
      return usuarioLogado
    case 'DESLOGA_USUARIO':
      const usuarioDeslogado = null
      return usuarioDeslogado
    default:
      return state
  }
}

function postits(postitsAtuais = [], action) {
  switch(action.type) {
    default:
      return postitsAtuais
  }
}

const reducers = combineReducers({
  usuario: usuario,
  postits: postits
})

export default reducers
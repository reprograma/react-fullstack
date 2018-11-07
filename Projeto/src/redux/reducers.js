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

function postits(state = [], action) {
  switch(action.type) {
    case 'LISTA_POSTITS':
      return action.dados
    case 'CADASTRA_POSTIT':
      const id = `9d3cbb3b-a738-4632-9f89-785d7ff81f5${state.length}`
      action.dados.id = id
      return state.concat(action.dados)
    case 'ALTERA_POSTIT':
      return state.map(postit => 
        postit.id === action.dados.id ? action.dados : postit
      )
    case 'REMOVE_POSTIT':
      return state.filter(postit => 
        postit.id !== action.dados.id
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
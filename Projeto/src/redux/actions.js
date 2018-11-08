import * as apiUsuarios from '../api/usuarios'
import * as apiPostits from '../api/postits'

export function logaUsuario(dados) {
  apiUsuarios
    .postLogin(dados)
    .then(resposta => {
      return {
        type: 'LOGA_USUARIO',
        dados: resposta.usuario
      }
    })
}

export function deslogaUsuario() {
  return {
    type: 'DESLOGA_USUARIO'
  }
}

export function cadastraPostit(dados) {
  // cadastra na api
  
  const id = `9d3cbb3b-a738-4632-9f89-785d7ff81f5${Math.random(100)}`
  dados.id = id

  return {
    type: 'CADASTRA_POSTIT',
    dados
  }
}

export function alteraPostit(dados) {
  // altera na api
  
  return {
    type: 'ALTERA_POSTIT',
    dados
  }
}

export function removePostit(id) {
  // remove na api
  
  return {
    type: 'REMOVE_POSTIT',
    id
  }
}
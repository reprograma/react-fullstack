export function logaUsuario(dados) {
  return {
    type: 'LOGA_USUARIO',
    dados
  }
}

export function deslogaUsuario() {
  return {
    type: 'DESLOGA_USUARIO'
  }
}

export function cadastraPostit(dados) {
  return {
    type: 'CADASTRA_POSTIT',
    dados
  }
}

export function alteraPostit(dados) {
  return {
    type: 'ALTERA_POSTIT',
    dados
  }
}

export function removePostit(id) {
  return {
    type: 'REMOVE_POSTIT',
    id
  }
}
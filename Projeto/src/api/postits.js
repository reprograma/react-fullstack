import protocolo from './configuracao'

export function getPostits() {
  return protocolo.get('/postits')
}

export function postPostit(dados) {
  return protocolo.post('/postits', dados)
}

export function putPostits(dados) {
  const url = `/postits/${dados.id}`
  const json = {
    titulo: dados.titulo,
    texto: dados.texto
  }
  return protocolo.put(url, json)
}

export function deletePostits(id) {
  const url = `/postits/${id}`
  return protocolo.delete(url)
}
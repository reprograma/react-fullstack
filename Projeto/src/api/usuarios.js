import protocolo from './configuracao'

export function postLogin(dados) {
  return protocolo
    .post('/login', dados)
    .then(response => {
      protocolo.defaults.headers.common['Authorization'] = response.data.usuario.token
      return response
    })
}
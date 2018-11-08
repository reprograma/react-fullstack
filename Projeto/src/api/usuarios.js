import protocolo from './configuracao'

export function postLogin(dados) {
  return protocolo.post('/login', dados)
}
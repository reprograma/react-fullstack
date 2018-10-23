// <a class="link" href="/conta">Criar uma conta</a>

const linkCriarUmaConta = document.createElement('a')
linkCriarUmaConta.className = 'link'
linkCriarUmaConta.href = '/conta'
linkCriarUmaConta.appendChild(document.createTextNode('Criar uma conta'))

// <a class="link" href="/login">Fazer login</a>

const linkFazerLogin = document.createElement('a')
linkFazerLogin.className = 'link'
linkFazerLogin.href = '/login'
linkFazerLogin.appendChild(document.createTextNode('Fazer login'))

/*
<form>
  <a class="link" href="/conta">Criar uma conta</a>
  <a class="link" href="/login">Fazer login</a>
</form>
*/

const formularioLogin = document.createElement('form')
formularioLogin.appendChild(linkCriarUmaConta)
formularioLogin.appendChild(linkFazerLogin)


const divisaoProjeto = document.getElementById('projeto')
divisaoProjeto.appendChild(formularioLogin)



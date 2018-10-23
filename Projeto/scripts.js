// <a class="link" href="/conta">Criar uma conta</a>

const linkCriarUmaConta = React.createElement('a', {
  className: 'link', 
  href: '/conta', 
  children: 'Criar uma conta'
})

// <a class="link" href="/login">Fazer login</a>

const linkFazerLogin =  React.createElement('a', {
  className: 'link', 
  href: '/login', 
  children: 'Fazer login'
})

/*
<form>
  <a class="link" href="/conta">Criar uma conta</a>
  <a class="link" href="/login">Fazer login</a>
</form>
*/

const formularioLogin = React.createElement('form', {
  children: [linkCriarUmaConta, linkFazerLogin]
})


const divisaoProjeto = document.getElementById('projeto')

// ReactDOM.render(elementReact, tagHtml)
ReactDOM.render(formularioLogin, divisaoProjeto)



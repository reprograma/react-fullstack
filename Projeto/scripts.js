const linkCriarUmaConta = document.createElement('a')
linkCriarUmaConta.className = 'link'
linkCriarUmaConta.href = '/'
linkCriarUmaConta.appendChild(document.createTextNode('Criar uma conta'))

const linkFazerLogin = document.createElement('a')
linkFazerLogin.className = 'link'
linkFazerLogin.href = '/login'
linkFazerLogin.appendChild(document.createTextNode('Fazer login'))

const formularioLogin = document.createElement('form')
formularioLogin.appendChild(linkCriarUmaConta)
formularioLogin.appendChild(linkFazerLogin)

const divisaoProjeto = document.getElementById('projeto')
divisaoProjeto.appendChild(formularioLogin)














































/*
- Vantagem: Programação declarativa x imperativa
1) Componente estático:

function link() {
  const elemento = document.createElement('a')
  elemento.setAttribute('href', '/')
  elemento.innerHTML = 'Criar uma conta'
  return elemento
}

const linkCriarUmaConta = link();

const projeto = document.getElementById('projeto')
projeto.appendChild(linkCriarUmaConta)

OBS: Todo o HTML do projeto será inserido dentro da div com id "projeto"


2) Componente dinâmico:

Agora está bem prático criar mais um link, basta chamar a função de link de novo!
Vamos criar o link "Fazer login":

const linkFazerLogin = link();

Ixi, Nossa função só cria link iguais, como os mesmos atributos e filhos :-(;
A gente podia passar os atributos e o que a gente quer colocar dentro da tag, os filhos da tag!

const linkCriarUmaConta = link({ href: '/' }, 'Criar uma conta');

const linkFazerLogin = link({ href: '/login' }, 'Fazer login');

function link(atributos, filhos) {
  const elemento = document.createElement('a')

  for (nomeDeAtributo in atributos) {
    elemento.setAttribute(nomeDeAtributo, atributos[nomeDeAtributo])
  }
  
  elemento.innerHTML = filhos

  return elemento
}

3) Reescrevendo usando React Puro:

OBS: Importar script React e React DOM
<script src="vendor/react.js"></script>
<script src="vendor/react-dom.js"></script>

// React.createElement(tipo, propriedades, filhos)

const linkCriarUmaConta = React.createElement('a', {href: '/'}, 'Criar uma conta')
const linkFazerLogin = React.createElement('a', {href: '/login'}, 'Fazer login')
const formularioLogin = React.createElement('form', {}, [linkCriarUmaConta, linkFazerLogin])

ReactDOM.render(formularioLogin, document.getElementById('projeto'))

4) DOM Real x DOM virtual

- O que é DOM
- Como a gente consegue ver o DOM Virtual?

OBS: Instalar a extensão do Chrome para React
https://fb.me/react-devtools

5) Usar JSX:

OBS: Importar script do babel <script src="vendor/babel.min.js"></script>

//React.createElement('a', {href: '/'}, 'Criar uma conta')
const linkCriarUmaConta = <a href="/">Criar uma conta</a>

// React.createElement('a', {href: '/login'}, 'Fazer login')
const linkFazerLogin = <a href="/login">Fazer login</a>

// React.createElement('form', {}, [linkCriarUmaConta, linkFazerLogin])
const formularioLogin = <form>{[linkCriarUmaConta, linkFazerLogin]}</form>

ReactDOM.render(formularioLogin, document.getElementById('projeto'))

function Link(props) {
  return <a href={props.href}>{props.children}</a>
}

function Formulario() {
    return (
      <form>
        <Link href="/">Criar uma conta</Link>
        <Link href="/login">Fazer login</Link>
      </form>
    )
}

ReactDOM.render(<Formulario />, document.getElementById('projeto'))


6) Organizar projeto e apresentar create-react-app

7) Começar a componentizar o projeto:
- Cards do trelo: Link, Botão, Label, Caixa de texto e Grupo
*/

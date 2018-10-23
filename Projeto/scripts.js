const linkCriarUmaConta = <a class="link" href="/conta">Criar uma conta</a>
const linkFazerLogin =  <a class="link" href="/login">Fazer login</a>

const formularioLogin = (
  <form>
    {[linkCriarUmaConta, linkFazerLogin]}
  </form>
)

const divisaoProjeto = document.getElementById('projeto')

ReactDOM.render(formularioLogin, divisaoProjeto)
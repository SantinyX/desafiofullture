const validUser = "Comandante"
const senha = "fullture"
const formlogin = document.querySelector('form')

formlogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = formlogin.querySelector("#input_usuario").value
    const senha = formlogin.querySelector("#password").value

    if (usuarioValido(usuario, senha)) {

    } else {
        alert('Usuário ou senha incorretos')
    }
})

const senhaUsuario = (senha) => {
    if (senha == "fullture") {
        sessionStorage.setItem("controleAtividade.logado", true)
        window.location = "index.html"
    } else{
        sessionStorage.setItem("controleAtividade.logado", false)
        alert("Usuario ou senha incorretos")
    }
}

const usuarioValido = (usuario, senha) => {
    let usuario_valido = usuario == validUser
    let senha_valida = senhaUsuario(senha)
    return validUser && senha

}
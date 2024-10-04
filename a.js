
console.log(`Seu nome é ${nome}`)

function enviar(){
    var usuario = document.getElementById('inputUsuario').value
    var senha = document.getElementById('inputSenha').value

    if(usuario === '1234' && senha === '1234') {
        alert('Login realizado com sucesso')
    }
    else{
        alert('Senha e/ou usuário inválido(s)')

    }
}


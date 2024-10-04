
// console.log(`Seu nome é ${nome}`)

// function enviar(){
//     var usuario = document.getElementById('inputUsuario').value
//     var senha = document.getElementById('inputSenha').value

//     // if(
//     //     (usuario === 'Leo') && (senha === '1234') ||
//     //     (usuario === 'Ian') && (senha === '5678') ||
//     //     (usuario === 'Caio' && senha === 'blabla')
//     // ) 
//     // {
//     //     alert('Login realizado com sucesso')
        
//     // }
//     // else{
//     //     alert('Senha e/ou usuário inválido(s)')
//     // }


//     if(usuario.length <3){
//         alert('O usuário deve conter no mínimo 3 caracteres')
//     }
//     else if (senha.length < 8){
//         alert('A senha deve conter no mínimo 8 caracteres')
//     }
//     else if (usuario === 'Leo' && senha === '12345678'){
//         alert('Login realizado com sucesso!')
//     }
//     else{
//         alert('Login e/ou senha inválido(s)')
//     }
// }









function enviarLista(){
    var cardapio = document.getElementById('refeicoes').value
    switch(cardapio){
        case 'cafe':
            alert('Cardapio do café da manhã')
            break
        case 'almoco':
            alert('Cardapio do almoço')
            break
        case 'janta':
            alert('Cardapio da janta')
            break

    }
}

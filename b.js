function adicionar(){
    //pega elementos do html
    const tarefas = document.querySelector("#tarefas").value
    const lista = document.querySelector("#lista")
    const imagem = document.querySelector("#imagem").value
    //crição da div
    const div = document.createElement("div")
    div.style.backgroundColor = "red"
    div.style.width = "100px"
    div.style.height = "100px"
    div.innerHTML = `
    <p>${tarefas} </p>`

    const foto = document.createElement ('img')
    foto.setAttribute('src', imagem)
    foto.style.width = '50px'
    foto.style.heigh = '50px'




    //Criar botão
    const botao = document.createElement('button')
    botao.addEventListener('click', function(){
        alert('aadklasldkjioqnoqndnisda')

    })
    
    botao.textContent = 'Clique'


    //adicina no html
    lista.append(div)
    div.append(foto)
    div.append(botao)
}
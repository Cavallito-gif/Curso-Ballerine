function adicionarTarefa() {
    const inputTarefa = document.getElementById('inputTarefa') //pegamos o id do input
    let tarefa = inputTarefa.value.trim() //para validar o valor do input devemos colocar o .value
    const msg = document.getElementById('mensagem')

    //let mensagem = "Tarefa adicionada com sucesso!"
    if (tarefa === '') {
        let mensagemErro = 'Digite um item na lista'
        msg.innerHTML = mensagemErro
        msg.style.color = 'red'
    } else {
        let mensagem = 'Tarefa adicionada com sucesso!'
        msg.innerHTML = mensagem

        msg.style.color = 'green'

        const listaTarefa = document.getElementById('listaTarefa')
        let novaTarefa = document.createElement('li') //criamos o elemento dentro do js do 'li'

        novaTarefa.innerHTML = tarefa //toda a nova tarefa colocado no input vai aparecer na lista 

        listaTarefa.appendChild(novaTarefa) //criamos o novaTarefa no HTML ficando dentro do 'ul'    
    }
    inputTarefa.value = '' //isso ira limpar o input
}
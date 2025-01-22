document.querySelector('#push').onclick = function () {
    const inputField = document.querySelector('#newtask input');
    
    if (inputField.value.length == 0) {
        alert('Please Enter a Task'); // Mensagem de alerta
    } else {
        // Cria um novo elemento div para a tarefa
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        // Adiciona o conteúdo à nova tarefa
        taskDiv.innerHTML = `
            <span id='taskname'>
                ${inputField.value}
            </span>
            <button class='delete'>
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;

        // Adiciona a nova tarefa ao elemento de tarefas
        document.querySelector('#tasks').appendChild(taskDiv);

        // Adiciona o ouvinte de evento para o botão de exclusão
        taskDiv.querySelector('.delete').onclick = function() {
            this.parentNode.remove();
        }

        // Adiciona o ouvinte de evento à tarefa para marcar como concluída
        taskDiv.onclick = function() {
            this.classList.toggle('completed');
        }

        // Limpa o campo de entrada
        inputField.value = '';
    }
}

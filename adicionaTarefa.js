const inputText = document.querySelector("#textForm");
const enviarButton = document.querySelector("#botaoForm");
const elementoPai = document.querySelector('.conteudo');

enviarButton.onclick = function () {
    const divisaoCriada = document.createElement('div');
    divisaoCriada.classList.add('listaDeTarefas');
    elementoPai.appendChild(divisaoCriada);

    divisaoCriada.innerHTML = `
    <p class="listaDeTarefas__tarefa">${inputText.value}</p>
    <button class="listaDeTarefas__tarefa--botao botao botaoDoneBG"><span class="material-icons-outlined botaoDone">done</span></button>
    <button class="listaDeTarefas__tarefa--botao botao botaoCloseBG"><span class="material-icons-outlined botaoCloseBG botaoClose">close</span></button>
    `;

    inputText.value = ""; // Após clicar no botão, o campo de form é esvaziado
}

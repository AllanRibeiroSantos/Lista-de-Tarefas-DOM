const inputText = document.querySelector("#textForm");
const enviarButton = document.querySelector("#botaoForm");
const elementoPai = document.querySelector('.conteudo');

enviarButton.onclick = function () {
    const divisaoCriada_tarefa = document.createElement('div');
    const divisaoAviso = document.querySelector('.conteudo__formulario--aviso');

    if (inputText.value) {
        divisaoCriada_tarefa.classList.add('listaDeTarefas');
        elementoPai.appendChild(divisaoCriada_tarefa);

        divisaoCriada_tarefa.innerHTML = `
        <p class="listaDeTarefas__tarefa">${inputText.value}</p>
        <button class="listaDeTarefas__tarefa--botao botao botaoDoneBG"><span class="material-icons-outlined botaoDone">done</span></button>
        <button class="listaDeTarefas__tarefa--botao botao botaoCloseBG"><span class="material-icons-outlined botaoCloseBG botaoClose">close</span></button>
        `;

        inputText.value = ""; // Após clicar no botão, o campo de form é esvaziado

        // Remove aviso de erro
        if(divisaoAviso) {
            divisaoAviso.remove();
        }

    // Adiciona mensagem de erro caso o campo esteja vazio
    }else if (!divisaoAviso){
        const elementoPai_section = document.querySelector('.conteudo__formulario--titulo');
        const divisaoCriada_aviso = document.createElement('p');

        divisaoCriada_aviso.classList.add('conteudo__formulario--aviso');
        divisaoCriada_aviso.textContent = 'Tarefa não foi definida. Escreva algo no campo de texto.';

        elementoPai_section.appendChild(divisaoCriada_aviso);
    }
}

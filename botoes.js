// BOTÃO EXCLUSÃO DE TAREFA
elementoPai.addEventListener('click', function(event){

    // Essas duas variáveis devem ser declaradas dentro deste bloco, ou o navegador irá dizer que ambos são NULL por não ter sido criadas ainda
    // O .botaoClose afeta apenas no span, caso eu clique no button o efeito não funciona, talvez eu tenha que mudar o HTML para ele ser apenas um button... tenho que pensar
    const elementoTarefa = document.querySelectorAll('.listaDeTarefas');
    const botaoDeleta = document.querySelectorAll('.botaoClose');

    for (let contador = 0; contador < botaoDeleta.length; contador++){
        if (event.target == botaoDeleta[contador]) {
            elementoTarefa[contador].remove();
        }
    }
})

// BOTÃO TAREFA CONCLUÍDA
elementoPai.addEventListener('click', function(event){

    const elementoTarefa = document.querySelectorAll('.listaDeTarefas__tarefa');
    const botaoConcluido = document.querySelectorAll('.botaoDone');

    for (let contador = 0; contador < botaoConcluido.length; contador++){
        if (event.target == botaoConcluido[contador]) {
            elementoTarefa[contador].classList.add('listaDeTarefas__tarefa--riscado');
            botaoConcluido[contador].classList.add('botaoCor--concluido');
        }
    }
})

// BOTÃO APAGAR LISTA

// const apagarLista = document.querySelector('input[value="Apagar lista"]')

// apagarLista.addEventListener('click', function(){
//     const elementoTarefa = document.querySelector('.conteudo__tarefas');
//     elementoTarefa.remove();

//     const divisaoCriada = document.createElement('div');
//     divisaoCriada.classList.add('listaDeTarefas');
//     elementoPai.appendChild(divisaoCriada);
// })

let nomeDigitado;
let LimparNome;
let nomesDigitados = [];
let buttonSortear = document.querySelector('.button-sortear');

function adicionarAmigo(){
    nomeDigitado = document.querySelector('input').value;
    if (nomeDigitado == '') {
        alert("Por favor, digite um nome válido");
    } else {
        nomesDigitados.push(nomeDigitado);
        exibirNomes();
        limparCampo(); 
    }
}

function exibirNomes(){
    let campo = document.querySelector('#listaNomes'); // Selecione um container específico para os nomes
    campo.innerHTML = ''; // Limpa o conteúdo da lista para exibir tudo novamente

    for (let i = 0; i < nomesDigitados.length; i++) {
        let nome = nomesDigitados[i];
        let paragrafo = document.createElement('p'); // Cria um novo parágrafo
        paragrafo.innerHTML = nome; // Atribui o nome ao conteúdo do parágrafo
        campo.appendChild(paragrafo); // Adiciona o parágrafo ao container
    }
}

function limparCampo(){
    LimparNome = document.querySelector('input');
    LimparNome.value = '';
}


function sortearAmigo() {
    if (nomesDigitados.length == 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }

    let numEscolhido = Math.floor(Math.random() * nomesDigitados.length); 
    let nomeSorteado = nomesDigitados[numEscolhido]; 

    let campoSorteado = document.querySelector('#resultadoSorteio'); // Seleciona o campo para exibir o nome sorteado
    campoSorteado.innerHTML = `Amigo Sorteado: ${nomeSorteado}`; // Atualiza o conteúdo do campo
    campoSorteado.style.display = 'block';
    buttonSortear.style.display = 'none';
}

function novaLista() {
    nomesDigitados = [];
    limparCampo();

    // Limpa a exibição da lista de nomes
    let campoLista = document.querySelector('#listaNomes');
    campoLista.innerHTML = '<p>Nomes apagados. Adicione novos!</p>';

    // Oculta a div do sorteado
    let campoSorteado = document.querySelector('#resultadoSorteio');
    campoSorteado.style.display = 'none';

    buttonSortear.style.display = 'block';
}
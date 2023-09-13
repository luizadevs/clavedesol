/*
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var notaAtual = null; // Inicialmente, nenhuma nota está sendo exibida
var notas = ["notaDo", "notaRe", "notaMi", "notaFa", "notaSol", "notaLa", "notaSi", "notaDoo"];

function moverNota(nota) {
    if (notaAtual) {
        // Se houver uma nota atual, oculte-a
        notaAtual.style.display = "none";
    }

    var notaElement = document.getElementById(nota);
    notaElement.style.display = "block";
    notaElement.style.animation = "moveLeft 8s ease-in-out infinite";

    notaAtual = notaElement; // Atualiza a nota atual para a nova nota
}

function tocarNotaAleatoria() {
    var numeroAleatorio = gerarNumeroAleatorio(0, 7);
    console.log("Número Aleatório Atual: " + numeroAleatorio); 
    var nota = notas[numeroAleatorio];

    moverNota(nota);

    // Agende a próxima execução após 8 segundos (8000 milissegundos)
    setTimeout(tocarNotaAleatoria, 8000);
}

// Inicie a sequência tocando a primeira nota imediatamente
tocarNotaAleatoria();


// Função para atualizar o número aleatório e a nota correspondente
function atualizarNumeroAleatorio() {
    var numeroAleatorio = gerarNumeroAleatorio(0, 7);
    var nota = notas[numeroAleatorio];
    moverNota(nota);
}
*/
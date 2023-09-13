var botaoDo = document.getElementById("nota0");
var botaoRe = document.getElementById("nota1");
var botaoMi = document.getElementById("nota2");
var botaoFa = document.getElementById("nota3");
var botaoSol = document.getElementById("nota4");
var botaoLa = document.getElementById("nota5");
var botaoSi = document.getElementById("nota6");
var botaoDoo = document.getElementById("nota7");
var audioErro = document.getElementById("audioErro");

// Variável para armazenar a nota atual
var nota = 0;

// Função para gerar um número aleatório de 1 a 8
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 8) + 1;
}

var notas = document.querySelectorAll(".nota");
notas.forEach(function (notaElement) {
    notaElement.addEventListener("animationend", function () {
        // O evento animationend é acionado quando a animação termina
        notaElement.style.display = "none"; // Ocultar a nota após a animação terminar

        // Após o término da animação, chamar a próxima nota
        tocarProximaNota();
    });
});

// Função para tocar a próxima nota
function tocarProximaNota() {
    var numeroAleatorio = gerarNumeroAleatorio();
    console.log("Número Aleatório Atual: " + numeroAleatorio);

    // Verificar o número sorteado e chamar a função correspondente
    switch (numeroAleatorio) {
        case 1:
            moverAnotaDo();
            break;
        case 2:
            moverAnotaRe();
            break;
        case 3:
            moverAnotaMi();
            break;
        case 4:
            moverAnotaFa();
            break;
        case 5:
            moverAnotaSol();
            break;
        case 6:
            moverAnotaLa();
            break;
        case 7:
            moverAnotaSi();
            break;
        case 8:
            moverAnotaDoo();
            break;
    }
}


// Sortear um número aleatório
var numeroSorteado = gerarNumeroAleatorio();

// Função para mover a nota DO
function moverAnotaDo() {
    var notaElement = document.getElementById("notaDo");
    notaElement.style.display = "block";
    notaElement.style.animation = "moveLeft 8s ease-in-out infinite";
    nota = 1;
    setTimeout(function () {
        notaElement.style.display = "none"; // Ocultar a nota após 8 segundos
        tocarProximaNota(); // Chame a próxima nota após a animação terminar
    }, 8000); // 8000 milissegundos = 8 segundos
}

botaoDo.addEventListener("click", function () {
    if (nota === 1) {
        var audioDo = document.getElementById("audio0");
        audioDo.play();
    } else {
        audioErro.play();
    }
});

// Função para mover a nota RE
function moverAnotaRe() {
    var notaElement = document.getElementById("notaRe");
    notaElement.style.display = "block";
    notaElement.style.animation = "moveLeft 8s ease-in-out infinite";
    nota = 2;
    setTimeout(function () {
        notaElement.style.display = "none"; // Ocultar a nota após 8 segundos
        tocarProximaNota(); // Chame a próxima nota após a animação terminar
    }, 8000); // 8000 milissegundos = 8 segundos
}

botaoRe.addEventListener("click", function () {
    if (nota === 2) {
        var audioRe = document.getElementById("audio1");
        audioRe.play();
    } else {
        audioErro.play();
    }
});

// Função para mover a nota MI
function moverAnotaMi() {
    var notaElement = document.getElementById("notaMi");
    notaElement.style.display = "block";
    notaElement.style.animation = "moveLeft 8s ease-in-out infinite";
    nota = 3;
    setTimeout(function () {
        notaElement.style.display = "none"; // Ocultar a nota após 8 segundos
        tocarProximaNota(); // Chame a próxima nota após a animação terminar
    }, 8000); // 8000 milissegundos = 8 segundos
}

botaoMi.addEventListener("click", function () {
    if (nota === 3) {
        var audioMi = document.getElementById("audio2");
        audioMi.play();
    } else {
        audioErro.play();
    }
});

// Função para mover a nota FA
function moverAnotaFa() {
    var notaElement = document.getElementById("notaFa");
    notaElement.style.display = "block";
    notaElement.style.animation = "moveLeft 8s ease-in-out infinite";
    nota = 4;
    setTimeout(function () {
        notaElement.style.display = "none"; // Ocultar a nota após 8 segundos
        tocarProximaNota(); // Chame a próxima nota após a animação terminar
    }, 8000); // 8000 milissegundos = 8 segundos
}

botaoFa.addEventListener("click", function () {
    if (nota === 4) {
        var audioFa = document.getElementById("audio3");
        audioFa.play();
    } else {
        audioErro.play();
    }
});

// Função para mover a nota SOL
function moverAnotaSol() {
    var notaElement = document.getElementById("notaSol");
    notaElement.style.display = "block";
    notaElement.style.animation = "moveLeft 8s ease-in-out infinite";
    nota = 5;
    setTimeout(function () {
        notaElement.style.display = "none"; // Ocultar a nota após 8 segundos
        tocarProximaNota(); // Chame a próxima nota após a animação terminar
    }, 8000); // 8000 milissegundos = 8 segundos
}

botaoSol.addEventListener("click", function () {
    if (nota === 5) {
        var audioSol = document.getElementById("audio4");
        audioSol.play();
    } else {
        audioErro.play();
    }
});

// Função para mover a nota LA
function moverAnotaLa() {
    var notaElement = document.getElementById("notaLa");
    notaElement.style.display = "block";
    notaElement.style.animation = "moveLeft 8s ease-in-out infinite";
    nota = 6;
    setTimeout(function () {
        notaElement.style.display = "none"; // Ocultar a nota após 8 segundos
        tocarProximaNota(); // Chame a próxima nota após a animação terminar
    }, 8000); // 8000 milissegundos = 8 segundos
}

botaoLa.addEventListener("click", function () {
    if (nota === 6) {
        var audioLa = document.getElementById("audio5");
        audioLa.play();
    } else {
        audioErro.play();
    }
});

// Função para mover a nota SI
function moverAnotaSi() {
    var notaElement = document.getElementById("notaSi");
    notaElement.style.display = "block";
    notaElement.style.animation = "moveLeft 8s ease-in-out infinite";
    nota = 7;
    setTimeout(function () {
        notaElement.style.display = "none"; // Ocultar a nota após 8 segundos
        tocarProximaNota(); // Chame a próxima nota após a animação terminar
    }, 8000); // 8000 milissegundos = 8 segundos
}

botaoSi.addEventListener("click", function () {
    if (nota === 7) {
        var audioSi = document.getElementById("audio6");
        audioSi.play();
    } else {
        audioErro.play();
    }
});

// Função para mover a nota DOO
function moverAnotaDoo() {
    var notaElement = document.getElementById("notaDoo");
    notaElement.style.display = "block";
    notaElement.style.animation = "moveLeft 8s ease-in-out infinite";
    nota = 8;
    setTimeout(function () {
        notaElement.style.display = "none"; // Ocultar a nota após 8 segundos
        tocarProximaNota(); // Chame a próxima nota após a animação terminar
    }, 8000); // 8000 milissegundos = 8 segundos
}

botaoDoo.addEventListener("click", function () {
    if (nota === 8) {
        var audioDoo = document.getElementById("audio7");
        audioDoo.play();
    } else {
        audioErro.play();
    }
});

gerarNumeroAleatorio();

// Função para tocar uma nota a cada 8 segundos
function tocarNotaAleatoriaAIntervalos() {
    tocarProximaNota(); // Tocar a primeira nota imediatamente
}

// Chame a função para começar a tocar notas aleatórias a intervalos de 8 segundos
tocarNotaAleatoriaAIntervalos();




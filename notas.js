var botaoDo = document.getElementById("nota0");
var botaoRe = document.getElementById("nota1");
var botaoMi = document.getElementById("nota2");
var botaoFa = document.getElementById("nota3");
var botaoSol = document.getElementById("nota4");
var botaoLa = document.getElementById("nota5");
var botaoSi = document.getElementById("nota6");
var botaoDoo = document.getElementById("nota7");
var audioErro = document.getElementById("audioErro");
var pontuacaoElement = document.getElementById("pontuacao");
var botaoPlay = document.getElementById("play");
var botaoStop = document.getElementById("parar");

// Variável para armazenar a nota atual
var nota = 0;
var pontos = 0;
var jogoEmAndamento = false;

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

    botaoDo.disabled = false;
    botaoRe.disabled = false;
    botaoMi.disabled = false;
    botaoFa.disabled = false;
    botaoSol.disabled = false;
    botaoLa.disabled = false;
    botaoSi.disabled = false;
    botaoDoo.disabled = false;
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
    if (nota === 1 && !botaoDo.disabled) { // Verifica se a nota é igual a 8 e o botão não está desabilitado
        var audioDoo = document.getElementById("audio7");
        audioDoo.play();
        pontos++;

        // Desabilita o botão após o primeiro clique
        botaoDo.disabled = true;
    }else {
        audioErro.play();
        if (pontos > 0) {
            pontos--;
        }
    }

    pontuacaoElement.textContent = "Pontos: " + pontos;
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
    if (nota === 2 && !botaoRe.disabled) {
        var audioRe = document.getElementById("audio1");
        audioRe.play();
        pontos++

        botaoRe.disabled = true;
    } else {
        audioErro.play();
        if (pontos > 0) {
            pontos--;
        }
    }

    pontuacaoElement.textContent = "Pontos: " + pontos;
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
    if (nota === 3 && !botaoMi.disabled){
        var audioMi = document.getElementById("audio2");
        audioMi.play();
        pontos++

        botaoMi.disabled = true;
    } else {
        audioErro.play();
        if (pontos > 0) {
            pontos--;
        }
    }
    
    pontuacaoElement.textContent = "Pontos: " + pontos;
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
    if (nota === 4 && !botaoFa.disabled) {
        var audioFa = document.getElementById("audio3");
        audioFa.play();
        pontos++

        botaoFa.disabled = true;
    } else {
        audioErro.play();
        if (pontos > 0) {
            pontos--;
        }
    }

    pontuacaoElement.textContent = "Pontos: " + pontos;
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
    if (nota === 5 && !botaoSol.disabled) {
        var audioSol = document.getElementById("audio4");
        audioSol.play();
        pontos++

        botaoSol.disabled = true;
    } else {
        audioErro.play();
        if (pontos > 0) {
            pontos--;
        }
    }

    pontuacaoElement.textContent = "Pontos: " + pontos;
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
    if (nota === 6 && !botaoLa.disabled) {
        var audioLa = document.getElementById("audio5");
        audioLa.play();
        pontos++

        botaoLa.disabled = true;
    } else {
        audioErro.play();
        if (pontos > 0) {
            pontos--;
        }
    }

    pontuacaoElement.textContent = "Pontos: " + pontos;
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
    if (nota === 7 && !botaoSi.disabled) {
        var audioSi = document.getElementById("audio6");
        audioSi.play();
        pontos++

        botaoSi.disabled = true;
    } else {
        audioErro.play();
        if (pontos > 0) {
            pontos--;
        }
    }

    pontuacaoElement.textContent = "Pontos: " + pontos;
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
    if (nota === 8 && !botaoDoo.disabled) {
        var audioDoo = document.getElementById("audio7");
        audioDoo.play();
        pontos++

        botaoDoo.disabled = true;
    } else {
        audioErro.play();
        if (pontos > 0) {
            pontos--;
        }
    }

    pontuacaoElement.textContent = "Pontos: " + pontos;
});


// Função para tocar uma nota a cada 8 segundos
function tocarNotaAleatoriaAIntervalos() {
    gerarNumeroAleatorio();
    tocarProximaNota(); // Tocar a primeira nota imediatamente
}

botaoPlay.addEventListener("click", function (){
    jogoEmAndamento = true;
    tocarNotaAleatoriaAIntervalos();
    botaoPlay.style.display = "none";
    botaoStop.style.display = "block";
});

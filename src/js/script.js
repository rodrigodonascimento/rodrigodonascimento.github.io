var texto_digitado = document.getElementById("texto_digitado");
var resposta_texto = document.getElementById("resposta_texto");
var box_saida_texto = document.getElementById("box_saida_texto");
var box_resposta_texto = document.getElementById("box_resposta_texto");

// Botões
var btn_criptografar = document.getElementById("criptografar");
var btn_descriptografar = document.getElementById("descriptografar");


// Bloqueia a entra de letras maíusculas
texto_digitado.addEventListener("keyup", (e) => { 
    const input = e.target;
    input.value = input.value.toLowerCase();
});

// Bloqueia a entrada de caracteres especiais e números
texto_digitado.addEventListener("keypress", (ev) => {
    if(!checkChar(ev)) {
        ev.preventDefault();
    }
});

// Verifica qual caracter foi digitado
function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);
    //console.log(char + " - " + e.keyCode);

    const padrao = "[a-zA-Z ]";

    if(char.match(padrao)) {
        console.log(char)
        return true
    }
}

function criptografa() {
    var buscaE = texto_digitado.value.replace(/e/g, 'enter');
    var buscaI = buscaE.replace(/i/g, "imes");
    var buscaA = buscaI.replace(/a/g, "ai");
    var buscaO = buscaA.replace(/o/g, "ober");
    var buscaU = buscaO.replace(/u/g, "ufat");
    var resultadoBusca = buscaU;
    texto_digitado.value= "";
    box_saida_texto.innerHTML = `
        <textarea id="resposta_texto" class="resposta-texto" readonly >${resultadoBusca}</textarea>
        <button class="btn-copiar botao" id="copiar" onclick="copia()">Copiar</button>
    `;
}

function descriptografa() {
    var buscaEnter = texto_digitado.value.replace(/enter/g, "e");
    var buscaImes = buscaEnter.replace(/imes/g, "i");
    var buscaAi = buscaImes.replace(/ai/g, "a");
    var buscaOber = buscaAi.replace(/ober/g, "o");
    var buscaUfat = buscaOber.replace(/ufat/g, "u");
    var resultadoBusca = buscaUfat;
    texto_digitado.value= "";
    box_saida_texto.innerHTML = `
        <textarea id="resposta_texto" class="resposta-texto" readonly >${resultadoBusca}</textarea>
        <button class="btn-copiar botao" id="copiar" onclick="copia()">Copiar</button>
    `;
}



function copia() {
    var textCopy = document.getElementById("resposta_texto");
    textCopy.select();
    document.execCommand('copy');
    textCopy.value = "";
    document.execCommand('paste');
}

btn_criptografar.onclick = criptografa;
btn_descriptografar.onclick = descriptografa;